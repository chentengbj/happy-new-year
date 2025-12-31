#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
更新data.js中的链接为真实可访问的链接
不依赖requests，只更新链接格式
"""

import re

# 公司对应的真实新闻网站（使用搜索页面，这些是真实可访问的）
COMPANY_NEWS_LINKS = {
    '好未来': 'https://www.36kr.com/search/articles/好未来',
    '学而思': 'https://www.jiemodui.com/search?q=学而思',
    '新东方': 'https://www.duozhi.com/tag/新东方',
    '作业帮': 'https://www.zuoyebang.com/',
    '高途': 'https://www.gaotu.cn/',
    '希望学': 'https://www.36kr.com/search/articles/希望学'
}

# 招聘网站链接模板
JOB_LINKS = {
    '好未来': 'https://www.zhipin.com/web/geek/job?query=好未来',
    '学而思': 'https://www.zhipin.com/web/geek/job?query=学而思',
    '新东方': 'https://www.zhipin.com/web/geek/job?query=新东方',
    '作业帮': 'https://www.zhipin.com/web/geek/job?query=作业帮',
    '高途': 'https://www.zhipin.com/web/geek/job?query=高途',
    '希望学': 'https://www.zhipin.com/web/geek/job?query=希望学'
}

def main():
    # 读取文件
    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 按行处理
    lines = content.split('\n')
    result = []
    current_company = None
    is_job = False
    
    for i, line in enumerate(lines):
        # 检测company字段
        company_match = re.search(r"company:\s*['\"]([^'\"]+)['\"]", line)
        if company_match:
            current_company = company_match.group(1)
        
        # 检测type字段
        if 'type:' in line and '招聘' in line:
            is_job = True
        elif 'type:' in line and '新闻' in line:
            is_job = False
        
        # 检测source字段
        if 'source:' in line:
            # 检查是否是无效链接或缺少链接
            if not line.strip().endswith("'") or 'example.com' in line or not any(comp in line for comp in COMPANY_NEWS_LINKS.keys()):
                # 替换为有效链接
                if current_company:
                    if is_job:
                        new_link = JOB_LINKS.get(current_company, f'https://www.zhipin.com/web/geek/job?query={current_company}')
                    else:
                        new_link = COMPANY_NEWS_LINKS.get(current_company, f'https://www.36kr.com/search/articles/{current_company}')
                    
                    result.append(f"                source: '{new_link}'")
                    continue
        
        result.append(line)
    
    # 写入文件
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write('\n'.join(result))
    
    print('✅ 链接已更新')

if __name__ == '__main__':
    main()

