(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{543:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("需求：\n抓取的数据为电影名称、主演、上映日期、评分。将抓取的数据保存到maoyantop100.json文件，并将文件作为附件通过邮件发送给接收人。")]),s._v(" "),a("h4",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy startproject maoyan\n\nscrapy genspider -t crawl top100 maoyan.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"编写items-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写items-py"}},[s._v("#")]),s._v(" 编写items.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding: utf-8 -*-\n\nimport scrapy\n\nclass MaoyanItem(scrapy.Item):\n    # define the fields for your item here like:\n    # name = scrapy.Field()\n    # 电影名称\n    name = scrapy.Field()\n    # 主演\n    actors = scrapy.Field()\n    # 上映时间\n    releasetime = scrapy.Field()\n    # 评分\n    score = scrapy.Field()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h4",{attrs:{id:"编写管道pipelines-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写管道pipelines-py"}},[s._v("#")]),s._v(" 编写管道pipelines.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding: utf-8 -*-\n\nimport json\n\nclass MaoyanPipeline(object):\n    # 爬虫启动时创建文件maoyan.json\n    def open_spider(self,spider):\n        self.file = open('maoyantop100.json', 'w')\n\n    # 爬虫关闭时关闭文件\n    def close_spider(self,spider):\n        self.file.close()\n\n    # 将抓取数据写入json文件\n    def process_item(self, item, spider):\n        line = json.dumps(dict(item),ensure_ascii=False) + \"\\n\"\n        self.file.write(line)\n        return item\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h4",{attrs:{id:"编写爬虫文件top100-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写爬虫文件top100-py"}},[s._v("#")]),s._v(" 编写爬虫文件top100.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding: utf-8 -*-\nimport scrapy\nfrom scrapy.mail import MailSender\nfrom scrapy.linkextractors import LinkExtractor\nfrom scrapy.spiders import CrawlSpider, Rule\nfrom maoyan.items import MaoyanItem\n\nclass Top100Spider(CrawlSpider):\n    name = 'top100'\n    allowed_domains = ['maoyan.com']\n    start_urls = ['https://maoyan.com/board/4']\n\n    # 跟进每页电影目录\n    rules = (\n        Rule(LinkExtractor(allow=r'offset'),callback='parse_item', follow=True),\n    )\n\n    def parse_item(self, response):\n        movies = response.css('dd')\n        for movie in movies:\n            item = MaoyanItem()\n            item['name'] = movie.css('a::attr(title)').extract_first()\n            item['actors'] = movie.css('.star::text').re_first(r'主演：(.*)')\n            item['releasetime'] = movie.css('.releasetime').re_first(r'上映时间：(.*)</p>')\n            # 使用正则获取评分的组成部分,如[9,.,7]，分别为评分的整数，'.'，小数部分，组合之后9.7添加到item中\n            score = movie.css('.score').re(r'\\d|\\.')\n            item['score'] = ''.join(score)\n            yield item\n\n    def closed(self,reason):\n        # 使用settings中的设置初始化邮件实例\n        mail = MailSender.from_settings(self.settings)\n        # 将需要发送的附件数据使用‘rb’模式打开\n        files = open('./maoyantop100.json', 'rb')\n        # 注意attachment是一个迭代器，每一个数据包含三个部分：\n        # 1.附件的文件名\n        # 2.附件格式\n        # 3.需要发送的附件\n        attachment = [('maoyan_top_100_movies.json','application/json', files)]\n        # 发送邮件，to指定接收人列表，subject邮件主题，body邮件正文，attachs附件，mimetype邮件正文类型\n        mail.send(\n            to=['xxx@163.com'],\n            subject=u'maoyan movie',\n            body=u'this is a test',\n            attachs=attachment,\n            mimetype='text/plain',\n            )\n        # 关闭文件\n        files.close()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br")])]),a("h4",{attrs:{id:"编写settings-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写settings-py"}},[s._v("#")]),s._v(" 编写settings.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding: utf-8 -*-\n\nBOT_NAME = 'maoyan'\n\nSPIDER_MODULES = ['maoyan.spiders']\nNEWSPIDER_MODULE = 'maoyan.spiders'\n\n# Crawl responsibly by identifying yourself (and your website) on the user-agent\nUSER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'\n\n# Obey robots.txt rules\nROBOTSTXT_OBEY = False\n\n# Override the default request headers:\nDEFAULT_REQUEST_HEADERS = {\n  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',\n  'Accept-Language': 'zh-CN,zh;q=0.9',\n}\n\n# Configure item pipelines\n# See https://doc.scrapy.org/en/latest/topics/item-pipeline.html\nITEM_PIPELINES = {\n   'maoyan.pipelines.MaoyanPipeline': 300,\n}\n\n# 发送邮件设置\n# 指定邮件发送方\nMAIL_FROM = 'xxx@163.com'\n# 邮件发送服务器\nMAIL_HOST = 'smtp.163.com'\n# 发送人\nMAIL_USER = 'xxx'\n# 注意，这是授权码，不是邮箱密码，不同邮件获取授权码方式不一样。\nMAIL_PASS = '******'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);