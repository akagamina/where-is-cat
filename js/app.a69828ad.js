(function(t){function e(e){for(var r,o,i=e[0],s=e[1],u=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/where-is-cat/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1bd7":function(t,e,n){},"3a10":function(t,e,n){"use strict";var r=n("1bd7"),a=n.n(r);a.a},"3c38":function(t,e,n){"use strict";var r=n("a565"),a=n.n(r);a.a},"487f":function(t,e,n){"use strict";var r=n("f481"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition-group",{attrs:{name:"slideContainer",mode:"out-in"}},[n(t.activeComp,{key:"mainComp",tag:"component",on:{changeComp:function(e){t.activeComp=e}}})],1)],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrong-container"},[n("h3",[t._v("Correct answer!! Well Done")]),n("button",{on:{click:function(e){return t.newGame()}}},[t._v("New Game")])])},i=[],s={methods:{newGame:function(){this.$emit("changeComp","game-cards")}}},u=s,l=(n("678d"),n("2877")),d=Object(l["a"])(u,o,i,!1,null,"9e499f80",null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrong-container"},[n("h3",[t._v("Unfortunately wrong answer")]),n("button",{on:{click:function(e){return t.newGame()}}},[t._v("Try Again")])])},m=[],v={methods:{newGame:function(){this.$emit("changeComp","game-cards")}}},h=v,g=(n("3a10"),Object(l["a"])(h,p,m,!1,null,"fe6c986a",null)),b=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body-container"},[t._m(0),n("div",{staticClass:"container"},t._l(t.cards,(function(e){return n("cards",{key:e.id,class:{"selected-item-shadow":t.selectedItem===e.id},attrs:{item:e},nativeOn:{click:function(n){t.selectedItem=e.id}}})})),1),n("div",{staticClass:"container"},[n("transition",{attrs:{name:"rotate",mode:"out-in"}},[n(t.activeCard,{tag:"component",attrs:{item:t.answer},nativeOn:{click:function(e){return t.showCard(t.answer)}}})],1)],1)])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-block"},[n("h3",[t._v("Where is Cat?")]),n("h4",[t._v("After choose opened cards then click closed card")])])}],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("img",{attrs:{src:t.item.img}})])},y=[],j={props:["item"]},O=j,x=(n("487f"),Object(l["a"])(O,_,y,!1,null,"141dbc3a",null)),$=x.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"})},E=[],P=(n("3c38"),{}),G=Object(l["a"])(P,k,E,!1,null,"50ae0446",null),M=G.exports,S={components:{Cards:$,DefaultCard:M},data:function(){return{cards:[{id:1,component:"cards",img:n("9cd7")},{id:2,component:"cards",img:n("826f")},{id:3,component:"cards",img:n("e682")},{id:4,component:"cards",img:n("7f76")},{id:5,component:"cards",img:n("582e")}],selectedItem:null,answer:{},activeCard:"default-card"}},created:function(){var t=Math.ceil(Math.random()*this.cards.length);this.answer=this.cards[t-1]},methods:{showCard:function(t){var e=this;null===this.selectedItem?alert("Before result you must choose Card!"):(this.activeCard=t.component,setTimeout((function(){t.id===e.selectedItem?e.$emit("changeComp","Congrats"):e.$emit("changeComp","Wrongs")}),2e3))}}},I=S,T=(n("ad2b"),Object(l["a"])(I,w,C,!1,null,"79beac0c",null)),W=T.exports,A={components:{Congrats:f,GameCards:W,Wrongs:b},data:function(){return{activeComp:"game-cards"}}},D=A,J=(n("5c0b"),Object(l["a"])(D,a,c,!1,null,null,null)),B=J.exports,N=n("8c4f");r["a"].use(N["a"]);var U=new N["a"]({mode:"history",base:"/where-is-cat/"}),q=n("2f62");r["a"].use(q["a"]);var z=new q["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:U,store:z,render:function(t){return t(B)}}).$mount("#app")},"582e":function(t,e,n){t.exports=n.p+"img/card-5.cc92a140.jpg"},"5c0b":function(t,e,n){"use strict";var r=n("e332"),a=n.n(r);a.a},"678d":function(t,e,n){"use strict";var r=n("9f1b"),a=n.n(r);a.a},"7f76":function(t,e,n){t.exports=n.p+"img/card-4.41546176.jpg"},"826f":function(t,e,n){t.exports=n.p+"img/card-2.042b9483.jpg"},"9cd7":function(t,e,n){t.exports=n.p+"img/card-1.26feb967.jpg"},"9f1b":function(t,e,n){},a565:function(t,e,n){},ad2b:function(t,e,n){"use strict";var r=n("ccd0"),a=n.n(r);a.a},ccd0:function(t,e,n){},e332:function(t,e,n){},e682:function(t,e,n){t.exports=n.p+"img/card-3.fe4c3ecc.jpg"},f481:function(t,e,n){}});
//# sourceMappingURL=app.a69828ad.js.map