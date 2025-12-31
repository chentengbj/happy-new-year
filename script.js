// 全局变量
let currentWeekIndex = 0;
let allNewsData = [];
let filteredNews = [];
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let customTags = JSON.parse(localStorage.getItem('customTags') || '[]');
let newsTags = JSON.parse(localStorage.getItem('newsTags') || '{}');
let currentTimeRange = 'weekly'; // 时间段：weekly, monthly, quarterly, halfyearly, yearly
let currentPeriodIndex = 0; // 当前时间段索引

// 调试模式（可通过URL参数 ?debug=true 启用）
const DEBUG_MODE = new URLSearchParams(window.location.search).get('debug') === 'true';

// 调试日志函数
function debugLog(message, data = null) {
    if (DEBUG_MODE || true) { // 默认启用调试
        const timestamp = new Date().toLocaleTimeString();
        if (data) {
            console.log(`[${timestamp}] ${message}`, data);
        } else {
            console.log(`[${timestamp}] ${message}`);
        }
    }
}

// 初始化函数
function initializeApp() {
    debugLog('🚀 开始初始化应用程序');
    debugLog('📋 页面状态检查', {
        'document.readyState': document.readyState,
        'window.performance.timing': window.performance?.timing ? '可用' : '不可用',
        'script加载时间': performance.now() + 'ms'
    });
    
    // 先设置事件监听器（不依赖数据）
    debugLog('⚙️ 设置事件监听器');
    setupEventListeners();
    loadTags();
    
    // 延迟初始化，确保data.js完全加载
    function tryInitialize(retryCount = 0) {
        const maxRetries = 20;
        const startTime = performance.now();
        
        debugLog(`⏳ 尝试加载数据 (${retryCount + 1}/${maxRetries})`);
        
        // 检查脚本加载状态
        const scripts = Array.from(document.scripts);
        const dataScript = scripts.find(s => s.src && s.src.includes('data.js'));
        debugLog('📜 脚本加载状态', {
            '总脚本数': scripts.length,
            'data.js脚本': dataScript ? '已找到' : '未找到',
            'data.js加载状态': dataScript?.readyState || 'N/A',
            'data.js是否已执行': typeof newsData !== 'undefined' ? '是' : '否'
        });
        
        if (loadNewsData()) {
            const loadTime = performance.now() - startTime;
            debugLog(`✅ 数据加载成功 (耗时: ${loadTime.toFixed(2)}ms)`);
            
            // 数据加载成功，继续初始化
            try {
                const initStartTime = performance.now();
                
                // 初始化时设置到最新时间段
                debugLog('📅 计算时间段数据');
                const periods = getTimePeriods();
                debugLog('📅 时间段计算结果', {
                    '时间段数量': periods.length,
                    '当前时间段类型': currentTimeRange,
                    '时间段详情': periods.length > 0 ? periods.map((p, i) => ({
                        '索引': i,
                        '标签': p.label,
                        '数据量': p.data.length
                    })) : []
                });
                
                if (periods.length > 0) {
                    currentPeriodIndex = periods.length - 1;
                    debugLog(`✅ 找到 ${periods.length} 个时间段，当前索引：${currentPeriodIndex}`);
                } else {
                    console.warn('⚠️ 未找到时间段数据');
                }
                
                debugLog('🎨 开始渲染新闻');
                const renderStartTime = performance.now();
                renderNews();
                const renderTime = performance.now() - renderStartTime;
                debugLog(`✅ 新闻渲染完成 (耗时: ${renderTime.toFixed(2)}ms)`);
                
                debugLog('📊 更新统计数据');
                updateStats();
                updateLastUpdateTime();
                
                const totalInitTime = performance.now() - initStartTime;
                debugLog(`✅ 页面初始化完成 (总耗时: ${totalInitTime.toFixed(2)}ms)`);
                
                // 输出性能摘要
                debugLog('📈 性能摘要', {
                    '数据加载时间': loadTime.toFixed(2) + 'ms',
                    '初始化时间': totalInitTime.toFixed(2) + 'ms',
                    '总耗时': (performance.now() - startTime).toFixed(2) + 'ms',
                    '数据总量': {
                        '周数': allNewsData.length,
                        '总信息数': allNewsData.reduce((sum, week) => sum + (week.news?.length || 0), 0),
                        '新闻数': allNewsData.reduce((sum, week) => sum + (week.news?.filter(n => n.type !== '招聘').length || 0), 0),
                        '招聘数': allNewsData.reduce((sum, week) => sum + (week.news?.filter(n => n.type === '招聘').length || 0), 0)
                    }
                });
            } catch (error) {
                console.error('❌ 初始化错误:', error);
                console.error('错误详情', {
                    '错误消息': error.message,
                    '错误堆栈': error.stack,
                    '错误类型': error.name,
                    '当前状态': {
                        'allNewsData长度': allNewsData.length,
                        'currentPeriodIndex': currentPeriodIndex,
                        'currentTimeRange': currentTimeRange
                    }
                });
                const container = document.getElementById('newsContainer');
                if (container) {
                    container.innerHTML = `
                        <div class="empty-state">
                            <div class="empty-state-icon">❌</div>
                            <p>页面初始化失败：${error.message}</p>
                            <p style="font-size: 12px; color: #666; margin-top: 10px;">
                                请打开浏览器控制台（F12）查看详细错误信息
                            </p>
                        </div>
                    `;
                }
            }
        } else {
            // 数据未加载，重试
            if (retryCount < maxRetries) {
                const delay = retryCount < 5 ? 300 : 500;
                debugLog(`⏸️ 数据未就绪，${delay}ms后重试`);
                setTimeout(() => tryInitialize(retryCount + 1), delay);
            } else {
                // 重试次数用完，显示错误
                const totalTime = performance.now() - startTime;
                console.error('❌ 数据加载失败：已达到最大重试次数');
                console.error('📊 调试信息', {
                    '重试次数': retryCount,
                    '总耗时': totalTime.toFixed(2) + 'ms',
                    'typeof newsData': typeof newsData,
                    'newsData存在': typeof newsData !== 'undefined',
                    'newsData值': typeof newsData !== 'undefined' ? (Array.isArray(newsData) ? `数组，长度${newsData.length}` : typeof newsData) : 'undefined',
                    'window.newsData': typeof window.newsData !== 'undefined' ? '存在' : '不存在',
                    '所有脚本': Array.from(document.scripts).map(s => ({
                        'src': s.src || 'inline',
                        'readyState': s.readyState,
                        '是否已执行': s.src && s.src.includes('data.js') ? (typeof newsData !== 'undefined' ? '是' : '否') : 'N/A'
                    })),
                    '当前URL': window.location.href,
                    '协议': window.location.protocol,
                    '页面加载时间': performance.now() + 'ms',
                    'window.newsData': window.newsData ? '存在' : '不存在',
                    'document.scripts': Array.from(document.scripts).map(s => ({
                        'src': s.src || 'inline',
                        'readyState': s.readyState,
                        'async': s.async,
                        'defer': s.defer
                    })),
                    '浏览器信息': {
                        'userAgent': navigator.userAgent,
                        '协议': window.location.protocol,
                        '路径': window.location.pathname
                    }
                });
                const container = document.getElementById('newsContainer');
                if (container) {
                    container.innerHTML = `
                        <div class="empty-state">
                            <div class="empty-state-icon">⚠️</div>
                            <p>数据加载失败，请检查data.js文件</p>
                            <p style="font-size: 12px; color: #666; margin-top: 10px;">
                                可能的原因：<br>
                                1. data.js文件不存在或路径错误<br>
                                2. 文件格式有误（请检查浏览器控制台）<br>
                                3. 文件太大，加载超时<br>
                                4. 浏览器安全限制（file://协议）<br><br>
                                请按F12打开控制台查看详细错误信息<br>
                                如果使用file://协议，建议使用本地服务器
                            </p>
                        </div>
                    `;
                }
            }
        }
    }
    
    // 开始初始化（延迟500ms给data.js更多加载时间）
    debugLog('⏰ 延迟500ms后开始初始化');
    setTimeout(() => tryInitialize(), 500);
}

// 使用window.onload确保所有资源（包括data.js）都已加载
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM已经加载完成，直接初始化
    initializeApp();
}

// 备用方案：如果DOMContentLoaded已经触发，使用window.onload
window.addEventListener('load', () => {
    // 如果数据仍未加载，再次尝试
    if (!allNewsData || allNewsData.length === 0) {
        console.log('window.onload触发，再次尝试加载数据...');
        if (loadNewsData()) {
            const periods = getTimePeriods();
            if (periods.length > 0) {
                currentPeriodIndex = periods.length - 1;
                renderNews();
                updateStats();
            }
        }
    }
});

// 加载新闻数据
function loadNewsData() {
    try {
        debugLog('🔍 开始检查newsData状态');
        
        // 检查newsData是否已定义
        if (typeof newsData === 'undefined') {
            debugLog('⏳ newsData未定义，等待data.js加载...');
            // 额外检查：是否在window对象上
            if (typeof window.newsData !== 'undefined') {
                debugLog('ℹ️ 在window对象上找到newsData');
                window.newsData = window.newsData; // 尝试赋值
            }
            return false;
        }
        
        debugLog('✅ newsData已定义', {
            '类型': typeof newsData,
            '是否为null': newsData === null,
            '是否为数组': Array.isArray(newsData),
            '值': newsData ? (Array.isArray(newsData) ? `数组，长度${newsData.length}` : typeof newsData) : 'null'
        });
        
        // 检查newsData是否为有效数据
        if (!newsData) {
            console.warn('⚠️ newsData为null或undefined');
            return false;
        }
        
        // 检查是否为数组
        if (!Array.isArray(newsData)) {
            console.error('❌ newsData不是数组:', typeof newsData);
            console.error('newsData实际值:', newsData);
            return false;
        }
        
        // 验证数据结构
        debugLog('🔍 验证数据结构');
        const validationResult = {
            '数组长度': newsData.length,
            '第一项结构': newsData[0] ? {
                '有week字段': 'week' in (newsData[0] || {}),
                '有news字段': 'news' in (newsData[0] || {}),
                'news是数组': Array.isArray(newsData[0]?.news)
            } : '无数据',
            '数据完整性': newsData.every(week => week && week.week && Array.isArray(week.news))
        };
        debugLog('📋 数据验证结果', validationResult);
        
        // 数据有效，加载成功
        allNewsData = newsData;
        const totalNews = allNewsData.reduce((sum, week) => sum + (week.news?.length || 0), 0);
        const newsCount = allNewsData.reduce((sum, week) => sum + (week.news?.filter(n => n.type !== '招聘').length || 0), 0);
        const jobCount = allNewsData.reduce((sum, week) => sum + (week.news?.filter(n => n.type === '招聘').length || 0), 0);
        
        debugLog(`✅ 数据加载成功`, {
            '周数': allNewsData.length,
            '总信息数': totalNews,
            '新闻数': newsCount,
            '招聘数': jobCount,
            '各周数据量': allNewsData.map((week, idx) => ({
                '周': week.week || `第${idx + 1}周`,
                '信息数': week.news?.length || 0
            }))
        });
        
        if (allNewsData.length > 0) {
            currentWeekIndex = allNewsData.length - 1; // 默认显示最新一周
            debugLog(`📌 设置当前周索引: ${currentWeekIndex}`);
        }
        return true;
    } catch (error) {
        console.error('❌ 加载数据时出错:', error);
        console.error('错误详情', {
            '错误消息': error.message,
            '错误堆栈': error.stack,
            '错误类型': error.name,
            '错误位置': error.fileName ? `${error.fileName}:${error.lineNumber}` : '未知'
        });
        return false;
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 优先级筛选
    document.querySelectorAll('.filter-btn[data-priority]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterNews();
        });
    });

    // 公司筛选
    document.getElementById('companyFilter').addEventListener('change', filterNews);

    // 分类筛选
    document.getElementById('categoryFilter').addEventListener('change', filterNews);

    // 招聘职能筛选
    const jobFunctionFilter = document.getElementById('jobFunctionFilter');
    if (jobFunctionFilter) {
        jobFunctionFilter.addEventListener('change', filterNews);
    }

    // 标签筛选
    document.getElementById('tagFilter').addEventListener('change', filterNews);

    // 搜索
    document.getElementById('searchBtn').addEventListener('click', filterNews);
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') filterNews();
    });

    // 时间段筛选
    document.getElementById('timeRangeFilter').addEventListener('change', (e) => {
        currentTimeRange = e.target.value;
        currentPeriodIndex = 0; // 重置到第一个时间段
        renderNews();
    });

    // 时间段切换
    document.getElementById('prevPeriod').addEventListener('click', () => {
        const periods = getTimePeriods();
        if (currentPeriodIndex > 0) {
            currentPeriodIndex--;
            renderNews();
        }
    });

    document.getElementById('nextPeriod').addEventListener('click', () => {
        const periods = getTimePeriods();
        if (currentPeriodIndex < periods.length - 1) {
            currentPeriodIndex++;
            renderNews();
        }
    });

    // 导出
    document.getElementById('exportBtn').addEventListener('click', exportData);

    // 标签管理
    document.getElementById('manageTagsBtn').addEventListener('click', () => {
        showTagManagementModal();
    });

    document.getElementById('closeTagModal').addEventListener('click', () => {
        document.getElementById('tagModal').classList.remove('active');
    });

    document.getElementById('addTagBtn').addEventListener('click', addTag);

    // 收藏
    document.getElementById('viewFavoritesBtn').addEventListener('click', viewFavorites);
}

// 高亮AI+教育相关标题
function highlightAITitle(title) {
    if (!title) return title;
    
    // 检测AI+教育相关关键词
    const aiKeywords = ['AI', '人工智能', 'AI+', '智能', '机器学习', '算法', 'AI教育', 'AI+教育'];
    let highlightedTitle = title;
    
    aiKeywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi');
        highlightedTitle = highlightedTitle.replace(regex, '<span class="ai-highlight">$1</span>');
    });
    
    return highlightedTitle;
}

// 获取时间段数据
function getTimePeriods() {
    // 确保allNewsData是数组
    if (!Array.isArray(allNewsData) || allNewsData.length === 0) {
        return [];
    }
    
    if (currentTimeRange === 'weekly') {
        return allNewsData.map((week, index) => ({
            index: index,
            label: week.week || `第${index + 1}周`,
            weeks: [index]
        }));
    } else if (currentTimeRange === 'monthly') {
        // 按月分组 - 从日期范围中提取月份
        const months = {};
        allNewsData.forEach((week, index) => {
            // 解析日期范围，例如 "2025年第40周 (9月29日-10月5日)"
            const dateMatch = week.week.match(/(\d{4})年.*?\((\d{1,2})月\d+日-(\d{1,2})月\d+日\)/);
            if (dateMatch) {
                const year = dateMatch[1];
                const startMonth = parseInt(dateMatch[2]);
                const endMonth = parseInt(dateMatch[3]);
                // 如果跨月，使用结束月份
                const month = endMonth || startMonth;
                const monthKey = `${year}-${month}`;
                if (!months[monthKey]) {
                    months[monthKey] = {
                        label: `${year}年${month}月`,
                        weeks: []
                    };
                }
                months[monthKey].weeks.push(index);
            }
        });
        return Object.values(months).map((month, idx) => ({
            index: idx,
            label: month.label,
            weeks: month.weeks
        }));
    } else if (currentTimeRange === 'quarterly') {
        // 按季度分组
        const quarters = {};
        allNewsData.forEach((week, index) => {
            const dateMatch = week.week.match(/(\d{4})年.*?\((\d{1,2})月\d+日-(\d{1,2})月\d+日\)/);
            if (dateMatch) {
                const year = parseInt(dateMatch[1]);
                const startMonth = parseInt(dateMatch[2]);
                const endMonth = parseInt(dateMatch[3]);
                const month = endMonth || startMonth;
                const quarter = Math.floor((month - 1) / 3) + 1;
                const quarterKey = `${year}-Q${quarter}`;
                if (!quarters[quarterKey]) {
                    quarters[quarterKey] = {
                        label: `${year}年第${quarter}季度`,
                        weeks: []
                    };
                }
                quarters[quarterKey].weeks.push(index);
            }
        });
        return Object.values(quarters).map((quarter, idx) => ({
            index: idx,
            label: quarter.label,
            weeks: quarter.weeks
        }));
    } else if (currentTimeRange === 'halfyearly') {
        // 按半年分组
        const halfYears = {};
        allNewsData.forEach((week, index) => {
            const dateMatch = week.week.match(/(\d{4})年.*?\((\d{1,2})月\d+日-(\d{1,2})月\d+日\)/);
            if (dateMatch) {
                const year = parseInt(dateMatch[1]);
                const startMonth = parseInt(dateMatch[2]);
                const endMonth = parseInt(dateMatch[3]);
                const month = endMonth || startMonth;
                const halfYear = month <= 6 ? 1 : 2;
                const halfYearKey = `${year}-H${halfYear}`;
                if (!halfYears[halfYearKey]) {
                    halfYears[halfYearKey] = {
                        label: `${year}年${halfYear === 1 ? '上半年' : '下半年'}`,
                        weeks: []
                    };
                }
                halfYears[halfYearKey].weeks.push(index);
            }
        });
        return Object.values(halfYears).map((halfYear, idx) => ({
            index: idx,
            label: halfYear.label,
            weeks: halfYear.weeks
        }));
    } else if (currentTimeRange === 'yearly') {
        // 按年分组
        const years = {};
        allNewsData.forEach((week, index) => {
            const yearMatch = week.week.match(/(\d{4})年/);
            if (yearMatch) {
                const year = yearMatch[1];
                if (!years[year]) {
                    years[year] = {
                        label: `${year}年`,
                        weeks: []
                    };
                }
                years[year].weeks.push(index);
            }
        });
        return Object.values(years).map((year, idx) => ({
            index: idx,
            label: year.label,
            weeks: year.weeks
        }));
    }
    return [];
}

// 获取当前时间段的所有新闻数据
function getCurrentPeriodNews() {
    try {
        // 确保数据已加载
        if (!Array.isArray(allNewsData) || allNewsData.length === 0) {
            return [];
        }
        
        const periods = getTimePeriods();
        if (periods.length === 0) {
            return [];
        }
        
        // 确保索引有效
        if (currentPeriodIndex >= periods.length) {
            currentPeriodIndex = periods.length - 1;
        }
        if (currentPeriodIndex < 0) {
            currentPeriodIndex = 0;
        }
        
        const currentPeriod = periods[currentPeriodIndex];
        if (!currentPeriod || !Array.isArray(currentPeriod.weeks)) {
            return [];
        }
        
        let allNews = [];
        currentPeriod.weeks.forEach(weekIndex => {
            if (allNewsData[weekIndex] && Array.isArray(allNewsData[weekIndex].news)) {
                allNews = allNews.concat(allNewsData[weekIndex].news);
            }
        });
        return allNews;
    } catch (error) {
        console.error('❌ 获取时间段数据错误:', error);
        console.error('错误详情', {
            '错误消息': error.message,
            '错误堆栈': error.stack,
            '当前状态': {
                'allNewsData长度': allNewsData.length,
                'currentTimeRange': currentTimeRange,
                'allNewsData类型': typeof allNewsData,
                'allNewsData是否为数组': Array.isArray(allNewsData)
            }
        });
        return [];
    }
}

// 筛选新闻
function filterNews() {
    const priorityFilter = document.querySelector('.filter-btn.active[data-priority]')?.dataset.priority || 'all';
    const companyFilter = document.getElementById('companyFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const jobFunctionFilter = document.getElementById('jobFunctionFilter')?.value || 'all';
    const tagFilter = document.getElementById('tagFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    const currentPeriodData = getCurrentPeriodNews();

    filteredNews = currentPeriodData.filter(news => {
        // 优先级筛选
        if (priorityFilter !== 'all') {
            const isHigh = news.priority === '重点';
            if (priorityFilter === 'high' && !isHigh) return false;
            if (priorityFilter === 'normal' && isHigh) return false;
        }

        // 公司筛选
        if (companyFilter !== 'all') {
            if (companyFilter === '其他') {
                // "其他"选项：显示所有不在主要公司列表中的公司
                const mainCompanies = ['好未来', '希望学', '学而思', '新东方', '作业帮', '高途', '猿辅导'];
                if (mainCompanies.includes(news.company)) {
                    return false;
                }
            } else if (companyFilter === '猿辅导') {
                // 猿辅导选项：显示猿辅导及其旗下公司（斑马AI、斑马百科、猿编程、飞象星球等）
                const yuanfudaoCompanies = ['猿辅导', '斑马AI', '斑马百科', '猿编程', '飞象星球', '斑马'];
                if (!yuanfudaoCompanies.includes(news.company)) {
                    return false;
                }
            } else {
                // 其他主要公司：精确匹配
                if (news.company !== companyFilter) {
                    return false;
                }
            }
        }

        // 分类筛选
        if (categoryFilter !== 'all' && !news.categories.includes(categoryFilter)) {
            return false;
        }

        // 招聘职能筛选（仅对招聘信息有效）
        if (jobFunctionFilter !== 'all' && news.type === '招聘') {
            if (news.jobFunction !== jobFunctionFilter) {
                return false;
            }
        }

        // 标签筛选
        if (tagFilter !== 'all') {
            const newsId = getNewsId(news);
            const tags = newsTags[newsId] || [];
            if (!tags.includes(tagFilter)) return false;
        }

        // 搜索筛选
        if (searchTerm) {
            const searchText = `${news.title} ${news.content} ${news.company}`.toLowerCase();
            if (news.type === '招聘') {
                const jobText = `${news.jobTitle || ''} ${news.jobDescription || ''} ${news.workExperience || ''} ${news.salaryRange || ''}`.toLowerCase();
                if (!searchText.includes(searchTerm) && !jobText.includes(searchTerm)) return false;
            } else {
                if (!searchText.includes(searchTerm)) return false;
            }
        }

        return true;
    });

    renderFilteredNews();
    updateStats();
}

// 渲染新闻
function renderNews() {
    try {
        // 检查数据是否加载
        if (!Array.isArray(allNewsData) || allNewsData.length === 0) {
            console.warn('allNewsData为空或未定义');
            document.getElementById('newsContainer').innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📭</div>
                    <p>暂无数据，请检查data.js文件是否正确加载</p>
                </div>
            `;
            return;
        }
        
        const periods = getTimePeriods();
        
        if (periods.length === 0) {
            console.warn('未找到时间段数据');
            document.getElementById('newsContainer').innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📭</div>
                    <p>暂无时间段数据</p>
                </div>
            `;
            return;
        }

        // 确保索引在有效范围内
        if (currentPeriodIndex >= periods.length) {
            currentPeriodIndex = periods.length - 1;
        }
        if (currentPeriodIndex < 0) {
            currentPeriodIndex = 0;
        }

        const currentPeriod = periods[currentPeriodIndex];
        const periodElement = document.getElementById('currentPeriod');
        if (periodElement && currentPeriod) {
            periodElement.textContent = currentPeriod.label;
        }
        
        // 更新按钮状态
        const prevBtn = document.getElementById('prevPeriod');
        const nextBtn = document.getElementById('nextPeriod');
        if (prevBtn) prevBtn.disabled = currentPeriodIndex === 0;
        if (nextBtn) nextBtn.disabled = currentPeriodIndex === periods.length - 1;
        
        filterNews();
    } catch (error) {
        console.error('❌ 渲染新闻错误:', error);
        console.error('错误详情', {
            '错误消息': error.message,
            '错误堆栈': error.stack,
            '错误类型': error.name,
            '当前状态': {
                'allNewsData长度': allNewsData.length,
                'filteredNews长度': filteredNews.length,
                'currentPeriodIndex': currentPeriodIndex,
                'currentTimeRange': currentTimeRange
            }
        });
        document.getElementById('newsContainer').innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">❌</div>
                <p>渲染错误：${error.message}</p>
                <p style="font-size: 12px; color: #666;">请打开浏览器控制台查看详细错误信息</p>
            </div>
        `;
    }
}

// 渲染筛选后的新闻
function renderFilteredNews() {
    const container = document.getElementById('newsContainer');

    if (filteredNews.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <p>没有找到匹配的新闻</p>
            </div>
        `;
        return;
    }

    // 按优先级排序：重点在前
    const sortedNews = [...filteredNews].sort((a, b) => {
        if (a.priority === '重点' && b.priority !== '重点') return -1;
        if (a.priority !== '重点' && b.priority === '重点') return 1;
        return 0;
    });

    container.innerHTML = sortedNews.map(news => createNewsCard(news)).join('');
    
    // 绑定收藏和标签按钮事件
    attachCardEvents();
}

// 验证链接是否有效
function isValidSourceLink(source) {
    if (!source) return false;
    
    // 检查是否是有效的HTTP/HTTPS链接
    try {
        const url = new URL(source);
        // 排除示例链接和无效链接
        if (url.hostname === 'example.com' || 
            url.hostname === 'localhost' ||
            url.hostname === '127.0.0.1' ||
            source.startsWith('http://example') ||
            source.startsWith('https://example')) {
            return false;
        }
        // 必须是http或https协议
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (e) {
        // 不是有效的URL
        return false;
    }
}

// 创建新闻卡片
function createNewsCard(news) {
    const newsId = getNewsId(news);
    const priorityClass = news.priority === '重点' ? 'high' : 'normal';
    const priorityText = news.priority === '重点' ? '重点' : '次重点';
    const isFavorited = favorites.includes(newsId);
    const tags = newsTags[newsId] || [];
    const isJobPosting = news.type === '招聘';

    // 高亮AI+教育标题
    const highlightedTitle = highlightAITitle(news.title);

    // 确保categories是数组，并过滤掉非字符串元素
    const categories = Array.isArray(news.categories) 
        ? news.categories.filter(cat => typeof cat === 'string')
        : [];
    const categoriesHtml = categories.map(cat => 
        `<span class="category-tag">${cat}</span>`
    ).join('');

    // 确保tags是数组，并过滤掉非字符串元素
    const validTags = tags.filter(tag => typeof tag === 'string');
    const customTagsHtml = validTags.map(tag => 
        `<span class="custom-tag">${tag}</span>`
    ).join('');

    // 验证链接并创建按钮（所有信息必须有真实来源）
    let sourceLink = '';
    if (news.source && isValidSourceLink(news.source)) {
        sourceLink = `<a href="${news.source}" target="_blank" rel="noopener noreferrer" class="source-link" title="在新标签页中打开原文">
            🔗 查看原文
        </a>`;
    } else {
        // 如果没有有效链接，显示警告
        sourceLink = `<span class="source-link disabled" title="缺少有效来源链接">
            ⚠️ 来源待验证
        </span>`;
    }

    // 招聘信息特殊显示
    let jobInfoHtml = '';
    if (isJobPosting) {
        jobInfoHtml = `
            <div class="job-info">
                <div class="job-detail">
                    <strong>岗位名称：</strong>${news.jobTitle || '未提供'}
                </div>
                ${news.jobFunction ? `<div class="job-detail"><strong>职能分类：</strong><span class="job-function-tag">${news.jobFunction}</span></div>` : ''}
                ${news.workExperience ? `<div class="job-detail"><strong>工作经验：</strong>${news.workExperience}</div>` : ''}
                ${news.salaryRange ? `<div class="job-detail"><strong>薪资范围：</strong>${news.salaryRange}</div>` : ''}
                ${news.jobDescription ? `<div class="job-detail"><strong>职位描述：</strong><div class="job-description">${news.jobDescription}</div></div>` : ''}
            </div>
        `;
    }

    return `
        <div class="news-card ${priorityClass}-priority ${isJobPosting ? 'job-posting' : ''}" data-news-id="${newsId}">
            <div class="news-header">
                <div>
                    <span class="priority-badge ${priorityClass}">${priorityText}</span>
                    <span class="company-name">${news.company}</span>
                    ${isJobPosting ? '<span class="job-badge">📋 招聘信息</span>' : ''}
                </div>
                <div class="news-actions">
                    <button class="action-icon ${isFavorited ? 'favorited' : ''}" data-action="favorite" data-news-id="${newsId}">
                        ${isFavorited ? '⭐' : '☆'}
                    </button>
                    <button class="action-icon" data-action="tag" data-news-id="${newsId}">🏷️</button>
                </div>
            </div>
            <div class="news-title">${highlightedTitle}</div>
            ${!isJobPosting ? `<div class="news-content">${news.content}</div>` : ''}
            ${jobInfoHtml}
            <div class="news-meta">
                ${categoriesHtml}
                ${customTagsHtml}
                <span class="date-tag">${news.date || ''}</span>
                ${sourceLink}
            </div>
        </div>
    `;
}

// 绑定卡片事件
function attachCardEvents() {
    document.querySelectorAll('[data-action="favorite"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const newsId = e.target.dataset.newsId;
            toggleFavorite(newsId);
        });
    });

    document.querySelectorAll('[data-action="tag"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const newsId = e.target.dataset.newsId;
            showTagDialog(newsId);
        });
    });
}

// 切换收藏
function toggleFavorite(newsId) {
    const index = favorites.indexOf(newsId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(newsId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFilteredNews();
}

// 显示标签对话框
function showTagDialog(newsId) {
    const tags = newsTags[newsId] || [];
    const availableTags = customTags.filter(t => !tags.includes(t));
    
    let html = '<div style="margin-bottom: 12px;"><strong>当前标签：</strong></div>';
    if (tags.length > 0) {
        html += tags.map(tag => 
            `<span class="custom-tag" style="margin-right: 8px; margin-bottom: 8px; display: inline-block;">
                ${tag} 
                <button onclick="removeTagFromNews('${newsId}', '${tag}')" style="background:none;border:none;cursor:pointer;margin-left:4px;">×</button>
            </span>`
        ).join('');
    } else {
        html += '<span style="color: #999;">无</span>';
    }
    
    html += '<div style="margin: 16px 0;"><strong>添加标签：</strong></div>';
    if (availableTags.length > 0) {
        html += '<div style="display: flex; flex-wrap: wrap; gap: 8px;">';
        html += availableTags.map(tag => 
            `<button onclick="addTagToNews('${newsId}', '${tag}')" class="btn-primary" style="margin: 0;">${tag}</button>`
        ).join('');
        html += '</div>';
    } else {
        html += '<span style="color: #999;">没有可用标签，请先创建</span>';
    }
    
    const modal = document.getElementById('tagModal');
    const body = modal.querySelector('.modal-body');
    body.innerHTML = html;
    modal.classList.add('active');
}

// 显示标签管理模态框
function showTagManagementModal() {
    const modal = document.getElementById('tagModal');
    const body = modal.querySelector('.modal-body');
    body.innerHTML = `
        <div class="tag-input-group">
            <input type="text" id="newTagInput" placeholder="输入新标签名称" class="tag-input">
            <button id="addTagBtn" class="btn-primary">添加标签</button>
        </div>
        <div class="tags-list" id="tagsList">
            ${renderTagsList()}
        </div>
    `;
    
    document.getElementById('addTagBtn').addEventListener('click', addTag);
    modal.classList.add('active');
}

// 渲染标签列表
function renderTagsList() {
    if (customTags.length === 0) {
        return '<p style="color: #999; text-align: center; padding: 20px;">暂无标签</p>';
    }
    return customTags.map(tag => `
        <div class="tag-item">
            <span>${tag}</span>
            <button onclick="deleteTag('${tag}')">×</button>
        </div>
    `).join('');
}

// 添加标签到新闻
function addTagToNews(newsId, tag) {
    if (!newsTags[newsId]) {
        newsTags[newsId] = [];
    }
    if (!newsTags[newsId].includes(tag)) {
        newsTags[newsId].push(tag);
        localStorage.setItem('newsTags', JSON.stringify(newsTags));
        renderFilteredNews();
        showTagDialog(newsId);
    }
}

// 从新闻移除标签
function removeTagFromNews(newsId, tag) {
    if (newsTags[newsId]) {
        newsTags[newsId] = newsTags[newsId].filter(t => t !== tag);
        localStorage.setItem('newsTags', JSON.stringify(newsTags));
        renderFilteredNews();
        showTagDialog(newsId);
    }
}

// 加载标签
function loadTags() {
    const tagFilter = document.getElementById('tagFilter');
    tagFilter.innerHTML = '<option value="all">全部标签</option>';
    customTags.forEach(tag => {
        tagFilter.innerHTML += `<option value="${tag}">${tag}</option>`;
    });
}

// 添加标签
function addTag() {
    const input = document.getElementById('newTagInput');
    const tagName = input.value.trim();
    if (tagName && !customTags.includes(tagName)) {
        customTags.push(tagName);
        localStorage.setItem('customTags', JSON.stringify(customTags));
        loadTags();
        input.value = '';
        
        // 更新标签列表显示
        const container = document.getElementById('tagsList');
        if (container) {
            container.innerHTML = renderTagsList();
        }
    }
}

// 删除标签
function deleteTag(tag) {
    customTags = customTags.filter(t => t !== tag);
    localStorage.setItem('customTags', JSON.stringify(customTags));
    
    // 从所有新闻中移除该标签
    Object.keys(newsTags).forEach(newsId => {
        newsTags[newsId] = newsTags[newsId].filter(t => t !== tag);
    });
    localStorage.setItem('newsTags', JSON.stringify(newsTags));
    
    loadTags();
    const container = document.getElementById('tagsList');
    if (container) {
        container.innerHTML = renderTagsList();
    }
    renderFilteredNews();
}

// 查看收藏
function viewFavorites() {
    const allNews = allNewsData.flatMap(week => week.news || []);
    filteredNews = allNews.filter(news => favorites.includes(getNewsId(news)));
    renderFilteredNews();
    updateStats();
}

// 导出数据
function exportData() {
    const data = {
        exportDate: new Date().toISOString(),
        weeks: allNewsData,
        favorites: favorites,
        tags: customTags,
        newsTags: newsTags
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `教培行业动向_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// 获取新闻ID
function getNewsId(news) {
    if (news.type === '招聘') {
        return `${news.company}_${news.date}_${news.jobTitle || news.title}_${news.jobFunction || ''}`;
    }
    return `${news.company}_${news.date}_${news.title.substring(0, 20)}`;
}

// 更新统计信息
function updateStats() {
    // 使用当前时间段的数据，而不是单周数据
    const currentPeriodData = getCurrentPeriodNews();
    const highCount = currentPeriodData.filter(n => n.priority === '重点').length;
    const normalCount = currentPeriodData.filter(n => n.priority !== '重点').length;

    document.getElementById('highPriorityCount').textContent = highCount;
    document.getElementById('normalPriorityCount').textContent = normalCount;
    document.getElementById('totalCount').textContent = currentPeriodData.length;
}

// 更新最后更新时间
function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('zh-CN');
    document.getElementById('lastUpdate').textContent = timeString;
}


// 全局函数（供HTML调用）
window.addTagToNews = addTagToNews;
window.removeTagFromNews = removeTagFromNews;
window.deleteTag = deleteTag;

