(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{493:function(t,s,a){"use strict";a.r(s);var n=a(18),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[t._v("#")]),t._v(" window")]),t._v(" "),s("p",[t._v("window.open(参数1，参数2，参数3，参数4):\n参数1：要加载的url\n参数2：窗口目标\n参数3：一个特性字符串\n参数4：一个表示新页面是否取代浏览器历史记录中当前加载页面的布尔值。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//等同于< a href="http://www.wrox.com" target="topFrame"></a> ')]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.wrox.com/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topFrame"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n说明：如果当前有topFrame窗口，则打开topFrame窗口，否则，就会创建一个新窗口并将其命名为‘topFrame’。此外，第二个摧残是也可以是以下特殊的窗口名称：_self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("_parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("_top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("_blank\n\n第三个参数：\n设 置 值 说 明\nfullscreen yes或no 表示浏览器窗口是否最大化。仅限"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IE")]),t._v(" \nheight 数值 表示新窗口的高度。不能小于"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" \nleft 数值 表示新窗口的左坐标。不能是负值\nlocation yes或no 表示是否在浏览器窗口中显示地址栏。不同浏览器的默认值不同。如果\n设置为no，地址栏可能会隐藏，也可能会被禁用（取决于浏览器）\nmenubar yes或no 表示是否在浏览器窗口中显示菜单栏。默认值为no\nresizable yes或no 表示是否可以通过拖动浏览器窗口的边框改变其大小。默认值为no\nscrollbars yes或no 表示如果内容在视口中显示不下，是否允许滚动。默认值为no\nstatus yes或no 表示是否在浏览器窗口中显示状态栏。默认值为no\ntoolbar yes或no 表示是否在浏览器窗口中显示工具栏。默认值为no\ntop 数值 表示新窗口的上坐标。不能是负值\nwidth 数值 表示新窗口的宽度。不能小于"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])]),s("h4",{attrs:{id:"窗口屏幕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#窗口屏幕"}},[t._v("#")]),t._v(" 窗口屏幕：")]),t._v(" "),s("p",[t._v("大多数浏览器都内置有弹出窗口屏幕程序。如果是内置屏蔽，则window.open() 会返回null。如果是浏览器扩展应用屏蔽窗口，则会抛出错。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blocked "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wroxWin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.wrox.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_blank"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wroxWin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n blocked "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n blocked "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blocked"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The popup was blocked!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"对话框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对话框"}},[t._v("#")]),t._v(" 对话框：")]),t._v(" "),s("p",[t._v("window.find() //打开查找对话框（尝试无效）\nwindow.print() //打开打印对话框。")]),t._v(" "),s("h4",{attrs:{id:"location对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location对象"}},[t._v("#")]),t._v(" location对象")]),t._v(" "),s("ol",[s("li",[t._v("属性：\nhash： url中#后面的字符串。\nhost：返回服务器名称和端口号\nhostname:返回不带端口号的服务器名称\nhref：返回当前加载页面的完整url。而location对象的toString()方法也返回这个值。\npathname：例如：\"/wileyCDA/\" .返回url中的目录或者文件名\nport：端口号\nprotocol：例如：'http:' .返回页面使用的协议。\nsearch：例如：'?q=java'.返回url的查询字符串。")])]),t._v(" "),s("p",[t._v("查找字符串参数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQueryStringArgs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//取得查询字符串并去掉开头的问号")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" qs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//保存数据的对象")]),t._v("\n args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//取得每一项")]),t._v("\n items "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" qs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" qs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在 for 循环中使用")]),t._v("\n i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//逐个将每一项添加到 args 对象中")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"="')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("位置操作\n改变路径的方式：")])]),t._v(" "),s("p",[t._v('window.location = "http://www.wrox.com";\nlocation.href = "http://www.wrox.com";\nlocation.assign("http://www.wrox.com");')]),t._v(" "),s("p",[t._v('修改url的参数方式：\n//假设初始 URL 为 http://www.wrox.com/WileyCDA/\n//将 URL 修改为"http://www.wrox.com/WileyCDA/#section1"\nlocation.hash = "#section1";\n//将 URL 修改为"http://www.wrox.com/WileyCDA/?q=javascript"\nlocation.search = "?q=javascript";\n//将 URL 修改为"http://www.yahoo.com/WileyCDA/"\nlocation.hostname = "www.yahoo.com";\n//将 URL 修改为"http://www.yahoo.com/mydir/"\nlocation.pathname = "mydir";\n//将 URL 修改为"http://www.yahoo.com:8080/WileyCDA/"\nlocation.port = 8080;')]),t._v(" "),s("p",[t._v('改变路径后不能回退：\nlocation.replace("http://www.wrox.com/");')]),t._v(" "),s("p",[t._v("刷新页面：\nlocation.reload(); //重新加载（有可能从缓存中加载）\nlocation.reload(true); //重新加载（从服务器重新加载）")]),t._v(" "),s("h4",{attrs:{id:"navigator对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator对象"}},[t._v("#")]),t._v(" navigator对象")]),t._v(" "),s("p",[t._v("属性主要跟浏览器相关：\n例如：\nuserAgent：浏览器的用户代理字符串\nplugins：浏览器中安装的插件信息的数组\nonLine：浏览器是否连接了网络\nlanguage：浏览器的主语言\ncookieEnabled：是否启用cookie\nappVersion：浏览器的版本\nappCodeName：浏览器的名字")]),t._v(" "),s("h4",{attrs:{id:"screen对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screen对象"}},[t._v("#")]),t._v(" screen对象")]),t._v(" "),s("p",[t._v("属性主要与浏览器窗口的一些信息。\n例如：\nheight：屏幕的像素高度\nleft：当前屏幕距左边的像素距离\ntop：当前屏幕距离上边的像素距离\nwidth：屏幕的像素宽度")]),t._v(" "),s("h4",{attrs:{id:"history对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history对象"}},[t._v("#")]),t._v(" history对象")]),t._v(" "),s("p",[t._v("历史记录\n//后退一页\nhistory.go(-1);\n//前进一页\nhistory.go(1);\n//前进两页\nhistory.go(2);")]),t._v(" "),s("p",[t._v("也可以给 go()方法传递一个字符串参数，此时浏览器会跳转到历史记录中包含该字符串的第一个\n位置——可能后退，也可能前进，具体要看哪个位置最近。")]),t._v(" "),s("p",[t._v("//后退一页\nhistory.back();\n//前进一页\nhistory.forward();")])])}),[],!1,null,null,null);s.default=r.exports}}]);