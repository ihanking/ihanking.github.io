(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{637:function(s,a,n){"use strict";n.r(a);var t=n(4),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"随机数random模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#随机数random模块"}},[s._v("#")]),s._v(" 随机数random模块")]),s._v(" "),n("p",[s._v("随机数random模块使用教程：http://www.runoob.com/python3/python3-random-number.html")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入 random(随机数) 模块")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" random\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n使用random 模块的 randint() 函数来生成随机数\n语法是：random.randint(a,b)\n函数返回数字 N ，\nN 为a到b之间的数字（a <= N <= b），包含 a 和 b\n下面案例是生成0 ~ 9 之间的随机数，\n你每次执行后都返回不同的数字（0 到 9）\n'''")]),s._v("\na"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("random"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("randint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("8")]),s._v(" "),n("h2",{attrs:{id:"案例：抽奖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例：抽奖"}},[s._v("#")]),s._v(" 案例：抽奖")]),s._v(" "),n("p",[s._v("range() 函数可创建一个整数列表，一般用在 for 循环中。")]),s._v(" "),n("p",[s._v("使用语法：")]),s._v(" "),n("p",[s._v("range(start, stop[, step])")]),s._v(" "),n("p",[s._v("参数说明：")]),s._v(" "),n("p",[s._v("start: 计数从 start 开始。默认是从 0 开始。例如range（5）等价于range（0， 5）")]),s._v(" "),n("p",[s._v("start: 计数从 start 开始，但不包括 stop。例如：range（0， 5） 是[0, 1, 2, 3, 4]没有5")]),s._v(" "),n("p",[s._v("step：步长，默认为1。例如：range（0， 5） 等价于 range(0, 5, 1)")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n抽奖：生成多个随机数\n应用案例：从395个用户中随机抽取10个人作为中奖者\n'''")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    userId"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("random"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("randint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("395")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用%s格式化字符串")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'第 %s 位获奖用户id是 %s'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("userId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("第 0 位获奖用户id是 166\n第 1 位获奖用户id是 216\n第 2 位获奖用户id是 100\n第 3 位获奖用户id是 141\n第 4 位获奖用户id是 296\n第 5 位获奖用户id是 167\n第 6 位获奖用户id是 366\n第 7 位获奖用户id是 316\n第 8 位获奖用户id是 306\n第 9 位获奖用户id是 196\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"pandas数据框（dataframe）的抽样方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pandas数据框（dataframe）的抽样方法"}},[s._v("#")]),s._v(" pandas数据框（DataFrame）的抽样方法")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" numpy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" np "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数组包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pandas "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" pd "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据分析包")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n#arange产生一个含有5*4个元素的一维数组\nreshape：将数组转换成5行4列的二维数组\n'''")]),s._v("\ndf "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DataFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("reshape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[n("img",{attrs:{src:"/images/202009/24/pandas%E6%95%B0%E6%8D%AE%E6%A1%86.png",alt:"pandas数据框"}})]),s._v(" "),n("p",[n("strong",[s._v("随机选择一个n行的子集")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("sample1"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("df"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sample"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsample1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:"/images/202009/24/pandas%E6%95%B0%E6%8D%AE%E6%A1%862.png",alt:"pandas数据框2"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);