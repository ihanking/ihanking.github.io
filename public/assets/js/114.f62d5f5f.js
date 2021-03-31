(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{617:function(e,s,n){"use strict";n.r(s);var a=n(6),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("strong",[e._v("1.判断字符串是否为小数")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("try:\n    lat = float(location.split(',')[1])\n    lon = float(location.split(',')[0])\nexcept ValueError:\n    print('no number')\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[n("strong",[e._v("2.用split对字符串进行分割")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("str='storeId=ff8080816277aa0a0162845d48e3012b&appid=wxe37b2e703155ed41&transId=wxe37b2e703155ed412019-05-09%2010%3A28%3A15&sign=dc8fac903b03556247659e1b548bccce&timestamp=2019-05-09%2010%3A28%3A15&memberId=ff8080816a889e71016a9a68a6c55a37&cliqueId=-1&cliqueMemberId=-1&useClique=0&enterpriseId=ff808081624e60f601625c50a30900ce&unionid=oLWn80pR0DtSJXfnO_1O4ZOzfvAE&openid=oZe8D5gmPcPANw4kNNcG8mlAW1mI&launchOptions=%7B%22path%22%3A%22%2Fpages%2Fmall%2Fmall-index%2Fmall-index%22%2C%22query%22%3A%7B%7D%2C%22scene%22%3A1102%2C%22referrerInfo%22%3A%7B%22appId%22%3A%22wx97e5123eb6041454%22%7D%7D'\n\nstr2=str.split('&')\n\nfor i in str2:\n    print('\"'+i.split('=')[0]+'\":\"'+i.split('=')[1]+'\",')\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("p",[e._v("结果如下：")]),e._v(" "),n("blockquote"),e._v(" "),n("p",[e._v('"storeId":"ff8080816277aa0a0162845d48e3012b",\n"appid":"wxe37b2e703155ed41",\n"transId":"wxe37b2e703155ed412019-05-09%2010%3A28%3A15",\n"sign":"dc8fac903b03556247659e1b548bccce",\n"timestamp":"2019-05-09%2010%3A28%3A15",\n"memberId":"ff8080816a889e71016a9a68a6c55a37",\n"cliqueId":"-1",\n"cliqueMemberId":"-1",\n"useClique":"0",\n"enterpriseId":"ff808081624e60f601625c50a30900ce",\n"unionid":"oLWn80pR0DtSJXfnO_1O4ZOzfvAE",\n"openid":"oZe8D5gmPcPANw4kNNcG8mlAW1mI",\n"launchOptions":"%7B%22path%22%3A%22%2Fpages%2Fmall%2Fmall-index%2Fmall-index%22%2C%22query%22%3A%7B%7D%2C%22scene%22%3A1102%2C%22referrerInfo%22%3A%7B%22appId%22%3A%22wx97e5123eb6041454%22%7D%7D",')]),e._v(" "),n("p",[n("strong",[e._v("3.python检测字符串乱码")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import chardet\nf=open('test.txt','rb')\nf_read=f.read()\nf_charInfo=chardet.detect(f_read)\nprint(f_charInfo)\n\n# f_charInfo的输出是这样的的一个字典{'confidence': 0.99, 'encoding': 'utf-8'}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("p",[n("strong",[e._v("4.将逗号分隔的字符串转换为Python中的列表")]),e._v("\n给定一个字符串：\n它是由逗号分隔的几个值的序列：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mStr = '192.168.1.1,192.168.1.2,192.168.1.3' \n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("如何将字符串转换为列表？")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mStr = ['192.168.1.1', '192.168.1.2', '192.168.1.3']\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ul",[n("li",[e._v("使用str.split方法：")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(">>> mStr = '192.168.1.1,192.168.1.2,192.168.1.3'\n>>> mStr.split(\",\")\n['192.168.1.1', '192.168.1.2', '192.168.1.3']\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("ul",[n("li",[e._v("将字符串转成元组：")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(">>> mlist = mStr.split(\",\")\n>>> tuple(mlist)\n('192.168.1.1', '192.168.1.2', '192.168.1.3')\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[n("strong",[e._v("5.如何在python中把两个列表的各项分别合并为列表")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[ [a,b] for a,b in zip(list1,list2)]\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("生成一个以列表list1,list2各项合并列表为元素的列表")])])}),[],!1,null,null,null);s.default=t.exports}}]);