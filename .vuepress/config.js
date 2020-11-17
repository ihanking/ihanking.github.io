module.exports = {
  "title": "Hank's Blog",
  "description": "专注于爬虫、数据分析与挖掘,涉及python/sql/go/js",
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
    // vssueConfig: {
    //   platform: 'github',
    //   owner: 'ihanking',
    //   repo: 'vssue',
    //   clientId: '49bd8c8133b2552d409a',
    //   clientSecret: 'f2d678bed3c0c52e9d25ebab5eda15e393d1bfad',
    // },
    "valineConfig": {
      "appId": "rXhqdo4xn2xcLvjKs2mBz0Bc-gzGzoHsz",//process.env.LEANCLOUD_APP_ID,
      "appKey": "n1sDcU3nqv7DdRpXuunndvql"//process.env.LEANCLOUD_APP_KEY,
    },
    "noFoundPageByTencent": false,
  },
  "markdown": {
    "lineNumbers": true
  },
//   "plugins": [
//     [
//      'vuepress-plugin-sponsor',
//      {
//        theme: 'simple',
//       //  alipay: '/sponsor-qrcode/qrcode-alipay.png',
//        wechat: '/qrcode-wechat.png',
//       //  qq: '/sponsor-qrcode/qrcode-qq.png',
//       //  paypal: 'https://www.paypal.me/yokefellow',
//        duration: 2000
//      }
//    ]
//  ]
}
