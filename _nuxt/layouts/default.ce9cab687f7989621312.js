webpackJsonp([0],{"4n3Z":function(t,e,s){"use strict";e.a={data:function(){return{loading:!1,items:[],search:null,select:[],beers:[]}},watch:{search:function(t){t&&this.querySelections(t)},select:function(t){var e=this.beers.find(function(e){return e.name==t});this.$store.commit("setCurrentBeer",e),this.$router.push("/beer/"+e.id)}},methods:{querySelections:function(t){this.loading=!0,this.$store.dispatch("getBeersFromApi",t),this.beers=this.$store.getters.getBeers,this.items=this.beers.map(function(t){return t.name}),this.loading=!1}}}},DLCH:function(t,e,s){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-toolbar",{staticClass:"primary",attrs:{fixed:"",app:"",dark:""}},[e("v-toolbar-title",[this._v("WhatBeer")])],1),e("v-content",[e("v-container",[e("SearchSelect",{staticClass:"my-3"}),e("nuxt"),e("v-flex",{staticClass:"mx-auto",attrs:{"text-xs-center":""}},[e("img",{staticClass:"my-5",attrs:{src:s("d8ua"),alt:"Beer mug icon"}})])],1)],1),e("v-footer",{staticClass:"primary",attrs:{fixed:"",app:""}},[e("span",{staticClass:"white--text"},[this._v("\n      © 2018 - \n      "),e("a",{attrs:{href:"https://clarkmitchell.github.io"}},[this._v("\n        Clark Mitchell\n      ")])])])],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},"LxP+":function(t,e,s){"use strict";var r=s("4n3Z"),a=s("g02O"),n=s("VU/8")(r.a,a.a,!1,null,null,null);n.options.__file="components/SearchSelect.vue",e.a=n.exports},Ma2J:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("RQzP"),a=s("DLCH"),n=s("VU/8")(r.a,a.a,!1,null,null,null);n.options.__file="layouts/default.vue",e.default=n.exports},RQzP:function(t,e,s){"use strict";var r=s("LxP+");e.a={data:function(){return{drawer:!1,items:[{icon:"home",title:"Home",to:"/"},{icon:"search",title:"Search",to:"/search"}],rightDrawer:!1,title:"What Beer"}},components:{SearchSelect:r.a}}},d8ua:function(t,e,s){t.exports=s.p+"img/icon-medium.0c5a370.png"},g02O:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-flex",{attrs:{xs10:"","offset-xs1":""}},[s("v-select",{attrs:{label:"Search Beers",autocomplete:"",loading:t.loading,"cache-items":"",items:t.items,rules:[function(){return t.select.length>0}],"search-input":t.search},on:{"update:searchInput":function(e){t.search=e}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a}});