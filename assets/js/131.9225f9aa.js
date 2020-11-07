(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{608:function(s,e,a){"use strict";a.r(e);var n=a(4),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"通用爬虫之crawlspider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用爬虫之crawlspider"}},[s._v("#")]),s._v(" 通用爬虫之CrawlSpider")]),s._v(" "),a("p",[s._v("步骤01: 创建爬虫项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy startproject quotes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("步骤02: 创建爬虫模版")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy genspider -t quotes quotes.toscrape.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("步骤03: 配置爬虫文件quotes.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import scrapy\nfrom scrapy.spiders import CrawlSpider, Rule\nfrom scrapy.linkextractors import LinkExtractor\n\n\nclass Quotes(CrawlSpider):\n\t# 爬虫名称\n    name = \"get_quotes\"\n    allow_domain = ['quotes.toscrape.com']\n    start_urls = ['http://quotes.toscrape.com/']\n\n# 设定规则\n    rules = (\n        # 对于quotes内容页URL，调用parse_quotes处理，\n      \t\t# 并以此规则跟进获取的链接\n        Rule(LinkExtractor(allow=r'/page/\\d+'), callback='parse_quotes', follow=True),\n      \t\t# 对于author内容页URL，调用parse_author处理，提取数据\n        Rule(LinkExtractor(allow=r'/author/\\w+'), callback='parse_author')\n    )\n\n# 提取内容页数据方法\n    def parse_quotes(self, response):\n        for quote in response.css(\".quote\"):\n            yield {'content': quote.css('.text::text').extract_first(),\n                   'author': quote.css('.author::text').extract_first(),\n                   'tags': quote.css('.tag::text').extract()\n                   }\n\t# 获取作者数据方法\n\n    def parse_author(self, response):\n        name = response.css('.author-title::text').extract_first()\n        author_born_date = response.css('.author-born-date::text').extract_first()\n        author_bron_location = response.css('.author-born-location::text').extract_first()\n        author_description = response.css('.author-description::text').extract_first()\n\n        return ({'name': name,\n                 'author_bron_date': author_born_date,\n                 'author_bron_location': author_bron_location,\n                 'author_description': author_description\n                 })\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br")])]),a("p",[s._v("步骤04: 运行爬虫")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy crawl quotes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"通用爬虫之csvfeedspider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用爬虫之csvfeedspider"}},[s._v("#")]),s._v(" 通用爬虫之CSVFeedSpider")]),s._v(" "),a("p",[s._v("步骤01: 创建项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy startproject csvfeedspider\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("步骤02: 使用csvfeed模版")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy genspider -t csvfeed csvdata gzdata.gov.cn\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("步骤03: 编写items.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding: utf-8 -*-\n\n# Define here the models for your scraped items\n#\n# See documentation in:\n# https://doc.scrapy.org/en/latest/topics/items.html\n\nimport scrapy\n\n\nclass CsvspiderItem(scrapy.Item):\n    # define the fields for your item here like:\n    # 姓名\n    name = scrapy.Field()\n    # 研究领域\n    SearchField = scrapy.Field()\n    # 服务分类\n    Service = scrapy.Field()\n    # 专业特长\n    Specialty = scrapy.Field()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("步骤04: 编写爬虫文件csvdata.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding: utf-8 -*-\nfrom scrapy.spiders import CSVFeedSpider\nfrom csvfeedspider.items import CsvspiderItem\n\n\nclass CsvparseSpider(CSVFeedSpider):\n    name = 'csvdata'\n    allowed_domains = ['gzdata.gov.cn']\n    start_urls = ['http://gzopen.oss-cn-guizhou-a.aliyuncs.com/科技特派员.csv']\n    headers = ['name', 'SearchField', 'Service', 'Specialty']\n    delimiter = ','\n    quotechar = \"\\n\"\n\n    # Do any adaptations you need here\n    def adapt_response(self, response):\n       return response.body.decode('gb18030')\n\n    def parse_row(self, response, row):\n\n        i = CsvspiderItem()\n        try:\n            i['name'] = row['name']\n            i['SearchField'] = row['SearchField']\n            i['Service'] = row['Service']\n            i['Specialty'] = row['Specialty']\n\n        except:\n            pass\n        yield i\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("步骤05: 运行爬虫文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy crawl csvdata\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"通用爬虫之sitemapspider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用爬虫之sitemapspider"}},[s._v("#")]),s._v(" 通用爬虫之SitemapSpider")]),s._v(" "),a("p",[s._v("步骤01: 创建项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy startproject cnblogs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("步骤02: 编写items.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding: utf-8 -*-\n\n# Define here the models for your scraped items\n#\n# See documentation in:\n# https://doc.scrapy.org/en/latest/topics/items.html\n\nimport scrapy\n\nclass CnblogsItem(scrapy.Item):\n    # define the fields for your item here like:\n    # 文章标题\n    title = scrapy.Field()\n    # 文章url\n    url = scrapy.Field()\n    # 文章作者\n    author = scrapy.Field()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("步骤03: 在spiders文件夹内创建articles.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("from scrapy.spiders import SitemapSpider\nfrom cnblogs.items import CnblogsItem\n\nclass MySpider(SitemapSpider):\n    name = 'articles'\n    # Sitemap 地址\n    sitemap_urls = ['http://www.cnblogs.com/sitemap.xml']\n    # 从Sitemap中提取url的规则，并指定回调方法\n    sitemap_rules = [\n        # 抓取 ***/cate/python/**的url，调用parse_python处理\n        ('/cate/python/','parse_python')\n    ]\n\n    # 回调方法\n    def parse_python(self,response):\n        articles = response.css('.post_item')\n\n        for article in articles:\n            item = CnblogsItem()\n            # 文章标题\n            item['title'] = article.css('.titlelnk::text').extract_first()\n            # 文章url\n            item['url'] = article.css('.titlelnk::attr(href)').extract_first()\n            # 文章作者\n            item['author'] = article.css('.lightblue::text').extract_first()\n            yield item\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("步骤04: 运行爬虫")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy crawl articles\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"通用爬虫之xmlfeedspider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用爬虫之xmlfeedspider"}},[s._v("#")]),s._v(" 通用爬虫之XMLFeedSpider")]),s._v(" "),a("p",[s._v("步骤01: 创建项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy startproject xmlfeedspider\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("步骤02: 使用XMLFeedSpider模版创建爬虫")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scrapy genspider -t xmlfeed jobbole jobbole.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("步骤03: 修改items.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import scrapy\n\nclass JobboleItem(scrapy.Item):\n    # define the fields for your item here like:\n    # name = scrapy.Field()\n    # 文章标题\n    title = scrapy.Field()\n    # 发表日期\n    public_date = scrapy.Field()\n    # 文章链接\n    link = scrapy.Field()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("步骤04: 配置爬虫文件jobbole.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding: utf-8 -*-\nfrom scrapy.spiders import XMLFeedSpider\n# 导入item\nfrom xmlfeedspider.items import JobboleItem\n\nclass JobboleSpider(XMLFeedSpider):\n    name = 'jobbole'\n    allowed_domains = ['jobbole.com']\n    start_urls = ['http://top.jobbole.com/feed/']\n    iterator = 'iternodes'  # 迭代器，不指定的话默认是iternodes\n    itertag = 'item'  # 抓取item节点\n\n    def parse_node(self, response, selector):\n        item = JobboleItem()\n        item['title'] = selector.css('title::text').extract_first()\n        item['public_date'] = selector.css('pubDate::text').extract_first()\n        item['link'] = selector.css('link::text').extract_first()\n        return item\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);