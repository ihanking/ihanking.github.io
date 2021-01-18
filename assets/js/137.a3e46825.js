(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{614:function(s,r,n){"use strict";n.r(r);var e=n(4),t=Object(e.a)({},(function(){var s=this,r=s.$createElement,n=s._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('import scrapy\n\nfrom scrapy.spidermiddlewares.httperror import HttpError\nfrom twisted.internet.error import DNSLookupError\nfrom twisted.internet.error import TimeoutError, TCPTimedOutError\n\nclass ErrbackSpider(scrapy.Spider):\n    name = "errback_example"\n    start_urls = [\n        "http://www.httpbin.org/",              \t# 正常HTTP 200返回\n        "http://www.httpbin.org/status/404",    \t# 404 Not found error\n        "http://www.httpbin.org/status/500",    \t# 500服务器错误\n        "http://www.httpbin.org:12345/",        \t# 超时无响应错误\n        "http://www.httphttpbinbin.org/",       \t# DNS 错误\n    ]\n\n    def start_requests(self):\n        for u in self.start_urls:\n            yield scrapy.Request(u, callback=self.parse_httpbin,\n                                    errback=self.errback_httpbin,\n                                    dont_filter=True)\n\n    def parse_httpbin(self, response):\n        self.logger.info(\'Got successful response from {}\'.format(response.url))\n        # 其他处理.\n\n    def errback_httpbin(self, failure):\n        # 日志记录所有的异常信息\n        self.logger.error(repr(failure))\n\n        # 假设我们需要对指定的异常类型做处理，\n        # 我们需要判断异常的类型\n\n        if failure.check(HttpError):\n            # HttpError由HttpErrorMiddleware中间件抛出\n            # 可以接收到非200 状态码的Response\n            response = failure.value.response\n            self.logger.error(\'HttpError on %s\', response.url)\n\n        elif failure.check(DNSLookupError):\n            # 此异常由请求Request抛出\n            request = failure.request\n            self.logger.error(\'DNSLookupError on %s\', request.url)\n\n        elif failure.check(TimeoutError, TCPTimedOutError):\n            request = failure.request\n            self.logger.error(\'TimeoutError on %s\', request.url)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])])])}),[],!1,null,null,null);r.default=t.exports}}]);