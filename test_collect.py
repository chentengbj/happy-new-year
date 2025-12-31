#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
测试版本的数据收集脚本
不依赖网络请求，用于测试脚本逻辑
"""

import json
import re
from datetime import datetime, timedelta
import os

# 配置信息
COMPANIES = ['好未来', '希望学', '学而思', '新东方', '作业帮', '高途']
CATEGORIES = {
    '教研': ['教研', '教学', '课程', '教师', '教学方法', '课程体系'],
    'AI教育': ['AI', '人工智能', '智能', '机器学习', '算法', '个性化'],
    '动画视频': ['动画', '视频', '3D', '制作', '内容库'],
    '市场营销': ['营销', '推广', '活动', '招生', '市场'],
    '品牌公关': ['品牌', '公关', '传播', '形象', '认可'],
    '用户运营': ['用户', '运营', '活跃', '留存', '转化']
}

class NewsCollector:
    def __init__(self):
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
    
    def determine_priority(self, title, content, categories):
        """判断优先级（重点/次重点）"""
        # 重点关键词
        high_priority_keywords = [
            '突破', '创新', '发布', '上线', '获得认可', '里程碑', 
            '突破', '千万', '百万', '国际', '年度', '重大'
        ]
        
        # 次重点关键词
        normal_priority_keywords = [
            '活动', '策略', '调整', '优化', '更新', '启动'
        ]
        
        full_text = (title + ' ' + content).lower()
        
        # 检查重点关键词
        for keyword in high_priority_keywords:
            if keyword in full_text:
                return '重点'
        
        # 检查次重点关键词
        for keyword in normal_priority_keywords:
            if keyword in full_text:
                return '次重点'
        
        # 默认根据分类判断
        if 'AI教育' in categories or '教研' in categories:
            return '重点'
        
        return '次重点'
    
    def extract_company(self, title, content):
        """从文本中提取公司名称"""
        full_text = title + ' ' + content
        for company in COMPANIES:
            if company in full_text:
                return company
        return None
    
    def create_test_news(self):
        """创建测试新闻数据"""
        test_news = [
            {
                'company': '好未来',
                'title': '好未来AI教育产品获得新突破，用户数持续增长',
                'content': '好未来本周在AI教育产品方面获得新突破，产品用户数持续增长，通过持续的技术创新和内容优化，获得了用户的广泛认可。',
                'priority': '重点',
                'categories': ['AI教育', '用户运营'],
                'date': datetime.now().strftime('%Y-%m-%d'),
                'source': 'https://example.com/test1'
            },
            {
                'company': '学而思',
                'title': '学而思教研团队发布新课程体系',
                'content': '学而思教研团队本周发布了全新的课程体系，针对不同年龄段和学习水平的学生设计了更加科学的教学方案。',
                'priority': '重点',
                'categories': ['教研'],
                'date': datetime.now().strftime('%Y-%m-%d'),
                'source': 'https://example.com/test2'
            },
            {
                'company': '新东方',
                'title': '新东方启动秋季营销活动',
                'content': '新东方本周启动了秋季招生营销活动，推出多项优惠政策和试听课程，旨在吸引更多学生报名。',
                'priority': '次重点',
                'categories': ['市场营销', '用户运营'],
                'date': datetime.now().strftime('%Y-%m-%d'),
                'source': 'https://example.com/test3'
            },
            {
                'company': '作业帮',
                'title': '作业帮动画视频内容库更新',
                'content': '作业帮本周更新了动画视频内容库，新增了200多个教学视频，涵盖小学到高中的各个学科。',
                'priority': '次重点',
                'categories': ['动画视频'],
                'date': datetime.now().strftime('%Y-%m-%d'),
                'source': 'https://example.com/test4'
            },
            {
                'company': '高途',
                'title': '高途品牌公关活动获得良好反响',
                'content': '高途本周的品牌公关活动在社交媒体上获得良好反响，提升了品牌知名度和用户好感度。',
                'priority': '次重点',
                'categories': ['品牌公关'],
                'date': datetime.now().strftime('%Y-%m-%d'),
                'source': 'https://example.com/test5'
            },
            {
                'company': '希望学',
                'title': '希望学用户运营数据创新高',
                'content': '希望学本周的用户运营数据创新高，日活跃用户数持续增长，用户平均使用时长较上月增长。',
                'priority': '次重点',
                'categories': ['用户运营'],
                'date': datetime.now().strftime('%Y-%m-%d'),
                'source': 'https://example.com/test6'
            }
        ]
        return test_news
    
    def update_data_file(self, news_list):
        """更新data.js文件"""
        week_str, week_start, week_end = self.get_current_week()
        
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
            existing_titles = {n['title'][:50] for n in current_week_data['news']}
            new_news = [n for n in news_list if n['title'][:50] not in existing_titles]
            current_week_data['news'].extend(new_news)
            print(f"本周已有数据，新增 {len(new_news)} 条新闻")
        else:
            # 创建新的周数据
            new_week_data = {
                'week': week_str,
                'news': news_list
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
                f.write('const newsData = ')
                f.write(json.dumps(existing_data, ensure_ascii=False, indent=4))
                f.write(';\n')
            
            print(f"✅ 数据已更新到 {data_file}")
            return True
        except Exception as e:
            print(f"❌ 写入数据文件时出错: {e}")
            return False

def main():
    """主函数"""
    print("=" * 50)
    print("教培行业动向自动收集脚本 - 测试模式")
    print("=" * 50)
    print()
    
    collector = NewsCollector()
    
    # 创建测试新闻
    print("📰 生成测试新闻数据...")
    news_list = collector.create_test_news()
    
    print(f"✅ 生成了 {len(news_list)} 条测试新闻")
    print()
    
    # 显示新闻摘要
    print("📋 新闻摘要:")
    for i, news in enumerate(news_list, 1):
        print(f"  {i}. [{news['company']}] {news['title']}")
        print(f"     优先级: {news['priority']} | 分类: {', '.join(news['categories'])}")
    print()
    
    # 更新数据文件
    print("💾 更新数据文件...")
    if collector.update_data_file(news_list):
        print()
        print("=" * 50)
        print("✅ 测试完成！")
        print("=" * 50)
        print()
        print("💡 提示:")
        print("  1. 刷新浏览器页面查看更新后的数据")
        print("  2. 实际使用时，需要安装依赖: pip3 install -r requirements.txt")
        print("  3. 然后运行完整版脚本: python3 collect_news.py")
    else:
        print()
        print("❌ 测试失败，请检查错误信息")

if __name__ == '__main__':
    main()

