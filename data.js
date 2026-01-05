// data.js - 新闻数据
// 教培行业动向信息
console.log("📦 data.js 开始执行...");
const newsData = [
    {
        "week": "2025年第41周 (10月6日-10月12日)",
        "news": [
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来教研团队发布新教学方法",
                "content": "好未来教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-10-12",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来动画视频内容库扩充",
                "content": "好未来本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-12",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来用户运营数据创新高",
                "content": "好未来本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-10-12",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学用户运营数据创新高",
                "content": "希望学本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-10-12",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学市场营销活动效果显著",
                "content": "希望学本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-06",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思市场营销活动效果显著",
                "content": "学而思本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-06",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思发布AI智能学习系统，提升个性化教学体验",
                "content": "学而思本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-10-06",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思动画视频内容库扩充",
                "content": "学而思本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-12",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方用户运营数据创新高",
                "content": "新东方本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-10-06",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方动画视频内容库扩充",
                "content": "新东方本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-12",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮市场营销活动效果显著",
                "content": "作业帮本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-12",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮用户运营数据创新高",
                "content": "作业帮本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-10-12",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途用户运营数据创新高",
                "content": "高途本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-10-06",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途教研团队发布新教学方法",
                "content": "高途教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-10-06",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途动画视频内容库扩充",
                "content": "高途本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-12",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导用户运营数据创新高",
                "content": "猿辅导本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-10-06",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导动画视频内容库扩充",
                "content": "猿辅导本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-06",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+教研员"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+销售经理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+供应链管理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+销售经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+销售经理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+销售经理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+供应链管理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+供应链管理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+销售经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-06",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-12",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+市场获客经理"
            }
        ]
    },
    {
        "week": "2025年第42周 (10月13日-10月19日)",
        "news": [
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来教研团队发布新教学方法",
                "content": "好未来教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-10-19",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来发布AI智能学习系统，提升个性化教学体验",
                "content": "好未来本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-10-13",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来市场营销活动效果显著",
                "content": "好未来本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-19",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学动画视频内容库扩充",
                "content": "希望学本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-13",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学发布AI智能学习系统，提升个性化教学体验",
                "content": "希望学本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-10-13",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思发布AI智能学习系统，提升个性化教学体验",
                "content": "学而思本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-10-19",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思教研团队发布新教学方法",
                "content": "学而思教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-10-19",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思动画视频内容库扩充",
                "content": "学而思本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-13",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方动画视频内容库扩充",
                "content": "新东方本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-19",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方市场营销活动效果显著",
                "content": "新东方本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-13",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方教研团队发布新教学方法",
                "content": "新东方教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-10-19",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮市场营销活动效果显著",
                "content": "作业帮本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-19",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮动画视频内容库扩充",
                "content": "作业帮本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-13",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途教研团队发布新教学方法",
                "content": "高途教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-10-13",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途动画视频内容库扩充",
                "content": "高途本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-13",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导发布AI智能学习系统，提升个性化教学体验",
                "content": "猿辅导本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-10-13",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导教研团队发布新教学方法",
                "content": "猿辅导教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-10-13",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导动画视频内容库扩充",
                "content": "猿辅导本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-13",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-10-13",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-13",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+供应链管理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-13",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+教研员"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+销售经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-13",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-13",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+供应链管理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-13",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+销售经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+销售经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-13",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-13",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-13",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+供应链管理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-19",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+销售经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-13",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+品牌公关经理"
            }
        ]
    },
    {
        "week": "2025年第43周 (10月20日-10月26日)",
        "news": [
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来教研团队发布新教学方法",
                "content": "好未来教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-10-26",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来动画视频内容库扩充",
                "content": "好未来本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-20",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来用户运营数据创新高",
                "content": "好未来本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-10-26",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学市场营销活动效果显著",
                "content": "希望学本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-26",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学用户运营数据创新高",
                "content": "希望学本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-10-20",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学发布AI智能学习系统，提升个性化教学体验",
                "content": "希望学本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-10-20",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思动画视频内容库扩充",
                "content": "学而思本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-26",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思教研团队发布新教学方法",
                "content": "学而思教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-10-20",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思发布AI智能学习系统，提升个性化教学体验",
                "content": "学而思本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-10-20",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方教研团队发布新教学方法",
                "content": "新东方教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-10-20",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方动画视频内容库扩充",
                "content": "新东方本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-26",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方用户运营数据创新高",
                "content": "新东方本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-10-26",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮市场营销活动效果显著",
                "content": "作业帮本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-20",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮用户运营数据创新高",
                "content": "作业帮本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-10-26",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途发布AI智能学习系统，提升个性化教学体验",
                "content": "高途本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-10-20",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途市场营销活动效果显著",
                "content": "高途本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-26",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导用户运营数据创新高",
                "content": "猿辅导本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-10-26",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导教研团队发布新教学方法",
                "content": "猿辅导教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-10-20",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+销售经理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+销售经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+供应链管理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+销售经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+销售经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+供应链管理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+教研员"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+销售经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+销售经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-20",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-26",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+用户运营专员"
            }
        ]
    },
    {
        "week": "2025年第44周 (10月27日-11月2日)",
        "news": [
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来发布AI智能学习系统，提升个性化教学体验",
                "content": "好未来本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-02",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来市场营销活动效果显著",
                "content": "好未来本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-27",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来用户运营数据创新高",
                "content": "好未来本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-02",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学市场营销活动效果显著",
                "content": "希望学本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-27",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学动画视频内容库扩充",
                "content": "希望学本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-11-02",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思动画视频内容库扩充",
                "content": "学而思本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-10-27",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思用户运营数据创新高",
                "content": "学而思本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-02",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方发布AI智能学习系统，提升个性化教学体验",
                "content": "新东方本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-10-27",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方市场营销活动效果显著",
                "content": "新东方本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-27",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方用户运营数据创新高",
                "content": "新东方本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-02",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮市场营销活动效果显著",
                "content": "作业帮本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-27",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮动画视频内容库扩充",
                "content": "作业帮本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-11-02",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮发布AI智能学习系统，提升个性化教学体验",
                "content": "作业帮本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-02",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途发布AI智能学习系统，提升个性化教学体验",
                "content": "高途本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-10-27",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途教研团队发布新教学方法",
                "content": "高途教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-02",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途市场营销活动效果显著",
                "content": "高途本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-02",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导发布AI智能学习系统，提升个性化教学体验",
                "content": "猿辅导本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-02",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导市场营销活动效果显著",
                "content": "猿辅导本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-10-27",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-27",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+供应链管理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-27",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-27",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+供应链管理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-27",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+教研员"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+销售经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+供应链管理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-27",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-27",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-10-27",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-27",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+教研员"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-27",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-27",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-10-27",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-02",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+供应链管理"
            }
        ]
    },
    {
        "week": "2025年第45周 (11月3日-11月9日)",
        "news": [
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来教研团队发布新教学方法",
                "content": "好未来教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-09",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来发布AI智能学习系统，提升个性化教学体验",
                "content": "好未来本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-09",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来动画视频内容库扩充",
                "content": "好未来本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-11-09",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学动画视频内容库扩充",
                "content": "希望学本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-11-09",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学发布AI智能学习系统，提升个性化教学体验",
                "content": "希望学本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-03",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学用户运营数据创新高",
                "content": "希望学本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-03",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思市场营销活动效果显著",
                "content": "学而思本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-03",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思教研团队发布新教学方法",
                "content": "学而思教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-03",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方发布AI智能学习系统，提升个性化教学体验",
                "content": "新东方本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-03",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方教研团队发布新教学方法",
                "content": "新东方教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-03",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方动画视频内容库扩充",
                "content": "新东方本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-11-09",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮市场营销活动效果显著",
                "content": "作业帮本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-03",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮教研团队发布新教学方法",
                "content": "作业帮教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-03",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途教研团队发布新教学方法",
                "content": "高途教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-09",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途发布AI智能学习系统，提升个性化教学体验",
                "content": "高途本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-09",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导发布AI智能学习系统，提升个性化教学体验",
                "content": "猿辅导本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-09",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导教研团队发布新教学方法",
                "content": "猿辅导教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-09",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+供应链管理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+销售经理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+销售经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+销售经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+销售经理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+供应链管理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+销售经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+销售经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-09",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-11-03",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+AI算法工程师"
            }
        ]
    },
    {
        "week": "2025年第46周 (11月10日-11月16日)",
        "news": [
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来教研团队发布新教学方法",
                "content": "好未来教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-16",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来用户运营数据创新高",
                "content": "好未来本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-16",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学教研团队发布新教学方法",
                "content": "希望学教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-10",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学动画视频内容库扩充",
                "content": "希望学本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-11-16",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思发布AI智能学习系统，提升个性化教学体验",
                "content": "学而思本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-10",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思用户运营数据创新高",
                "content": "学而思本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-10",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方发布AI智能学习系统，提升个性化教学体验",
                "content": "新东方本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-10",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方用户运营数据创新高",
                "content": "新东方本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-16",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方动画视频内容库扩充",
                "content": "新东方本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-11-16",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮教研团队发布新教学方法",
                "content": "作业帮教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-10",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮用户运营数据创新高",
                "content": "作业帮本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-10",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮动画视频内容库扩充",
                "content": "作业帮本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-11-16",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途市场营销活动效果显著",
                "content": "高途本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-16",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途教研团队发布新教学方法",
                "content": "高途教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-16",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导市场营销活动效果显著",
                "content": "猿辅导本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-10",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导用户运营数据创新高",
                "content": "猿辅导本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-10",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导发布AI智能学习系统，提升个性化教学体验",
                "content": "猿辅导本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-16",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-16",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-10",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-11-10",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-16",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-10",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-10",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-16",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-16",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+销售经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-16",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-10",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-10",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-16",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+销售经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-16",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+供应链管理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-10",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-16",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-10",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+销售经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-10",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-10",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-10",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-10",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-16",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-16",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+用户运营专员"
            }
        ]
    },
    {
        "week": "2025年第47周 (11月17日-11月23日)",
        "news": [
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来市场营销活动效果显著",
                "content": "好未来本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-17",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来教研团队发布新教学方法",
                "content": "好未来教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-17",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学教研团队发布新教学方法",
                "content": "希望学教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-17",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学动画视频内容库扩充",
                "content": "希望学本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-11-17",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思市场营销活动效果显著",
                "content": "学而思本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-23",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思发布AI智能学习系统，提升个性化教学体验",
                "content": "学而思本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-17",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方市场营销活动效果显著",
                "content": "新东方本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-17",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方教研团队发布新教学方法",
                "content": "新东方教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-17",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮发布AI智能学习系统，提升个性化教学体验",
                "content": "作业帮本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-23",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮动画视频内容库扩充",
                "content": "作业帮本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-11-17",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮用户运营数据创新高",
                "content": "作业帮本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-23",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途用户运营数据创新高",
                "content": "高途本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-17",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途市场营销活动效果显著",
                "content": "高途本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-17",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导用户运营数据创新高",
                "content": "猿辅导本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-23",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导发布AI智能学习系统，提升个性化教学体验",
                "content": "猿辅导本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-17",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+供应链管理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+教研员"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+供应链管理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+供应链管理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+教研员"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+销售经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+教研员"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+销售经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-23",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-17",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+供应链管理"
            }
        ]
    },
    {
        "week": "2025年第48周 (11月24日-11月30日)",
        "news": [
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来市场营销活动效果显著",
                "content": "好未来本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-30",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来动画视频内容库扩充",
                "content": "好未来本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-11-30",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学市场营销活动效果显著",
                "content": "希望学本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-24",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学用户运营数据创新高",
                "content": "希望学本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-30",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思用户运营数据创新高",
                "content": "学而思本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-24",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思教研团队发布新教学方法",
                "content": "学而思教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-30",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方用户运营数据创新高",
                "content": "新东方本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-30",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方发布AI智能学习系统，提升个性化教学体验",
                "content": "新东方本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-24",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方动画视频内容库扩充",
                "content": "新东方本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-11-30",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮发布AI智能学习系统，提升个性化教学体验",
                "content": "作业帮本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-24",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮市场营销活动效果显著",
                "content": "作业帮本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-30",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮教研团队发布新教学方法",
                "content": "作业帮教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-24",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途发布AI智能学习系统，提升个性化教学体验",
                "content": "高途本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-11-30",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途用户运营数据创新高",
                "content": "高途本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-30",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途教研团队发布新教学方法",
                "content": "高途教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-11-30",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导市场营销活动效果显著",
                "content": "猿辅导本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-11-24",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导用户运营数据创新高",
                "content": "猿辅导本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-11-30",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘产品经理",
                "jobTitle": "产品经理",
                "jobDescription": "负责教育产品的规划与设计，推动产品创新。要求3年以上产品经验，熟悉教育行业。",
                "jobFunction": "产品研发类",
                "workExperience": "3-5年",
                "salaryRange": "25K-40K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+产品经理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-30",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-30",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+供应链管理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-30",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+销售经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-30",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+供应链管理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-30",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘产品经理",
                "jobTitle": "产品经理",
                "jobDescription": "负责教育产品的规划与设计，推动产品创新。要求3年以上产品经验，熟悉教育行业。",
                "jobFunction": "产品研发类",
                "workExperience": "3-5年",
                "salaryRange": "25K-40K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+产品经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+销售经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-30",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-30",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-30",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-30",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-30",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+教研员"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-30",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-30",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-11-24",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+UI/UX设计师"
            }
        ]
    },
    {
        "week": "2025年第49周 (12月1日-12月7日)",
        "news": [
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来动画视频内容库扩充",
                "content": "好未来本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-12-01",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来教研团队发布新教学方法",
                "content": "好未来教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-01",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来发布AI智能学习系统，提升个性化教学体验",
                "content": "好未来本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-07",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学用户运营数据创新高",
                "content": "希望学本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-01",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学发布AI智能学习系统，提升个性化教学体验",
                "content": "希望学本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-07",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学教研团队发布新教学方法",
                "content": "希望学教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-01",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思用户运营数据创新高",
                "content": "学而思本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-07",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思动画视频内容库扩充",
                "content": "学而思本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-12-01",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思市场营销活动效果显著",
                "content": "学而思本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-01",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方用户运营数据创新高",
                "content": "新东方本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-01",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方发布AI智能学习系统，提升个性化教学体验",
                "content": "新东方本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-01",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方教研团队发布新教学方法",
                "content": "新东方教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-07",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮教研团队发布新教学方法",
                "content": "作业帮教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-07",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮市场营销活动效果显著",
                "content": "作业帮本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-01",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途动画视频内容库扩充",
                "content": "高途本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-12-07",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途市场营销活动效果显著",
                "content": "高途本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-01",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导教研团队发布新教学方法",
                "content": "猿辅导教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-07",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导发布AI智能学习系统，提升个性化教学体验",
                "content": "猿辅导本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-01",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导用户运营数据创新高",
                "content": "猿辅导本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-01",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+销售经理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-01",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+销售经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+供应链管理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-01",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-01",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-01",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-01",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-01",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+教研员"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-01",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+教研员"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘产品经理",
                "jobTitle": "产品经理",
                "jobDescription": "负责教育产品的规划与设计，推动产品创新。要求3年以上产品经验，熟悉教育行业。",
                "jobFunction": "产品研发类",
                "workExperience": "3-5年",
                "salaryRange": "25K-40K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-01",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+产品经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-01",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-01",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+教研员"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-01",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-07",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-01",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+销售经理"
            }
        ]
    },
    {
        "week": "2025年第50周 (12月8日-12月14日)",
        "news": [
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来用户运营数据创新高",
                "content": "好未来本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-14",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来动画视频内容库扩充",
                "content": "好未来本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-12-08",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来发布AI智能学习系统，提升个性化教学体验",
                "content": "好未来本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-14",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学用户运营数据创新高",
                "content": "希望学本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-08",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学市场营销活动效果显著",
                "content": "希望学本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-14",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学教研团队发布新教学方法",
                "content": "希望学教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-08",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思教研团队发布新教学方法",
                "content": "学而思教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-08",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思发布AI智能学习系统，提升个性化教学体验",
                "content": "学而思本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-08",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思用户运营数据创新高",
                "content": "学而思本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-14",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方用户运营数据创新高",
                "content": "新东方本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-08",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方动画视频内容库扩充",
                "content": "新东方本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-12-14",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方市场营销活动效果显著",
                "content": "新东方本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-08",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮用户运营数据创新高",
                "content": "作业帮本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-08",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮发布AI智能学习系统，提升个性化教学体验",
                "content": "作业帮本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-14",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮教研团队发布新教学方法",
                "content": "作业帮教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-08",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途市场营销活动效果显著",
                "content": "高途本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-08",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途用户运营数据创新高",
                "content": "高途本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-14",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导教研团队发布新教学方法",
                "content": "猿辅导教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-08",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导市场营销活动效果显著",
                "content": "猿辅导本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-14",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导用户运营数据创新高",
                "content": "猿辅导本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-14",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-14",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+销售经理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘产品经理",
                "jobTitle": "产品经理",
                "jobDescription": "负责教育产品的规划与设计，推动产品创新。要求3年以上产品经验，熟悉教育行业。",
                "jobFunction": "产品研发类",
                "workExperience": "3-5年",
                "salaryRange": "25K-40K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+产品经理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-14",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+供应链管理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-14",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-14",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+供应链管理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+教研员"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-14",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-14",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-14",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘产品经理",
                "jobTitle": "产品经理",
                "jobDescription": "负责教育产品的规划与设计，推动产品创新。要求3年以上产品经验，熟悉教育行业。",
                "jobFunction": "产品研发类",
                "workExperience": "3-5年",
                "salaryRange": "25K-40K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-14",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+产品经理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-14",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+供应链管理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-14",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-14",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+教研员"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-12-14",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-08",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+市场获客经理"
            }
        ]
    },
    {
        "week": "2025年第51周 (12月15日-12月21日)",
        "news": [
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来教研团队发布新教学方法",
                "content": "好未来教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-21",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来市场营销活动效果显著",
                "content": "好未来本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-15",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学用户运营数据创新高",
                "content": "希望学本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-15",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学发布AI智能学习系统，提升个性化教学体验",
                "content": "希望学本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-15",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思发布AI智能学习系统，提升个性化教学体验",
                "content": "学而思本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-15",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思市场营销活动效果显著",
                "content": "学而思本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-21",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方发布AI智能学习系统，提升个性化教学体验",
                "content": "新东方本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-15",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方教研团队发布新教学方法",
                "content": "新东方教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-15",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮教研团队发布新教学方法",
                "content": "作业帮教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-21",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮用户运营数据创新高",
                "content": "作业帮本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-21",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮发布AI智能学习系统，提升个性化教学体验",
                "content": "作业帮本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-21",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途市场营销活动效果显著",
                "content": "高途本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-21",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途用户运营数据创新高",
                "content": "高途本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-21",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途动画视频内容库扩充",
                "content": "高途本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-12-15",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导发布AI智能学习系统，提升个性化教学体验",
                "content": "猿辅导本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-15",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导动画视频内容库扩充",
                "content": "猿辅导本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-12-15",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导市场营销活动效果显著",
                "content": "猿辅导本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-15",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-15",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘前端开发工程师",
                "jobTitle": "前端开发工程师",
                "jobDescription": "负责教育产品前端开发，包括Web端和移动端H5开发。要求熟悉React、Vue等前端框架，有教育产品开发经验优先。",
                "jobFunction": "产品研发类",
                "workExperience": "2-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-15",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+前端开发工程师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-15",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+销售经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-15",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+供应链管理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-12-15",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+销售经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-15",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+供应链管理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-15",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+销售经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘教研员",
                "jobTitle": "教研员",
                "jobDescription": "负责课程研发和教研工作，包括课程体系设计、教学方案制定、教研成果总结等。要求有教育行业教研经验。",
                "jobFunction": "讲师/教研类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+教研员"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-15",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-15",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+供应链管理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+销售经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-15",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-15",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+销售经理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-21",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+品牌公关经理"
            }
        ]
    },
    {
        "week": "2025年第52周 (12月22日-12月28日)",
        "news": [
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来发布AI智能学习系统，提升个性化教学体验",
                "content": "好未来本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-22",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "好未来",
                "title": "好未来教研团队发布新教学方法",
                "content": "好未来教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/好未来"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学发布AI智能学习系统，提升个性化教学体验",
                "content": "希望学本周发布了全新的AI智能学习系统，该系统能够根据学生的学习情况自动调整教学内容和难度，提供更加个性化的学习体验。系统整合了大数据分析和机器学习技术，能够实时跟踪学生的学习进度和知识掌握情况。",
                "priority": "重点",
                "categories": [
                    "AI教育",
                    "教研成果"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学市场营销活动效果显著",
                "content": "希望学本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "希望学",
                "title": "希望学动画视频内容库扩充",
                "content": "希望学本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/希望学"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思用户运营数据创新高",
                "content": "学而思本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思教研团队发布新教学方法",
                "content": "学而思教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-22",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "学而思",
                "title": "学而思动画视频内容库扩充",
                "content": "学而思本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/学而思"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方教研团队发布新教学方法",
                "content": "新东方教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方动画视频内容库扩充",
                "content": "新东方本周扩充了动画视频内容库，新增了高质量教学视频，覆盖K12全学段。视频采用最新的动画技术，画面精美，内容生动。",
                "priority": "次重点",
                "categories": [
                    "动画视频"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "新东方",
                "title": "新东方用户运营数据创新高",
                "content": "新东方本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-22",
                "source": "https://www.36kr.com/search/articles/新东方"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮用户运营数据创新高",
                "content": "作业帮本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "作业帮",
                "title": "作业帮市场营销活动效果显著",
                "content": "作业帮本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/作业帮"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途市场营销活动效果显著",
                "content": "高途本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "高途",
                "title": "高途用户运营数据创新高",
                "content": "高途本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-22",
                "source": "https://www.36kr.com/search/articles/高途"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导教研团队发布新教学方法",
                "content": "猿辅导教研团队本周发布了新的教学方法，该方法注重培养学生的自主学习能力和创新思维。新方法已经在多个校区试点，效果显著。",
                "priority": "重点",
                "categories": [
                    "教研成果"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导市场营销活动效果显著",
                "content": "猿辅导本周的市场营销活动效果显著，新用户注册量较上周增长，品牌知名度进一步提升。活动通过线上线下结合的方式，扩大了影响力。",
                "priority": "次重点",
                "categories": [
                    "获客增长"
                ],
                "date": "2025-12-28",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "新闻",
                "company": "猿辅导",
                "title": "猿辅导用户运营数据创新高",
                "content": "猿辅导本周的用户运营数据创新高，日活跃用户数大幅增长，用户平均使用时长较上月增长。这得益于产品功能的持续优化和运营策略的改进。",
                "priority": "次重点",
                "categories": [
                    "用户运营"
                ],
                "date": "2025-12-22",
                "source": "https://www.36kr.com/search/articles/猿辅导"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "好未来",
                "title": "好未来招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=好未来+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+供应链管理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "希望学",
                "title": "希望学招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=希望学+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "学而思",
                "title": "学而思招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=学而思+销售经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘品牌公关经理",
                "jobTitle": "品牌公关经理",
                "jobDescription": "负责品牌传播和公关工作，包括品牌活动策划、媒体关系维护、危机公关处理等。要求有品牌公关经验。",
                "jobFunction": "品牌公关类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+品牌公关经理"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘AI算法工程师",
                "jobTitle": "AI算法工程师",
                "jobDescription": "负责教育AI算法的研发和优化，包括个性化推荐、智能批改等核心算法。要求计算机相关专业，熟悉机器学习、深度学习算法。",
                "jobFunction": "产品研发类",
                "workExperience": "3-7年",
                "salaryRange": "30K-50K",
                "priority": "重点",
                "categories": [
                    "招聘信息",
                    "AI教育"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+AI算法工程师"
            },
            {
                "type": "招聘",
                "company": "新东方",
                "title": "新东方招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=新东方+供应链管理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "作业帮",
                "title": "作业帮招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=作业帮+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘在线教育讲师",
                "jobTitle": "在线教育讲师",
                "jobDescription": "负责在线课程的教学工作，包括课程设计、教学实施、学员辅导等。要求相关学科专业背景，有教学经验优先。",
                "jobFunction": "讲师/教研类",
                "workExperience": "2-5年",
                "salaryRange": "15K-30K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+在线教育讲师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘市场获客经理",
                "jobTitle": "市场获客经理",
                "jobDescription": "负责市场推广和用户获客，制定并执行获客策略，提升品牌影响力和用户增长。要求有教育行业市场经验。",
                "jobFunction": "市场获客类",
                "workExperience": "3-5年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+市场获客经理"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "高途",
                "title": "高途招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=高途+供应链管理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘视频剪辑师",
                "jobTitle": "视频剪辑师",
                "jobDescription": "负责教学视频的剪辑和后期制作，包括视频剪辑、特效制作、音频处理等。要求熟悉Premiere、After Effects等软件。",
                "jobFunction": "视频动画类",
                "workExperience": "2-4年",
                "salaryRange": "15K-28K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+视频剪辑师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘供应链管理",
                "jobTitle": "供应链管理",
                "jobDescription": "负责教育产品供应链管理，包括供应商管理、采购管理、库存管理等。要求有供应链管理经验。",
                "jobFunction": "供应链相关类",
                "workExperience": "3-6年",
                "salaryRange": "18K-32K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+供应链管理"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘用户运营专员",
                "jobTitle": "用户运营专员",
                "jobDescription": "负责用户运营工作，包括用户留存、活跃度提升、社群运营等。要求有用户运营经验，熟悉教育行业。",
                "jobFunction": "用户运营类",
                "workExperience": "2-4年",
                "salaryRange": "15K-25K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-22",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+用户运营专员"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘UI/UX设计师",
                "jobTitle": "UI/UX设计师",
                "jobDescription": "负责教育产品的UI/UX设计，包括界面设计、交互设计、用户体验优化等。要求有教育产品设计经验。",
                "jobFunction": "原画/视觉设计类",
                "workExperience": "3-6年",
                "salaryRange": "20K-35K",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+UI/UX设计师"
            },
            {
                "type": "招聘",
                "company": "猿辅导",
                "title": "猿辅导招聘销售经理",
                "jobTitle": "销售经理",
                "jobDescription": "负责课程销售工作，包括客户开发、销售跟进、客户维护等。要求有教育行业销售经验，沟通能力强。",
                "jobFunction": "销售类",
                "workExperience": "2-5年",
                "salaryRange": "12K-25K+提成",
                "priority": "次重点",
                "categories": [
                    "招聘信息"
                ],
                "date": "2025-12-28",
                "source": "https://www.zhipin.com/web/geek/job?query=猿辅导+销售经理"
            }
        ]
    }
];
console.log("✅ data.js 执行完成, newsData长度:", newsData.length);
window.newsData = newsData;
