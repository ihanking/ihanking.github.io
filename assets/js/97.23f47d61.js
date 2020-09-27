(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{577:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#Scrapy项目名字\nBOT_NAME = 'segmentfault'\n\n#Scrapy搜索spider的模块列表\nSPIDER_MODULES = ['segmentfault.spiders']\n\n#使用爬虫创建命令genspider创建爬虫时生成的模块\nNEWSPIDER_MODULE = 'segmentfault.spiders'\n\n#默认的USER_AGENT, 使用BOT_NAME配置生成，建议覆盖\n#USER_AGNET = 'segmentfault (+http://www.yourdomain.com)'\n\n#如果启用，Scrapy则会遵守网站Rebots.txt协议，建议设置为False\nROBOTSTXT_OBEY = True\n\n#配置Scrapy最大并发数，默认为32，一般需要增大设置\nCONCURRENT_REQUESTS = 32\n\n#为同一个站点设置下载延迟\nDOWNLOAD_DELAY = 3\n\n#下载延迟的设置只会根据以下两个中的一个生效\n#对单个网站设置最大的请求并发数\n#CONCURRENT_REQUESTS_PER_DOMAIN = 16\n\n#对单个IP设置最大的请求并发数\n#CONCURRENT_REQUESTS_PER_IP = 16\n\n#禁用Cookie, 默认True启用，建议为False\n#COOKIES_ENABLED = False\n\n#关闭Telent控制台，默认启用\n#TELNETCONSOLE_ENABLED = False\n\n#默认的请求头，根据爬取网站覆盖\n#DEFAULT_REQUEST_HEADERS = {\n#    'Accept': '',\n#    'Accept-Language': 'en',\n#}\n\n#启用Spider爬虫中间件\n#SPIDER_MIDDLEWARES = {\n#    'segmentfault.middlewares.SegmentfaultSpiderMiddleware': 543,\n#}\n\n#启用Downloader下载器中间件\n#DOWNLOADER_MIDDLEWARES = {\n#    'segmentfault.middlewares.SegmentfaultDownloaderMiddleware': 543,\n#}\n\n#启用扩展\n#EXTENSIONS = {\n#    'scrapy.extensions.telnet.TelnetConsole': None,\n#}\n\n#配置管道信息\n#ITEM_PIPELINES = {\n#    'segmentfault.pipelines.SegmentfaultPipeline': 300,\n#}\n\n#启用配置AutoThrottle扩展，默认禁用，建议启用\n#AUTOTHROTTLE_ENABLED = True\n\n#初始化下载延迟\n#AUTOTHROTTLE_START_DELAY = 5\n\n#高延迟下最大的下载延迟\n#AUTOTHROTTLE_MAX_DELAY = 60\n\n#Scrapy请求应该并行发送每个远程服务器的平均数量\n#AUTOTHROTTLE_TARGENT_CONCURRENCY = 1.0\n\n#启用调试模式，统计每一个响应状态数据\n#AUTOTHROTTLE_DEBUG = False\n\n#启用和配置HTTP缓存\n#HTTPCACHE_ENABLED = True\n\n#HTTP缓存目录\nHTTPCHCHE_DIR = 'httpcache'\n\n#HTTP缓存忽略的响应状态码\nHTTPCACHE_IGNORE_HTTP_CODES = []\n\n#HTTP缓存存储目录\n#HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);