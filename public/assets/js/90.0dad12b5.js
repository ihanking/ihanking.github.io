(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{569:function(s,n,a){"use strict";a.r(n);var e=a(4),l=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("导入库")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import Imputer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"生成缺失数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成缺失数据"}},[s._v("#")]),s._v(" 生成缺失数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("df=pd.DataFrame(np.random.randn(6,4),columns=['col1','col2','col3','col4'])\ndf.iloc[1:2,1] = np.nan #增加缺失值\ndf.iloc[4,3] = np.nan #增加缺失值\n\n#打印输出\nprint(df)\ncol1      col2      col3      col4  \n0 -0.977511 -0.566332 -0.529934  1.489695  \n1 -0.491128       NaN -0.811174 -1.102717  \n2  0.385777 -0.638822  0.325953 -0.240780  \n3  0.938351 -0.746889  0.375200 -0.715265  \n4  1.103418  0.238959 -0.459114       NaN  \n5  1.002177  0.448844 -0.584634 -1.038151\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"查看缺失值位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看缺失值位置"}},[s._v("#")]),s._v(" 查看缺失值位置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nan_all=df.isnull()\n\n#打印\nprint(nan_all)\ncol1   col2   col3   col4  \n0  False  False  False  False  \n1  False   True  False  False  \n2  False  False  False  False  \n3  False  False  False  False  \n4  False  False  False   True  \n5  False  False  False  False\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#获取含有NA的列\nnan_col1=df.isnull().any() \n\n#打印\nprint(nan_col1)\ncol1    False  \ncol2     True  \ncol3    False  \ncol4     True  \ndtype: bool\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#获得全部为NA的列\nnan_col2=df.isnull().all()\n\n#打印\nprint(nan_col2)\ncol1    False  \ncol2    False  \ncol3    False  \ncol4    False  \ndtype: bool\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"丢弃缺失值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#丢弃缺失值"}},[s._v("#")]),s._v(" 丢弃缺失值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("df2=df.dropna() #直接丢弃含有NA的行纪录\n\n#打印\nprint(df2)\ncol1      col2      col3      col4  \n0 -0.977511 -0.566332 -0.529934  1.489695\n2  0.385777 -0.638822  0.325953 -0.240780\n3  0.938351 -0.746889  0.375200 -0.715265\n5  1.002177  0.448844 -0.584634 -1.038151\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#通过sklearn的数据预处理方法对缺失值进行处理\nnan_model=Imputer(missing_values='NaN',strategy='mean',axis=0) #建立替换规则：将值为NaN的缺失值以均值做替换\nnan_result=nan_model.fit_transform(df) #应用模型规则\n\n#打印输出\nprint(nan_result)\n[[-0.97751051 -0.56633185 -0.52993389  1.48969465]\n [-0.49112788 -0.25284792 -0.81117388 -1.10271738]\n [ 0.38577678 -0.63882219  0.32595345 -0.24077995]\n [ 0.93835121 -0.74688892  0.37519957 -0.71526484]\n [ 1.10341788  0.23895916 -0.45911413 -0.32144373]\n [ 1.00217657  0.4488442  -0.58463419 -1.03815116]]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"使用pandas做缺失值处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用pandas做缺失值处理"}},[s._v("#")]),s._v(" 使用Pandas做缺失值处理")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#用后面的值替换缺失值\nnan_result_pd1 = df.fillna(method='backfill')\n\n#打印\nprint(nan_result_pd1)\ncol1      col2      col3      col4  \n0 -0.977511 -0.566332 -0.529934  1.489695\n1 -0.491128 -0.638822 -0.811174 -1.102717\n2  0.385777 -0.638822  0.325953 -0.240780\n3  0.938351 -0.746889  0.375200 -0.715265\n4  1.103418  0.238959 -0.459114 -1.038151\n5  1.002177  0.448844 -0.584634 -1.038151\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#用后面的值替换缺失值，限制每列只能替代一个缺失值\nnan_result_pd2 = df.fillna(method='bfill',limit=1) \n\n#打印\nprint(nan_result_pd2)\ncol1      col2      col3      col4  \n0 -0.977511 -0.566332 -0.529934  1.489695\n1 -0.491128 -0.638822 -0.811174 -1.102717\n2  0.385777 -0.638822  0.325953 -0.240780\n3  0.938351 -0.746889  0.375200 -0.715265\n4  1.103418  0.238959 -0.459114 -1.038151\n5  1.002177  0.448844 -0.584634 -1.038151\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#用前面的值替换缺失值\nnan_result_df3=df.fillna(method='pad')\n\n#打印\nprint(nan_result_df3)\ncol1      col2      col3      col4  \n0 -0.977511 -0.566332 -0.529934  1.489695\n1 -0.491128 -0.566332 -0.811174 -1.102717\n2  0.385777 -0.638822  0.325953 -0.240780\n3  0.938351 -0.746889  0.375200 -0.715265\n4  1.103418  0.238959 -0.459114 -0.715265\n5  1.002177  0.448844 -0.584634 -1.038151\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#用0替换缺失值\nnan_result_df4=df.fillna(0)\n\n#打印\nprint(nan_result_df4)\ncol1      col2      col3      col4  \n0 -0.977511 -0.566332 -0.529934  1.489695\n1 -0.491128  0.000000 -0.811174 -1.102717\n2  0.385777 -0.638822  0.325953 -0.240780\n3  0.938351 -0.746889  0.375200 -0.715265\n4  1.103418  0.238959 -0.459114  0.000000\n5  1.002177  0.448844 -0.584634 -1.038151\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#用不同值替换不同列的缺失值\nnan_result_df5=df.fillna({'col2':1.1,'col4':1.2})\n\n#打印\nprint(nan_result_df5)\ncol1      col2      col3      col4  \n0 -0.977511 -0.566332 -0.529934  1.489695\n1 -0.491128  1.100000 -0.811174 -1.102717\n2  0.385777 -0.638822  0.325953 -0.240780\n3  0.938351 -0.746889  0.375200 -0.715265\n4  1.103418  0.238959 -0.459114  1.200000\n5  1.002177  0.448844 -0.584634 -1.038151\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#用各自列的平均数替换缺失值\nnan_result_df6=df.fillna(df.mean()['col2':'col4'])\n\n#打印\nprint(nan_result_df6)\ncol1      col2      col3      col4  \n0 -0.977511 -0.566332 -0.529934  1.489695\n1 -0.491128 -0.252848 -0.811174 -1.102717\n2  0.385777 -0.638822  0.325953 -0.240780\n3  0.938351 -0.746889  0.375200 -0.715265\n4  1.103418  0.238959 -0.459114 -0.321444\n5  1.002177  0.448844 -0.584634 -1.038151\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#用Pandas的replace替换缺失值\nnan_result_df7=df.replace(np.nan,0) \n\n#打印\nprint(nan_result_df7)\ncol1      col2      col3      col4   \n0 -0.977511 -0.566332 -0.529934  1.489695\n1 -0.491128  0.000000 -0.811174 -1.102717\n2  0.385777 -0.638822  0.325953 -0.240780\n3  0.938351 -0.746889  0.375200 -0.715265\n4  1.103418  0.238959 -0.459114  0.000000\n5  1.002177  0.448844 -0.584634 -1.038151\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);n.default=l.exports}}]);