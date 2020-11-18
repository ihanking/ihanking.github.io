(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{594:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("Celery是一个简单、灵活分布式系统，可用来快速管理分布式的任务队列")])]),s._v(" "),a("h3",{attrs:{id:"入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[s._v("#")]),s._v(" 入门")]),s._v(" "),a("p",[s._v("先从一个简单例子开始")]),s._v(" "),a("p",[s._v("新建一个"),a("code",[s._v("tasks.py")]),s._v("文件")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" celery "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Celery\n\napp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Celery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tasks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("broker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis://localhost/0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" backend"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis://localhost/1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#连接redis,创建app")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("task")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("在tasks目录终端下运行命令 "),a("code",[s._v("celery -A tasks worker --loglevel=info")])]),s._v(" "),a("p",[s._v("返回内容")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" -------------- celery@hanks-mac.local v5.0.2 (singularity)\n--- ***** ----- \n-- ******* ---- Darwin-18.6.0-x86_64-i386-64bit 2020-11-10 20:33:32\n- *** --- * --- \n- ** ---------- [config]\n- ** ---------- .> app:         tasks:0x105e4a750\n- ** ---------- .> transport:   redis://localhost:6379/0\n- ** ---------- .> results:     redis://localhost/1\n- *** --- * --- .> concurrency: 4 (prefork)\n-- ******* ---- .> task events: OFF (enable -E to monitor tasks in this worker)\n--- ***** ----- \n -------------- [queues]\n                .> celery           exchange=celery(direct) key=celery\n                \n\n[tasks]\n  . tasks.hello\n\n[2020-11-10 20:33:33,295: INFO/MainProcess] Connected to redis://localhost:6379/0\n[2020-11-10 20:33:33,320: INFO/MainProcess] mingle: searching for neighbors\n[2020-11-10 20:33:34,352: INFO/MainProcess] mingle: all alone\n[2020-11-10 20:33:34,385: INFO/MainProcess] celery@hanks-mac.local ready.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("在同一目录下新建"),a("code",[s._v("test.py")]),s._v("文件")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tasks "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" hello\n\nresult"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("同时运行两个文件会返回结果 "),a("code",[s._v("5")])]),s._v(" "),a("h3",{attrs:{id:"分布式爬虫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式爬虫"}},[s._v("#")]),s._v(" 分布式爬虫")]),s._v(" "),a("p",[a("code",[s._v("master.py")]),s._v("文件负责爬取url")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" bs4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" BeautifulSoup\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" slave "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" crawler"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#从slave中引入爬虫函数crawler")]),s._v("\n\nurl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://docs.celeryproject.org/en/latest/'")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#目标网页")]),s._v("\n\nres "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发送请求")]),s._v("\n\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" BeautifulSoup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html.parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用beautifulsoup解析网页")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#找到网页中所有的a标签，获取链接")]),s._v("\n\n\tlink "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'href'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'www'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'href'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n\t\tlink "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://docs.celeryproject.org/en/latest/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'href'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#拼接完整的url")]),s._v("\n\n\t\tresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" crawler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将url传入任务中，执行爬虫")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[a("code",[s._v("slave.py")]),s._v("文件负责接收url并进行异步爬取")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" celery "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Celery\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" bs4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" BeautifulSoup\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Celery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'slave'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("broker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis://localhost/0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("backend"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis://localhost/1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#和上面例子一样，连接redis，创建一个app")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("task")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将爬虫函数注册为一个任务")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crawler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#爬虫函数，入参为URL，根据入参进行爬取")]),s._v("\n    res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发送请求")]),s._v("\n    soup "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" BeautifulSoup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html.parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用beautifulsoup对网页进行解析")]),s._v("\n    title "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'h1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解析获取标题")]),s._v("\n    f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%s.txt'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w+'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新建txt文件，以标题命名")]),s._v("\n    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将url作为内容写进txt文件")]),s._v("\n    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("在当前目录终端下运行命令 "),a("code",[s._v("celery -A salve worker --loglevel=info")])])])}),[],!1,null,null,null);t.default=e.exports}}]);