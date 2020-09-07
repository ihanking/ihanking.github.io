module.exports = {
  "title": "Hank's Blog",
  "description": "专注于爬虫、数据分析与挖掘,涉及python、sql、go、js",
  "dest": "public",
  "base":"",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "爬虫",
        "icon": "reco-message",
        "items": [
          {
            "text": "爬虫实战",
            "link": "/docs/spider/actual/"
          },
          {
            "text": "Scrapy框架",
            "link": "/docs/spider/scrapy/"
          },
          {
            "text": "解析数据",
            "link": "/docs/spider/parse/"
          },
          {
            "text": "其他",
            "link": "/docs/spider/other/"
          },
        ]
      },
      {
        "text": "数据分析",
        "icon": "reco-message",
        "items": [
          {
            "text": "数分实战",
            "link": "/docs/analysis/actual/"
          },
          {
            "text": "可视化",
            "link": "/docs/analysis/visualization/"
          },
          {
            "text": "数据思维",
            "link": "/docs/analysis/thinking/"
          },
          {
            "text": "数据处理",
            "link": "/docs/analysis/process/"
          },
          {
            "text": "分析报告",
            "link": "/docs/analysis/report/"
          },
        ]
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/ihanking",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "博客园",
        "desc": "Just Gan It",
        //"email": "1156743527@qq.com",
        "link": "https://www.cnblogs.com/hankleo/"
      },
      // {
      //   "title": "vuepress-theme-reco",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Hank",
    "authorAvatar": "/avatar.png",
    //"record": "xxxx",
    "startYear": "2020",
    vssueConfig: {
      platform: 'github',
      owner: 'ihanking',
      repo: 'vssue',
      clientId: '49bd8c8133b2552d409a',
      clientSecret: 'f2d678bed3c0c52e9d25ebab5eda15e393d1bfad',
    },
    // "valineConfig": {
    //   "appId": "9EcPctz8VByNhjQKT54mJDOx-gzGzoHsz",//process.env.LEANCLOUD_APP_ID,
    //   "appKey": "DzM9rJEzytfEXUlbCycHc8kB"//process.env.LEANCLOUD_APP_KEY,
    // }
  },
  "markdown": {
    "lineNumbers": true
  }
}
