(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{603:function(s,n,e){"use strict";e.r(n);var a=e(4),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h4",{attrs:{id:"创建项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("scrapy startproject ithome\n\ncd ithome\nscrapy genspider -t crawl news ithome.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"编写items-py文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写items-py文件"}},[s._v("#")]),s._v(" 编写items.py文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# -*- coding: utf-8 -*-\n# Define here the models for your scraped items\n#\n# See documentation in:\n# https://doc.scrapy.org/en/latest/topics/items.html\nimport scrapy\n\nclass IthomeItem(scrapy.Item):\n    # define the fields for your item here like:\n    # name = scrapy.Field()\n    #文章标题\n    title = scrapy.Field()\n    #文章url\n    url = scrapy.Field()\n    #来源\n    source = scrapy.Field()\n    #来源url\n    source_url = scrapy.Field()\n    #发布日期\n    release_大特＝ scrapy.Field()\n    #作者\n    author = scrapy.Field()\n    #关键词\n    key_words = scrapy.Field()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("h4",{attrs:{id:"编写爬虫文件-news-py"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写爬虫文件-news-py"}},[s._v("#")]),s._v(" 编写爬虫文件 news.py")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# -*- coding: utf-8 -*-\nimport scrapy\nfrom scrapy.linkextractors import LinkExtractor\nfrom scrapy.spiders import CrawlSpider, Rule\nfrom ithome.items import IthomeItem\nimport datatime\n\nclass NewsSpider(CrawlSpider):\n    name = 'news'\n    allowed_domains = ['ithome.com']\n    start_urls = ['http://www.ithome.com/0/411/151.htm']\n\n    rules = (\n        #文章URL形如http://www.ithome.com/0/411/369.htm\n        # 根据后三段数字来提取所有的文章url并跟进处理数据\n        Rule(LinkExtractor(allow=r'/\\d/\\d{3}/\\d{3}'), callback='parse_item', follow=True),\n    )\n\n    def parse_item(self, response):\n        item = IthomeItem()\n        #文章url\n        item['url'] = response.url\n        #文章标题\n        item['title'] = response.css('.post_title > h1::text').extract_first()\n        #文章作者\n        item['author'] = response.css('#author_baidu strong::text').extract_first()\n        #文章来源\n        item['source'] = response.css('#source_baidu > a::text').extract_first()\n        #文章来源url\n        item['source_url'] = response.css('#source_baidu > a::attr(href)').extract_first()\n        #关键词\n        item['key_words'] = response.css('.hot_tags > span a::text').extract()\n        return item\n    \n    def close(spider, reason):\n        self.crawler.stats.set_value('finish_time', datetime.datetime.now())\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br")])]),e("h4",{attrs:{id:"编写管道pipelines-py"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写管道pipelines-py"}},[s._v("#")]),s._v(" 编写管道pipelines.py")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# -*- coding: utf-8 -*-\n# Define your item pipelines here\n# Don't forget to add your pipeline to the ITEM_PIPELINES setting\n# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html\nfrom pymongo import MongoClient\nfrom scrapy.exceptions import DropItem\nimport datetime\n\nclass IthomePipeline(object):\n    #定义集合ithome_news\n    collection = 'ithome_news'\n\n    def __init__(self, mongo_uri, mongo_db, stats):\n        self.mongo_uri = mongo_uri\n        self.mongo_db = mongo_db\n        self.stats = stats\n\n    @classmethod\n    def from_crawler(cls,crawler):\n        return cls(\n            #从settings.py中获取MONGODB数据库连接信息，数据统计参数\n            mongo_uri = crawler.settings.get('MONGO_URI')\n            mongo_db = crawler.settings.get('MONGO_DB')\n            stats = crawler.stats,\n        )\n    \n    #爬虫启动时打开数据库\n    def open_spider(self, spider):\n        self.client = MongoClient(self.mongo_uri)\n        self.db = self.client[self.mongo_db]\n        #开启爬虫时将结束时间写入数据集参数start中\n        self.stats.set_value(''start), datetime.datetime.now())\n    \n    #爬虫关闭时关闭数据库连接\n    def close_spider(self, spider):\n        self.client.close()\n\n    def process_item(self, item, spider):\n        #如果抓取的item中含有title,则为有效数据，保存，否则丢弃\n        if not item['title']:\n            raise DropItem(\"数据不完整，丢弃: {}\".format(item))\n        else:\n            self.db[self.collection].insert_one(dict(item))\n        return item\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br")])]),e("h4",{attrs:{id:"编写settings-py"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写settings-py"}},[s._v("#")]),s._v(" 编写settings.py")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# Obey robots.txt rules\nROBOTSTXT_OBEY = False\n\n# Configure item pipelines\n# See https://doc.scrapy.org/en/latest/topics/item-pipeline.html\nITEM_PIPELINES = {\n   'ithome.pipelines.IthomePipeline': 300,\n}\n\n\n#当爬取到10000条数据时关闭爬虫\nCLOSESPIDER_ITEMCOUNT = 10000\n\n#MongoDB\nMONGO_URI = 'localhost:27017'\nMONGO_DB = 'ithome'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);