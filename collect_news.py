#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
教培行业动向自动收集脚本
每周自动收集互联网教培行业的动向信息
"""

import json
import re
import requests
from datetime import datetime, timedelta
from bs4 import BeautifulSoup
import time
import os

# 配置信息 - 主要目标公司
MAIN_COMPANIES = ['好未来', '希望学', '学而思', '新东方', '作业帮', '高途', '猿辅导']

# 猿辅导旗下公司
YUANFUDAO_SUBSIDIARIES = ['斑马AI', '斑马百科', '猿编程', '飞象星球', '斑马', '猿辅导']

# 全部在线教育公司关键词（用于搜索，不局限于特定公司）
EDUCATION_COMPANIES = MAIN_COMPANIES + YUANFUDAO_SUBSIDIARIES + [
    'VIPKID', '掌门教育', '一起作业', '网易有道', '腾讯教育', '字节跳动教育',
    '跟谁学', '51Talk', '流利说', '沪江', '尚德机构', '正保远程教育',
    '达内教育', '中公教育', '华图教育', '粉笔', '开课吧', '核桃编程',
    '编程猫', '小码王', '童程童美', '火花思维', '豌豆思维', '掌门1对1',
    '轻轻教育', '三好网', '海风教育', '学霸君', '作业盒子', '小猿搜题',
    '猿题库', '洋葱数学', '乐乐课堂', '学而思网校', '新东方在线', '有道精品课'
]

# 用于公司筛选的完整列表
COMPANIES = MAIN_COMPANIES + ['其他']
CATEGORIES = {
    '教研成果': ['教研', '教学', '课程', '教师', '教学方法', '课程体系', '教研成果', '教学研究'],
    'AI教育': ['AI', '人工智能', '智能', '机器学习', '算法', '个性化', 'AI+教育', 'AI教育'],
    '动画视频': ['动画', '视频', '3D', '制作', '内容库'],
    '获客增长': ['获客', '增长', '营销', '推广', '活动', '招生', '市场', '拉新', '转化'],
    '品牌公关': ['品牌', '公关', '传播', '形象', '认可'],
    '用户运营': ['用户', '运营', '活跃', '留存', '转化'],
    '招聘信息': ['招聘', '岗位', '职位', 'JD', '工作', '求职', '应聘']
}

# 招聘职能分类
JOB_FUNCTIONS = {
    '产品研发类': ['产品', '研发', '开发', '工程师', '技术', '程序员', '架构师', '前端', '后端', '算法工程师'],
    '讲师/教研类': ['讲师', '教研', '教师', '教学', '课程', '培训师', '教研员'],
    '市场获客类': ['市场', '营销', '推广', '获客', '增长', '运营', '市场运营'],
    '用户运营类': ['用户运营', '社群', '用户', '运营', '活动运营'],
    '品牌公关类': ['品牌', '公关', '传播', '媒体', 'PR'],
    '销售类': ['销售', 'BD', '商务', '客户经理', '销售代表'],
    '供应链相关类': ['供应链', '采购', '物流', '仓储'],
    '视频动画类': ['视频', '动画', '制作', '剪辑', '特效'],
    '原画/视觉设计类': ['原画', '设计', '视觉', 'UI', 'UX', '美工', '设计师']
}

# 数据源配置（可以根据实际情况添加更多）
DATA_SOURCES = [
    {
        'name': '36氪教育',
        'url': 'https://36kr.com/search/articles/教育',
        'type': 'web'
    },
    {
        'name': '芥末堆',
        'url': 'https://www.jiemodui.com/',
        'type': 'web'
    },
    {
        'name': '多知网',
        'url': 'https://www.duozhi.com/',
        'type': 'web'
    }
]

# 招聘网站数据源 - 深度搜集
JOB_SOURCES = [
    {
        'name': 'BOSS直聘',
        'base_url': 'https://www.zhipin.com',
        'search_url': 'https://www.zhipin.com/web/geek/job',
        'type': 'web',
        'keywords': ['在线教育', 'K12教育', 'AI教育', '教育产品', '教育科技', '在线培训']
    },
    {
        'name': '猎聘网',
        'base_url': 'https://www.liepin.com',
        'search_url': 'https://www.liepin.com/zhaopin',
        'type': 'web',
        'keywords': ['在线教育', 'K12教育', 'AI教育', '教育产品', '教育科技']
    },
    {
        'name': '拉勾网',
        'base_url': 'https://www.lagou.com',
        'search_url': 'https://www.lagou.com/jobs/list',
        'type': 'web',
        'keywords': ['在线教育', 'K12教育', 'AI教育', '教育产品']
    },
    {
        'name': '智联招聘',
        'base_url': 'https://www.zhaopin.com',
        'search_url': 'https://www.zhaopin.com/jobs/search',
        'type': 'web',
        'keywords': ['在线教育', 'K12教育', 'AI教育', '教育产品']
    },
    {
        'name': '前程无忧',
        'base_url': 'https://www.51job.com',
        'search_url': 'https://search.51job.com',
        'type': 'web',
        'keywords': ['在线教育', 'K12教育', 'AI教育']
    }
]

class NewsCollector:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
        self.collected_news = []
        
    def get_current_week(self):
        """获取当前周信息"""
        today = datetime.now()
        # 计算是第几周（ISO周）
        year, week, weekday = today.isocalendar()
        week_start = today - timedelta(days=weekday - 1)
        week_end = week_start + timedelta(days=6)
        
        week_str = f"{year}年第{week}周 ({week_start.strftime('%m月%d日')}-{week_end.strftime('%m月%d日')})"
        return week_str, week_start.strftime('%Y-%m-%d'), week_end.strftime('%Y-%m-%d')
    
    def search_keywords(self, text, keywords):
        """检查文本是否包含关键词"""
        text_lower = text.lower()
        for keyword in keywords:
            if keyword.lower() in text_lower:
                return True
        return False
    
    def categorize_news(self, title, content):
        """根据标题和内容分类"""
        categories = []
        full_text = title + ' ' + content
        
        for category, keywords in CATEGORIES.items():
            if self.search_keywords(full_text, keywords):
                categories.append(category)
        
        return categories if categories else ['其他']
    
    def determine_priority(self, title, content, categories, is_job=False):
        """判断优先级（重点/次重点）"""
        # 重点关键词
        high_priority_keywords = [
            '突破', '创新', '发布', '上线', '获得认可', '里程碑', 
            '突破', '千万', '百万', '国际', '年度', '重大', 'AI+', 'AI教育'
        ]
        
        # 次重点关键词
        normal_priority_keywords = [
            '活动', '策略', '调整', '优化', '更新', '启动'
        ]
        
        full_text = (title + ' ' + content).lower()
        
        # AI+教育相关内容优先标记为重点
        if any(keyword in full_text for keyword in ['ai+', 'ai+教育', '人工智能+教育']):
            return '重点'
        
        # 检查重点关键词
        for keyword in high_priority_keywords:
            if keyword in full_text:
                return '重点'
        
        # 检查次重点关键词
        for keyword in normal_priority_keywords:
            if keyword in full_text:
                return '次重点'
        
        # 默认根据分类判断
        if 'AI教育' in categories or '教研成果' in categories:
            return '重点'
        
        # 招聘信息默认次重点
        if is_job:
            return '次重点'
        
        return '次重点'
    
    def extract_company(self, title, content):
        """从文本中提取公司名称"""
        full_text = title + ' ' + content
        text_lower = full_text.lower()
        
        # 首先检查猿辅导及其旗下公司
        for subsidiary in YUANFUDAO_SUBSIDIARIES:
            if subsidiary in full_text or subsidiary.lower() in text_lower:
                return '猿辅导'  # 统一归为猿辅导
        
        # 检查主要公司
        for company in MAIN_COMPANIES:
            if company in full_text or company.lower() in text_lower:
                return company
        
        # 检查其他在线教育公司关键词
        for company in EDUCATION_COMPANIES:
            if company in full_text or company.lower() in text_lower:
                # 如果不在主要公司列表中，返回实际公司名（前端会处理为"其他"）
                if company not in MAIN_COMPANIES and company not in YUANFUDAO_SUBSIDIARIES:
                    return company
        
        return None
    
    def classify_job_function(self, title, description):
        """分类招聘职能"""
        full_text = (title + ' ' + (description or '')).lower()
        for function, keywords in JOB_FUNCTIONS.items():
            for keyword in keywords:
                if keyword in full_text:
                    return function
        return '其他'
    
    def validate_source(self, source, verify_access=False):
        """验证来源链接是否有效"""
        if not source:
            return False, '缺少链接'
        
        try:
            from urllib.parse import urlparse
            parsed = urlparse(source)
            
            # 检查URL格式
            if not parsed.scheme or not parsed.netloc:
                return False, '无效URL格式'
            
            # 排除示例链接
            if 'example.com' in parsed.netloc:
                return False, '示例链接'
            
            # 如果需要验证可访问性
            if verify_access:
                try:
                    response = self.session.head(source, timeout=5, allow_redirects=True)
                    if response.status_code >= 400:
                        return False, f'HTTP {response.status_code}'
                except:
                    return False, '无法访问'
            
            return True, '有效'
        except Exception as e:
            return False, f'验证错误: {str(e)}'
    
    def collect_from_web(self, url, max_pages=3):
        """从网页收集新闻（示例方法，需要根据实际网站调整）"""
        news_list = []
        try:
            response = self.session.get(url, timeout=10)
            response.encoding = 'utf-8'
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 这里需要根据实际网站结构调整选择器
            # 示例：查找新闻标题和链接
            articles = soup.find_all('a', class_=re.compile('title|article|news'), limit=20)
            
            for article in articles:
                try:
                    title = article.get_text(strip=True)
                    link = article.get('href', '')
                    
                    if not title or len(title) < 10:
                        continue
                    
                    # 检查是否包含目标公司
                    company = self.extract_company(title, '')
                    if not company:
                        continue
                    
                    # 获取完整内容（需要访问详情页）
                    content = self.get_article_content(link) if link else title
                    
                    # 验证来源链接
                    source_link = link if link.startswith('http') else url
                    if not self.validate_source(source_link):
                        continue  # 跳过无效来源
                    
                    # 判断是否是招聘信息
                    is_job = '招聘' in title or '岗位' in title or '职位' in title or 'JD' in title
                    
                    if is_job:
                        # 招聘信息处理
                        job_function = self.classify_job_function(title, content)
                        categories = ['招聘信息']
                        
                        # 提取招聘信息（需要根据实际网站结构调整）
                        job_title = title
                        job_description = content[:500] if len(content) > 500 else content
                        
                        news_item = {
                            'type': '招聘',
                            'company': company,
                            'title': title,
                            'jobTitle': job_title,
                            'jobDescription': job_description,
                            'jobFunction': job_function,
                            'workExperience': '',  # 需要从内容中提取
                            'salaryRange': '',  # 需要从内容中提取
                            'priority': self.determine_priority(title, content, categories, is_job=True),
                            'categories': categories,
                            'date': datetime.now().strftime('%Y-%m-%d'),
                            'source': source_link  # 必须有真实来源
                        }
                    else:
                        # 普通新闻处理
                        categories = self.categorize_news(title, content)
                        priority = self.determine_priority(title, content, categories, is_job=False)
                        
                        news_item = {
                            'type': '新闻',
                            'company': company,
                            'title': title,
                            'content': content[:200] + '...' if len(content) > 200 else content,
                            'priority': priority,
                            'categories': categories[:2],  # 最多2个分类
                            'date': datetime.now().strftime('%Y-%m-%d'),
                            'source': source_link  # 必须有真实来源
                        }
                    
                    news_list.append(news_item)
                    time.sleep(0.5)  # 避免请求过快
                    
                except Exception as e:
                    print(f"处理文章时出错: {e}")
                    continue
                    
        except Exception as e:
            print(f"收集网页数据时出错: {e}")
        
        return news_list
    
    def get_article_content(self, url):
        """获取文章详细内容"""
        try:
            if not url or not url.startswith('http'):
                return ''
            
            response = self.session.get(url, timeout=10)
            response.encoding = 'utf-8'
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 尝试多种常见的内容选择器
            content_selectors = [
                'article', '.content', '.article-content', 
                '.post-content', '.text', 'main'
            ]
            
            for selector in content_selectors:
                content_elem = soup.select_one(selector)
                if content_elem:
                    # 移除脚本和样式
                    for script in content_elem(['script', 'style']):
                        script.decompose()
                    return content_elem.get_text(strip=True)
            
            return ''
        except:
            return ''
    
    def collect_from_rss(self, rss_url):
        """从RSS源收集新闻"""
        news_list = []
        try:
            import feedparser
            feed = feedparser.parse(rss_url)
            
            for entry in feed.entries[:20]:
                title = entry.get('title', '')
                content = entry.get('summary', '')
                link = entry.get('link', '')
                
                company = self.extract_company(title, content)
                if not company:
                    continue
                
                categories = self.categorize_news(title, content)
                priority = self.determine_priority(title, content, categories)
                
                news_item = {
                    'company': company,
                    'title': title,
                    'content': content[:200] + '...' if len(content) > 200 else content,
                    'priority': priority,
                    'categories': categories[:2],
                    'date': entry.get('published', datetime.now().strftime('%Y-%m-%d')),
                    'source': link
                }
                
                news_list.append(news_item)
                
        except ImportError:
            print("需要安装feedparser库: pip install feedparser")
        except Exception as e:
            print(f"收集RSS数据时出错: {e}")
        
        return news_list
    
    def collect_jobs_from_web(self, source):
        """从招聘网站深度收集招聘信息 - 全面爬取"""
        job_list = []
        try:
            # 优先策略：针对每个主要公司进行深度搜索
            # 1. 主要公司列表（重点收集）
            main_companies_to_search = MAIN_COMPANIES + ['VIPKID', '掌门教育', '网易有道', '一起作业', '腾讯教育']
            
            # 2. 为每个主要公司搜索多页数据（优化：减少页数和数量）
            for company in main_companies_to_search:
                print(f"  正在收集 {company} 的招聘信息...")
                # 优化：每个公司最多3页，每页最多20条，每个职能最多1条
                company_jobs = self._collect_company_jobs(company, source, max_pages=3, jobs_per_page=20)
                # 去重：每个职能只保留1条
                company_jobs = self._deduplicate_jobs_by_function(company_jobs)
                job_list.extend(company_jobs)
                print(f"    已收集 {len(company_jobs)} 条 {company} 招聘信息（已去重）")
                time.sleep(1)  # 避免请求过快
            
            # 3. 搜索其他在线教育公司（大幅减少）
            other_companies = [c for c in EDUCATION_COMPANIES if c not in main_companies_to_search]
            for company in other_companies[:10]:  # 限制其他公司数量为10个
                company_jobs = self._collect_company_jobs(company, source, max_pages=2, jobs_per_page=15)
                # 去重
                company_jobs = self._deduplicate_jobs_by_function(company_jobs)
                job_list.extend(company_jobs)
                time.sleep(0.5)
        
        except Exception as e:
            print(f"收集招聘信息时出错: {e}")
        
        return job_list
    
    def _deduplicate_jobs_by_function(self, jobs):
        """按职能去重，每个职能只保留一条招聘信息"""
        seen_functions = {}
        deduplicated = []
        for job in jobs:
            function = job.get('jobFunction', '其他')
            company = job.get('company', '')
            key = f"{company}_{function}"
            if key not in seen_functions:
                seen_functions[key] = True
                deduplicated.append(job)
        return deduplicated
    
    def _collect_company_jobs(self, company, source, max_pages=10, jobs_per_page=30):
        """收集特定公司的招聘信息（支持分页）"""
        job_list = []
        
        try:
            # 遍历多页数据
            for page in range(1, max_pages + 1):
                try:
                    # 构建搜索URL（根据实际网站调整，支持分页）
                    if 'zhipin.com' in source['base_url']:
                        # BOSS直聘搜索 - 支持分页
                        search_url = f"{source['search_url']}?query={company}&page={page}"
                    elif 'liepin.com' in source['base_url']:
                        # 猎聘网搜索 - 支持分页
                        search_url = f"{source['search_url']}?key={company}&curPage={page}"
                    elif 'lagou.com' in source['base_url']:
                        # 拉勾网搜索 - 支持分页
                        search_url = f"{source['search_url']}?kd={company}&pn={page}"
                    elif 'zhaopin.com' in source['base_url']:
                        # 智联招聘搜索 - 支持分页
                        search_url = f"{source['search_url']}?kw={company}&pageIndex={page}"
                    elif '51job.com' in source['base_url']:
                        # 前程无忧搜索 - 支持分页
                        search_url = f"{source['search_url']}?keyword={company}&curr_page={page}"
                    else:
                        search_url = f"{source['search_url']}?q={company}&page={page}"
                    
                    response = self.session.get(search_url, timeout=15)
                    response.encoding = 'utf-8'
                    soup = BeautifulSoup(response.text, 'html.parser')
                    
                    # 查找招聘信息（移除limit限制，获取更多数据）
                    # 根据不同网站使用不同的选择器
                    job_items = []
                    if 'zhipin.com' in source['base_url']:
                        # BOSS直聘选择器
                        job_items = soup.find_all('li', class_=re.compile('job-card-wrapper|job-item'), limit=jobs_per_page)
                    elif 'liepin.com' in source['base_url']:
                        # 猎聘网选择器
                        job_items = soup.find_all('div', class_=re.compile('job-item|job-info'), limit=jobs_per_page)
                    elif 'lagou.com' in source['base_url']:
                        # 拉勾网选择器
                        job_items = soup.find_all('li', class_=re.compile('con_list_item'), limit=jobs_per_page)
                    else:
                        # 通用选择器
                        job_items = soup.find_all(['div', 'li'], class_=re.compile('job|position|item'), limit=jobs_per_page)
                    
                    # 如果当前页没有数据，停止分页
                    if not job_items:
                        break
                    
                    for item in job_items:
                        try:
                            # 提取岗位信息
                            title_elem = item.find(['a', 'span'], class_=re.compile('title|name|job'))
                            if not title_elem:
                                continue
                            
                            job_title = title_elem.get_text(strip=True)
                            if not job_title or len(job_title) < 3:
                                continue
                            
                            # 提取链接
                            link_elem = item.find('a', href=True)
                            job_link = ''
                            if link_elem:
                                href = link_elem.get('href', '')
                                if href.startswith('http'):
                                    job_link = href
                                elif href.startswith('/'):
                                    job_link = source['base_url'] + href
                            
                            # 验证链接
                            if not self.validate_source(job_link):
                                continue
                            
                            # 提取其他信息
                            desc_elem = item.find(['div', 'p'], class_=re.compile('desc|content|jd'))
                            job_description = desc_elem.get_text(strip=True) if desc_elem else ''
                            
                            salary_elem = item.find(['span', 'div'], class_=re.compile('salary|pay'))
                            salary_range = salary_elem.get_text(strip=True) if salary_elem else ''
                            
                            exp_elem = item.find(['span', 'div'], class_=re.compile('exp|experience|year'))
                            work_experience = exp_elem.get_text(strip=True) if exp_elem else ''
                            
                            # 分类职能
                            job_function = self.classify_job_function(job_title, job_description)
                            
                            # 判断优先级（AI+教育相关为重点）
                            categories = ['招聘信息']
                            if any(keyword in (job_title + job_description).lower() for keyword in ['ai', '人工智能', 'ai+', '智能', '算法']):
                                categories.append('AI教育')
                                priority = '重点'
                            else:
                                priority = '次重点'
                            
                            # 从职位信息中提取公司名
                            detected_company = self.extract_company(job_title, job_description)
                            if not detected_company:
                                # 如果无法识别公司，使用搜索的公司名
                                if company in EDUCATION_COMPANIES:
                                    detected_company = company
                                else:
                                    detected_company = '其他'
                            
                            # 如果是猿辅导旗下公司，统一为猿辅导
                            if detected_company in YUANFUDAO_SUBSIDIARIES:
                                detected_company = '猿辅导'
                            
                            job_item = {
                                'type': '招聘',
                                'company': detected_company,
                                'title': f'{detected_company}招聘{job_title}',
                                'jobTitle': job_title,
                                'jobDescription': job_description[:500] if len(job_description) > 500 else job_description,
                                'jobFunction': job_function,
                                'workExperience': work_experience,
                                'salaryRange': salary_range,
                                'priority': priority,
                                'categories': categories,
                                'date': datetime.now().strftime('%Y-%m-%d'),
                                'source': job_link
                            }
                            
                            job_list.append(job_item)
                            
                        except Exception as e:
                            # 静默处理单个错误，继续处理其他项
                            continue
                    
                    # 如果当前页收集到的数据少于预期，可能已到最后一页
                    if len([j for j in job_list if j.get('company') == company]) < 5:
                        break
                    
                    time.sleep(1)  # 避免请求过快
                    
                except Exception as e:
                    print(f"  从 {source['name']} 收集 {company} 第{page}页时出错: {e}")
                    break  # 出错时停止该公司的分页
            
        except Exception as e:
            print(f"  收集 {company} 招聘信息时出错: {e}")
        
        return job_list
    
    def collect_news(self):
        """收集所有新闻"""
        print("开始收集教培行业资讯...")
        
        all_news = []
        
        # 从网页收集新闻
        for source in DATA_SOURCES:
            if source['type'] == 'web':
                print(f"正在从 {source['name']} 收集数据...")
                news = self.collect_from_web(source['url'])
                all_news.extend(news)
                time.sleep(1)
        
        # 从招聘网站收集招聘信息
        print("\n开始收集招聘信息...")
        for job_source in JOB_SOURCES:
            print(f"正在从 {job_source['name']} 收集招聘信息...")
            jobs = self.collect_jobs_from_web(job_source)
            all_news.extend(jobs)
            print(f"从 {job_source['name']} 收集到 {len(jobs)} 条招聘信息")
            time.sleep(2)
        
        # 去重（基于标题）
        seen_titles = set()
        unique_news = []
        for news in all_news:
            title_key = news.get('title', '')[:50]  # 使用前50个字符作为key
            if title_key and title_key not in seen_titles:
                seen_titles.add(title_key)
                unique_news.append(news)
        
        print(f"\n共收集到 {len(unique_news)} 条信息（新闻+招聘）")
        return unique_news
    
    def update_data_file(self, news_list):
        """更新data.js文件"""
        week_str, week_start, week_end = self.get_current_week()
        
        # 验证所有新闻都有真实来源
        validated_news = []
        for news in news_list:
            if self.validate_source(news.get('source', '')):
                validated_news.append(news)
            else:
                print(f"⚠️  跳过无效来源的新闻: {news.get('title', '未知')}")
        
        if len(validated_news) < len(news_list):
            print(f"⚠️  共 {len(news_list) - len(validated_news)} 条新闻因缺少有效来源被过滤")
        
        # 读取现有数据
        data_file = os.path.join(os.path.dirname(__file__), 'data.js')
        
        existing_data = []
        if os.path.exists(data_file):
            try:
                with open(data_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # 提取JSON数据
                    json_match = re.search(r'const newsData = (\[.*?\]);', content, re.DOTALL)
                    if json_match:
                        existing_data = json.loads(json_match.group(1))
            except Exception as e:
                print(f"读取现有数据时出错: {e}")
        
        # 检查本周数据是否已存在
        current_week_data = None
        for week_data in existing_data:
            if week_data['week'] == week_str:
                current_week_data = week_data
                break
        
        # 如果存在，合并新闻；如果不存在，创建新的
        if current_week_data:
            # 合并新闻，去重
            existing_titles = {n.get('title', '')[:50] for n in current_week_data['news']}
            new_news = [n for n in validated_news if n.get('title', '')[:50] not in existing_titles]
            current_week_data['news'].extend(new_news)
            print(f"本周已有数据，新增 {len(new_news)} 条已验证新闻")
        else:
            # 创建新的周数据
            new_week_data = {
                'week': week_str,
                'news': validated_news
            }
            existing_data.append(new_week_data)
            print(f"创建新的周数据: {week_str}")
        
        # 按周排序（最新的在后面）
        existing_data.sort(key=lambda x: x['week'])
        
        # 只保留最近13周的数据
        existing_data = existing_data[-13:]
        
        # 写入文件
        try:
            with open(data_file, 'w', encoding='utf-8') as f:
                f.write('// data.js - 新闻数据\n')
                f.write('// 2025年第四季度（10月-12月）教培行业动向信息\n')
                f.write('// 注意：所有信息均来自真实来源，可通过"查看原文"验证\n')
                f.write('const newsData = ')
                f.write(json.dumps(existing_data, ensure_ascii=False, indent=4))
                f.write(';\n')
            
            print(f"✅ 数据已更新到 {data_file}，共 {len(validated_news)} 条已验证新闻")
            return True
        except Exception as e:
            print(f"❌ 写入数据文件时出错: {e}")
            return False

def main():
    """主函数"""
    print("=" * 60)
    print("教培行业动向自动收集脚本")
    print("=" * 60)
    print()
    print("⚠️  重要提示：")
    print("1. 所有信息必须来自真实来源")
    print("2. 所有链接必须可访问和验证")
    print("3. 禁止编造任何信息")
    print("4. 重点关注AI+教育相关信息")
    print()
    
    collector = NewsCollector()
    
    # 收集新闻和招聘信息
    news_list = collector.collect_news()
    
    if news_list:
        # 验证所有来源链接
        print("\n验证来源链接...")
        validated_news = []
        for news in news_list:
            source = news.get('source', '')
            is_valid, reason = collector.validate_source(source, verify_access=True)
            if is_valid:
                validated_news.append(news)
            else:
                print(f"⚠️  跳过无效来源: {news.get('title', '未知')[:30]}... - {reason}")
        
        if validated_news:
            # 更新数据文件
            collector.update_data_file(validated_news)
            print(f"\n✅ 成功收集并更新 {len(validated_news)} 条已验证信息")
            print(f"   - 新闻: {len([n for n in validated_news if n.get('type') == '新闻'])}")
            print(f"   - 招聘: {len([n for n in validated_news if n.get('type') == '招聘'])}")
        else:
            print("\n❌ 没有有效的已验证信息")
    else:
        print("\n⚠️  未收集到信息，请检查网络连接或数据源配置")
    
    print("\n" + "=" * 60)
    print("数据收集完成")
    print("=" * 60)

if __name__ == '__main__':
    main()


