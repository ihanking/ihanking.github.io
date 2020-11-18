(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{562:function(a,t,s){"use strict";s.r(t);var e=s(4),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("作为数据工作者，离不开excel表数据的操作，此文主要来讲下工作通常会用到函数或操作")]),a._v(" "),s("p",[s("strong",[a._v("常见函数分类")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("文本清洗函数")])]),a._v(" "),s("li",[s("p",[a._v("关联匹配函数")])]),a._v(" "),s("li",[s("p",[a._v("逻辑运算函数")])]),a._v(" "),s("li",[s("p",[a._v("计算统计函数")])]),a._v(" "),s("li",[s("p",[a._v("时间序列函数")])])]),a._v(" "),s("h2",{attrs:{id:"文本清洗函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文本清洗函数"}},[a._v("#")]),a._v(" 文本清洗函数")]),a._v(" "),s("p",[a._v("1.常用的文本清洗函数")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("清除字符串空格：TRIM")])]),a._v(" "),s("li",[s("p",[a._v("合并单元格：CONCATENATE")])]),a._v(" "),s("li",[s("p",[a._v("截取字符串：LEFT / RIGHT / MID")])]),a._v(" "),s("li",[s("p",[a._v("替换单元格中的内容：REPLACE / SUBSTITUTE")])]),a._v(" "),s("li",[s("p",[a._v("查找文本在单元格中的位置：FIND / SEARCH")])])]),a._v(" "),s("p",[a._v("2.清除字符串空格")]),a._v(" "),s("p",[s("strong",[a._v("TRIM")]),a._v("：清除字符串text左右的空格")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=TRIM(text)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("TRIM(去掉前后空格) 和 SUBSTITUDE(去空格,包括字符串之间的空格)")]),a._v(" "),s("p",[s("img",{attrs:{src:"/images/202009/10/TRIM.jpg",alt:"TRIM"}})]),a._v(" "),s("p",[a._v("3.合并单元格")]),a._v(" "),s("p",[s("strong",[a._v("CONCATENATE")]),a._v("：将几个文本字符串合并为一个文本字符串。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=CONCATENATE(text1, text2, ...)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("CONCATENATE 和 &")]),a._v(" "),s("p",[s("img",{attrs:{src:"/images/202009/10/CONCATENATE.jpg",alt:"CONCATENATE"}})]),a._v(" "),s("p",[s("strong",[a._v("4.截取字符串")])]),a._v(" "),s("p",[s("strong",[a._v("MID:")]),a._v(" 从text中，从stat_num开始，提取num_chars个字符串。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=MID(text, start_num, num_chars)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"/images/202009/10/mid.jpg",alt:"mid"}})]),a._v(" "),s("p",[s("strong",[a._v("LEFT:")]),a._v(" 从text中，提取num_chars个字符（从左开始）。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=LEFT(text, num_cahrs)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("RIGHT:")]),a._v(" 从text中，提取num_chars个字符（从右开始）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=RIGHT(text, num_chars)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"/images/202009/10/left&right.jpg",alt:"left&right"}})]),a._v(" "),s("p",[s("strong",[a._v("5.替换单元格中内容")])]),a._v(" "),s("p",[s("strong",[a._v("REPLACE：")]),a._v(" 替换指定位置，从“原字符串”的“开始位置”开始，选择“字符个数”个，替换为“新字符串”。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=REPLACE(原字符串, 开始位置, 字符个数, 新字符串)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"/images/202009/10/REPLACE.jpg",alt:"REPLACE"}})]),a._v(" "),s("p",[s("strong",[a._v("SUBSTITUTE：")]),a._v(" 替换指定文本，在text中用new_text替换old_text，instance_num指定要替换第几次出现的old_text，如果不指定则替换old_text。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=SUBSTITUTE(text, old_text, new_text, instance_num)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"/images/202009/10/SUBSTITUTE.jpg",alt:"SUBSTITUTE"}})]),a._v(" "),s("p",[s("strong",[a._v("6.查找文本在单元格中的位置")])]),a._v(" "),s("p",[s("strong",[a._v("FIND & SEARCH：")]),a._v(" 从within_test中查找FIND_text，返回查找字符的起始位置编号。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=FIND(FIND_text, within_text, start_num)\n\n=SEARCH(要查找字符, 字符所在的文本, 从第几个字符开始查找)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("FIND 和 SEARCH 两个函数几乎相同，区别在于FIND 精确查找，区分大小写；SEARCH 模糊查找，不区分大小写。")]),a._v(" "),s("p",[a._v("FIND,SEARCH,MID综合使用\n"),s("img",{attrs:{src:"/images/202009/10/find&search&mid.jpg",alt:"find&search&mid"}})]),a._v(" "),s("h2",{attrs:{id:"关联匹配函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关联匹配函数"}},[a._v("#")]),a._v(" 关联匹配函数")]),a._v(" "),s("h3",{attrs:{id:"index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[a._v("#")]),a._v(" INDEX")]),a._v(" "),s("p",[a._v("返回数组array中指定索引的单元格的值。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=INDEX(array, Row_num, Column_num)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"/images/202009/11/index.jpg",alt:"index"}})]),a._v(" "),s("h3",{attrs:{id:"match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#match"}},[a._v("#")]),a._v(" MATCH")]),a._v(" "),s("ul",[s("li",[a._v("功能：在区域内查找指定的值，返回第一个查找值的位置。")]),a._v(" "),s("li",[a._v("lookup_value：需要查找的值。")]),a._v(" "),s("li",[a._v("lookup_array：查找的区域。")]),a._v(" "),s("li",[a._v("match_type：-1、0或1，0表示查找等于lookup_value的值。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=MATCH(lookup_value, lookup_array, [match_type])\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"/images/202009/11/match.jpg",alt:"match"}})]),a._v(" "),s("p",[s("strong",[a._v("Index & Match联合使用 = VLookup")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/images/202009/11/index&match.jpg",alt:"index&match"}})]),a._v(" "),s("h3",{attrs:{id:"row-column"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#row-column"}},[a._v("#")]),a._v(" ROW & COLUMN")]),a._v(" "),s("ul",[s("li",[a._v("ROW：返回指定引用的行号。")]),a._v(" "),s("li",[a._v("COLUMN：返回指定引用的列号。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=ROW(reference)\n=COLUMN(reference)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"offset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offset"}},[a._v("#")]),a._v(" OFFSET")]),a._v(" "),s("ul",[s("li",[a._v("OFFSET：以指定的引用reference为起点，按照偏移量偏移之后，返回值。")]),a._v(" "),s("li",[a._v("rows：向下偏移多少行。")]),a._v(" "),s("li",[a._v("columns：向右偏移多少列。")]),a._v(" "),s("li",[a._v("height：返回多少行。")]),a._v(" "),s("li",[a._v("width：返回多少列。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=OFFSET(reference,rows,columns,height,width)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"/images/202009/11/offset1.jpg",alt:"offset1"}})]),a._v(" "),s("p",[a._v("计算返回的两行两列的和")]),a._v(" "),s("p",[s("img",{attrs:{src:"/images/202009/11/offset2.jpg",alt:"offset2"}})]),a._v(" "),s("h3",{attrs:{id:"hyperlink"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hyperlink"}},[a._v("#")]),a._v(" HYPERLINK")]),a._v(" "),s("p",[a._v("创建一个超链接指向link_location，以friendly_name的字符串进行显示，link_location可以是URL链接或文件路径。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=HYPERLINK(link_location, friendly_name)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"/images/202009/11/hyperlink.jpg",alt:"hyperlink"}})]),a._v(" "),s("h2",{attrs:{id:"逻辑运算函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算函数"}},[a._v("#")]),a._v(" 逻辑运算函数")]),a._v(" "),s("h3",{attrs:{id:"if"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if"}},[a._v("#")]),a._v(" IF")]),a._v(" "),s("p",[s("img",{attrs:{src:"/images/202009/11/if.jpg",alt:"if"}})]),a._v(" "),s("p",[a._v("对应函数")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('=IF(AND(B13=1,C13=1)=TRUE,"男神",IF(AND(B13=1,C13=0)=TRUE,"靠脸吃饭",IF(AND(B13=0,C13=1)=TRUE,"肌肉男","是个好人")))\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"计算统计函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算统计函数"}},[a._v("#")]),a._v(" 计算统计函数")]),a._v(" "),s("h3",{attrs:{id:"求最值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#求最值"}},[a._v("#")]),a._v(" 求最值")]),a._v(" "),s("p",[a._v("MAX MIN")]),a._v(" "),s("ul",[s("li",[a._v("MAX：求某区域中的最大值。")]),a._v(" "),s("li",[a._v("MIN：求某区域中的最小值。")])]),a._v(" "),s("p",[a._v("统计函数（COUNT、COUNTA、COUNTBLANK、COUNTIFS、SUM、SUMIFS、AVERAGE、AVERAGEIFS、MAX、DMAX、MIN、DMIN、MEDIAN、SUMPRODUCT、VAR.S、SKEW、NORM.DIST等）")]),a._v(" "),s("p",[a._v("字符串函数（LEN、LENB、LEFT、RIGHT、MID、UPPER、LOWER、FIND、SEARCH、SUBSTITUTE、REPLACE、CONCATENATE、EXACT、TRIM等）")]),a._v(" "),s("p",[a._v("数值函数（RAND、RANDBETWEEN、ABS、MOD、POWER、PRODUCT、CEILING、FLOOR、ROUND、ROUNDUP、ROUNDDOWN等）")]),a._v(" "),s("p",[a._v("逻辑函数（AND、OR、NOT、IF、IFERROR、ISTEXT、ISNUMBER等）")]),a._v(" "),s("p",[a._v("日期和时间函数（TODAY、NOW、YEAR、MONTH、DAY、HOUR、MINUTE、SECOND、DATE、TIME、DATEDIF等）")]),a._v(" "),s("p",[a._v("匹配查找函数（CHOOSE、VLOOKUP、HLOOKUP、LOOKUP、MATCH、INDEX、OFFSET、INDIRECT等）")])])}),[],!1,null,null,null);t.default=r.exports}}]);