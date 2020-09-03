---
title: "使用Github Actions搭建hugo"
date: 2020-08-26
draft: false
tags: ["hugo"]
categories: ["博客搭建"]
---

#### 前言
在本地提交文章到GitHub，会触发Github Actions把刚提交的文章通过hugo发布到github pages，之后可以通过github pages生成的url进行访问。

这里将把hugo源码和pages分别用两个仓库进行管理。

另外，这篇着重将如何使用github actions自动化部署hugo，hugo本地创建可以参考另一篇文章[使用hugo搭建个人博客](https://hank-leo.github.io/post/blog/使用hugo搭建个人博客/)

#### 创建仓库
创建源码仓库 `blog`,可以设置为私有`Private`

创建pages仓库`hank-leo.github.io`

#### 绑定keys

1.使用git生成ssh key(相当于生成对密钥)

```
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
# You will get 2 files:
#   gh-pages.pub (public key)
#   gh-pages     (private key)
```

2.打开blog仓库`settings`,再点击`Secrets`，然后添加刚刚生成的私钥，name为`ACTIONS_DEPLOY_KEY`

3.同理打开hank-leo.github.io, 点击`Deploy keys`，添加公钥，**Allow write access**一定要勾上，否则会无法提交

#### 配置GitHub actions

在本地新建文件`.github/workflows/main.yml`

输入配置代码：
```
name: Deploy Hugo Site to Github Pages on Master Branch

on:
  push:
    branches:
      - master

jobs:
  build-deploy:
    runs-on: ubuntu-18.04
    steps:
      - name: Checkout master
        uses: actions/checkout@v1  # v2 does not have submodules option now
       # with:
       #   submodules: true

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.62.2'
          extended: true

      - name: Build
        run: | #hugo --minify
          hugo

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          DEPLOY_KEY: ${{ secrets.ACTIONS_DEPLOY_KEY }} # 这里的 ACTIONS_DEPLOY_KEY 则是上面设置 Private Key的变量名
          EXTERNAL_REPOSITORY: hank-leo/hank-leo.github.io # Pages 远程仓库 
          PUBLISH_DIR: ./public
          #keep_files: false # remove existing files
          PUBLISH_BRANCH: master  # deploying branch
          #commit_message: ${{ github.event.head_commit.message }}
```

最后提交代码到blog库，actions会自动部署代码到pages