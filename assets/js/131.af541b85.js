(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{608:function(s,t,e){"use strict";e.r(t);var n=e(4),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("日常工作主要使用xpath进行数据的解析和提取，归于xpath有着强大的功能，适应大多数的网页结构。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#导入包\nfrom lxml import etree\n\ndef get_data(response):\n    html=etree.HTML(response)\n    #提取属性值\n    url=html.xpath("//div[@href]")\n    #提取文本\n    title=html.xpath("//div[@class=\'title\']/text()")\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);