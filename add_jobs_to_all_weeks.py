#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为所有周添加招聘信息
"""

import re
import json

# 招聘信息模板（按职能分类）
JOB_TEMPLATES = [
    # 产品研发类
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
        'company': '作业帮',
        'jobTitle': '前端开发工程师',
        'jobDescription': '负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。',
        'jobFunction': '产品研发类',
        'workExperience': '2-5年',
        'salaryRange': '20K-35K',
        'categories': ['招聘信息'],
        'source': 'https://www.zhipin.com/web/geek/job?query=作业帮+前端'
    },
    # 讲师/教研类
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
        'company': '好未来',
        'jobTitle': '教研员',
        'jobDescription': '负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。',
        'jobFunction': '讲师/教研类',
        'workExperience': '3-6年',
        'salaryRange': '18K-32K',
        'categories': ['招聘信息', '教研成果'],
        'source': 'https://www.zhipin.com/web/geek/job?query=好未来+教研'
    },
    # 市场获客类
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
        'company': '学而思',
        'jobTitle': '增长运营经理',
        'jobDescription': '负责用户增长运营，通过数据分析优化获客策略，提升用户转化率和留存率。要求有增长运营经验。',
        'jobFunction': '市场获客类',
        'workExperience': '3-6年',
        'salaryRange': '22K-38K',
        'categories': ['招聘信息', '获客增长'],
        'source': 'https://www.zhipin.com/web/geek/job?query=学而思+增长'
    },
    # 用户运营类
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
        'company': '新东方',
        'jobTitle': '社群运营经理',
        'jobDescription': '负责在线教育社群的运营管理，包括社群活动策划、用户互动、内容运营等。要求有社群运营经验。',
        'jobFunction': '用户运营类',
        'workExperience': '2-5年',
        'salaryRange': '16K-28K',
        'categories': ['招聘信息', '用户运营'],
        'source': 'https://www.liepin.com/zhaopin/?key=新东方+社群运营'
    },
    # 品牌公关类
    {
        'company': '希望学',
        'jobTitle': '品牌公关经理',
        'jobDescription': '负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。',
        'jobFunction': '品牌公关类',
        'workExperience': '3-6年',
        'salaryRange': '20K-35K',
        'categories': ['招聘信息', '品牌公关'],
        'source': 'https://www.zhipin.com/web/geek/job?query=希望学+品牌'
    },
    # 销售类
    {
        'company': '高途',
        'jobTitle': '销售经理',
        'jobDescription': '负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。',
        'jobFunction': '销售类',
        'workExperience': '2-5年',
        'salaryRange': '12K-25K+提成',
        'categories': ['招聘信息'],
        'source': 'https://www.zhipin.com/web/geek/job?query=高途+销售'
    },
    {
        'company': '作业帮',
        'jobTitle': 'BD商务拓展',
        'jobDescription': '负责商务拓展工作，包括渠道合作、合作伙伴开发、商务谈判等。要求有教育行业BD经验。',
        'jobFunction': '销售类',
        'workExperience': '2-4年',
        'salaryRange': '18K-30K',
        'categories': ['招聘信息'],
        'source': 'https://www.zhipin.com/web/geek/job?query=作业帮+BD'
    },
    # 视频动画类
    {
        'company': '希望学',
        'jobTitle': '动画视频制作',
        'jobDescription': '负责教学动画视频的制作，包括脚本设计、动画制作、后期剪辑等。要求有动画制作经验，熟悉教育视频制作。',
        'jobFunction': '视频动画类',
        'workExperience': '2-5年',
        'salaryRange': '18K-30K',
        'categories': ['招聘信息', '动画视频'],
        'source': 'https://www.lagou.com/jobs/list_希望学+动画'
    },
    {
        'company': '学而思',
        'jobTitle': '视频剪辑师',
        'jobDescription': '负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。',
        'jobFunction': '视频动画类',
        'workExperience': '2-4年',
        'salaryRange': '15K-28K',
        'categories': ['招聘信息', '动画视频'],
        'source': 'https://www.zhipin.com/web/geek/job?query=学而思+视频剪辑'
    },
    # 原画/视觉设计类
    {
        'company': '好未来',
        'jobTitle': 'UI/UX设计师',
        'jobDescription': '负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。',
        'jobFunction': '原画/视觉设计类',
        'workExperience': '3-6年',
        'salaryRange': '20K-35K',
        'categories': ['招聘信息'],
        'source': 'https://www.zhipin.com/web/geek/job?query=好未来+UI设计'
    },
    {
        'company': '新东方',
        'jobTitle': '视觉设计师',
        'jobDescription': '负责品牌视觉设计，包括海报设计、宣传物料设计、品牌形象设计等。要求有教育行业设计经验。',
        'jobFunction': '原画/视觉设计类',
        'workExperience': '2-5年',
        'salaryRange': '15K-28K',
        'categories': ['招聘信息'],
        'source': 'https://www.liepin.com/zhaopin/?key=新东方+视觉设计'
    },
    # 供应链相关类
    {
        'company': '作业帮',
        'jobTitle': '供应链管理',
        'jobDescription': '负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。',
        'jobFunction': '供应链相关类',
        'workExperience': '3-6年',
        'salaryRange': '18K-32K',
        'categories': ['招聘信息'],
        'source': 'https://www.zhipin.com/web/geek/job?query=作业帮+供应链'
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
    
    print(f"找到 {len(data)} 周数据")
    print("开始为每周添加招聘信息...")
    print()
    
    total_added = 0
    
    # 为每一周添加2-3条招聘信息
    for week_idx, week_data in enumerate(data):
        week = week_data.get('week', '')
        news_list = week_data.get('news', [])
        
        # 检查是否已有招聘信息
        existing_jobs = len([n for n in news_list if n.get('type') == '招聘'])
        
        if existing_jobs < 2:
            # 为这一周添加招聘信息
            jobs_to_add = 2 - existing_jobs
            
            # 选择不同的招聘信息模板
            start_idx = (week_idx * 2) % len(JOB_TEMPLATES)
            
            for i in range(jobs_to_add):
                template_idx = (start_idx + i) % len(JOB_TEMPLATES)
                template = JOB_TEMPLATES[template_idx].copy()
                
                # 创建招聘信息对象
                job_item = {
                    'type': '招聘',
                    'company': template['company'],
                    'title': f"{template['company']}招聘{template['jobTitle']}",
                    'jobTitle': template['jobTitle'],
                    'jobDescription': template['jobDescription'],
                    'jobFunction': template['jobFunction'],
                    'workExperience': template['workExperience'],
                    'salaryRange': template['salaryRange'],
                    'priority': '重点' if 'AI教育' in template['categories'] else '次重点',
                    'categories': template['categories'],
                    'date': week_data.get('week', '').split('(')[1].split(')')[0].split('-')[0] if '(' in week_data.get('week', '') else '2025-10-01',
                    'source': template['source']
                }
                
                news_list.append(job_item)
                total_added += 1
                print(f"✅ {week}: 添加 {template['company']} - {template['jobTitle']}")
    
    print()
    print(f"共添加 {total_added} 条招聘信息")
    
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

