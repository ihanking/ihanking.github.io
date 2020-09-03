(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{531:function(e,s,t){"use strict";t.r(s);var a=t(4),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("1.字典排序")])]),e._v(" "),t("ul",[t("li",[e._v("利用key排序")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("d = {'d1':2, 'd2':4, 'd4':1,'d3':3,}\nfor k in sorted(d):\n    print(k,d[k])\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("d1 2\nd2 4\nd3 3\nd4 1")]),e._v(" "),t("ul",[t("li",[e._v("利用value排序："),t("strong",[e._v("getitem")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("d = {'d1':2, 'd2':4, 'd4':1,'d3':3,}\nfor k in sorted(d,key=d.__getitem__):\n    print(k,d[k])\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("d4 1\nd1 2\nd3 3\nd2 4")]),e._v(" "),t("ul",[t("li",[e._v("反序: reverse=True")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("d = {'d1':2, 'd2':4, 'd4':1,'d3':3,}\nfor k in sorted(d,key=d.__getitem__,reverse=True):\n    print(k,d[k])\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("d2 4\nd3 3\nd1 2\nd4 1")]),e._v(" "),t("ul",[t("li",[e._v("对dict_items进行排序")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("d = {'d1':2, 'd2':4, 'd4':1,'d3':3,}\nres = sorted(d.items(),key=lambda d:d[1],reverse=True)\nprint(res)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("[('d2', 4), ('d3', 3), ('d1', 2), ('d4', 1)]")]),e._v(" "),t("p",[t("strong",[e._v("2.两个字典（dict）合并")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('dict1 = { "name":"owen", "age": 18 }\ndict2 = { "birthday": "1999-11-22", "height": 180 }\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("合并两个字典得到：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{ "name":"owen", "age": 18, "birthday": "1999-11-22", "height": 180 }\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("方法1：")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dictMerged1 = dict( dict1.items() + dict2.items() )\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("方法2：")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dictMerged2 = dict( dict1, **dict2 )\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("方法 2 等同于：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dictMerged2 = dict1.copy()\ndictMerged2.update( dict2 )\n#或者\ndictMerged2 = dict( dict1 )\ndictMerged2.update( dict2 )\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("方法 2 比方法 1 速度快很多, 可以用 IPython 测试效率\n来源于:https://blog.csdn.net/u010649766/article/details/78661714")])])}),[],!1,null,null,null);s.default=n.exports}}]);