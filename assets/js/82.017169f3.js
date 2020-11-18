(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{562:function(s,t,a){"use strict";a.r(t);var e=a(4),v=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"choose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choose"}},[s._v("#")]),s._v(" CHOOSE")]),s._v(" "),a("blockquote",[a("p",[s._v("返回索引值")])]),s._v(" "),a("h3",{attrs:{id:"vlookup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vlookup"}},[s._v("#")]),s._v(" VLOOKUP")]),s._v(" "),a("p",[s._v("函数总共有4个参数，分别是："),a("strong",[s._v("用谁去找")]),s._v("、"),a("strong",[s._v("匹配对象范围")]),s._v("、"),a("strong",[s._v("返回第几列")]),s._v("、"),a("strong",[s._v("匹配方式")]),s._v("（0/FALSE表示精确匹配，1/TRUE表示模糊匹配）。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/202009/10/vlookup1.jpg",alt:"vlookup1"}})]),s._v(" "),a("p",[s._v("四种查询方式")]),s._v(" "),a("p",[a("strong",[s._v("单条件查找")])]),s._v(" "),a("p",[s._v("根据工号，将左边检索区域的“电脑销售额”匹配到右边对应位置，只需要使用VLOOKUP函数，结果存在则显示对应的“电脑销售额”；结果不存在则显示#N/A。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("=VLOOKUP(F2,$A$2:$D$55,4,0)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/202009/10/vlookup2.jpg",alt:"vlookup2"}})]),s._v(" "),a("p",[a("strong",[s._v("反向查找")])]),s._v(" "),a("p",[s._v("当检索关键字不在检索区域的第1列，可以使用虚拟数组公式IF来做一个调换。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("=VLOOKUP(检索关键字，IF({1,0},检索关键字所在列，查找值所在列)，2，0)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/202009/10/vlookup3.jpg",alt:"vlookup3"}})]),s._v(" "),a("p",[a("strong",[s._v("多条件查询")])]),s._v(" "),a("p",[s._v("在匹配数据时，往往条件不是单一的，那么就可以利用&将字段拼接起来，并且利用IF数组公式构建出一个虚拟的区域。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("=VLOOKUP(F2&G2,IF({1,0},A2:A53&B2:B53,D2:D53),2,0)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/202009/10/vlookup4.jpg",alt:"vlookup4"}})]),s._v(" "),a("blockquote",[a("p",[s._v("注意：所有使用了数组的公式，不能直接回车，需要使用Ctrl+Shift+Enter，否则会出错。")])]),s._v(" "),a("p",[a("strong",[s._v("查询返回多列")])]),s._v(" "),a("p",[s._v("COLUMN")]),s._v(" "),a("p",[s._v("查找返回多列需要用到另外一个辅助函数——COLUMN函数。")]),s._v(" "),a("p",[s._v("返回结果为单元格引用的列数。例如：column(B1)返回值为2，因为B1为第2列。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("=COLUMN(待查询单元格/区域)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("需要注意的是第三个参数“返回第几列”的写法。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("=VLOOKUP($G2,$A$2:$E$55,COLUMN(D1),0)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"hlookup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hlookup"}},[s._v("#")]),s._v(" HLOOKUP")]),s._v(" "),a("p",[a("code",[s._v("=HLOOKUP(用谁去找, 匹配对象范围, 返回第几行, 匹配方式)")])]),s._v(" "),a("p",[s._v("和VLOOKUP的区别：HLOOKUP返回的值与查找的值在同一列上，而VLOOKUP返回的值与查找的值在同一行上。")]),s._v(" "),a("h3",{attrs:{id:"lookup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lookup"}},[s._v("#")]),s._v(" LOOKUP")]),s._v(" "),a("p",[s._v("MATCH")]),s._v(" "),a("p",[s._v("INDEX")]),s._v(" "),a("p",[s._v("OFFSET")]),s._v(" "),a("p",[s._v("INDIRECT")])])}),[],!1,null,null,null);t.default=v.exports}}]);