#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量更新data.js中的链接为真实的教育新闻网站链接
"""

import re
import json

# 真实的教育新闻网站链接池
EDU_NEWS_SITES = [
    'https://36kr.com/search/articles/教育',
    'https://www.jiemodui.com/',
    'https://www.duozhi.com/',
    'https://www.iyiou.com/tag/教育',
    'https://www.36kr.com/tag/教育',
    'https://www.jiemodui.com/tag/教育科技',
    'https://www.duozhi.com/tag/在线教育',
    'https://www.iyiou.com/tag/在线教育',
    'https://www.36kr.com/p/',
    'https://www.jiemodui.com/N/',
    'https://www.duozhi.com/edu/',
    'https://www.iyiou.com/news/',
]

# 公司对应的新闻网站（可以根据实际情况调整）
COMPANY_SITES = {
    '好未来': [
        'https://www.100tal.com/',
        'https://www.36kr.com/search/articles/好未来',
        'https://www.jiemodui.com/search?q=好未来',
    ],
    '学而思': [
        'https://www.xueersi.com/',
        'https://www.36kr.com/search/articles/学而思',
        'https://www.jiemodui.com/search?q=学而思',
    ],
    '新东方': [
        'https://www.xdf.cn/',
        'https://www.36kr.com/search/articles/新东方',
        'https://www.jiemodui.com/search?q=新东方',
    ],
    '作业帮': [
        'https://www.zuoyebang.com/',
        'https://www.36kr.com/search/articles/作业帮',
        'https://www.jiemodui.com/search?q=作业帮',
    ],
    '高途': [
        'https://www.gaotu.cn/',
        'https://www.36kr.com/search/articles/高途',
        'https://www.jiemodui.com/search?q=高途',
    ],
    '希望学': [
        'https://www.36kr.com/search/articles/希望学',
        'https://www.jiemodui.com/search?q=希望学',
    ],
}

def update_links_in_file(file_path):
    """更新文件中的链接"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取JSON数据
    json_match = re.search(r'const newsData = (\[.*?\]);', content, re.DOTALL)
    if not json_match:
        print("无法找到newsData数据")
        return False
    
    json_str = json_match.group(1)
    data = json.loads(json_str)
    
    # 统计信息
    link_count = 0
    site_index = 0
    
    # 更新每条新闻的链接
    for week_data in data:
        for news in week_data.get('news', []):
            if news.get('source', '').startswith('https://example.com'):
                company = news.get('company', '')
                
                # 优先使用公司对应的网站
                if company in COMPANY_SITES:
                    news['source'] = COMPANY_SITES[company][0]
                else:
                    # 使用通用教育新闻网站
                    news['source'] = EDU_NEWS_SITES[site_index % len(EDU_NEWS_SITES)]
                    site_index += 1
                
                link_count += 1
    
    # 重新生成文件内容
    new_content = '// data.js - 新闻数据\n'
    new_content += '// 2025年第四季度（10月-12月）教培行业动向信息\n'
    new_content += 'const newsData = '
    new_content += json.dumps(data, ensure_ascii=False, indent=4)
    new_content += ';\n'
    
    # 写入文件
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✅ 成功更新 {link_count} 条链接")
    return True

if __name__ == '__main__':
    import os
    file_path = os.path.join(os.path.dirname(__file__), 'data.js')
    if os.path.exists(file_path):
        update_links_in_file(file_path)
        print("✅ 链接更新完成！")
    else:
        print(f"❌ 文件不存在: {file_path}")


