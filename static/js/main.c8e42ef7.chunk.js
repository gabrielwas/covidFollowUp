(this["webpackJsonpcorona-follow"]=this["webpackJsonpcorona-follow"]||[]).push([[0],{100:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=(a(99),a(14)),i=(a(100),a(163)),s=a(15),u=a(39),m=Object(n.createContext)(),d=function(){return Object(n.useContext)(m)},p={countryData:void 0,allData:void 0,countries:void 0,selectedCountry:"Brazil",daysRange:void 0,activeStep:1},f=function(e,t){switch(t.type){case"updateProperty":return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},t.property,t.info));case"updateSelectedCountry":return Object(u.a)(Object(u.a)({},e),{},{selectedCountry:t.info});default:return e}},y=function(e,t,a){var n=[{id:"Mortes",data:[]},{id:"Recuperados",data:[]},{id:"Casos Ativos",data:[]},{id:"Confirmados",data:[]}],r=new Date("2020-03-03"),o=new Date("2020-03-03");return r.setDate(r.getDate()+a[0]),o.setDate(o.getDate()+a[1]),t[e].forEach((function(e){var t=e.date,a=e.confirmed,c=e.recovered,l=e.deaths,i=new Date(t);i>r&&i<o&&(n.find((function(e){return"Confirmados"===e.id})).data.push({x:i,y:a}),n.find((function(e){return"Recuperados"===e.id})).data.push({x:i,y:c}),n.find((function(e){return"Mortes"===e.id})).data.push({x:i,y:l}),n.find((function(e){return"Casos Ativos"===e.id})).data.push({x:i,y:a-c}))})),n},E=["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],v=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],g=a(165),h=a(164),b=a(166),D=a(50),x=a(167),w=a(168),C=a(161),j=a(75),O=a.n(j),k=a(157),M=a(76),R=a.n(M),S=a(58),N=a.n(S),A=a(160),B=a(159),F=function(){var e=d().dispatch,t=r.a.useState(null),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.createRef(),i=function(){o(null)},s=r.a.forwardRef((function(t,a){return r.a.createElement(k.a,{onClick:function(){i(),e({type:"updateProperty",property:"activeStep",info:t.nextStep})},ref:a},r.a.createElement(B.a,null,t.icon),r.a.createElement(A.a,{primary:t.name}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{edge:"start",color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement(O.a,null)),r.a.createElement(w.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:i},r.a.createElement(s,{name:"Gr\xe1fico Geral",nextStep:1,icon:r.a.createElement(R.a,null),ref:c}),r.a.createElement(s,{name:"Mortes",nextStep:2,icon:r.a.createElement(N.a,null),ref:c}),r.a.createElement(s,{name:"Mortes / Semana",nextStep:3,icon:r.a.createElement(N.a,null),ref:c})))},P=Object(i.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1}}})),T=function(e){var t=e.name,a=P();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null),r.a.createElement(g.a,{position:"fixed",className:a.appBar},r.a.createElement(b.a,null,r.a.createElement(x.a,{justify:"space-between",alignItems:"center",container:!0},r.a.createElement(x.a,{item:!0},r.a.createElement(F,null)),r.a.createElement(x.a,{item:!0},r.a.createElement(D.a,{variant:"h6",noWrap:!0},t))))))},W=a(129),I=a(162),X=a(133),z=a(77),J=a.n(z),G=a(78),L=a.n(G),Q=Object(i.a)((function(e){return{listConfig:{backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto",maxHeight:"75vh"}}})),Y=function(){var e=d(),t=e.state,a=e.dispatch,n=Q();return r.a.createElement("div",{className:n.listConfig},r.a.createElement(I.a,{component:"nav","aria-label":"secondary mailbox folders"},t.countries&&t.countries.map((function(e){return r.a.createElement(X.a,{key:e.name,button:!0,onClick:function(){return n=e.name,a({type:"updateProperty",property:"selectedCountry",info:n}),void a({type:"updateProperty",property:"countryData",info:y(n,t.allData,t.daysRange)});var n}},e.progression?r.a.createElement(B.a,null,r.a.createElement(J.a,{style:{color:"#ff3300"}})):r.a.createElement(B.a,null,r.a.createElement(L.a,{style:{color:"#33cc33"}})),r.a.createElement(A.a,{primary:e.name,secondary:"Casos: "+e.cases.toLocaleString("pt-BR")}))}))))},H=a(171),$=(a(65),a(11)),q=[{title:"Confirmados",color:"#3498DB",strokeWidth:12},{title:"Casos Ativos",color:"#F1C40F",strokeWidth:12},{title:"Recuperados",color:"#16A085",strokeWidth:12},{title:"Mortes",color:"#E74C3C",strokeWidth:12}],K=function(e){var t=e.data,a=Object(n.useState)([]),o=Object(l.a)(a,2),c=o[0],i=o[1];return r.a.createElement($.c,{xType:"time",margin:{right:65,left:10}},r.a.createElement($.d,null),r.a.createElement($.h,null),r.a.createElement($.i,null),r.a.createElement($.j,{orientation:"right"}),r.a.createElement($.b,{style:{position:"absolute",left:"5%",top:"5%"},items:q}),r.a.createElement($.f,{className:"linemark-series-example-2",curve:"curveMonotoneX",data:t[3].data,color:"#3498DB",onNearestX:function(e,a){var n=a.index;return i(t.map((function(e){return e.data[n]})))}}),r.a.createElement($.f,{className:"linemark-series-example-2",curve:"curveMonotoneX",data:t[2].data,color:"#F1C40F"}),r.a.createElement($.f,{className:"linemark-series-example-2",curve:"curveMonotoneX",data:t[1].data,color:"#16A085"}),r.a.createElement($.f,{className:"linemark-series-example-2",curve:"curveMonotoneX",data:t[0].data,color:"#E74C3C"}),r.a.createElement($.a,{values:c,itemsFormat:function(e){return[{title:"Confirmados",value:e[3].y},{title:"Casos Ativos",value:e[2].y},{title:"Recuperados",value:e[1].y},{title:"Mortes",value:e[0].y}]}}))},U=a(169),V=a(170),Z=Object(i.a)({root:{width:"90%"}}),_=new Date,ee=new Date("2020-03-03"),te=Math.floor((_.getTime()-ee.getTime())/864e5),ae=[{value:0,label:"03-03-2020"},{value:te,label:"".concat(_.getDate(),"-").concat(_.getMonth()+1,"-").concat(_.getFullYear())}],ne=function(){var e=Z(),t=d(),a=t.state,n=t.dispatch;return r.a.createElement("div",{className:e.root},r.a.createElement(V.a,{value:a.daysRange,onChange:function(e,t){n({type:"updateProperty",property:"daysRange",info:t}),n({type:"updateProperty",property:"countryData",info:y(a.selectedCountry,a.allData,t)})},"aria-labelledby":"range-slider",marks:ae,max:te}))},re=Object(i.a)((function(e){return{root:{width:"100%",height:"100%"},card:{flexGrow:1}}})),oe=function(){var e=d().state,t=re();return r.a.createElement(x.a,{container:!0,spacing:2,alignItems:"center",justify:"center",style:{}},r.a.createElement(x.a,{item:!0,sm:12,md:10},r.a.createElement(x.a,{container:!0,spacing:0},r.a.createElement(x.a,{item:!0,sm:12,md:6,xs:12},r.a.createElement(H.a,{label:e.selectedCountry})),r.a.createElement(x.a,{item:!0,sm:12,md:6,xs:12},e.daysRange&&r.a.createElement(ne,null)),r.a.createElement(x.a,{item:!0,sm:12,md:12,xs:12},r.a.createElement(U.a,{p:1},r.a.createElement("div",{style:{height:"80vh",width:"80vw"}},r.a.createElement(W.a,{className:t.root,elevation:3},e.countryData&&r.a.createElement(K,{data:e.countryData}))))))),r.a.createElement(x.a,{item:!0,sm:12,md:2},r.a.createElement(U.a,null,r.a.createElement(Y,null))))},ce=function(e){var t=e.data;return r.a.createElement($.c,{xType:"ordinal",margin:{right:65,left:10,bottom:80}},r.a.createElement($.d,null),r.a.createElement($.h,null),r.a.createElement($.i,{tickLabelAngle:-90}),r.a.createElement($.j,{orientation:"right"}),r.a.createElement($.g,{className:"vertical-bar-series-example",data:t,color:"#CB4335"}),r.a.createElement($.e,{data:t,getLabel:function(e){return e.y},labelAnchorX:"middle",labelAnchorY:"text-after-edge"}))},le=Object(i.a)((function(e){return{root:{width:"100%",height:"100%"}}})),ie=function(e){var t=e.dailyCases,a=d().state,o=le(),c=Object(n.useState)([]),i=Object(l.a)(c,2),s=i[0],u=i[1];return Object(n.useEffect)((function(){u(t?function(e,t){var a=[],n={y:0},r=new Date("2020-03-03"),o=new Date("2020-03-03");return r.setDate(r.getDate()+t[0]+1),o.setDate(o.getDate()+t[1]),e.find((function(e){return"Mortes"===e.id})).data.forEach((function(e,t,c){t>0&&(n=c[t-1]);var l=new Date(e.x);if(l>r&&l<o){var i=E[l.getDay()],s=l.getDate(),u=v[l.getMonth()];a.push({x:"".concat(i," ").concat(s," ").concat(u),y:e.y-n.y})}})),a}(a.countryData,a.daysRange):function(e,t){var a={y:0},n=new Date("2020-03-03"),r=new Date("2020-03-03");n.setDate(n.getDate()+t[0]+1),r.setDate(r.getDate()+t[1]);var o=[];e.find((function(e){return"Mortes"===e.id})).data.forEach((function(e,t,c){t>0&&(a=c[t-1]);var l=new Date(e.x);l>n&&l<r&&o.push({x:l,y:e.y-a.y})}));var c=[],l=-1,i=0;o.forEach((function(e){if(e.x.getDay()>l)i+=e.y;else{var t=new Date(e.x);t.setDate(t.getDate()-1);var a=E[t.getDay()],n=t.getDate(),r=v[t.getMonth()];c.push({x:"".concat(a," ").concat(n," ").concat(r),y:i}),i=e.y}l=e.x.getDay()}));var s=new Date,u=E[s.getDay()],m=s.getDate(),d=v[s.getMonth()];return c.push({x:"".concat(u," ").concat(m," ").concat(d),y:i}),c}(a.countryData,a.daysRange))}),[a.daysRange,a.countryData,t]),r.a.createElement(x.a,{container:!0,spacing:2,alignItems:"center",justify:"center",style:{}},r.a.createElement(x.a,{item:!0,sm:12,md:10},r.a.createElement(x.a,{container:!0,spacing:0,className:o.root},r.a.createElement(x.a,{item:!0,sm:12,md:6,xs:12},r.a.createElement(H.a,{label:a.selectedCountry})),r.a.createElement(x.a,{item:!0,sm:12,md:6,xs:12},a.daysRange&&r.a.createElement(ne,null)),r.a.createElement(x.a,{item:!0,sm:12,md:12,xs:12},r.a.createElement(U.a,{p:1},r.a.createElement("div",{style:{height:"80vh",width:"80vw"}},r.a.createElement(W.a,{className:o.root,elevation:3},r.a.createElement(ce,{data:s}))))))),r.a.createElement(x.a,{item:!0,sm:12,md:2},r.a.createElement(U.a,null,r.a.createElement(Y,null))))},se=function(e){switch(e.step){case 1:return r.a.createElement(oe,null);case 2:return r.a.createElement(ie,{dailyCases:!0});case 3:return r.a.createElement(ie,{dailyCases:!1})}},ue=function(e){var t=e.step;return r.a.createElement(se,{step:t})},me=Object(i.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}}));var de=function(){var e=me(),t=r.a.useReducer(f,p),a=Object(l.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){var e=new Date,t=new Date("2020-03-03"),a=Math.floor((e.getTime()-t.getTime())/864e5);c({type:"updateProperty",property:"daysRange",info:[0,a]}),fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(e){return e})).then((function(e){c({type:"updateProperty",property:"allData",info:e}),c({type:"updateProperty",property:"countryData",info:y("Brazil",e,[0,a])})})),fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(e){for(var t=[],a=0,n=Object.entries(e);a<n.length;a++){var r=Object(l.a)(n[a],2),o=r[0],c=r[1],i=c[c.length-1].confirmed-c[c.length-1].recovered,s=c[c.length-2].confirmed-c[c.length-2].recovered,u={name:o,cases:c[c.length-1].confirmed,progression:!(i<s)};t.push(u)}return t.sort((function(e,t){return e.cases<t.cases?1:-1})),t})).then((function(e){c({type:"updateProperty",property:"countries",info:e})}))}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(m.Provider,{value:{state:o,dispatch:c}},r.a.createElement(T,{name:"Covid Follow-up"}),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(ue,{step:o.activeStep}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(127)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.c8e42ef7.chunk.js.map