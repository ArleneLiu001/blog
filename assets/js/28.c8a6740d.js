(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{371:function(t,a,s){"use strict";s.r(a);var r=s(18),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"grid-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grid-布局"}},[t._v("#")]),t._v(" Grid 布局")]),t._v(" "),a("p",[t._v("Grid 布局即网格布局,在布局响应式，瀑布流等方面，非常简单。比flex布局更强大。")]),t._v(" "),a("h4",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性：")]),t._v(" "),a("ul",[a("li",[t._v("display：grid 或者 display：inline-grid（创建行内元素）。创建一个网格容器。一旦我们这样做，这个元素的所有直系子元素将成为网格项目。")]),t._v(" "),a("li",[t._v("grid-template-columns 属性和 grid-template-rows 属性\ngrid-template-columns：属性设置列宽。取值：\ngrid-template-rows 属性设置行高。")])]),t._v(" "),a("div",{staticClass:"language-JS extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wrapper "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  声明了三列，宽度分别为 200px 100px 200px */")]),t._v("\ngrid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("columns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 200px 100px 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngrid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  声明了两行，行高分别为 50px 50px  */")]),t._v("\ngrid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rows"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 50px 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("repeat() 函数 :可以简化重复的值。该函数接受两个参数：\n第一个参数是重复的次数，可以取值为auto-fill，表示自动填充，让一行（或者一列）中尽可能的容纳更多的单元格。"),a("br"),t._v("\n第二个参数是所要重复的值。\n如同：")]),t._v(" "),a("div",{staticClass:"language-JS extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  2行，而且行高都为 50px  */")]),t._v("\ngrid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rows"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//fr 关键字:类似于flex：1。fr 单位代表网格容器中可用空间的一等份。")]),t._v("\ngrid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("columns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 200px 1fr 2fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表示200固定，剩下的元素占用1/3,2/3。")]),t._v("\n")])])]),a("p",[t._v("minmax() 函数：")]),t._v(" "),a("div",{staticClass:"language-JS extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" grid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("columns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 1fr 1fr "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("minmax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 2fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表示：第三个元素最小宽度是300 ，最大不能大于第一第二列宽的两倍。")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//auto 关键字")]),t._v("\n grid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("columns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 100px auto 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//左右各100px，中间是自动宽度。")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("grid-row-gap 属性、grid-column-gap 属性以及 grid-gap 属性\ngrid-row-gap：设置行间距"),a("br"),t._v("\ngrid-column-gap：设置列间距"),a("br"),t._v("\ngrid-gap 属性是两者的简写形式。")])]),t._v(" "),a("li",[a("p",[t._v("grid-auto-flow：指定在网格中被自动布局的元素怎样排列。默认是row。")])])]),t._v(" "),a("div",{staticClass:"language-JS extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("grid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("auto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("flow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" row dense "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//类似于瀑布流的实现。")]),t._v("\n")])])]),a("ul",[a("li",[t._v("justify-items 属性、align-items 属性以及 place-items 属性：设置元素的对齐方式。类似于flex的此属性。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);