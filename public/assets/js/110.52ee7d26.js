(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{613:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"xpath中使用contains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xpath中使用contains"}},[t._v("#")]),t._v(" xpath中使用contains")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("xpath(span[contanins(@class, 'xxx')])\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Xpath如何选择不包含某一个属性的节点?\n这里可以用到 not 例如排除一个属性的节点可以使用")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//tbody/tr[not(@class)]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("排除一个或者两个属性可以使用")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//tbody/tr[not(@class or @id)]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"xpath按序选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xpath按序选择"}},[t._v("#")]),t._v(" xpath按序选择")]),t._v(" "),a("p",[t._v("有时候我们在选择的时候可能某些属性同时匹配了多个节点，但是我们只想要其中的某个节点，如第二个节点，或者最后一个节点，这时该怎么办呢？")]),t._v(" "),a("p",[t._v("这时可以利用中括号传入索引的方法获取特定次序的节点，示例如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("from lxml import etree\ntext = '''\nfirst item\nsecond item\nthird item\nfourth item\nfifth item\n'''\nhtml = etree.HTML(text)\nresult = html.xpath('//li[1]/a/text()')\nprint(result)\nresult = html.xpath('//li[last()]/a/text()')\nprint(result)\nresult = html.xpath('//li[position()<3]/a/text()')\nprint(result)\nresult = html.xpath('//li[last()-2]/a/text()')\nprint(result)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("第一次选择我们选取了第一个 li 节点，中括号中传入数字1即可，注意这里和代码中不同，序号是以 1 开头的，不是 0 开头的。 第二次选择我们选取了最后一个 li 节点，中括号中传入 last() 即可，返回的便是最后一个 li 节点。 第三次选择我们选取了位置小于 3 的 li 节点，也就是位置序号为 1 和 2 的节点，得到的结果就是前 2 个 li 节点。 第四次选择我们选取了倒数第三个 li 节点，中括号中传入 last()-2即可，因为 last() 是最后一个，所以 last()-2 就是倒数第三个。")]),t._v(" "),a("p",[t._v("运行结果如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("['first item']\n['fifth item']\n['first item', 'second item']\n['third item']\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("在这里我们使用了 last()、position() 等函数，XPath 中提供了 100 多个函数，包括存取、数值、字符串、逻辑、节点、序列等处理功能。 具体所有的函数作用可以参考：http://www.w3school.com.cn/xpath/xpath_functions.asp。")]),t._v(" "),a("h4",{attrs:{id:"xpath获取带注释的text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xpath获取带注释的text"}},[t._v("#")]),t._v(" xpath获取带注释的text")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('from lxml import etree\n\nhtml_str = """\nthis from blog.csdn.net/lncxydjq , DO NOT COPY!\n*****\nhtml = etree.HTML(html_str)\nprint html.xpath(\'//div[@id="box1"]/div/node()\')[1]\nprint type(html.xpath(\'//div[@id="box1"]/div/node()\')[1])\nprint html.xpath(\'//div[@id="box1"]/div/node()\')[1].text\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("output:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("can u get me, bitch?\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);