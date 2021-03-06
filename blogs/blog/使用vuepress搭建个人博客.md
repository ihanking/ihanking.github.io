---
title: 使用vuepress搭建个人博客
date: 2020-09-04
tags: ["vuepress","blog"]
showSponsor: true
---

## 安装

```
# 初始化
sudo yarn global add @vuepress-reco/theme-cli
theme-cli init my-blog

# 安装
cd my-blog
sudo yarn install
```


## 博客设置

### package.json文件
```
// package.json
"scripts": {
  "dev": "vuepress dev .",
  "build": "vuepress build ."
}
```

### config.js文件
```
// docs/.vuepress/config.js

module.exports = {

  // host: '0.0.0.0',  // 生成网页地址（本地调试使用）
  // port: '22335',  // 生成网页端口（本地调试使用）
  title: "Tsanfer's Blog",  // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '现居住于猎户臂上的一个碳基生命',  // meta 中的描述文字，用于SEO
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],  //浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }], //在移动端，搜索框在获得焦点时会放大
  ],

  theme: 'reco',  //选择主题‘reco’
  themeConfig: {
    type: 'blog', //选择类型博客
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      },
    },
    nav: [  //导航栏设置
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '联系', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/Tsanfer', icon: 'reco-github' },
          { text: 'CSDN', link: 'https://blog.csdn.net/qq_27961843/', icon: 'reco-csdn' },
          { text: 'BiliBili', link: 'https://space.bilibili.com/12167681', icon: 'reco-bilibili' },
          { text: 'QQ', link: 'tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=1124851454', icon: 'reco-qq' },
          { text: 'twitter', link: 'https://twitter.com/a1124851454', icon: 'reco-twitter' },
          { text: 'Gmail', link: 'mailto:a1124851454@gmail.com', icon: 'reco-mail' },
        ]
      }
    ],
    sidebar: 'auto',  //在所有页面中启用自动生成侧栏
    record: '蜀ICP备20005033号-1',
    startYear: '2020', // 项目开始时间，只填写年份
    lastUpdated: '最后更新时间', // string | boolean
    author: 'Tsanfer',
    authorAvatar: '/avatar.svg',  //作者头像
    mode: 'light',  //默认显示白天模式
    // 评论设置
    valineConfig: {
      appId: process.env.LEANCLOUD_APP_ID,
      appKey: process.env.LEANCLOUD_APP_KEY,
    }
  },

  markdown: {
    lineNumbers: true //代码显示行号
  },
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,

  // 插件
  plugins: [
    ['flowchart'],  // 支持流程图
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',  // BGM播放器
      {
        audios: [
          {name: 'Faster Than Light',artist: 'Andreas Waldetoft / Mia Stegmar',url: 'https://cdn-image.tsanfer.xyz/music/Andreas%20Waldetoft%2CMia%20Stegmar%20-%20Faster%20Than%20Light.mp3',cover: 'https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg'},
          {name: 'Dawn',artist: 'DDRKirby(ISQ)',url: 'https://cdn-image.tsanfer.xyz/music/Dawn%20-%20DDRKirby%28ISQ%29.mp3',cover: 'https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg'},
          {name: 'TRON Legacy (End Titles)',artist: 'Daft Punk',url: 'https://cdn-image.tsanfer.xyz/music/Daft%20Punk%20-%20TRON%20Legacy%20%28End%20Titles%29.mp3',cover: 'https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg'},
          {name: 'Broken Boy',artist: 'Tonspender',url: 'https://cdn-image.tsanfer.xyz/music/Tonspender%20-%20Broken%20Boy.flac',cover: 'https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg'},
          {name: 'Life Of Sin Pt. 4',artist: 'MitiS',url: 'https://cdn-image.tsanfer.xyz/music/MitiS%20-%20Life%20Of%20Sin%20Pt.%204.mp3',cover: 'https://p2.music.126.net/LmjTrSwvSLSNBsfFsQFO6g==/2533274793491743.jpg'},
          {name: 'Sea Of Voices (RAC Mix)',artist: 'Porter Robinson',url: 'https://cdn-image.tsanfer.xyz/music/Porter%20Robinson%20-%20Sea%20Of%20Voices%20%28RAC%20Mix%29.mp3',cover: 'https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg'},
          {name: 'New Lipstick',artist: 'The Kissaway Trail',url: 'https://cdn-image.tsanfer.xyz/music/The%20Kissaway%20Trail%20-%20New%20Lipstick.flac',cover: 'https://p2.music.126.net/VjN74c1hoYgPCEZ9DngeQw==/109951163772624643.jpg'},
        ],
      },
    ],
    ['vuepress-plugin-smooth-scroll'],  // 平滑滚动
    ['@vuepress/nprogress'],  // 加载进度条
    ['reading-progress']  // 阅读进度条
  ]
}
```


### 添加评论

评论插件有两种，本文选择Vssue

**Valine**
```
module.exports = {
  theme: 'reco',
  themeConfig: {
    valineConfig: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }  
}
```

其他参数参考[官网](https://valine.js.org/configuration.html)


**Vssue**
```
module.exports = {
  theme: 'reco',
  themeConfig: {
    vssueConfig: {
      platform: 'github',
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    }
  }  
}
```

其他参考[官网](https://vssue.js.org/zh/guide/github.html#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84-oauth-app)


### 本地运行

```
// 本地运行文档
npm run dev

//编译打包生产静态 HTML 文件
npm run build

//或者
yarn run dev

yarn run build

```

## 自动化部署

### github创建仓库

### 创建key

首先打开shell执行 `ssh-keygen -t rsa -C "xxx@qq.com"`

执行完后查看key `cat ~/.ssh/id_rsa.pub`


### 编写workflows文件
```
name: github pages

on:
  push:
    branches:
    - master

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - run: npm ci
    - run: npm run build

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v2
      env:
          ACTIONS_DEPLOY_KEY: ${{ secrets.key }}
          PUBLISH_BRANCH: gh-pages
          PUBLISH_DIR: public
      with:
          emptyCommits: false
```

### 创建自动推送脚本
```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

git init
#git remote add origin https://github.com/ihanking/ihanking.github.io.git
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f origin master

cd -
```