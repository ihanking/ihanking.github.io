(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{604:function(e,s,a){"use strict";a.r(s);var n=a(4),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("strong",[e._v("Request回调函数")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('def parse_page1(self, response):\n    return scrapy.Request("http://www.example.com/some_page.html",\n                          callback=self.parse_page2)\n\ndef parse_page2(self, response):\n    # this would log http://www.example.com/some_page.html\n    self.logger.info("Visited %s", response.url)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[a("strong",[e._v("传递参数")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("def parse_page1(self, response):\n    item = MyItem()\n    item['name'] = response.css('.name::text').extract_first()\n    request = scrapy.Request(\"http://www.example.com/some_page.html\",\n                             callback=self.parse_page2)\n    request.meta['item'] = item\n    yield request\n\ndef parse_page2(self, response):\n    item = response.meta['item']\n    item['age'] = response.css('.age::text').extract_first()\n    yield item\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);