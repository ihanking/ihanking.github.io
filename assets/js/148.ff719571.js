(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{625:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("1.绑定变量")]),s._v(" "),a("blockquote",[a("p",[s._v("sql语句中使用变量，通过不同的变量值来改变sql的执行结果")])]),s._v(" "),a("p",[s._v("优点：减少硬解析，减少oracle的工作量")]),s._v(" "),a("p",[s._v("缺点：参数不同导致执行效率不同，优化比较难做")]),s._v(" "),a("p",[s._v("2.MyISAM的使用场景为读写分离的读库，而InnoDB为写库")]),s._v(" "),a("p",[s._v("3.解析后的SQL语句在Oracle的共享池中进行缓存")]),s._v(" "),a("p",[a("strong",[s._v("profiling")])]),s._v(" "),a("p",[s._v("查看SQL执行时所使用的资源情况："),a("code",[s._v("select @@profiling")]),s._v(", 如果profiling=0代表关闭，需要把profiling打开，即设置为1 "),a("code",[s._v("set profiling=1")])]),s._v(" "),a("p",[s._v("查看当前会话所产生的所有profiles "),a("code",[s._v("show profiles;")])]),s._v(" "),a("p",[s._v("查看上一条会话 "),a("code",[s._v("show profile")])]),s._v(" "),a("p",[s._v("查看sql版本情况 "),a("code",[s._v("select version();")])]),s._v(" "),a("p",[a("strong",[s._v("了解数据库")])]),s._v(" "),a("p",[s._v("查看所有与库相关的信息 "),a("code",[s._v("select * from information_schema.SCHEMATA;")])]),s._v(" "),a("p",[s._v("查看所有表信息 "),a("code",[s._v("select * from information_schema.TABLES;")])]),s._v(" "),a("p",[s._v("查看所有列信息 "),a("code",[s._v("select * from information_schema.COLUMNS;")])]),s._v(" "),a("h3",{attrs:{id:"常见索引类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见索引类型"}},[s._v("#")]),s._v(" 常见索引类型")]),s._v(" "),a("blockquote",[a("p",[s._v("索引可分为普通索引、唯一索引、主键索引、联合索引、全文索引")])]),s._v(" "),a("p",[a("strong",[s._v("普通索引")])]),s._v(" "),a("p",[s._v("新建表时设置索引")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\tfiled1 data_type1 filed_attr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tfiled2 data_type2 filed_attr2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tfiled3 data_type3 filed_attr3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filed1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("对已有表设置索引")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filed_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filed_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("案例应用")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 创建索引")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" date_index\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" stu_card"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("custom_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" stu_card\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("唯一索引")])]),s._v(" "),a("p",[s._v("新建表设置索引")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\tfiled1 data_type1 filed_attr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tfiled2 data_type2 filed_attr2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tfiled3 data_type3 filed_attr3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),s._v(" index_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filed1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("filed2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("对已有表设置索引")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filed_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),s._v(" index_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filed_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("案例应用")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 创建索引")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" id_idx\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" tourism_orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("orderid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tourism_orders\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("主键索引")])]),s._v(" "),a("p",[s._v("新建表设置索引")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\tfiled1 data_type1 filed_attr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tfiled2 data_type2 filed_attr2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tfiled3 data_type3 filed_attr3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" index_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filed1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("filed2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("对已有表设置索引")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" index_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filed_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 设置索引")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" regit_info ass "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" RFM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" regit_info "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" t1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inner")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" RFM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" t2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("uid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("uid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("删除索引")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- regit_info表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" regit_info\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" regit_info "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- tourism_orders表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tourism_orders\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" id_idx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" tourism_orders\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);