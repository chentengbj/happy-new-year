#!/bin/bash
# 设置每周自动运行数据收集脚本的定时任务

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PYTHON_PATH=$(which python3)

if [ -z "$PYTHON_PATH" ]; then
    echo "错误: 未找到 python3，请先安装 Python 3"
    exit 1
fi

# 创建cron任务（每周一上午9点运行）
CRON_JOB="0 9 * * 1 cd $SCRIPT_DIR && $PYTHON_PATH collect_news.py >> $SCRIPT_DIR/collect_log.txt 2>&1"

# 检查是否已存在相同的任务
if crontab -l 2>/dev/null | grep -q "collect_news.py"; then
    echo "定时任务已存在，正在更新..."
    crontab -l 2>/dev/null | grep -v "collect_news.py" | crontab -
fi

# 添加新的定时任务
(crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -

echo "✅ 定时任务设置成功！"
echo "📅 任务将在每周一上午9点自动运行"
echo "📝 日志文件: $SCRIPT_DIR/collect_log.txt"
echo ""
echo "查看定时任务: crontab -l"
echo "编辑定时任务: crontab -e"
echo "删除定时任务: crontab -e (然后删除对应行)"


