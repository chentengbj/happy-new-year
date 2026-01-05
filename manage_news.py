#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
新闻数据管理工具
用于手动添加、编辑和验证新闻数据
"""

import json
import re
import os
from datetime import datetime, timedelta

DATA_FILE = os.path.join(os.path.dirname(__file__), 'data.js')


def load_data():
    """加载现有数据"""
    if not os.path.exists(DATA_FILE):
        return []
    
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    json_match = re.search(r'const newsData = (\[.*?\]);', content, re.DOTALL)
    if json_match:
        return json.loads(json_match.group(1))
    return []


def save_data(data):
    """保存数据"""
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        f.write('// data.js - 新闻数据\n')
        f.write('// 教培行业动向信息\n')
        f.write('console.log("📦 data.js 开始执行...");\n')
        f.write('const newsData = ')
        f.write(json.dumps(data, ensure_ascii=False, indent=4))
        f.write(';\n')
        f.write('console.log("✅ data.js 执行完成, newsData长度:", newsData.length);\n')
        f.write('window.newsData = newsData;\n')
    print("✅ 数据已保存")


def get_current_week():
    """获取当前周信息"""
    today = datetime.now()
    year, week, weekday = today.isocalendar()
    week_start = today - timedelta(days=weekday - 1)
    week_end = week_start + timedelta(days=6)
    return f"{year}年第{week}周 ({week_start.strftime('%m月%d日')}-{week_end.strftime('%m月%d日')})"


def add_news_interactive():
    """交互式添加新闻"""
    print("\n" + "=" * 50)
    print("添加新新闻")
    print("=" * 50)
    
    companies = ['好未来', '希望学', '学而思', '新东方', '作业帮', '高途', '猿辅导', '其他']
    print("\n公司选项:")
    for i, c in enumerate(companies, 1):
        print(f"  {i}. {c}")
    
    try:
        company_idx = int(input("\n选择公司 (输入数字): ")) - 1
        company = companies[company_idx] if 0 <= company_idx < len(companies) else input("输入公司名称: ")
    except:
        company = input("输入公司名称: ")
    
    title = input("新闻标题: ").strip()
    if not title:
        print("❌ 标题不能为空")
        return
    
    content = input("新闻摘要 (可选): ").strip()
    source = input("原文链接 (必须是完整URL): ").strip()
    
    if not source.startswith('http'):
        print("❌ 链接必须以 http:// 或 https:// 开头")
        return
    
    categories_options = ['教研成果', 'AI教育', '动画视频', '获客增长', '品牌公关', '用户运营', '其他']
    print("\n分类选项:")
    for i, c in enumerate(categories_options, 1):
        print(f"  {i}. {c}")
    
    try:
        cat_idx = int(input("选择分类 (输入数字): ")) - 1
        category = categories_options[cat_idx] if 0 <= cat_idx < len(categories_options) else '其他'
    except:
        category = '其他'
    
    priority = input("优先级 (1=重点, 2=次重点, 默认2): ").strip()
    priority = '重点' if priority == '1' else '次重点'
    
    # 创建新闻条目
    news_item = {
        'type': '新闻',
        'company': company,
        'title': title,
        'content': content,
        'priority': priority,
        'categories': [category],
        'date': datetime.now().strftime('%Y-%m-%d'),
        'source': source
    }
    
    # 加载数据
    data = load_data()
    week_str = get_current_week()
    
    # 查找或创建本周数据
    current_week = None
    for week_data in data:
        if week_data['week'] == week_str:
            current_week = week_data
            break
    
    if not current_week:
        current_week = {'week': week_str, 'news': []}
        data.append(current_week)
    
    current_week['news'].append(news_item)
    
    # 保存
    save_data(data)
    print(f"\n✅ 新闻已添加: {title[:30]}...")


def list_news():
    """列出本周新闻"""
    data = load_data()
    week_str = get_current_week()
    
    print("\n" + "=" * 50)
    print(f"本周新闻 ({week_str})")
    print("=" * 50)
    
    for week_data in data:
        if week_str in week_data['week']:
            news_list = week_data.get('news', [])
            if not news_list:
                print("暂无新闻")
                return
            
            for i, news in enumerate(news_list, 1):
                print(f"\n{i}. [{news.get('company', '未知')}] {news.get('title', '无标题')[:40]}...")
                print(f"   链接: {news.get('source', '无')[:50]}...")
            return
    
    print("本周暂无数据")


def verify_links():
    """验证所有链接"""
    import requests
    
    data = load_data()
    print("\n" + "=" * 50)
    print("验证链接有效性")
    print("=" * 50)
    
    total = 0
    valid = 0
    invalid = []
    
    for week_data in data[-2:]:  # 只检查最近2周
        for news in week_data.get('news', []):
            source = news.get('source', '')
            total += 1
            
            if not source or not source.startswith('http'):
                invalid.append((news.get('title', ''), '无效链接格式'))
                continue
            
            try:
                response = requests.head(source, timeout=5, allow_redirects=True)
                if response.status_code < 400:
                    valid += 1
                    print(f"✅ {news.get('title', '')[:30]}...")
                else:
                    invalid.append((news.get('title', ''), f'HTTP {response.status_code}'))
            except Exception as e:
                invalid.append((news.get('title', ''), str(e)[:30]))
    
    print(f"\n统计: 有效 {valid}/{total}")
    if invalid:
        print("\n无效链接:")
        for title, reason in invalid[:10]:
            print(f"  ❌ {title[:30]}... - {reason}")


def main():
    """主菜单"""
    while True:
        print("\n" + "=" * 50)
        print("📰 新闻数据管理工具")
        print("=" * 50)
        print("1. 添加新新闻")
        print("2. 查看本周新闻")
        print("3. 验证链接有效性")
        print("0. 退出")
        
        choice = input("\n请选择: ").strip()
        
        if choice == '1':
            add_news_interactive()
        elif choice == '2':
            list_news()
        elif choice == '3':
            verify_links()
        elif choice == '0':
            print("再见!")
            break
        else:
            print("无效选项")


if __name__ == '__main__':
    main()

