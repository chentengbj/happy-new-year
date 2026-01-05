#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
教培行业动向自动收集脚本 - 真实链接版
从多个真实新闻源获取教育行业新闻，确保每条新闻都有精确的原文链接
"""

import json
import re
import requests
from datetime import datetime, timedelta
from bs4 import BeautifulSoup
import time
import os
from urllib.parse import urljoin, quote

# 配置信息
MAIN_COMPANIES = ['好未来', '希望学', '学而思', '新东方', '作业帮', '高途', '猿辅导']
YUANFUDAO_SUBSIDIARIES = ['斑马AI', '斑马百科', '猿编程', '飞象星球', '斑马', '猿辅导']
EDUCATION_COMPANIES = MAIN_COMPANIES + YUANFUDAO_SUBSIDIARIES + [
    'VIPKID', '掌门教育', '网易有道', '腾讯教育', '有道', '粉笔', '中公教育'
]

CATEGORIES = {
    '教研成果': ['教研', '教学', '课程', '教师', '教学方法', '课程体系'],
    'AI教育': ['AI', '人工智能', '智能', '大模型', 'GPT', 'ChatGPT', 'AI+教育'],
    '动画视频': ['动画', '视频', '3D', '制作'],
    '获客增长': ['获客', '增长', '营销', '推广', '招生', '市场'],
    '品牌公关': ['品牌', '公关', '传播', '融资', '上市', '财报'],
    '用户运营': ['用户', '运营', '活跃', '留存'],
    '招聘信息': ['招聘', '岗位', '职位']
}


class RealNewsCollector:
    """真实新闻收集器 - 获取精确的文章链接"""
    
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        })
        self.collected_news = []
    
    def get_current_week(self):
        """获取当前周信息"""
        today = datetime.now()
        year, week, weekday = today.isocalendar()
        week_start = today - timedelta(days=weekday - 1)
        week_end = week_start + timedelta(days=6)
        week_str = f"{year}年第{week}周 ({week_start.strftime('%m月%d日')}-{week_end.strftime('%m月%d日')})"
        return week_str
    
    def extract_company(self, text):
        """从文本中提取公司名称"""
        for company in EDUCATION_COMPANIES:
            if company in text:
                # 猿辅导系列统一归类
                if company in YUANFUDAO_SUBSIDIARIES:
                    return company  # 保留具体公司名
                return company
        return None
    
    def categorize_news(self, title, content=''):
        """根据标题和内容分类"""
        categories = []
        full_text = (title + ' ' + content).lower()
        for category, keywords in CATEGORIES.items():
            for keyword in keywords:
                if keyword.lower() in full_text:
                    categories.append(category)
                    break
        return categories[:2] if categories else ['其他']
    
    def determine_priority(self, title, content=''):
        """判断优先级"""
        high_keywords = ['发布', '上线', '融资', '上市', '财报', 'AI', '人工智能', 
                        '突破', '创新', '重大', '战略', '合作', '收购']
        full_text = (title + ' ' + content).lower()
        for keyword in high_keywords:
            if keyword.lower() in full_text:
                return '重点'
        return '次重点'
    
    # ==================== 36氪 ====================
    def collect_from_36kr(self, keyword):
        """从36氪搜索获取真实文章链接"""
        news_list = []
        try:
            # 36氪搜索API
            search_url = f"https://36kr.com/api/search-column/mainsite"
            params = {
                'per_page': 20,
                'page': 1,
                'keyword': keyword,
                'partner_id': 'web'
            }
            
            response = self.session.get(search_url, params=params, timeout=15)
            if response.status_code == 200:
                data = response.json()
                items = data.get('data', {}).get('items', [])
                
                for item in items:
                    try:
                        item_data = item.get('data', {}) if isinstance(item.get('data'), dict) else item
                        title = item_data.get('title', '') or item_data.get('catch_title', '')
                        article_id = item_data.get('id') or item_data.get('item_id')
                        
                        if not title or not article_id:
                            continue
                        
                        # 构建真实文章链接
                        real_url = f"https://36kr.com/p/{article_id}"
                        
                        # 提取公司
                        company = self.extract_company(title)
                        if not company:
                            continue
                        
                        # 获取摘要
                        summary = item_data.get('summary', '') or item_data.get('description', '')
                        if len(summary) > 200:
                            summary = summary[:200] + '...'
                        
                        # 获取发布时间
                        pub_time = item_data.get('published_at', '') or item_data.get('create_time', '')
                        if pub_time:
                            try:
                                date_str = datetime.fromisoformat(pub_time.replace('Z', '+00:00')).strftime('%Y-%m-%d')
                            except:
                                date_str = datetime.now().strftime('%Y-%m-%d')
                        else:
                            date_str = datetime.now().strftime('%Y-%m-%d')
                        
                        news_item = {
                            'type': '新闻',
                            'company': company,
                            'title': title,
                            'content': summary,
                            'priority': self.determine_priority(title, summary),
                            'categories': self.categorize_news(title, summary),
                            'date': date_str,
                            'source': real_url  # 真实文章链接
                        }
                        news_list.append(news_item)
                        
                    except Exception as e:
                        continue
                        
        except Exception as e:
            print(f"  36氪搜索出错: {e}")
        
        return news_list
    
    # ==================== 芥末堆 ====================
    def collect_from_jiemodui(self):
        """从芥末堆获取教育新闻"""
        news_list = []
        try:
            # 芥末堆首页和列表页
            urls = [
                'https://www.jiemodui.com/',
                'https://www.jiemodui.com/N/0.html',  # 最新资讯
            ]
            
            for url in urls:
                try:
                    response = self.session.get(url, timeout=15)
                    response.encoding = 'utf-8'
                    soup = BeautifulSoup(response.text, 'html.parser')
                    
                    # 查找文章列表
                    articles = soup.find_all('a', href=re.compile(r'/A/\d+\.html'))
                    
                    for article in articles[:30]:
                        try:
                            title = article.get_text(strip=True)
                            href = article.get('href', '')
                            
                            if not title or len(title) < 10:
                                continue
                            
                            # 构建完整URL
                            if href.startswith('/'):
                                real_url = f"https://www.jiemodui.com{href}"
                            elif href.startswith('http'):
                                real_url = href
                            else:
                                continue
                            
                            # 提取公司
                            company = self.extract_company(title)
                            if not company:
                                continue
                            
                            news_item = {
                                'type': '新闻',
                                'company': company,
                                'title': title,
                                'content': '',
                                'priority': self.determine_priority(title),
                                'categories': self.categorize_news(title),
                                'date': datetime.now().strftime('%Y-%m-%d'),
                                'source': real_url
                            }
                            news_list.append(news_item)
                            
                        except Exception:
                            continue
                    
                    time.sleep(1)
                except Exception:
                    continue
                    
        except Exception as e:
            print(f"  芥末堆抓取出错: {e}")
        
        return news_list
    
    # ==================== 多知网 ====================
    def collect_from_duozhi(self):
        """从多知网获取教育新闻"""
        news_list = []
        try:
            response = self.session.get('https://www.duozhi.com/', timeout=15)
            response.encoding = 'utf-8'
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 查找文章链接
            articles = soup.find_all('a', href=re.compile(r'/news/\d+\.shtml'))
            
            for article in articles[:30]:
                try:
                    title = article.get_text(strip=True)
                    href = article.get('href', '')
                    
                    if not title or len(title) < 10:
                        continue
                    
                    # 构建完整URL
                    if href.startswith('/'):
                        real_url = f"https://www.duozhi.com{href}"
                    elif href.startswith('http'):
                        real_url = href
                    else:
                        continue
                    
                    # 提取公司
                    company = self.extract_company(title)
                    if not company:
                        continue
                    
                    news_item = {
                        'type': '新闻',
                        'company': company,
                        'title': title,
                        'content': '',
                        'priority': self.determine_priority(title),
                        'categories': self.categorize_news(title),
                        'date': datetime.now().strftime('%Y-%m-%d'),
                        'source': real_url
                    }
                    news_list.append(news_item)
                    
                except Exception:
                    continue
                    
        except Exception as e:
            print(f"  多知网抓取出错: {e}")
        
        return news_list
    
    # ==================== 百度新闻搜索 ====================
    def collect_from_baidu_news(self, keyword):
        """从百度新闻搜索获取新闻"""
        news_list = []
        try:
            # 使用百度资讯搜索
            search_url = "https://www.baidu.com/s"
            params = {
                'wd': f'{keyword}',
                'tn': 'news',
                'ie': 'utf-8'
            }
            
            headers = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                'Accept': 'text/html,application/xhtml+xml',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                'Referer': 'https://www.baidu.com/'
            }
            
            response = self.session.get(search_url, params=params, headers=headers, timeout=15)
            response.encoding = 'utf-8'
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 查找新闻结果容器
            results = soup.find_all('div', class_=re.compile('result|c-container'))
            
            for result in results[:20]:
                try:
                    # 获取标题和链接
                    title_elem = result.find('a', href=True)
                    if not title_elem:
                        continue
                    
                    title = title_elem.get_text(strip=True)
                    href = title_elem.get('href', '')
                    
                    if not title or not href or len(title) < 8:
                        continue
                    
                    # 解析百度跳转链接获取真实URL
                    real_url = self._resolve_baidu_link(href)
                    if not real_url:
                        continue
                    
                    # 提取公司
                    company = self.extract_company(title)
                    if not company:
                        continue
                    
                    # 获取摘要
                    summary_elem = result.find(['div', 'span'], class_=re.compile('c-abstract|c-summary|content'))
                    summary = summary_elem.get_text(strip=True)[:200] if summary_elem else ''
                    
                    news_item = {
                        'type': '新闻',
                        'company': company,
                        'title': title,
                        'content': summary,
                        'priority': self.determine_priority(title, summary),
                        'categories': self.categorize_news(title, summary),
                        'date': datetime.now().strftime('%Y-%m-%d'),
                        'source': real_url
                    }
                    news_list.append(news_item)
                    
                except Exception:
                    continue
                    
        except Exception as e:
            print(f"  百度新闻搜索出错: {e}")
        
        return news_list
    
    def _resolve_baidu_link(self, href):
        """解析百度跳转链接，获取真实目标URL"""
        try:
            if not href.startswith('http'):
                return None
            
            # 跟随重定向获取真实URL
            response = self.session.head(href, allow_redirects=True, timeout=8)
            final_url = response.url
            
            # 验证URL有效性
            if final_url and final_url.startswith('http') and 'baidu.com' not in final_url:
                return final_url
            
            # 如果head请求失败，尝试get请求
            response = self.session.get(href, allow_redirects=True, timeout=8)
            return response.url if response.url and 'baidu.com' not in response.url else None
            
        except Exception:
            return None
    
    # ==================== 必应新闻搜索 ====================
    def collect_from_bing_news(self, keyword):
        """从必应新闻搜索获取新闻"""
        news_list = []
        try:
            search_url = "https://cn.bing.com/news/search"
            params = {
                'q': f'{keyword} 教育',
                'FORM': 'HDRSC6'
            }
            
            response = self.session.get(search_url, params=params, timeout=15)
            response.encoding = 'utf-8'
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 查找新闻卡片
            cards = soup.find_all('a', class_='title')
            
            for card in cards[:20]:
                try:
                    title = card.get_text(strip=True)
                    href = card.get('href', '')
                    
                    if not title or not href:
                        continue
                    
                    # 提取公司
                    company = self.extract_company(title)
                    if not company:
                        continue
                    
                    news_item = {
                        'type': '新闻',
                        'company': company,
                        'title': title,
                        'content': '',
                        'priority': self.determine_priority(title),
                        'categories': self.categorize_news(title),
                        'date': datetime.now().strftime('%Y-%m-%d'),
                        'source': href
                    }
                    news_list.append(news_item)
                    
                except Exception:
                    continue
                    
        except Exception as e:
            print(f"  必应新闻搜索出错: {e}")
        
        return news_list
    
    # ==================== 搜狗新闻搜索 ====================
    def collect_from_sogou_news(self, keyword):
        """从搜狗新闻搜索获取新闻 - 解析真实链接"""
        news_list = []
        try:
            search_url = "https://news.sogou.com/news"
            params = {
                'query': f'{keyword}',
                'mode': 1,
                'sort': 0
            }
            
            response = self.session.get(search_url, params=params, timeout=15)
            response.encoding = 'utf-8'
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 查找新闻结果
            results = soup.find_all('div', class_='vrwrap')
            if not results:
                results = soup.find_all('div', class_='news-item')
            if not results:
                results = soup.find_all('li', class_='news150507')
            
            for result in results[:15]:
                try:
                    # 获取标题和链接
                    title_elem = result.find('a')
                    if not title_elem:
                        continue
                    
                    title = title_elem.get_text(strip=True)
                    href = title_elem.get('href', '')
                    
                    if not title or not href or len(title) < 8:
                        continue
                    
                    # 修复链接格式并获取真实链接
                    real_url = self._resolve_sogou_link(href)
                    if not real_url:
                        continue
                    
                    # 提取公司
                    company = self.extract_company(title)
                    if not company:
                        continue
                    
                    # 获取摘要
                    summary_elem = result.find(['p', 'div'], class_=re.compile('content|summary|txt'))
                    summary = summary_elem.get_text(strip=True)[:200] if summary_elem else ''
                    
                    news_item = {
                        'type': '新闻',
                        'company': company,
                        'title': title,
                        'content': summary,
                        'priority': self.determine_priority(title, summary),
                        'categories': self.categorize_news(title, summary),
                        'date': datetime.now().strftime('%Y-%m-%d'),
                        'source': real_url  # 使用解析后的真实链接
                    }
                    news_list.append(news_item)
                    
                except Exception:
                    continue
                    
        except Exception as e:
            print(f"  搜狗新闻搜索出错: {e}")
        
        return news_list
    
    def _resolve_sogou_link(self, href):
        """解析搜狗跳转链接，获取真实目标URL"""
        try:
            # 构建完整URL
            if href.startswith('/link'):
                full_url = f"https://news.sogou.com{href}"
            elif href.startswith('http'):
                full_url = href
            else:
                return None
            
            # 请求链接并跟随重定向
            response = self.session.get(full_url, allow_redirects=True, timeout=10)
            final_url = response.url
            
            # 验证最终URL有效
            if final_url and final_url.startswith('http') and 'sogou.com' not in final_url:
                return final_url
            
            # 如果重定向失败，尝试从页面内容提取真实链接
            if 'sogou.com' in final_url:
                soup = BeautifulSoup(response.text, 'html.parser')
                # 查找可能的重定向链接
                meta_refresh = soup.find('meta', attrs={'http-equiv': 'refresh'})
                if meta_refresh:
                    content = meta_refresh.get('content', '')
                    url_match = re.search(r'url=([^\s"\']+)', content, re.IGNORECASE)
                    if url_match:
                        return url_match.group(1)
            
            return None
        except Exception as e:
            return None
    
    # ==================== 今日头条搜索 ====================
    def collect_from_toutiao(self, keyword):
        """从今日头条搜索获取新闻"""
        news_list = []
        try:
            search_url = "https://so.toutiao.com/search"
            params = {
                'keyword': keyword,
                'pd': 'information',
                'source': 'input'
            }
            
            response = self.session.get(search_url, params=params, timeout=15)
            response.encoding = 'utf-8'
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 查找文章链接
            articles = soup.find_all('a', href=re.compile(r'toutiao\.com|toutiaocdn\.com'))
            
            for article in articles[:15]:
                try:
                    title = article.get_text(strip=True)
                    href = article.get('href', '')
                    
                    if not title or not href or len(title) < 8:
                        continue
                    
                    # 提取公司
                    company = self.extract_company(title)
                    if not company:
                        continue
                    
                    news_item = {
                        'type': '新闻',
                        'company': company,
                        'title': title,
                        'content': '',
                        'priority': self.determine_priority(title),
                        'categories': self.categorize_news(title),
                        'date': datetime.now().strftime('%Y-%m-%d'),
                        'source': href
                    }
                    news_list.append(news_item)
                    
                except Exception:
                    continue
                    
        except Exception as e:
            print(f"  今日头条搜索出错: {e}")
        
        return news_list
    
    def verify_url(self, url):
        """验证URL是否可访问"""
        try:
            response = self.session.head(url, timeout=5, allow_redirects=True)
            return response.status_code < 400
        except:
            return False
    
    def collect_all_news(self):
        """收集所有新闻"""
        print("=" * 60)
        print("教培行业动向自动收集 - 真实链接版")
        print("=" * 60)
        print()
        
        all_news = []
        
        # 1. 从36氪搜索
        print("📰 从36氪搜索新闻...")
        for company in MAIN_COMPANIES:
            print(f"  搜索: {company}")
            news = self.collect_from_36kr(company)
            all_news.extend(news)
            print(f"    获取 {len(news)} 条")
            time.sleep(1)
        
        # 2. 从芥末堆获取
        print("\n📰 从芥末堆获取新闻...")
        news = self.collect_from_jiemodui()
        all_news.extend(news)
        print(f"  获取 {len(news)} 条")
        
        # 3. 从多知网获取
        print("\n📰 从多知网获取新闻...")
        news = self.collect_from_duozhi()
        all_news.extend(news)
        print(f"  获取 {len(news)} 条")
        
        # 4. 从百度新闻搜索（主要来源）
        print("\n📰 从百度新闻搜索...")
        for company in MAIN_COMPANIES:
            print(f"  搜索: {company}")
            news = self.collect_from_baidu_news(company)
            all_news.extend(news)
            print(f"    获取 {len(news)} 条")
            time.sleep(2)  # 稍长延迟避免被封
        
        # 5. 从搜狗新闻搜索补充
        print("\n📰 从搜狗新闻搜索补充...")
        for company in MAIN_COMPANIES[:3]:  # 只搜前3个
            print(f"  搜索: {company}")
            news = self.collect_from_sogou_news(company)
            all_news.extend(news)
            print(f"    获取 {len(news)} 条")
            time.sleep(1)
        
        # 去重
        print("\n🔄 去重处理...")
        seen_titles = set()
        unique_news = []
        for news in all_news:
            title_key = news['title'][:30]
            if title_key not in seen_titles:
                seen_titles.add(title_key)
                unique_news.append(news)
        
        print(f"\n✅ 共收集 {len(unique_news)} 条独立新闻（原始 {len(all_news)} 条）")
        
        return unique_news
    
    def update_data_file(self, news_list):
        """更新data.js文件"""
        week_str = self.get_current_week()
        data_file = os.path.join(os.path.dirname(__file__), 'data.js')
        
        # 读取现有数据
        existing_data = []
        if os.path.exists(data_file):
            try:
                with open(data_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                    json_match = re.search(r'const newsData = (\[.*?\]);', content, re.DOTALL)
                    if json_match:
                        existing_data = json.loads(json_match.group(1))
            except Exception as e:
                print(f"读取现有数据时出错: {e}")
        
        # 查找或创建本周数据
        current_week_data = None
        for week_data in existing_data:
            if week_data['week'] == week_str:
                current_week_data = week_data
                break
        
        if current_week_data:
            # 合并新闻
            existing_titles = {n.get('title', '')[:30] for n in current_week_data['news']}
            new_news = [n for n in news_list if n.get('title', '')[:30] not in existing_titles]
            current_week_data['news'].extend(new_news)
            print(f"本周已有数据，新增 {len(new_news)} 条新闻")
        else:
            new_week_data = {
                'week': week_str,
                'news': news_list
            }
            existing_data.append(new_week_data)
            print(f"创建新的周数据: {week_str}")
        
        # 按周排序
        existing_data.sort(key=lambda x: x['week'])
        
        # 只保留最近13周
        existing_data = existing_data[-13:]
        
        # 写入文件
        try:
            with open(data_file, 'w', encoding='utf-8') as f:
                f.write('// data.js - 新闻数据\n')
                f.write('// 教培行业动向信息 - 真实链接版\n')
                f.write('// 所有链接均为真实文章链接，可直接访问原文\n')
                f.write('console.log("📦 data.js 开始执行...");\n')
                f.write('const newsData = ')
                f.write(json.dumps(existing_data, ensure_ascii=False, indent=4))
                f.write(';\n')
                f.write('console.log("✅ data.js 执行完成, newsData长度:", newsData.length);\n')
                f.write('window.newsData = newsData;\n')
            
            print(f"✅ 数据已更新到 {data_file}")
            return True
        except Exception as e:
            print(f"❌ 写入数据文件时出错: {e}")
            return False


def main():
    """主函数"""
    collector = RealNewsCollector()
    
    # 收集新闻
    news_list = collector.collect_all_news()
    
    if news_list:
        # 更新数据文件
        collector.update_data_file(news_list)
        
        # 统计
        companies = {}
        for news in news_list:
            company = news.get('company', '未知')
            companies[company] = companies.get(company, 0) + 1
        
        print("\n📊 各公司新闻数量:")
        for company, count in sorted(companies.items(), key=lambda x: -x[1]):
            print(f"  {company}: {count} 条")
    else:
        print("\n⚠️ 未收集到任何新闻")
    
    print("\n" + "=" * 60)
    print("数据收集完成")
    print("=" * 60)


if __name__ == '__main__':
    main()

