(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{580:function(s,a,e){"use strict";e.r(a);var n=e(4),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"mongodb基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb基本操作"}},[s._v("#")]),s._v(" MongoDB基本操作")]),s._v(" "),e("p",[e("strong",[s._v("1.数据库操作")])]),s._v(" "),e("p",[s._v("使用use DATABASE_NAME创建数据库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("use maitian\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果数据库不存在，就创建数据库，否则切换到指定的数据库")]),s._v(" "),e("p",[s._v("使用show dbs查看所有数据库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("show dbs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用db.dropDatabase()删除数据库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("use maitian\n\ndb.dropDatabase()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("2.集合操作")])]),s._v(" "),e("p",[s._v("在maitian数据库中创建名为zufang的集合")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('use maitian\n\ndb.createCollection("zufang")\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("查看所有集合")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("show collections\n\nshow tables\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("3.文档操作")])]),s._v(" "),e("p",[s._v("(1)使用db.collection_name.insert(document)在集合中插入文档")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('db.zufang.insert({"title":"xxxx","price":"8888","area":"233","district":"xxx"})\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("(2)使用db.collection_name.find()查询文档")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("db.zufang.find()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("可以使用.pretty()方法来使输出数据更易读")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("db.zufang.fin().pretty()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("4.Mac上操作MongoDB")])]),s._v(" "),e("p",[s._v("MongoDB启动和关闭")]),s._v(" "),e("ul",[e("li",[s._v("启动")])]),s._v(" "),e("div",{staticClass:"language-linux line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mongod --dbpath /usr/local/mongodb/data\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("关闭")])]),s._v(" "),e("div",{staticClass:"language-linux line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("use admin, db.shutdownServer() \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);