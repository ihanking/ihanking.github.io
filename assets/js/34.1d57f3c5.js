(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{514:function(s,e,n){"use strict";n.r(e);var a=n(4),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h4",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("在本地提交文章到GitHub，会触发Github Actions把刚提交的文章通过hugo发布到github pages，之后可以通过github pages生成的url进行访问。")]),s._v(" "),n("p",[s._v("这里将把hugo源码和pages分别用两个仓库进行管理。")]),s._v(" "),n("p",[s._v("另外，这篇着重将如何使用github actions自动化部署hugo，hugo本地创建可以参考另一篇文章"),n("a",{attrs:{href:"https://hank-leo.github.io/post/blog/%E4%BD%BF%E7%94%A8hugo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用hugo搭建个人博客"),n("OutboundLink")],1)]),s._v(" "),n("h4",{attrs:{id:"创建仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[s._v("#")]),s._v(" 创建仓库")]),s._v(" "),n("p",[s._v("创建源码仓库 "),n("code",[s._v("blog")]),s._v(",可以设置为私有"),n("code",[s._v("Private")])]),s._v(" "),n("p",[s._v("创建pages仓库"),n("code",[s._v("hank-leo.github.io")])]),s._v(" "),n("h4",{attrs:{id:"绑定keys"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绑定keys"}},[s._v("#")]),s._v(" 绑定keys")]),s._v(" "),n("p",[s._v("1.使用git生成ssh key(相当于生成对密钥)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""\n# You will get 2 files:\n#   gh-pages.pub (public key)\n#   gh-pages     (private key)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("2.打开blog仓库"),n("code",[s._v("settings")]),s._v(",再点击"),n("code",[s._v("Secrets")]),s._v("，然后添加刚刚生成的私钥，name为"),n("code",[s._v("ACTIONS_DEPLOY_KEY")])]),s._v(" "),n("p",[s._v("3.同理打开hank-leo.github.io, 点击"),n("code",[s._v("Deploy keys")]),s._v("，添加公钥，"),n("strong",[s._v("Allow write access")]),s._v("一定要勾上，否则会无法提交")]),s._v(" "),n("h4",{attrs:{id:"配置github-actions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置github-actions"}},[s._v("#")]),s._v(" 配置GitHub actions")]),s._v(" "),n("p",[s._v("在本地新建文件"),n("code",[s._v(".github/workflows/main.yml")])]),s._v(" "),n("p",[s._v("输入配置代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("name: Deploy Hugo Site to Github Pages on Master Branch\n\non:\n  push:\n    branches:\n      - master\n\njobs:\n  build-deploy:\n    runs-on: ubuntu-18.04\n    steps:\n      - name: Checkout master\n        uses: actions/checkout@v1  # v2 does not have submodules option now\n       # with:\n       #   submodules: true\n\n      - name: Setup Hugo\n        uses: peaceiris/actions-hugo@v2\n        with:\n          hugo-version: '0.62.2'\n          extended: true\n\n      - name: Build\n        run: | #hugo --minify\n          hugo\n\n      - name: Deploy\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          DEPLOY_KEY: ${{ secrets.ACTIONS_DEPLOY_KEY }} # 这里的 ACTIONS_DEPLOY_KEY 则是上面设置 Private Key的变量名\n          EXTERNAL_REPOSITORY: hank-leo/hank-leo.github.io # Pages 远程仓库 \n          PUBLISH_DIR: ./public\n          #keep_files: false # remove existing files\n          PUBLISH_BRANCH: master  # deploying branch\n          #commit_message: ${{ github.event.head_commit.message }}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("p",[s._v("最后提交代码到blog库，actions会自动部署代码到pages")])])}),[],!1,null,null,null);e.default=t.exports}}]);