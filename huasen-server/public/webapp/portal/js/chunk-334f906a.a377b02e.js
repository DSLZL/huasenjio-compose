(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-334f906a"],{"1a3e":function(t,e,s){},"34d7":function(t,e,s){"use strict";s("c01dc")},"508ea":function(t,e,s){t.exports=s.p+"img/tianqiicon_duoyun_heiye.73e2a4b5.png"},"5a7f":function(t,e,s){t.exports=s.p+"img/tianqiicon_qingtian_baitian.52defb70.png"},"5cb6":function(t,e,s){t.exports=s.p+"img/tianqiicon_dayu.0b94af12.png"},6068:function(t,e,s){t.exports=s.p+"img/tianqiicon_duoyun_baitian.ea7ea788.png"},"6c0e":function(t,e,s){t.exports=s.p+"img/tianqiicon_leidian.7abc6d20.png"},7267:function(t,e,s){"use strict";s.r(e);var i=s("2f62"),n={name:"HsClock",data:()=>({hours:"00",minutes:"00",seconds:"00"}),mounted(){setInterval(this.clock,1e3)},methods:{clock(){let t=(new Date).getHours(),e=(new Date).getMinutes(),s=(new Date).getSeconds();this.$data.hours=t<10?"0"+t:t,this.$data.minutes=e<10?"0"+e:e,this.$data.seconds=s<10?"0"+s:s}}},a=(s("34d7"),s("2877")),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hs-clock"},[s("div",{staticClass:"time"},[s("span",{ref:"hour",staticClass:"hour"},[t._v(t._s(t.hours))]),s("div",{staticClass:"text"},[t._v("时")]),s("span",{ref:"minute",staticClass:"minute"},[t._v(t._s(t.minutes))]),s("div",{staticClass:"text"},[t._v("分")]),s("span",{ref:"second",staticClass:"second"},[t._v(t._s(t.seconds))]),s("div",{staticClass:"text"},[t._v("秒")])])])}),[],!1,null,"77315c13",null).exports;const c=new(s("dfa1").a)(void 0,200),r={0:s("5a7f"),1:s("6068"),2:s("a15ae"),3:s("d9c1"),4:s("6c0e"),7:s("b4b4"),8:s("f878"),9:s("f878"),10:s("5cb6"),18:s("e044")},l={0:s("d116"),1:s("508ea"),2:s("a15ae"),3:s("9120"),4:s("6c0e"),7:s("b4b4"),8:s("f878"),9:s("f878"),10:s("5cb6"),18:s("e044")};var d={name:"Weather",data:()=>({loaded:!1,showWeather:!0,imgDaytimeMap:r,weather:{}}),computed:{...Object(i.e)(["user"]),isDaytime(){const t=(new Date).getHours();return t>=6&&t<18},iconStyle(){let t=this.isDaytime?r:l;return{backgroundImage:`url(${t[this.weather.img]||t[0]})`}}},watch:{"user.config.cityCode":{handler(t,e){c.run(()=>{this.queryWeather()})},immediate:!0}},mounted(){},methods:{queryWeather(){this.loaded=!1,this.user.config.cityCode&&this.API.getWeatherByCityCode({cityId:this.user.config.cityCode},{notify:!1}).then(t=>{this.loaded=!0,this.weather=t.data,console.log("天气信息：",t.data)})}}},u=(s("92cd"),{name:"HomeHead",components:{Clock:o,Weather:Object(a.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.showWeather&&t.loaded,expression:"showWeather && loaded"}],staticClass:"flex items-center",attrs:{id:"hs-weather"}},[s("div",{staticClass:"city text",attrs:{title:t.weather.cityName}},[t._v(t._s(t.weather.cityName))]),s("div",{staticClass:"icon",style:t.iconStyle}),s("div",{staticClass:"weather text",attrs:{title:t.weather.weather}},[t._v(t._s(t.weather.weather))]),s("div",{staticClass:"temp text",attrs:{title:t.weather.minTemp+"°C"}},[t._v(t._s(t.weather.minTemp+"°C"))]),s("div",{staticClass:"quality text",attrs:{title:t.weather.quality}},[t._v(t._s(t.weather.quality))])])}),[],!1,null,"fa4da3e4",null).exports},props:{headBgConfig:{type:Object,default:()=>({clear:!1,white:!1,grossGlass:!0})}},data:()=>({showMenu:!1,selectedTake:"常用热门",takes:[],journals:[],currentJournal:{}}),computed:{...Object(i.e)(["user"]),showGrossGlass(){return!!(this.showMenu&&document.body.clientWidth<=1024)},signText(){return this.user.token?this.user.name:"注册登录"},links(){let t=this.$store.state.appConfig.site;return[{iconfontClass:"iconfont icon-md-home",text:t.guidePageName,url:t.guidePageUrl,isArticle:!1},{iconfontClass:"iconfont icon-md-stats",text:"更新日志",url:this.$store.state.appConfig.article.changelog,isArticle:!0},{iconfontClass:"iconfont icon-md-at",text:"关于我们",url:this.$store.state.appConfig.article.about,isArticle:!0}]}},mounted(){this.querySites(),this.queryJournals(),this.initMenu()},methods:{...Object(i.d)(["commitAll"]),querySites(){this.API.findSiteByCode({},{notify:!1}).then(t=>{this.commitAll({sites:t.data})})},queryJournals(){this.API.findJournal({},{notify:!1}).then(t=>{0!==t.data.length&&(this.journals=t.data||[],this.handleSelectJournal(this.journals[0]._id))})},handleSelectJournal(t){this.journals.find(e=>e._id===t)&&this.API.findJournalInformationById({_id:t},{notify:!1}).then(t=>{this.selectJournal(t.data)})},selectJournal(t){this.currentJournal=t,this.commitAll({categorySites:t.series})},handleNavbar(){this.commitAll({user:{config:{showNavbar:!this.user.config.showNavbar}}}),this.$store.dispatch("snapshoot")},sign(){this.user.token?this.commitAll({showWrapPerson:!0}):this.commitAll({showWrapSign:!0})},handleMenu(){this.showMenu=!this.showMenu},initMenu(){let t=this.LODASH.debounce(()=>{document.body.clientWidth>1024?this.showMenu=!0:this.showMenu=!1},100,{leading:!0,trailing:!0});window.addEventListener("resize",t),this.$once("hook:beforeDestory",()=>{window.removeEventListener("resize",t)}),this.$nextTick(()=>{let t=new Event("resize",{bubbles:!0,cancelable:!1});document.dispatchEvent(t)})},jump(t,e){let s=t.url;0===e?this.TOOL.openPage(s):this.TOOL.jumpToRead(this,s)}}}),h=(s("b21c"),Object(a.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"discolor",rawName:"v-discolor"}],staticClass:"home-head",class:{clear:!t.showGrossGlass&&t.headBgConfig.clear,white:t.headBgConfig.white,"gross-glass":t.showGrossGlass||t.headBgConfig.grossGlass},attrs:{id:"js-home-head"}},[s("section",{staticClass:"fold",on:{click:t.handleNavbar}},[s("i",{staticClass:"iconfont icon-a-unfoldcross-line"})]),s("section",{staticClass:"menu",on:{click:t.handleMenu}},[s("i",{staticClass:"iconfont icon-md-menu"})]),t.showMenu?s("section",{staticClass:"collapse"},[s("ul",{staticClass:"links"},t._l(t.links,(function(e,i){return s("li",{key:i,on:{click:function(s){return t.jump(e,i)}}},[s("i",{staticClass:"icon",class:e.iconfontClass}),s("span",{staticClass:"text"},[t._v(t._s(e.text))])])})),0)]):t._e(),s("section",{staticClass:"today"},[s("div",{staticClass:"clock-group"},[s("Clock")],1),s("div",{staticClass:"weather-group"},[s("Weather")],1)]),t.showMenu?s("section",{staticClass:"take"},[s("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"},on:{command:t.handleSelectJournal}},[s("span",{staticClass:"el-dropdown-link pointer"},[t._v(" "+t._s(t.currentJournal.name||"无订阅源")+" "),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t.journals.length?t._l(t.journals,(function(e){return s("el-dropdown-item",{key:e._id,attrs:{command:e._id}},[t._v(" "+t._s(e.name)+" ")])})):[s("el-dropdown-item",{attrs:{disabled:!0}},[t._v(" 空空如也 ")])]],2)],1)],1):t._e(),t.showMenu?s("section",{staticClass:"sign",on:{click:t.sign}},[t._v(" "+t._s(t.signText||"初级花酱")+" ")]):t._e()])}),[],!1,null,"1a8efd32",null));e.default=h.exports},9120:function(t,e,s){t.exports=s.p+"img/tianqiicon_zhenyu_heiye.ff0abcb7.png"},"92cd":function(t,e,s){"use strict";s("d7ed")},a15ae:function(t,e,s){t.exports=s.p+"img/tianqiicon_yintian.a95f8b9c.png"},b21c:function(t,e,s){"use strict";s("1a3e")},b4b4:function(t,e,s){t.exports=s.p+"img/tianqiicon_xiaoyu.6e3beeca.png"},c01dc:function(t,e,s){},d116:function(t,e,s){t.exports=s.p+"img/tianqiicon_qingtian_heiye.85f3e3ee.png"},d7ed:function(t,e,s){},d9c1:function(t,e,s){t.exports=s.p+"img/tianqiicon_zhenyu_baitian.6f8bfd03.png"},e044:function(t,e,s){t.exports=s.p+"img/tianqiicon_wu.18f9294e.png"},f878:function(t,e,s){t.exports=s.p+"img/tianqiicon_zhongyu.0b94af12.png"}}]);