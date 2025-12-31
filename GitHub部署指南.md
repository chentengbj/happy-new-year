# GitHub Pages 部署完整指南

## 📋 准备工作

### 1. 创建 GitHub 账号（如果还没有）
- 访问 https://github.com
- 注册新账号（完全免费）

### 2. 安装 Git（如果还没有）
macOS 通常自带 Git，检查是否已安装：
```bash
git --version
```

如果没有，安装 Xcode 命令行工具：
```bash
xcode-select --install
```

---

## 🚀 部署步骤

### 第一步：初始化 Git 仓库

```bash
# 1. 进入项目目录
cd "/Users/chenteng/Desktop/cursor 启动/code"

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件
git add .

# 4. 提交文件
git commit -m "Initial commit: 教培行业动向追踪系统"
```

### 第二步：在 GitHub 上创建仓库

1. **登录 GitHub**
   - 访问 https://github.com
   - 点击右上角的 "+" 号
   - 选择 "New repository"

2. **填写仓库信息**
   - **Repository name**: `education-tracking`（或你喜欢的名字）
   - **Description**: `教培行业动向追踪系统 - 自动收集和展示互联网教培行业的动向信息`
   - **Visibility**: 选择 **Public**（公开，才能使用免费 GitHub Pages）
   - **不要**勾选 "Initialize this repository with a README"（我们已经有了文件）
   - 点击 "Create repository"

### 第三步：连接本地仓库到 GitHub

GitHub 会显示连接命令，类似这样：

```bash
# 1. 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/education-tracking.git

# 2. 重命名分支为 main（如果还没有）
git branch -M main

# 3. 推送代码到 GitHub
git push -u origin main
```

**完整示例：**
```bash
# 假设你的 GitHub 用户名是 "chenteng"
git remote add origin https://github.com/chenteng/education-tracking.git
git branch -M main
git push -u origin main
```

**注意：** 首次推送可能需要输入 GitHub 用户名和密码（或 Personal Access Token）

### 第四步：启用 GitHub Pages

1. **进入仓库设置**
   - 在 GitHub 仓库页面，点击 "Settings"（设置）
   - 在左侧菜单找到 "Pages"（页面）

2. **配置 Pages**
   - **Source**: 选择 "Deploy from a branch"
   - **Branch**: 选择 `main`
   - **Folder**: 选择 `/ (root)` 或 `/code`（根据你的文件结构）
   - 点击 "Save"（保存）

3. **等待部署**
   - GitHub 会在几分钟内自动部署
   - 部署完成后，你会看到绿色的成功提示
   - 网站地址会是：`https://YOUR_USERNAME.github.io/education-tracking/`

---

## 🌐 申请免费域名

### 方案1：使用 GitHub Pages 免费域名（最简单）

**优点：** 完全免费，自动配置  
**域名格式：** `https://YOUR_USERNAME.github.io/education-tracking`

**使用步骤：**
1. 部署完成后，直接使用 GitHub 提供的地址
2. 可以分享给任何人访问

### 方案2：使用 Freenom 免费域名（.tk, .ml, .ga, .cf）

**步骤：**

1. **注册账号**
   - 访问 https://www.freenom.com
   - 注册免费账号

2. **搜索域名**
   - 在搜索框输入想要的域名（例如：`education-tracking`）
   - 选择免费的顶级域名（.tk, .ml, .ga, .cf 等）

3. **注册域名**
   - 选择注册期限（最长12个月，免费）
   - 完成注册

4. **配置 DNS**
   - 在 Freenom 管理面板，进入 "Manage Domain"
   - 选择 "Manage Freenom DNS"
   - 添加以下记录：
     ```
     Type: A
     Name: @
     TTL: 3600
     Target: 185.199.108.153
     
     Type: A
     Name: @
     TTL: 3600
     Target: 185.199.109.153
     
     Type: A
     Name: @
     TTL: 3600
     Target: 185.199.110.153
     
     Type: A
     Name: @
     TTL: 3600
     Target: 185.199.111.153
     
     Type: CNAME
     Name: www
     TTL: 3600
     Target: YOUR_USERNAME.github.io
     ```

5. **在 GitHub 配置自定义域名**
   - 在仓库 Settings → Pages
   - 在 "Custom domain" 输入你的域名（例如：`education-tracking.tk`）
   - 保存后，GitHub 会自动创建 CNAME 文件

**注意：** 免费域名可能需要等待几小时到几天才能生效

### 方案3：使用 Cloudflare Pages（推荐，更稳定）

**步骤：**

1. **注册 Cloudflare 账号**
   - 访问 https://www.cloudflare.com
   - 注册免费账号

2. **连接 GitHub 仓库**
   - 在 Cloudflare Dashboard，选择 "Pages"
   - 点击 "Create a project"
   - 选择 "Connect to Git"
   - 授权 GitHub，选择你的仓库

3. **配置部署**
   - Build command: 留空（静态网站不需要构建）
   - Build output directory: `/` 或 `/code`
   - 点击 "Save and Deploy"

4. **配置自定义域名**
   - 在项目设置中，可以添加自定义域名
   - Cloudflare 提供免费 SSL 证书

---

## 📝 更新网站内容

### 方法1：通过 Git 更新（推荐）

```bash
# 1. 修改文件后，进入项目目录
cd "/Users/chenteng/Desktop/cursor 启动/code"

# 2. 添加修改的文件
git add .

# 3. 提交修改
git commit -m "更新数据：添加最新资讯"

# 4. 推送到 GitHub
git push
```

GitHub Pages 会自动重新部署（通常几分钟内完成）

### 方法2：通过 GitHub 网页直接编辑

1. 在 GitHub 仓库页面，点击要编辑的文件
2. 点击右上角的铅笔图标（Edit）
3. 修改内容后，点击 "Commit changes"
4. GitHub Pages 会自动更新

---

## 🔧 常见问题

### Q1: 网站显示 404 错误
**解决方案：**
- 检查文件路径是否正确
- 确保 `index.html` 在根目录或配置的文件夹中
- 等待几分钟让 GitHub Pages 完成部署

### Q2: 样式或脚本不加载
**解决方案：**
- 检查 `index.html` 中的文件路径是否正确
- 确保所有文件（CSS、JS）都已提交到 GitHub
- 清除浏览器缓存后重试

### Q3: 自定义域名不工作
**解决方案：**
- 等待 DNS 传播（可能需要几小时到48小时）
- 检查 DNS 配置是否正确
- 确保在 GitHub Pages 设置中添加了自定义域名

### Q4: 如何查看部署状态？
**解决方案：**
- 在仓库页面，点击 "Actions" 标签
- 可以看到部署历史和状态

---

## ✅ 部署检查清单

- [ ] GitHub 账号已创建
- [ ] Git 已安装
- [ ] 本地仓库已初始化
- [ ] 代码已推送到 GitHub
- [ ] GitHub Pages 已启用
- [ ] 网站可以正常访问
- [ ] 所有功能正常工作（筛选、搜索等）

---

## 🎉 完成！

部署完成后，你的网站将：
- ✅ 可以通过 GitHub Pages 免费域名访问
- ✅ 自动获得 HTTPS 加密
- ✅ 全球 CDN 加速
- ✅ 完全免费
- ✅ 可以分享给任何人

**网站地址示例：**
- GitHub Pages: `https://YOUR_USERNAME.github.io/education-tracking/`
- 自定义域名: `https://education-tracking.tk`（如果配置了）

---

## 📚 下一步

1. **定期更新数据**：使用 Git 推送更新
2. **设置自动更新**：可以配置 GitHub Actions 自动运行数据收集脚本
3. **优化性能**：可以添加缓存、压缩等优化
4. **添加分析**：可以集成 Google Analytics 等

---

## 💡 提示

- GitHub Pages 完全免费，但仓库必须是公开的
- 如果不想公开代码，可以考虑使用 Netlify 或 Vercel（也免费）
- 自定义域名是可选的，GitHub Pages 的免费域名也很好用

