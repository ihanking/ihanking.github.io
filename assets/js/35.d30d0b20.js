(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{515:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("仪表盘 (Gauge) 是一种拟物化的图表，刻度表示度量，指针表示维度，指针角度表示数值。仪表盘图表就像汽车的速度表一样，有一个圆形的表盘及相应的刻度，有一个指针指向当前数值。目前很多的管理报表或报告上都是用这种图表，以直观的表现出某个指标的进度或实际情况。")])]),s._v(" "),a("h2",{attrs:{id:"一、基本型仪表盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、基本型仪表盘"}},[s._v("#")]),s._v(" 一、基本型仪表盘")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyecharts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" opts\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyecharts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("charts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Gauge\n\nc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    Gauge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"工作进展状况"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set_global_opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TitleOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"基本型仪表盘"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render_notebook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/202009/14/%E5%9F%BA%E6%9C%AC%E5%9E%8B%E4%BB%AA%E8%A1%A8%E7%9B%98.png",alt:"基本型仪表盘"}})]),s._v(" "),a("h2",{attrs:{id:"二、给仪表盘设置颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、给仪表盘设置颜色"}},[s._v("#")]),s._v(" 二、给仪表盘设置颜色")]),s._v(" "),a("p",[s._v("将仪表盘划分为0-0.3、0.3-0.7、0.7-1三个段，并设置不同的颜色")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyecharts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" opts\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyecharts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("charts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Gauge\n\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    Gauge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"业务指标"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"完成率"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("66")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        axisline_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AxisLineOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            linestyle_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LineStyleOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#67e0e3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#37a2da"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#fd666d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" width"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set_global_opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        title_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TitleOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"设置不同颜色"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        legend_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LegendOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("is_show"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render_notebook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/202009/14/%E8%AE%BE%E7%BD%AE%E4%B8%8D%E5%90%8C%E9%A2%9C%E8%89%B2.png",alt:"设置不同颜色"}})]),s._v(" "),a("h2",{attrs:{id:"三、改变仪表盘刻度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、改变仪表盘刻度"}},[s._v("#")]),s._v(" 三、改变仪表盘刻度")]),s._v(" "),a("p",[s._v("如果想让仪表盘的刻度变成5，那么我们可以把它分成20份（split_number=20）")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyecharts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" opts\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyecharts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("charts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Gauge\n\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    Gauge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"业务指标"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"完成率"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        split_number"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        axisline_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AxisLineOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            linestyle_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LineStyleOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#00CDCD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#CDBE70"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#00EE00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" width"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        detail_label_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LabelOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("formatter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{value}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set_global_opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        title_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TitleOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Gauge-分割段数-Label"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        legend_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LegendOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("is_show"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render_notebook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/202009/14/%E4%BB%AA%E8%A1%A8%E7%9B%98%E5%88%BB%E5%BA%A6.png",alt:"仪表盘刻度"}})]),s._v(" "),a("h2",{attrs:{id:"四、改变仪表盘大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、改变仪表盘大小"}},[s._v("#")]),s._v(" 四、改变仪表盘大小")]),s._v(" "),a("p",[s._v("如果想让仪表盘的刻度变成5，那么我们可以把它分成20份（split_number=20）")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyecharts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" opts\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyecharts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("charts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Gauge\n\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    Gauge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"完成率"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("66.6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" radius"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"60%"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set_global_opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TitleOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"半径改为 60%"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render_notebook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/202009/14/%E4%BB%AA%E8%A1%A8%E7%9B%98%E5%A4%A7%E5%B0%8F.png",alt:"仪表盘大小"}})]),s._v(" "),a("h2",{attrs:{id:"五、改变仪表盘内文字字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、改变仪表盘内文字字体"}},[s._v("#")]),s._v(" 五、改变仪表盘内文字字体")]),s._v(" "),a("p",[s._v("可以分别设置大小（font_size）、颜色（color）和字体（font_family）")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyecharts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" opts\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyecharts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("charts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Gauge\n\nc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    Gauge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"完成率"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("66.6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        title_label_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LabelOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            font_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" font_family"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Microsoft YaHei"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set_global_opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TitleOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Gauge-改变轮盘内的字体"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render_notebook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/202009/14/%E4%BB%AA%E8%A1%A8%E7%9B%98%E5%86%85%E6%96%87%E5%AD%97%E5%AD%97%E4%BD%93.png",alt:"仪表盘内文字字体"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);