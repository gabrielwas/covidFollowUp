(this["webpackJsonpcorona-follow"]=this["webpackJsonpcorona-follow"]||[]).push([[0],{269:function(e,t,a){e.exports=a(423)},274:function(e,t,a){},275:function(e,t,a){},423:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(16),i=a.n(o),c=(a(274),a(15)),l=(a(275),a(469)),s=a(33),d=a(90),u=Object(n.createContext)(),m=function(){return Object(n.useContext)(u)},p={countryData:void 0,allData:void 0,countries:void 0,selectedCountry:"Brazil",activeStep:1},f=function(e,t){switch(t.type){case"updateProperty":return Object(d.a)(Object(d.a)({},e),{},Object(s.a)({},t.property,t.info));case"updateSelectedCountry":return Object(d.a)(Object(d.a)({},e),{},{selectedCountry:t.info});default:return e}},h=function(e,t){var a=[{id:"Mortes",data:[]},{id:"Recuperados",data:[]},{id:"Casos Ativos",data:[]},{id:"Confirmados",data:[]}];return t[e].forEach((function(e){var t=e.date,n=e.confirmed,r=e.recovered,o=e.deaths,i=new Date("2020-03-03");new Date(t)>i&&(a.find((function(e){return"Confirmados"===e.id})).data.push({x:t,y:n}),a.find((function(e){return"Recuperados"===e.id})).data.push({x:t,y:r}),a.find((function(e){return"Mortes"===e.id})).data.push({x:t,y:o}),a.find((function(e){return"Casos Ativos"===e.id})).data.push({x:t,y:n-r}))})),a},g=["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],y=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],v=function(e){var t,a=[];return e.find((function(e){return"Mortes"===e.id})).data.forEach((function(e){var n=new Date;n.setDate(n.getDate()-15);var r=new Date(e.x);if(r>n){var o=g[r.getDay()],i=r.getDate(),c=y[r.getMonth()];a.push({date:"".concat(o," ").concat(i," ").concat(c),deaths:e.y-t.y})}t=e})),a},b=a(473),E=a(471),x=a(474),w=a(127),k=a(475),S=Object(l.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1}}})),j=function(e){var t=e.name,a=S();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null),r.a.createElement(b.a,{position:"fixed",className:a.appBar},r.a.createElement(x.a,null,r.a.createElement(k.a,{justify:"space-between",container:!0},r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{variant:"h6",noWrap:!0},t))))))},O=a(524),D=a(477),C=a(476),P=function(e){var t=e.name,a=e.nextStep,n=e.icon,o=m().dispatch;return r.a.createElement(O.a,{button:!0,key:t,onClick:function(){return o({type:"updateProperty",property:"activeStep",info:a})}},r.a.createElement(C.a,null,n),r.a.createElement(D.a,{primary:t}))},B=a(523),z=a(478),N=Object(l.a)((function(e){return{drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar}})),R=function(e){var t=e.children,a=N();return r.a.createElement(B.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(z.a,null,t))},M=a(236),W=a.n(M),L=a(237),F=a.n(L),I=function(){return r.a.createElement(R,null,r.a.createElement(P,{name:"Gr\xe1fico Geral",nextStep:1,icon:r.a.createElement(W.a,null)}),r.a.createElement(P,{name:"Mortes",nextStep:2,icon:r.a.createElement(F.a,null)}))},J=a(425),A=a(238),T=function(e){var t=e.data;return r.a.createElement(A.a,{data:t,margin:{top:50,right:110,bottom:50,left:60},xScale:{type:"time",format:"%Y-%m-%d",precision:"day"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!1,reverse:!1},xFormat:"time:%d %b",axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:50,legendOffset:36,legendPosition:"middle",format:"%b %d"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legendOffset:-40,legendPosition:"middle"},colors:{scheme:"set1"},pointSize:4,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabel:"y",pointLabelYOffset:-12,useMesh:!0,legends:[{anchor:"top",direction:"row",justify:!1,translateX:-400,translateY:-36,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:100,itemHeight:20,itemOpacity:.75,symbolSize:18,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)",effects:[{on:"hover",style:{itemBackground:"rgba(0, 0, 0, .03)",itemOpacity:1}}]}]})},G=a(249),H=a.n(G),Q=a(250),Y=a.n(Q),X=Object(l.a)((function(e){return{listConfig:{backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto",maxHeight:"85vh",minWidth:"25vh"}}})),$=function(){var e=m(),t=e.state,a=e.dispatch,n=X();return r.a.createElement("div",{className:n.listConfig},r.a.createElement(z.a,{component:"nav","aria-label":"secondary mailbox folders"},t.countries&&t.countries.map((function(e){return r.a.createElement(O.a,{key:e.name,button:!0,onClick:function(){return n=e.name,a({type:"updateProperty",property:"selectedCountry",info:n}),void a({type:"updateProperty",property:"countryData",info:h(n,t.allData)});var n}},e.progression?r.a.createElement(C.a,null,r.a.createElement(H.a,{style:{color:"#ff3300"}})):r.a.createElement(C.a,null,r.a.createElement(Y.a,{style:{color:"#33cc33"}})),r.a.createElement(D.a,{primary:e.name,secondary:"Casos: "+e.cases.toLocaleString("pt-BR")}))}))))},q=Object(l.a)((function(e){return{root:{width:"100%",height:"100%"}}})),K=function(){var e=m().state,t=q();return r.a.createElement(k.a,{container:!0,spacing:2,alignItems:"flex-start",style:{},justify:"center"},r.a.createElement(k.a,{item:!0,xs:2},r.a.createElement($,null)),r.a.createElement(k.a,{item:!0,xs:10},r.a.createElement("div",{style:{height:"85vh",width:"70vw",display:"flex"}},r.a.createElement(J.a,{className:t.root,elevation:3},e.countryData&&r.a.createElement(T,{data:e.countryData})))))},U=a(251),V=function(e){var t=e.data;return r.a.createElement(U.a,{data:t,keys:["deaths"],indexBy:"date",margin:{top:50,right:130,bottom:50,left:60},padding:.3,colors:{scheme:"set1"},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"fries"},id:"dots"},{match:{id:"sandwich"},id:"lines"}],borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Dia",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Quantidade",legendPosition:"middle",legendOffset:-50},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[],animate:!0,motionStiffness:90,motionDamping:15})},Z=Object(l.a)((function(e){return{root:{width:"100%",height:"100%"}}})),_=function(){var e=m().state,t=Z();return r.a.createElement(k.a,{container:!0,spacing:2,alignItems:"flex-start",style:{},justify:"center"},r.a.createElement(k.a,{item:!0,xs:2},r.a.createElement($,null)),r.a.createElement(k.a,{item:!0,xs:10},r.a.createElement("div",{style:{height:"85vh",width:"70vw",display:"flex"}},r.a.createElement(J.a,{className:t.root,elevation:3},e.countryData&&r.a.createElement(V,{data:v(e.countryData)})))))},ee=function(e){switch(e.step){case 1:return r.a.createElement(K,null);case 2:return r.a.createElement(_,null)}},te=function(e){var t=e.step;return r.a.createElement(ee,{step:t})},ae=Object(l.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}}));var ne=function(){var e=ae(),t=r.a.useReducer(f,p),a=Object(c.a)(t,2),o=a[0],i=a[1];return Object(n.useEffect)((function(){fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(e){return e})).then((function(e){i({type:"updateProperty",property:"allData",info:e}),i({type:"updateProperty",property:"countryData",info:h("Brazil",e)})})),fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(e){for(var t=[],a=0,n=Object.entries(e);a<n.length;a++){var r=Object(c.a)(n[a],2),o=r[0],i=r[1],l=i[i.length-1].confirmed-i[i.length-1].recovered,s=i[i.length-2].confirmed-i[i.length-2].recovered,d={name:o,cases:i[i.length-1].confirmed,progression:!(l<s)};t.push(d)}return t.sort((function(e,t){return e.cases<t.cases?1:-1})),t})).then((function(e){i({type:"updateProperty",property:"countries",info:e})}))}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(u.Provider,{value:{state:o,dispatch:i}},r.a.createElement(j,{name:"Covid Follow-up"}),r.a.createElement(I,null),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(te,{step:o.activeStep}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[269,1,2]]]);
//# sourceMappingURL=main.45acaef6.chunk.js.map