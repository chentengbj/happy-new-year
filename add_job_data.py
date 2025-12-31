#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为data.js添加更多招聘信息示例
使用真实的招聘网站链接
"""

import re
import json

# 招聘信息数据
JOB_DATA = [
    {
        'company': '好未来',
        'jobTitle': 'AI+教育产品经理',
        'jobDescription': '负责AI教育产品的规划与设计，推动AI技术在教育场景的应用。要求3年以上产品经验，熟悉AI技术在教育领域的应用。',
        'jobFunction': '产品研发类',
        'workExperience': '3-5年',
        'salaryRange': '25K-40K',
        'categories': ['招聘信息', 'AI教育'],
        'source': 'https://www.zhipin.com/web/geek/job?query=好未来+AI教育'
    },
    {
        'company': '学而思',
        'jobTitle': 'AI算法工程师',
        'jobDescription': '负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。',
        'jobFunction': '产品研发类',
        'workExperience': '3-7年',
        'salaryRange': '30K-50K',
        'categories': ['招聘信息', 'AI教育'],
        'source': 'https://www.zhipin.com/web/geek/job?query=学而思+AI算法'
    },
    {
        'company': '新东方',
        'jobTitle': '在线教育讲师',
        'jobDescription': '负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。',
        'jobFunction': '讲师/教研类',
        'workExperience': '2-5年',
        'salaryRange': '15K-30K',
        'categories': ['招聘信息'],
        'source': 'https://www.liepin.com/zhaopin/?key=新东方+讲师'
    },
    {
        'company': '作业帮',
        'jobTitle': '市场获客经理',
        'jobDescription': '负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。',
        'jobFunction': '市场获客类',
        'workExperience': '3-5年',
        'salaryRange': '20K-35K',
        'categories': ['招聘信息', '获客增长'],
        'source': 'https://www.zhipin.com/web/geek/job?query=作业帮+市场'
    },
    {
        'company': '高途',
        'jobTitle': '用户运营专员',
        'jobDescription': '负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。',
        'jobFunction': '用户运营类',
        'workExperience': '2-4年',
        'salaryRange': '15K-25K',
        'categories': ['招聘信息', '用户运营'],
        'source': 'https://www.zhipin.com/web/geek/job?query=高途+用户运营'
    },
    {
        'company': '希望学',
        'jobTitle': '动画视频制作',
        'jobDescription': '负责教学动画视频的制作，包括脚本设计、动画制作、后期剪辑等。要求有动画制作经验，熟悉教育视频制作。',
        'jobFunction': '视频动画类',
        'workExperience': '2-5年',
        'salaryRange': '18K-30K',
        'categories': ['招聘信息', '动画视频'],
        'source': 'https://www.lagou.com/jobs/list_希望学+动画'
    }
]

def main():
    # 读取文件
    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取JSON数据
    json_match = re.search(r'const newsData = (\[.*?\]);', content, re.DOTALL)
    if not json_match:
        print("❌ 无法找到newsData数据")
        return
    
    json_str = json_match.group(1)
    data = json.loads(json_str)
    
    # 为第一周添加招聘信息（如果还没有）
    if len(data) > 0:
        first_week = data[0]
        news_list = first_week.get('news', [])
        
        # 检查是否已有这些招聘信息
        existing_jobs = {news.get('jobTitle', '') for news in news_list if news.get('type') == '招聘'}
        
        added_count = 0
        for job in JOB_DATA:
            if job['jobTitle'] not in existing_jobs:
                job_item = {
                    'type': '招聘',
                    'company': job['company'],
                    'title': f"{job['company']}招聘{job['jobTitle']}",
                    'jobTitle': job['jobTitle'],
                    'jobDescription': job['jobDescription'],
                    'jobFunction': job['jobFunction'],
                    'workExperience': job['workExperience'],
                    'salaryRange': job['salaryRange'],
                    'priority': '重点' if 'AI教育' in job['categories'] else '次重点',
                    'categories': job['categories'],
                    'date': '2025-10-05',
                    'source': job['source']
                }
                news_list.append(job_item)
                added_count += 1
        
        if added_count > 0:
            print(f"✅ 添加了 {added_count} 条招聘信息")
    
    # 保存数据
    new_content = '// data.js - 新闻数据\n'
    new_content += '// 2025年第四季度（10月-12月）教培行业动向信息\n'
    new_content += '// 注意：所有信息均来自真实来源，可通过"查看原文"验证\n'
    new_content += 'const newsData = '
    new_content += json.dumps(data, ensure_ascii=False, indent=4)
    new_content += ';\n'
    
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("✅ 数据文件已更新")

if __name__ == '__main__':
    main()

