#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
验证data.js中所有链接的有效性
"""

import re
import json
import requests
from urllib.parse import urlparse
import time

def verify_link(url):
    """验证链接是否可访问"""
    if not url or not url.startswith('http'):
        return False, '无效URL格式'
    
    try:
        parsed = urlparse(url)
        if 'example.com' in parsed.netloc:
            return False, '示例链接'
        
        # 尝试访问链接
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=5, allow_redirects=True)
        
        if response.status_code == 200:
            return True, '可访问'
        else:
            return False, f'HTTP {response.status_code}'
    except requests.exceptions.Timeout:
        return False, '请求超时'
    except requests.exceptions.ConnectionError:
        return False, '连接失败'
    except Exception as e:
        return False, f'错误: {str(e)}'

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
    
    print("=" * 60)
    print("开始验证所有链接...")
    print("=" * 60)
    print()
    
    invalid_count = 0
    valid_count = 0
    invalid_links = []
    
    # 验证所有链接
    for week_idx, week_data in enumerate(data):
        week = week_data.get('week', '')
        news_list = week_data.get('news', [])
        
        print(f"📅 {week} - 共 {len(news_list)} 条信息")
        
        for news_idx, news in enumerate(news_list):
            source = news.get('source', '')
            title = news.get('title', news.get('jobTitle', '未知'))
            company = news.get('company', '未知')
            
            if not source:
                print(f"  ❌ [{news_idx+1}] {company} - {title[:30]}... - 缺少来源链接")
                invalid_count += 1
                invalid_links.append({
                    'week': week,
                    'company': company,
                    'title': title,
                    'source': source,
                    'reason': '缺少来源链接'
                })
                continue
            
            is_valid, reason = verify_link(source)
            
            if is_valid:
                print(f"  ✅ [{news_idx+1}] {company} - {title[:30]}...")
                valid_count += 1
            else:
                print(f"  ❌ [{news_idx+1}] {company} - {title[:30]}... - {reason}")
                print(f"      链接: {source}")
                invalid_count += 1
                invalid_links.append({
                    'week': week,
                    'company': company,
                    'title': title,
                    'source': source,
                    'reason': reason
                })
            
            time.sleep(0.5)  # 避免请求过快
        
        print()
    
    print("=" * 60)
    print(f"验证完成！")
    print(f"✅ 有效链接: {valid_count}")
    print(f"❌ 无效链接: {invalid_count}")
    print("=" * 60)
    
    if invalid_links:
        print("\n无效链接详情：")
        for item in invalid_links[:10]:  # 只显示前10个
            print(f"  - {item['company']}: {item['title'][:40]}...")
            print(f"    原因: {item['reason']}")
            print(f"    链接: {item['source']}")
            print()
        
        if len(invalid_links) > 10:
            print(f"  ... 还有 {len(invalid_links) - 10} 个无效链接")

if __name__ == '__main__':
    main()

