(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{158:function(t,e,n){var content=n(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("9d762d18",content,!0,{sourceMap:!1})},165:function(t,e,n){"use strict";var o=n(158);n.n(o).a},166:function(t,e,n){(e=n(27)(!1)).push([t.i,'.page-enter[data-v-60ad4153]{opacity:0}.page-enter-to[data-v-60ad4153],.page-leave[data-v-60ad4153]{opacity:1}.page-leave-to[data-v-60ad4153]{opacity:0}.page-enter-active[data-v-60ad4153]{-webkit-transition:opacity .5s ease;transition:opacity .5s ease;-webkit-animation:acrossIn-data-v-60ad4153 .3s ease-out both;animation:acrossIn-data-v-60ad4153 .3s ease-out both}.page-leave-active[data-v-60ad4153]{-webkit-transition:opacity .3s ease;transition:opacity .3s ease;-webkit-animation:acrossOut-data-v-60ad4153 .3s ease-in both;animation:acrossOut-data-v-60ad4153 .3s ease-in both}@-webkit-keyframes acrossIn-data-v-60ad4153{0%{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes acrossIn-data-v-60ad4153{0%{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes acrossOut-data-v-60ad4153{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0)}}@keyframes acrossOut-data-v-60ad4153{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0)}}.heading[data-v-60ad4153]{position:relative}.heading[data-v-60ad4153]:before{content:"";position:absolute;left:10px;right:-10px;top:15px;bottom:-2px;border:2px solid #89c7b4;border-width:0 2px 2px 0}',""]),t.exports=e},179:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{sections:[{title:"Who am I?",content:"Hi, my name is Jonathon. I'm a recent university graduate and Software Developer living in Melbourne, Australia. This site showcases some of the projects I've worked on. In future I plan to add tutorials, videos and articles on various coding / tech topics."},{title:"Background",content:"I studied an Information Technology degree at Monash University in Melbourne, Australia. There I discovered my passion for the endless problem-solving fun of coding. Currently I'm really into front-end and mobile app development."},{title:"This website",content:"I built this app using Nuxt, a Vue.js framework. Animations are a combination of pure CSS and the Anime.js library. Want to learn more? Click here to view the source code on GitHub.",link:"https://github.com/jvrankul/jonathon-codes"}]}},mounted:function(){this.$anime({targets:".section",opacity:[0,1],translateX:[-55,0],easing:"easeOutQuad",duration:400,delay:this.$anime.stagger(400)})},methods:{back:function(){this.$router.back()}}},r=(n(165),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about p-8 flex min-h-screen bg-primary text-white justify-center"},[n("div",{staticClass:"max-w-4xl"},[n("div",{staticClass:"fixed top-0 left-0 mt-8 ml-8 h-5 w-5"},[n("font-awesome-icon",{staticClass:"text-2xl cursor-pointer hover:opacity-75 xs:mt-2",attrs:{icon:["fas","arrow-left"]},on:{click:t.back}})],1),t._v(" "),t._m(0),t._v(" "),t._l(t.sections,(function(section,i){return n("div",{key:i,staticClass:"section"},[section.link?n("div",{staticClass:"mt-4 mb-12 hover:opacity-75"},[n("a",{attrs:{href:section.link,target:"_blank"}},[n("h2",{staticClass:"text-2xl text-semibold"},[t._v(t._s(section.title))]),t._v(" "),n("p",{staticClass:"text-lg font-light"},[t._v(t._s(section.content))])])]):t._e(),t._v(" "),section.link?t._e():n("div",{staticClass:"mt-4 mb-12"},[n("h2",{staticClass:"text-2xl text-semibold"},[t._v(t._s(section.title))]),t._v(" "),n("p",{staticClass:"text-lg font-light"},[t._v(t._s(section.content))])])])}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section flex justify-center text-3xl mb-8 text-center font-semibold"},[e("div",{staticClass:"heading"},[this._v("About")])])}],!1,null,"60ad4153",null);e.default=component.exports}}]);