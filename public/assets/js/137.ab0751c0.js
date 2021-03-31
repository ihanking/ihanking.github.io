(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{642:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"创建爬虫项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建爬虫项目"}},[s._v("#")]),s._v(" 创建爬虫项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy startproject lianjiahouse\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"创建爬虫文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建爬虫文件"}},[s._v("#")]),s._v(" 创建爬虫文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy genspider -t craw house lianjia.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"编写items-py文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写items-py文件"}},[s._v("#")]),s._v(" 编写items.py文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding: utf-8 -*-\n\n# Define here the models for your scraped items\n#\n# See documentation in:\n# https://doc.scrapy.org/en/latest/topics/items.html\n\nimport scrapy\n\nclass LianjiahouseItem(scrapy.Item):\n    # define the fields for your item here like:\n    # name = scrapy.Field()\n    # 发布信息名称\n    house_name = scrapy.Field()\n    # 小区名称\n    community_name = scrapy.Field()\n    # 所在区域\n    # location = scrapy.Field()\n    # 链家编号\n    house_record = scrapy.Field()\n    # 总售价\n    total_amount = scrapy.Field()\n    # 单价\n    unit_price = scrapy.Field()\n    # 房屋基本信息\n    # 建筑面积\n    area_total = scrapy.Field()\n    # 套内面积\n    area_use = scrapy.Field()\n    # 厅室户型\n    house_type = scrapy.Field()\n    # 朝向\n    direction = scrapy.Field()\n    # 装修情况\n    sub_info = scrapy.Field()\n    # 供暖方式\n    heating_method = scrapy.Field()\n    # 产权\n    house_property = scrapy.Field()\n    # 楼层\n    floor = scrapy.Field()\n    # 总层高\n    total_floors = scrapy.Field()\n    # 电梯\n    is_left = scrapy.Field()\n    # 户梯比例\n    left_rate = scrapy.Field()\n    # 户型结构\n    structure = scrapy.Field()\n    # 房屋交易信息\n    # 挂牌时间\n    release_date = scrapy.Field()\n    # 上次交易时间\n    last_trade_time = scrapy.Field()\n    # 房屋使用年限\n    house_years = scrapy.Field()\n    # 房屋抵押信息\n    pawn = scrapy.Field()\n    # 交易权属\n    trade_property = scrapy.Field()\n    # 房屋用途\n    house_usage = scrapy.Field()\n    # 产权所有\n    property_own = scrapy.Field()\n    # 图片地址\n    images_urls = scrapy.Field()\n    # 保存图片\n    images = scrapy.Field()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br")])]),a("h4",{attrs:{id:"编写pipelines-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写pipelines-py"}},[s._v("#")]),s._v(" 编写pipelines.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding: utf-8 -*-\n\n# Define your item pipelines here\n# Don't forget to add your pipeline to the ITEM_PIPELINES setting\n# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html\n\nimport pymongo\nfrom scrapy.pipelines.images import ImagesPipeline\nfrom scrapy import Request\n\nclass LianjiahousePipeline(object):\n    # 设置存储文档名称\n    collection_name = 'lianjiahouse'\n\n    def __init__(self, mongo_uri, mongo_db):\n        self.mongo_uri = mongo_uri\n        self.mongo_db = mongo_db\n\n    @classmethod\n    def from_crawler(cls, crawler):\n        return cls(\n            # 通过crawler获取settings文件，获取其中的MongoDB配置信息\n            mongo_uri=crawler.settings.get('MONGO_URI'),\n            mongo_db=crawler.settings.get('MONGO_DATABASE', 'lianjia')\n        )\n\n    def open_spider(self, spider):\n        # 当爬虫打开时连接MongoDB数据库\n        # 先连接server，在连接指定数据库\n        self.client = pymongo.MongoClient(self.mongo_uri)\n        self.db = self.client[self.mongo_db]\n\n    def close_spider(self, spider):\n        # 爬虫结束时关闭数据库连接\n        self.client.close()\n\n    def process_item(self, item, spider):\n        # 将item插入数据库\n        self.db[self.collection_name].insert(dict(item))\n        return item\n\nclass LianjiaImagePipeline(ImagesPipeline):\n    def get_media_requests(self, item, info):\n        for image_url in item['images_urls']:\n            # 将图片地址传入Request，进行下载，同时将item做参数添加到Request中\n            yield Request(image_url, meta={'item': item})\n\n    def file_path(self, request, response=None, info=None):\n        # 从Request中获取item，以房屋标题做文件夹名称\n        item = request.meta['item']\n        image_folder = item['house_name']\n        # 使用图片url做图片存储名称\n        image_guild = request.url.split('/')[-1]\n        # 图片保存，文件夹/图片\n        image_save = u'{0}/{1}'.format(image_folder, image_guild)\n        return image_save\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br")])]),a("h4",{attrs:{id:"编写settings-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写settings-py"}},[s._v("#")]),s._v(" 编写settings.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding: utf-8 -*-\n\n# Scrapy settings for lianjiahouse project\n#\n# For simplicity, this file contains only settings considered important or\n# commonly used. You can find more settings consulting the documentation:\n#\n#     https://doc.scrapy.org/en/latest/topics/settings.html\n#     https://doc.scrapy.org/en/latest/topics/downloader-middleware.html\n#     https://doc.scrapy.org/en/latest/topics/spider-middleware.html\n\nBOT_NAME = 'lianjiahouse'\n\nSPIDER_MODULES = ['lianjiahouse.spiders']\nNEWSPIDER_MODULE = 'lianjiahouse.spiders'\n\n\n# Crawl responsibly by identifying yourself (and your website) on the user-agent\n#USER_AGENT = 'lianjiahouse (+http://www.yourdomain.com)'\n\n# Obey robots.txt rules\nROBOTSTXT_OBEY = True\n\n# Configure maximum concurrent requests performed by Scrapy (default: 16)\n#CONCURRENT_REQUESTS = 32\n\n# Configure a delay for requests for the same website (default: 0)\n# See https://doc.scrapy.org/en/latest/topics/settings.html#download-delay\n# See also autothrottle settings and docs\n#DOWNLOAD_DELAY = 3\n# The download delay setting will honor only one of:\n#CONCURRENT_REQUESTS_PER_DOMAIN = 16\n#CONCURRENT_REQUESTS_PER_IP = 16\n\n# Disable cookies (enabled by default)\n#COOKIES_ENABLED = False\n\n# Disable Telnet Console (enabled by default)\n#TELNETCONSOLE_ENABLED = False\n\n# Override the default request headers:\n#DEFAULT_REQUEST_HEADERS = {\n#   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',\n#   'Accept-Language': 'en',\n#}\n\n# Enable or disable spider middlewares\n# See https://doc.scrapy.org/en/latest/topics/spider-middleware.html\nSPIDER_MIDDLEWARES = {\n   'lianjiahouse.middlewares.LianjiahouseSpiderMiddleware': 543,\n}\n\n# Enable or disable downloader middlewares\n# See https://doc.scrapy.org/en/latest/topics/downloader-middleware.html\nDOWNLOADER_MIDDLEWARES = {\n   'lianjiahouse.middlewares.LianjiahouseDownloaderMiddleware': 543,\n}\n\n# Enable or disable extensions\n# See https://doc.scrapy.org/en/latest/topics/extensions.html\n#EXTENSIONS = {\n#    'scrapy.extensions.telnet.TelnetConsole': None,\n#}\n\n# Configure item pipelines\n# See https://doc.scrapy.org/en/latest/topics/item-pipeline.html\nITEM_PIPELINES = {\n    'lianjiahouse.pipelines.LianjiahousePipeline': 300,\n    'lianjiahouse.pipelines.LianjiaImagePipeline':400\n}\n\n# Enable and configure the AutoThrottle extension (disabled by default)\n# See https://doc.scrapy.org/en/latest/topics/autothrottle.html\n#AUTOTHROTTLE_ENABLED = True\n# The initial download delay\n#AUTOTHROTTLE_START_DELAY = 5\n# The maximum download delay to be set in case of high latencies\n#AUTOTHROTTLE_MAX_DELAY = 60\n# The average number of requests Scrapy should be sending in parallel to\n# each remote server\n#AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0\n# Enable showing throttling stats for every response received:\n#AUTOTHROTTLE_DEBUG = False\n\n# Enable and configure HTTP caching (disabled by default)\n# See https://doc.scrapy.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings\n#HTTPCACHE_ENABLED = True\n#HTTPCACHE_EXPIRATION_SECS = 0\n#HTTPCACHE_DIR = 'httpcache'\n#HTTPCACHE_IGNORE_HTTP_CODES = []\n#HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'\n\n# 图片存储配置\nIMAGES_STORE = 'D:\\\\Scrapy\\\\lianjia\\\\images'\nIMAGES_URLS_FIELD = 'images_urls'\nIMAGES_RESULT_FIELD = 'images'\n\n# MongoDB配置信息\nMONGO_URI = 'localhost:27017'\nMONGO_DATABASE = 'lianjia'\n\n# 代理列表\nPROXY_LIST = [\n'http://116.209.57.41:9999',\n'http://117.90.252.151:9999',\n'http://221.239.86.26:32228',\n'http://117.95.12.239:9999',\n'http://18.223.141.123:80',\n'http://121.232.148.113:9000',\n'http://120.198.230.65:8080',\n'http://113.122.168.105:9999',\n'http://218.95.48.156:9000',\n'http://115.223.207.109:9000',\n'http://183.3.221.186:8118',\n'http://114.234.81.72:9000',\n'http://111.177.177.87:9999',\n'http://60.217.64.237:45091',\n'http://36.248.129.240:9999'\n]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br")])]),a("h4",{attrs:{id:"编写middlewares-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写middlewares-py"}},[s._v("#")]),s._v(" 编写middlewares.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# -*- coding: utf-8 -*-\n\n# Define here the models for your spider middleware\n#\n# See documentation in:\n# https://doc.scrapy.org/en/latest/topics/spider-middleware.html\n\nfrom scrapy import signals\nimport scrapy\nimport random\n\nclass LianjiaSpiderMiddleware(object):\n    """\n    利用Scrapy数据收集功能，记录相同小区的数量\n    """\n    def __init__(self, stats):\n        self.stats = stats\n\n    @classmethod\n    def from_crawler(cls, crawler):\n        return cls(stats=crawler.stats)\n\n    def process_spider_output(self, response, result, spider):\n        """\n        从item中获取小区名称，在数据收集其中记录相同小区数量\n        :param response:\n        :param result:\n        :param spider:\n        :return:\n        """\n        for item in result:\n            if isinstance(item,scrapy.Item):\n                # 从result中的item获取小区名称\n                community_name = item[\'community_name\']\n                # 在数据统计中为相同的小区增加数量值\n                self.stats.inc_value(community_name)\n            yield item\n\nclass LianjiaDownloaderMiddleware(object):\n    """\n    为请求添加代理\n    """\n    def __init__(self,proxy_list):\n        self.proxy_list = proxy_list\n\n    @classmethod\n    def from_crawler(cls, crawler):\n        # 从settings.py中获取代理列表\n        return cls(\n            proxy_list=crawler.settings.get(\'PROXY_LIST\')\n        )\n\n    def process_request(self, request, spider):\n        # 从代理列表中随机选取一个添加至请求\n        proxy = random.choice(self.proxy_list)\n        request.meta[\'proxy\'] = proxy\n\n    def spider_opened(self, spider):\n        spider.logger.info(\'Spider opened: %s\' % spider.name)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br")])]),a("h4",{attrs:{id:"编写爬虫文件house-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写爬虫文件house-py"}},[s._v("#")]),s._v(" 编写爬虫文件house.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding: utf-8 -*-\nimport scrapy\nfrom scrapy.linkextractors import LinkExtractor\nfrom scrapy.spiders import CrawlSpider, Rule\nfrom lianjiahouse.items import LianjiahouseItem\n\nclass HouseSpider(CrawlSpider):\n    name = 'lianjiahouse'\n    allowed_domains = ['lianjia.com']\n    start_urls = ['https://bj.lianjia.com/ershoufang/pg2/']\n\n    rules = (\n        Rule(LinkExtractor(allow='/ershoufang/\\d{12}.html'), callback='parse_item'),\n    )\n\n    def parse_item(self, response):\n        i = LianjiahouseItem()\n        # 二手房名称\n        i['house_name'] = response.css('title::text').extract_first().replace(' ','')\n        # 所在小区\n        i['community_name'] = response.css('.communityName a::text').extract_first()\n        # i['location'] = response.css()\n        # 链家编号\n        i['house_record'] = response.css('.houseRecord .info::text').extract_first()\n        # 总价\n        i['total_amount'] = response.css('.overview .total::text').extract_first()\n        # 房屋信息\n        # 单价\n        i['unit_price'] = response.css('.unitPriceValue::text').extract_first()\n        # 建筑总面积\n        i['area_total'] = response.xpath('//div[@class=\"base\"]//ul/li[3]/text()').re_first('\\d+.\\d+')\n        # 使用面积\n        i['area_use'] = response.xpath('//div[@class=\"base\"]//ul/li[5]/text()').re_first('\\d+.\\d+')\n        # 房屋类型\n        i['house_type'] = response.xpath('//div[@class=\"base\"]//ul/li[1]/text()').extract_first()\n        # 房屋朝向\n        i['direction'] = response.xpath('//div[@class=\"base\"]//ul/li[7]/text()').extract_first()\n        # 装修情况\n        i['sub_info'] = response.xpath('//div[@class=\"base\"]//ul/li[9]/text()').extract_first()\n        # 供暖方式\n        i['heating_method'] = response.xpath('//div[@class=\"base\"]//ul/li[11]/text()').extract_first()\n        # 产权\n        i['house_property'] = response.xpath('//div[@class=\"base\"]//ul/li[13]/text()').extract_first()\n        # 楼层\n        i['floor'] = response.xpath('//div[@class=\"base\"]//ul/li[2]/text()').extract_first()\n        # 总楼层\n        i['total_floors'] = response.xpath('//div[@class=\"base\"]//ul/li[2]/text()').re_first(r'\\d+')\n        # 是否有电梯\n        i['is_left'] = response.xpath('//div[@class=\"base\"]//ul/li[12]/text()').extract_first()\n        # 户梯比例\n        i['left_rate'] = response.xpath('//div[@class=\"base\"]//ul/li[10]/text()').extract_first()\n        # 挂牌时间\n        i['release_date'] = response.xpath('//div[@class=\"transaction\"]//ul/li[1]/span[2]/text()').extract_first()\n        # 最后交易时间\n        i['last_trade_time'] = response.xpath('//div[@class=\"transaction\"]//ul/li[3]/span[2]/text()').extract_first()\n        # 房屋使用年限\n        i['house_years'] = response.xpath('//div[@class=\"transaction\"]//ul/li[5]/span[2]/text()').extract_first()\n        # 房屋抵押信息,抵押信息中有空格及换行符，先通过replace()将空格去掉，再通过strip()将换行符去掉\n        i['pawn'] = response.xpath('//div[@class=\"transaction\"]//ul/li[7]/span[2]/text()').extract_first().replace(' ','').strip()\n        # 交易权属\n        i['trade_property'] = response.xpath('//div[@class=\"transaction\"]//ul/li[2]/span[2]/text()').extract_first()\n        # 房屋用途\n        i['house_usage'] = response.xpath('//div[@class=\"transaction\"]//ul/li[4]/span[2]/text()').extract_first()\n        # 产权所有\n        i['property_own'] = response.xpath('//div[@class=\"transaction\"]//ul/li[6]/span[2]/text()').extract_first()\n        # 图片url\n        i['images_urls'] = response.css('.smallpic > li::attr(data-pic)').extract()\n        yield i\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br")])]),a("p",[a("strong",[s._v("最后运行爬虫")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy crawl house\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);