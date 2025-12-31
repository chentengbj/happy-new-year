#!/bin/bash
# GitHub Pages 一键部署脚本

echo "🚀 开始部署到 GitHub Pages..."
echo ""

# 进入脚本所在目录
cd "$(dirname "$0")"

# 检查关键文件
if [ ! -f "index.html" ]; then
    echo "❌ 错误：找不到 index.html 文件"
    exit 1
fi

echo "✅ 文件检查通过"
echo ""

# 步骤1：初始化 Git（如果还没有）
if [ ! -d ".git" ]; then
    echo "📦 步骤1/7: 初始化 Git 仓库..."
    git init
    echo "✅ Git 仓库已初始化"
else
    echo "✅ 步骤1/7: Git 仓库已存在"
fi
echo ""

# 步骤2：添加所有文件
echo "📝 步骤2/7: 添加文件到 Git..."
git add .
echo "✅ 文件已添加"
echo ""

# 步骤3：检查是否有修改
if git diff --staged --quiet 2>/dev/null && [ -z "$(git status --porcelain)" ]; then
    echo "ℹ️  步骤3/7: 没有需要提交的修改"
    SKIP_COMMIT=true
else
    echo "💾 步骤3/7: 提交文件..."
    git commit -m "Initial commit: 教培行业动向追踪系统" || git commit -m "Update: 教培行业动向追踪系统"
    echo "✅ 文件已提交"
fi
echo ""

# 步骤4：检查远程仓库
echo "🔍 步骤4/7: 检查远程仓库配置..."
if git remote | grep -q "origin"; then
    REMOTE_URL=$(git remote get-url origin 2>/dev/null)
    echo "✅ 已配置远程仓库: $REMOTE_URL"
    echo ""
    echo "📤 步骤5/7: 推送到 GitHub..."
    CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "main")
    git push -u origin $CURRENT_BRANCH 2>&1 | head -20
    echo ""
    echo "✅ 步骤6/7: 代码已推送到 GitHub"
    echo ""
    echo "🌐 步骤7/7: 请在 GitHub 上启用 Pages："
    echo "   1. 访问你的 GitHub 仓库"
    echo "   2. 点击 Settings → Pages"
    echo "   3. Source 选择 'Deploy from a branch'"
    echo "   4. Branch 选择 'main'，Folder 选择 '/ (root)'"
    echo "   5. 点击 Save"
    echo ""
    echo "⏳ 等待几分钟后，网站将在以下地址可用："
    if [[ $REMOTE_URL == *"github.com"* ]]; then
        REPO_NAME=$(echo $REMOTE_URL | sed 's/.*github.com[:/]\([^/]*\)\/\([^/]*\)\.git.*/\1\/\2/')
        USERNAME=$(echo $REPO_NAME | cut -d'/' -f1)
        echo "   https://$USERNAME.github.io/$(echo $REPO_NAME | cut -d'/' -f2)/"
    else
        echo "   https://YOUR_USERNAME.github.io/REPO_NAME/"
    fi
else
    echo "⚠️  尚未配置远程仓库"
    echo ""
    echo "📋 请按以下步骤操作："
    echo ""
    echo "1️⃣  在 GitHub 上创建新仓库："
    echo "   - 访问 https://github.com"
    echo "   - 点击右上角 '+' → 'New repository'"
    echo "   - Repository name: education-tracking（或你喜欢的名字）"
    echo "   - 选择 Public（必须公开才能使用免费 GitHub Pages）"
    echo "   - 不要勾选 'Initialize with README'"
    echo "   - 点击 'Create repository'"
    echo ""
    echo "2️⃣  连接远程仓库（将 YOUR_USERNAME 替换为你的 GitHub 用户名）："
    echo "   git remote add origin https://github.com/YOUR_USERNAME/education-tracking.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    echo "3️⃣  启用 GitHub Pages："
    echo "   - 在 GitHub 仓库页面，点击 Settings → Pages"
    echo "   - Source 选择 'Deploy from a branch'"
    echo "   - Branch 选择 'main'，Folder 选择 '/ (root)'"
    echo "   - 点击 Save"
    echo ""
    echo "💡 提示：创建仓库后，GitHub 会显示连接命令，直接复制执行即可"
fi

echo ""
echo "✅ 部署脚本执行完成！"
echo ""
echo "📚 详细说明请查看：GitHub部署指南.md"

