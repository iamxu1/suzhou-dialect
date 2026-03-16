# 苏州话教学网站 - Vercel 部署指南

## 📦 部署前准备

### 1. 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名称：`suzhou-dialect`
3. 设置为 Public（公开）或 Private（私有）
4. 点击 "Create repository"

### 2. 安装 Git（如果没有安装）

**检查是否已安装：**
```bash
git --version
```

**如果未安装：**
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install git

# Windows
# 下载 Git：https://git-scm.com/download/win
```

### 3. 配置 Git

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

---

## 🚀 部署步骤

### 步骤1：初始化 Git 仓库

```bash
cd /home/user/.trae-cn/suzhou-dialect
git init
```

### 步骤2：添加所有文件

```bash
git add .
```

### 步骤3：创建首次提交

```bash
git commit -m "Initial commit: 苏州话教学网站 MVP"
```

### 步骤4：连接到 GitHub 仓库

```bash
git branch -M main
git remote add origin https://github.com/你的用户名/suzhou-dialect.git
```

### 步骤5：推送到 GitHub

```bash
git push -u origin main
```

---

## 🌐 部署到 Vercel

### 方式1：通过 Vercel 网站（推荐）

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 点击 "Sign Up" 或 "Login"
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择 "Import Git Repository"
   - 找到 `suzhou-dialect` 仓库
   - 点击 "Import"

3. **配置项目**
   - Framework Preset: "Other"
   - Root Directory: "./"
   - Build Command: 留空
   - Output Directory: 留空
   - 点击 "Deploy"

4. **等待部署**
   - Vercel 自动构建和部署
   - 大约 1-2 分钟
   - 完成后会显示网址

5. **访问网站**
   - 网址格式：`https://suzhou-dialect-你的用户名.vercel.app`
   - 或自定义域名

### 方式2：通过 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   cd /home/user/.trae-cn/suzhou-dialect
   vercel
   ```

4. **按照提示操作**
   - Set up and deploy? Y
   - Link to existing project? N
   - Project name: suzhou-dialect
   - Directory: ./
   - 等待部署完成

---

## 🎯 部署后

### 访问你的网站

- **Vercel 提供的网址**：`https://suzhou-dialect.vercel.app`
- **自定义域名**：在 Vercel 设置中添加

### 更新网站

```bash
# 修改代码后
git add .
git commit -m "更新内容"
git push

# Vercel 自动重新部署
```

---

## 📊 费用说明

### Vercel 免费额度

- ✅ **带宽**：100GB/月
- ✅ **构建时间**：6000 分钟/月
- ✅ **项目数量**：无限
- ✅ **团队成员**：1人
- ✅ **域名**：免费 .vercel.app 域名

### 超出免费额度

- 💰 Hobby 计划：$20/月
- 💰 Pro 计划：$40/月

---

## 🛠️ 常见问题

### Q: 部署失败怎么办？

**A: 检查以下几点：**
1. `package.json` 中的 `main` 字段是否正确
2. `server.js` 是否存在
3. 端口是否使用 `process.env.PORT`
4. 查看 Vercel 部署日志

### Q: 如何查看部署日志？

**A:**
1. 访问 Vercel Dashboard
2. 选择你的项目
3. 点击 "Deployments"
4. 查看最新的部署日志

### Q: 如何添加自定义域名？

**A:**
1. 在 Vercel 项目设置中
2. 点击 "Domains"
3. 添加你的域名
4. 配置 DNS 记录

### Q: 如何设置环境变量？

**A:**
1. 在 Vercel 项目设置中
2. 点击 "Environment Variables"
3. 添加键值对
4. 重新部署

---

## ✅ 部署检查清单

- [ ] 已创建 GitHub 仓库
- [ ] 已安装 Git
- [ ] 已配置 Git 用户信息
- [ ] 已初始化 Git 仓库
- [ ] 已连接到 GitHub 远程仓库
- [ ] 已推送到 GitHub
- [ ] 已在 Vercel 导入项目
- [ ] 部署成功
- [ ] 可以访问网站

---

## 🎉 完成！

部署成功后，你的苏州话教学网站就可以通过互联网访问了！

用户可以直接访问：`https://suzhou-dialect.vercel.app`

祝你部署顺利！🚀
