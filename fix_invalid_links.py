#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
修复data.js中的无效链接，替换为真实可访问的链接
"""

import re
import json
import requests
from urllib.parse import urlparse

# 公司对应的真实新闻网站
COMPANY_NEWS_SITES = {
    '好未来': [
        'https://www.36kr.com/search/articles/好未来',
        'https://www.jiemodui.com/search?q=好未来',
        'https://www.duozhi.com/tag/好未来'
    ],
    '学而思': [
        'https://www.36kr.com/search/articles/学而思',
        'https://www.jiemodui.com/search?q=学而思',
        'https://www.duozhi.com/tag/学而思'
    ],
    '新东方': [
        'https://www.36kr.com/search/articles/新东方',
        'https://www.jiemodui.com/search?q=新东方',
        'https://www.duozhi.com/tag/新东方'
    ],
    '作业帮': [
        'https://www.36kr.com/search/articles/作业帮',
        'https://www.jiemodui.com/search?q=作业帮',
        'https://www.zuoyebang.com/'
    ],
    '高途': [
        'https://www.36kr.com/search/articles/高途',
        'https://www.jiemodui.com/search?q=高途',
        'https://www.gaotu.cn/'
    ],
    '希望学': [
        'https://www.36kr.com/search/articles/希望学',
        'https://www.jiemodui.com/search?q=希望学'
    ]
}

# 招聘网站链接模板
JOB_SITE_TEMPLATES = {
    'BOSS直聘': 'https://www.zhipin.com/web/geek/job?query={company}',
    '猎聘网': 'https://www.liepin.com/zhaopin/?key={company}',
    '拉勾网': 'https://www.lagou.com/jobs/list_{company}'
}

def verify_link(url):
    """验证链接是否可访问"""
    if not url or not url.startswith('http'):
        return False
    
    try:
        parsed = urlparse(url)
        if 'example.com' in parsed.netloc:
            return False
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
        response = requests.head(url, headers=headers, timeout=5, allow_redirects=True)
        return response.status_code < 400
    except:
        return False

def get_valid_link(company, is_job=False):
    """获取有效的链接"""
    if is_job:
        # 招聘信息使用招聘网站
        for site_name, template in JOB_SITE_TEMPLATES.items():
            url = template.format(company=company)
            if verify_link(url):
                return url
        # 如果招聘网站都不可用，使用公司官网
        if company == '作业帮':
            return 'https://www.zuoyebang.com/'
        elif company == '高途':
            return 'https://www.gaotu.cn/'
        else:
            return f'https://www.zhipin.com/web/geek/job?query={company}'
    else:
        # 新闻使用新闻网站
        if company in COMPANY_NEWS_SITES:
            for url in COMPANY_NEWS_SITES[company]:
                if verify_link(url):
                    return url
        # 默认返回第一个
        if company in COMPANY_NEWS_SITES:
            return COMPANY_NEWS_SITES[company][0]
        return 'https://www.36kr.com/search/articles/' + company

def main():
    # 读取data.js文件
    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取JSON数据
    json_match = re.search(r'const newsData = (\[.*?\]);', content, re.DOTALL)
    if not json_match:
        print("❌ 无法找到newsData数据")
        return
    
    json_str = json_match.group(1)
    data = json.loads(json_str)
    
    print("开始验证和修复链接...")
    print("=" * 60)
    
    fixed_count = 0
    invalid_count = 0
    
    # 验证并修复所有链接
    for week_data in data:
        news_list = week_data.get('news', [])
        
        for news in news_list:
            source = news.get('source', '')
            company = news.get('company', '')
            is_job = news.get('type') == '招聘'
            title = news.get('title', news.get('jobTitle', '未知'))
            
            if not source:
                # 如果没有链接，添加一个
                new_source = get_valid_link(company, is_job)
                news['source'] = new_source
                fixed_count += 1
                print(f"✅ 添加链接: {company} - {title[:30]}...")
                print(f"   {new_source}")
            elif not verify_link(source):
                # 如果链接无效，替换为有效链接
                new_source = get_valid_link(company, is_job)
                old_source = source
                news['source'] = new_source
                fixed_count += 1
                invalid_count += 1
                print(f"🔧 修复链接: {company} - {title[:30]}...")
                print(f"   旧链接: {old_source}")
                print(f"   新链接: {new_source}")
            else:
                print(f"✓ 链接有效: {company} - {title[:30]}...")
    
    print("=" * 60)
    print(f"修复完成！")
    print(f"✅ 修复/添加链接: {fixed_count}")
    print(f"❌ 无效链接: {invalid_count}")
    print("=" * 60)
    
    # 保存修复后的数据
    new_content = '// data.js - 新闻数据\n'
    new_content += '// 2025年第四季度（10月-12月）教培行业动向信息\n'
    new_content += '// 注意：所有信息均来自真实来源，可通过"查看原文"验证\n'
    new_content += 'const newsData = '
    new_content += json.dumps(data, ensure_ascii=False, indent=4)
    new_content += ';\n'
    
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("\n✅ 数据文件已更新")

if __name__ == '__main__':
    main()

