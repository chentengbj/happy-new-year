#!/bin/bash
# GitHub Pages 部署脚本

echo "🚀 开始部署到 GitHub Pages..."
echo ""

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误：请在项目根目录（包含 index.html 的目录）运行此脚本"
    exit 1
fi

# 检查 Git 是否已初始化
if [ ! -d ".git" ]; then
    echo "📦 初始化 Git 仓库..."
    git init
    echo "✅ Git 仓库已初始化"
fi

# 添加所有文件
echo "📝 添加文件到 Git..."
git add .

# 检查是否有修改
if git diff --staged --quiet; then
    echo "ℹ️  没有需要提交的修改"
else
    # 提交修改
    echo "💾 提交修改..."
    read -p "请输入提交信息（直接回车使用默认）: " commit_msg
    if [ -z "$commit_msg" ]; then
        commit_msg="更新网站内容"
    fi
    git commit -m "$commit_msg"
    echo "✅ 修改已提交"
fi

# 检查是否已设置远程仓库
if git remote | grep -q "origin"; then
    echo "📤 推送到 GitHub..."
    git push origin main 2>/dev/null || git push origin master 2>/dev/null
    echo "✅ 代码已推送到 GitHub"
    echo ""
    echo "🌐 GitHub Pages 会自动部署（通常需要几分钟）"
    echo "📋 请在 GitHub 仓库的 Settings → Pages 中查看部署状态"
else
    echo ""
    echo "⚠️  尚未设置远程仓库"
    echo ""
    echo "请按以下步骤操作："
    echo "1. 在 GitHub 上创建新仓库"
    echo "2. 运行以下命令连接仓库："
    echo "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    echo "3. 在 GitHub 仓库 Settings → Pages 中启用 GitHub Pages"
fi

echo ""
echo "✅ 部署脚本执行完成！"

