(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{678:function(s,n,t){"use strict";t.r(n);var a=t(6),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("越靠近中间取值越多，越远离中间取值出现的次数越少，平均值决定了中心点的位置，标准差决定数据的集中度")])]),s._v(" "),t("h3",{attrs:{id:"中心极限定理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中心极限定理"}},[s._v("#")]),s._v(" 中心极限定理")]),s._v(" "),t("h3",{attrs:{id:"python代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python代码实现"}},[s._v("#")]),s._v(" Python代码实现")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数组包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" numpy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" np\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#绘图包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" matplotlib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pyplot "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" plt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解决图表中中文表示不正的问题")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" matplotlib "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" mpl\nmpl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rcParams"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'font.sans-serif'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SimHei'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nmpl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rcParams"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'font.serif'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SimHei'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#统计计算包的统计模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" scipy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" stats\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\narange用于生成一个等差数组，arange([start, ]stop, [step, ]\n使用见文档：https://docs.scipy.org/doc/numpy/reference/generated/numpy.arange.html\n'''")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n第1步，定义随机变量：\n\n'''")]),s._v("\nmu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#平均值")]),s._v("\nsigma"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#标准差")]),s._v("\nX "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arange"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nX\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("array([ -5.00000000e+00,  -4.90000000e+00,  -4.80000000e+00,\n        -4.70000000e+00,  -4.60000000e+00,  -4.50000000e+00,\n        -4.40000000e+00,  -4.30000000e+00,  -4.20000000e+00,\n        -4.10000000e+00,  -4.00000000e+00,  -3.90000000e+00,\n        -3.80000000e+00,  -3.70000000e+00,  -3.60000000e+00,\n        -3.50000000e+00,  -3.40000000e+00,  -3.30000000e+00,\n        -3.20000000e+00,  -3.10000000e+00,  -3.00000000e+00,\n        -2.90000000e+00,  -2.80000000e+00,  -2.70000000e+00,\n        -2.60000000e+00,  -2.50000000e+00,  -2.40000000e+00,\n        -2.30000000e+00,  -2.20000000e+00,  -2.10000000e+00,\n        -2.00000000e+00,  -1.90000000e+00,  -1.80000000e+00,\n        -1.70000000e+00,  -1.60000000e+00,  -1.50000000e+00,\n        -1.40000000e+00,  -1.30000000e+00,  -1.20000000e+00,\n        -1.10000000e+00,  -1.00000000e+00,  -9.00000000e-01,\n        -8.00000000e-01,  -7.00000000e-01,  -6.00000000e-01,\n        -5.00000000e-01,  -4.00000000e-01,  -3.00000000e-01,\n        -2.00000000e-01,  -1.00000000e-01,  -1.77635684e-14,\n         1.00000000e-01,   2.00000000e-01,   3.00000000e-01,\n         4.00000000e-01,   5.00000000e-01,   6.00000000e-01,\n         7.00000000e-01,   8.00000000e-01,   9.00000000e-01,\n         1.00000000e+00,   1.10000000e+00,   1.20000000e+00,\n         1.30000000e+00,   1.40000000e+00,   1.50000000e+00,\n         1.60000000e+00,   1.70000000e+00,   1.80000000e+00,\n         1.90000000e+00,   2.00000000e+00,   2.10000000e+00,\n         2.20000000e+00,   2.30000000e+00,   2.40000000e+00,\n         2.50000000e+00,   2.60000000e+00,   2.70000000e+00,\n         2.80000000e+00,   2.90000000e+00,   3.00000000e+00,\n         3.10000000e+00,   3.20000000e+00,   3.30000000e+00,\n         3.40000000e+00,   3.50000000e+00,   3.60000000e+00,\n         3.70000000e+00,   3.80000000e+00,   3.90000000e+00,\n         4.00000000e+00,   4.10000000e+00,   4.20000000e+00,\n         4.30000000e+00,   4.40000000e+00,   4.50000000e+00,\n         4.60000000e+00,   4.70000000e+00,   4.80000000e+00,\n         4.90000000e+00])\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])]),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第2步，概率密度函数（PDF）")]),s._v("\ny"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("stats"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("norm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pdf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("X"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("mu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("sigma"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第3步，绘图")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\nplot默认绘制折线\n'''")]),s._v("\nplt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("X"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#x轴文本")]),s._v("\nplt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xlabel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'随机变量：x'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#y轴文本")]),s._v("\nplt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ylabel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'概率：y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#标题")]),s._v("\nplt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'正态分布：$\\mu$=%.1f,$\\sigma^2$=%.1f'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("sigma"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#网格")]),s._v("\nplt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("grid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示图形")]),s._v("\nplt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("show"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[t("img",{attrs:{src:"/images/202009/26/%E6%AD%A3%E6%80%81%E5%88%86%E5%B8%83.png",alt:"正态分布"}})])])}),[],!1,null,null,null);n.default=e.exports}}]);