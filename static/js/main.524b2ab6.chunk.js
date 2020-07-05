(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,function(a,e,t){a.exports={dashboard:"Dashboard_dashboard__3p6rc",dashboard__parent:"Dashboard_dashboard__parent__2SIIX",dashboard__card:"Dashboard_dashboard__card__1dFN6",dashboard__forecast:"Dashboard_dashboard__forecast__3TzD9",dashboard__forecast__container:"Dashboard_dashboard__forecast__container__aMGu9",dashboard__forecast__container__active:"Dashboard_dashboard__forecast__container__active__dKeUO",dashboard__forecast__desc:"Dashboard_dashboard__forecast__desc__3sfyI",dashboard__forecast__image:"Dashboard_dashboard__forecast__image__2kC0d",dashboard__forecast__min:"Dashboard_dashboard__forecast__min__Dw5Q4",dashboard__forecast__temp:"Dashboard_dashboard__forecast__temp__Omsjf",dashboard__current:"Dashboard_dashboard__current__2Z6R5",dashboard__current__info:"Dashboard_dashboard__current__info__29HBR",dashboard__current__temp:"Dashboard_dashboard__current__temp__EDrkS",dashboard__current__hourly:"Dashboard_dashboard__current__hourly__2NVls",dashboard__extra:"Dashboard_dashboard__extra__2HPK9",dashboard__extra__option:"Dashboard_dashboard__extra__option__3LmMj",dashboard__extra__option__label:"Dashboard_dashboard__extra__option__label__3GTcs",dashboard__extra__sun:"Dashboard_dashboard__extra__sun__Cg533",dashboard__extra__sun__time:"Dashboard_dashboard__extra__sun__time__1ImyO",dashboard__hourly:"Dashboard_dashboard__hourly__3Ty4x",dashboard__hourly__time:"Dashboard_dashboard__hourly__time__39pHa",dashboard__hourly__temp:"Dashboard_dashboard__hourly__temp__1CGCc"}},function(a,e,t){a.exports={search:"Search_search__1Zpx3",search__pin:"Search_search__pin__33VVI",search__searchIcon:"Search_search__searchIcon__3olLa",search__input:"Search_search__input__30Muk",search__dropdown:"Search_search__dropdown__2cuNi",search__dropdown__res:"Search_search__dropdown__res__1wapI",search__dropdown__info:"Search_search__dropdown__info__1geHT",search__dropdown__info__temp:"Search_search__dropdown__info__temp__28llL",search__dropdown__info__desc:"Search_search__dropdown__info__desc__1qriv"}},,,,function(a,e,t){a.exports={parent:"Loader_parent__1lNZR",loader:"Loader_loader__1KZeC",load6:"Loader_load6__3L2lF",round:"Loader_round__38bTK"}},function(a,e,t){a.exports={chart:"Chart_chart__2n35j",chart__child:"Chart_chart__child__2QxDw"}},,,function(a,e,t){a.exports=t.p+"static/media/pin.e9ac59a8.svg"},function(a,e,t){a.exports=t.p+"static/media/search.744d54d4.svg"},,function(a,e,t){a.exports=t(22)},,,,,function(a,e,t){},function(a,e,t){},,,function(a,e,t){"use strict";t.r(e);var r=t(0),_=t.n(r),n=t(9),o=t.n(n),c=(t(18),t(19),t(4)),s=t(3),d=t(1),l=t.n(d),i=function(a){return a.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})},h=function(a){var e=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];return a?e[new Date(1e3*a).getDay()]:e[(new Date).getDay()]},m=t(2),u=t.n(m),p=t(10),b=t.n(p),f=t(11),v=t.n(f),g=function(a){var e,t,n=Object(r.useState)([]),o=Object(s.a)(n,2),d=o[0],l=o[1],i=Object(r.useState)(a.defaultVal),h=Object(s.a)(i,2),m=h[0],p=h[1],f=Object(r.useRef)(null);e=f,t=function(){l([]),p("")},Object(r.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t]);return _.a.createElement("div",{className:u.a.search,ref:f},_.a.createElement("input",{value:m,type:"text",className:u.a.search__input,onChange:function(a){if(p(a.target.value),a.target.value.length||l([]),a.target.value.length>3){var e="https://api.openweathermap.org/data/2.5/find?q=".concat(a.target.value,"&cnt=10&units=metric&appid=").concat("2fcb3aafd3a2b0258d94ef74fc758508");fetch(e).then((function(a){return a.json()})).then((function(a){var e,t=[],r=Object(c.a)(a.list);try{for(r.s();!(e=r.n()).done;){var _=e.value;t.push({lat:_.coord.lat,lon:_.coord.lon,name:_.name,temp:Math.ceil(_.main.temp),icon:_.weather[0].icon,desc:_.weather[0].main})}}catch(n){r.e(n)}finally{r.f()}l(t)}))}}}),_.a.createElement("img",{src:b.a,alt:"",className:u.a.search__pin}),_.a.createElement("img",{src:v.a,alt:"",className:u.a.search__searchIcon}),d.length?_.a.createElement("div",{className:u.a.search__dropdown},d.map((function(e,t){return _.a.createElement("div",{key:t,className:u.a.search__dropdown__res,onClick:function(){return t=e.lat,r=e.lon,a.getSearchData(t,r),void l([]);var t,r}},_.a.createElement("span",null,e.name),_.a.createElement("div",{className:u.a.search__dropdown__info},_.a.createElement("div",{className:u.a.search__dropdown__info__temp},_.a.createElement("span",null,e.temp,"\u2103"),_.a.createElement("span",{className:u.a.search__dropdown__info__desc},e.desc)),_.a.createElement("div",null,_.a.createElement("img",{className:u.a.dashboard__forecast__image,src:"https://openweathermap.org/img/wn/".concat(e.icon,".png"),alt:""}))))}))):null)},E=t(6),w=t.n(E),N=function(a){return _.a.createElement("div",{className:w.a.parent},_.a.createElement("div",{className:w.a.loader},"Loading..."))},x=t(7),y=t.n(x),D=t(12),S=t.n(D);function j(a){return Object(r.useEffect)((function(){!function(){var e=document.getElementById("myChart");new S.a(e,{type:"line",data:{labels:a.label,datasets:[{label:"Temperature",data:a.data,backgroundColor:"rgba(255,255,255,0.1)",borderColor:"rgba(54, 162, 235)",pointBackgroundColor:"rgba(54, 162, 235, 1)",pointBorderColor:"rgba(54, 162, 235, 1)",borderWidth:2}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{padding:100},display:!1}]}}})}()}),[]),_.a.createElement("div",{className:y.a.chart},_.a.createElement("div",{className:y.a.chart__child},_.a.createElement("canvas",{id:"myChart",height:"280",width:"0"})))}var O=h(),C=function(){var a=Object(r.useState)(),e=Object(s.a)(a,2),t=e[0],n=e[1],o=Object(r.useState)([]),d=Object(s.a)(o,2),m=d[0],u=d[1],p=Object(r.useState)([]),b=Object(s.a)(p,2),f=b[0],v=b[1],E=Object(r.useState)([]),w=Object(s.a)(E,2),x=w[0],y=w[1],D=Object(r.useState)([]),S=Object(s.a)(D,2),C=S[0],k=S[1],L=Object(r.useState)(!0),I=Object(s.a)(L,2),M=I[0],T=I[1],B=function(a,e){var t;t="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(e,"&units=metric&appid=").concat("2fcb3aafd3a2b0258d94ef74fc758508"),fetch(t).then((function(a){return a.json()})).then((function(a){T(!1),n(a.current);var e,t=[],r=[],_=Object(c.a)(a.hourly.slice(0,24));try{for(_.s();!(e=_.n()).done;){var o=e.value,s=new Date(1e3*o.dt),d=i(s);t.push(["".concat(Math.ceil(o.temp),"\xb0C"),d]),r.push(Math.ceil(o.temp))}}catch(g){_.e(g)}finally{_.f()}u(t),v(r);var l,m=[],p=Object(c.a)(a.daily.slice(0,7));try{for(p.s();!(l=p.n()).done;){var b=l.value,f=h(b.dt);m.push({day:f,min:Math.ceil(b.temp.min),max:Math.ceil(b.temp.max),icon:b.weather[0].icon,desc:b.weather[0].main})}}catch(g){p.e(g)}finally{p.f()}y(m)}),(function(a){}))},H=function(a){localStorage.setItem("location-allowed",!0),function(a,e){var t;t="https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(e,"&units=metric&appid=").concat("2fcb3aafd3a2b0258d94ef74fc758508"),fetch(t).then((function(a){return a.json()})).then((function(a){k(a.name)}))}(a.coords.latitude,a.coords.longitude),B(a.coords.latitude,a.coords.longitude)},V=function(){localStorage.removeItem("location-allowed"),alert("Unable to retrieve location.")};Object(r.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(H,V,{enableHighAccuracy:!0,timeout:1e4,maximumAge:0}):alert("Your browser does not support location tracking, or permission is denied.")}),[]);return _.a.createElement(_.a.Fragment,null,M?_.a.createElement(N,null):_.a.createElement("div",{className:l.a.dashboard},_.a.createElement("div",{className:l.a.dashboard__parent},_.a.createElement(g,{getSearchData:function(a,e){B(a,e)},defaultVal:C}),_.a.createElement("div",{className:l.a.dashboard__forecast},x.map((function(a,e){return _.a.createElement("div",{key:e,className:"".concat(l.a.dashboard__forecast__container," ").concat(a.day===O?"".concat(l.a.dashboard__forecast__container__active):"")},_.a.createElement("span",null,a.day),_.a.createElement("div",null,_.a.createElement("span",{className:l.a.dashboard__forecast__temp},a.max,"\xb0"),_.a.createElement("span",{className:l.a.dashboard__forecast__min},a.min,"\xb0")),_.a.createElement("img",{className:l.a.dashboard__forecast__image,src:"https://openweathermap.org/img/wn/".concat(a.icon,".png"),alt:""}),_.a.createElement("span",{className:l.a.dashboard__forecast__desc},a.desc))}))),_.a.createElement("div",{className:l.a.dashboard__card},t&&t.weather?_.a.createElement("div",{className:l.a.dashboard__current},_.a.createElement("div",{className:l.a.dashboard__current__info},_.a.createElement("span",{className:l.a.dashboard__current__temp},Math.ceil(t.temp),"\u2103"),_.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(null===t||void 0===t?void 0:t.weather[0].icon,"@2x.png"),alt:""})),m.length&&f.length?_.a.createElement(j,{label:m,data:f}):null,_.a.createElement("div",{className:l.a.dashboard__extra},_.a.createElement("div",{className:l.a.dashboard__extra__option},_.a.createElement("span",{className:l.a.dashboard__extra__option__label},"Pressure"),_.a.createElement("span",null,t.pressure," hpa")),_.a.createElement("div",{className:l.a.dashboard__extra__option},_.a.createElement("span",{className:l.a.dashboard__extra__option__label},"Humidity"),_.a.createElement("span",null,t.humidity," %"))),_.a.createElement("div",{className:l.a.dashboard__extra},_.a.createElement("div",{className:l.a.dashboard__extra__sun},_.a.createElement("span",{className:l.a.dashboard__extra__option__label},"Sunrise"),_.a.createElement("span",{className:l.a.dashboard__extra__sun__time},i(new Date(1e3*t.sunrise)))),_.a.createElement("div",{className:l.a.dashboard__extra__sun},_.a.createElement("span",{className:l.a.dashboard__extra__option__label},"Sunset"),_.a.createElement("span",{className:l.a.dashboard__extra__sun__time},i(new Date(1e3*t.sunset)))))):null))))};var k=function(){return _.a.createElement("div",{className:"app"},_.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(_.a.createElement(_.a.StrictMode,null,_.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.524b2ab6.chunk.js.map