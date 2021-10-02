(this["webpackJsonpaxie-infinity-scholar-tracker"]=this["webpackJsonpaxie-infinity-scholar-tracker"]||[]).push([[0],{139:function(e,a,t){},169:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(37),c=t.n(r),s=(t(139),t(3)),i=t(15),l=t(12),o=t(82),d=t.n(o),j=t(105),h=t(106),m=t.n(h),b=t(5),x=t(249),u=t(244),p=t(252),O=t(251),g=t(250),_=t(235),f=t(84),v=t.n(f),y=t(69),S=t.n(y),w=t(253),C=t(255),k=t(245),F=t.p+"static/media/slp_logo.18074c03.png",D=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},I=function(e){return new Date(e).toLocaleDateString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"numeric"})},z=function(e,a){return parseInt((e/a).toFixed(0))},N=function(e){return Math.ceil((Date.now()-parseInt("".concat(e,"000")))/864e5)},W=function(e,a){var t=0;return e.forEach((function(e){t+=parseInt(e[a])})),t},U=function(e){return 100-e},A=function(e,a){return parseInt((e*(a/100)).toFixed(0))},R=function(e,a){return e.sort((function(e,t){return e[a].toString().localeCompare(t[a].toString(),void 0,{numeric:!0,sensitivity:"base"})}))},E=t(0);var J=function(e){var a=e.label,t=e.slp,n=e.slpPrice,r=e.currency;return Object(E.jsx)(w.a,{elevation:0,sx:{display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"15px",transition:"all 0.2s",boxShadow:"0 8px 30px rgb(222 230 241 / 80%)","&:hover":{transform:"scale(1.03)"}},children:Object(E.jsxs)(C.a,{children:[Object(E.jsxs)(x.a,{sx:{display:"flex",m:1,alignItems:"center"},children:[Object(E.jsx)(k.a,{alt:"slp icon",src:F,sx:{m:1,height:35,width:35}}),Object(E.jsx)(g.a,{sx:{fontSize:28,fontWeight:"bold"},variant:"h5",component:"div",children:D(t)})]}),Object(E.jsx)(g.a,{sx:{fontSize:14,fontWeight:"bold",textAlign:"center"},children:a}),Object(E.jsxs)(g.a,{sx:{fontSize:14,textAlign:"center"},color:"text.secondary",children:["\u2248 ",D((t*n).toFixed(0))," ",r.toUpperCase()]})]})})},M=t(16),P=t(242),L=t(241),T=t(256),B=t(108),G=t.n(B),V=t(109),q=t.n(V),H=t(238),Z=n.forwardRef((function(e,a){return Object(E.jsx)(H.a,Object(i.a)({icon:Object(E.jsx)(G.a,{}),ref:a,variant:"filled"},e))}));var $=function(e){var a=e.onClose,t=e.open,r=e.type,c=Object(E.jsx)(n.Fragment,{children:Object(E.jsx)(T.a,{size:"small","aria-label":"close",color:"inherit",onClick:a,children:Object(E.jsx)(q.a,{fontSize:"small"})})});return Object(E.jsx)("div",{children:Object(E.jsx)(L.a,{open:t,autoHideDuration:6e3,onClose:a,action:c,children:Object(E.jsx)(Z,{onClose:a,severity:"success"===r?"info":"error",sx:{width:"100%"},children:"success"===r?"Scholar added":"Successfully removed"})})})};var K=function(e){var a=e.localData,t=e.onUpdate,r=e.scholars,c=Object(n.useState)(!1),o=Object(l.a)(c,2),d=o[0],j=o[1],h=Object(n.useState)({name:"",ronin_address:"",manager_share:""}),m=Object(l.a)(h,2),b=m[0],p=m[1],g=Object(n.useState)({name:!0,ronin_address:!0,manager_share:!0,name_error_message:"",ronin_error_message:"",manager_error_message:""}),_=Object(l.a)(g,2),f=_[0],v=_[1];function y(e){var a=e.target,t=a.name,n=a.value;p((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},t,n))}))}function S(e){var t=e.target,n=t.name,r=t.value;v((function(e){return"name"===n?r?-1!==a.findIndex((function(e){return e.name.toLowerCase()===r.toLowerCase()}))?Object(i.a)(Object(i.a)({},e),{},{name:!1,name_error_message:"Name already exists"}):Object(i.a)(Object(i.a)({},e),{},{name:!0,name_error_message:""}):Object(i.a)(Object(i.a)({},e),{},{name:!1,name_error_message:"Name is required"}):"ronin_address"===n?r?-1!==a.findIndex((function(e){return e.ronin_address.toLowerCase()===r.toLowerCase()}))?Object(i.a)(Object(i.a)({},e),{},{ronin_address:!1,ronin_error_message:"Ronin address already exists"}):r.match(/^ronin:[a-zA-Z0-9]{40}$/)?Object(i.a)(Object(i.a)({},e),{},{ronin_address:!0,ronin_error_message:""}):Object(i.a)(Object(i.a)({},e),{},{ronin_address:!1,ronin_error_message:"Invalid ronin address"}):Object(i.a)(Object(i.a)({},e),{},{ronin_address:!1,ronin_error_message:"Ronin address is required"}):"manager_share"===n?r?r<0||r>100?Object(i.a)(Object(i.a)({},e),{},{manager_share:!1,manager_error_message:"Manager share must be 0 - 100"}):Object(i.a)(Object(i.a)({},e),{},{manager_share:!0,manager_error_message:""}):Object(i.a)(Object(i.a)({},e),{},{manager_share:!1,manager_error_message:"Manager share is required"}):void 0}))}return Object(E.jsxs)(x.a,{children:[Object(E.jsxs)(u.a,{container:!0,spacing:2,sx:{mb:6},children:[Object(E.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(E.jsx)(P.a,{fullWidth:!0,error:!f.name,helperText:!f.name&&f.name_error_message,onChange:y,onBlur:S,name:"name",id:"name",label:"Name",variant:"outlined",size:"small",value:b.name})}),Object(E.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(E.jsx)(P.a,{fullWidth:!0,error:!f.ronin_address,helperText:!f.ronin_address&&f.ronin_error_message,onChange:y,onBlur:S,name:"ronin_address",id:"ronin-address",label:"Ronin Address",variant:"outlined",size:"small",value:b.ronin_address})}),Object(E.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(E.jsx)(P.a,{fullWidth:!0,error:!f.manager_share,helperText:!f.manager_share&&f.manager_error_message,onChange:y,onBlur:S,type:"number",name:"manager_share",id:"manager-share",label:"Manager Share (%)",variant:"outlined",size:"small",value:b.manager_share,inputProps:{min:0,max:100}})}),Object(E.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(E.jsx)(O.a,{fullWidth:!0,onClick:function(){f.name&&f.ronin_address&&f.manager_share&&""!==b.name&&""!==b.ronin_address&&""!==b.manager_share&&(r>=100?alert("Only 100 scholars are allowed at the moment."):(t([].concat(Object(M.a)(a),[b]),!1),j(!0),p({name:"",ronin_address:"",manager_share:""})))},type:"submit",size:"medium",variant:"contained",disableElevation:!0,children:"Add Scholar"})})]}),Object(E.jsx)($,{onClose:function(e,a){"clickaway"!==a&&j(!1)},open:d,type:"success"})]})},Q=t(259),X=t(263),Y=t(262),ee=t(258),ae=t(260),te=t(261),ne=t(254),re=t(110),ce=t.n(re);function se(e,a,t,n,r,c,s,i,l,o,d){return{number:e,name:a,average:t,unclaimed:n,manager:r,scholar:c,lastClaim:s,nextClaim:i,mmr:l,del:o,roninAddress:d}}function ie(e){var a=e.data,t=e.localData,n=e.onDelete,r=e.localSettings;function c(){document.body.style.cursor="pointer"}function s(){document.body.style.cursor="default"}function i(e){return Object(E.jsx)(_.a,{title:"Remove ".concat(e),children:Object(E.jsx)(T.a,{color:"primary",size:"small",children:Object(E.jsx)(ce.a,{})})})}function l(e,a){var t,n="https://marketplace.axieinfinity.com/profile/".concat(a);return Object(E.jsx)(_.a,{title:"View marketplace profile of ".concat(e),children:Object(E.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#1976D2"},children:(t=e,t.length>10?"".concat(t.substring(0,10),"..."):t)})})}var o=("ascending"===r.sort_type?R(a,r.sort_by):R(a,r.sort_by).reverse()).map((function(e,a){return 1209600===e.next_claim_raw?se(a+1,l(e.name,e.ronin_address),D(e.average_slp),D(e.unclaimed_slp),"".concat(D(e.manager_share)," (").concat(e.manager_percent,"%)"),"".concat(D(e.scholar_share)," (").concat(e.scholar_percent,"%)"),"No record","No record",e.mmr,i(e.name),e.ronin_address):se(a+1,l(e.name,e.ronin_address),D(e.average_slp),D(e.unclaimed_slp),"".concat(D(e.manager_share)," (").concat(e.manager_percent,"%)"),"".concat(D(e.scholar_share)," (").concat(e.scholar_percent,"%)"),"".concat((t=e.last_claim_in_days,"".concat(t,1===t?" day ago":" days ago"))),e.next_claim_date,e.mmr,i(e.name),e.ronin_address);var t}));return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(ee.a,{component:ne.a,variant:"outlined",sx:{mb:8},children:Object(E.jsxs)(Q.a,{stickyHeader:!0,"aria-label":"data table",children:[Object(E.jsx)(ae.a,{children:Object(E.jsxs)(te.a,{children:[Object(E.jsx)(Y.a,{children:"#"}),Object(E.jsx)(Y.a,{align:"left",children:"Name"}),Object(E.jsx)(Y.a,{align:"center",children:"Daily Average"}),Object(E.jsx)(Y.a,{align:"center",children:"Unclaimed"}),Object(E.jsx)(Y.a,{align:"center",children:"Manager Share"}),Object(E.jsx)(Y.a,{align:"center",children:"Scholar Share"}),Object(E.jsx)(Y.a,{align:"center",children:"Last Claim"}),Object(E.jsx)(Y.a,{align:"center",children:"Next Claim"}),Object(E.jsx)(Y.a,{align:"center",children:"MMR"}),Object(E.jsx)(Y.a,{align:"center"})]})}),Object(E.jsx)(X.a,{children:o.map((function(e,a){return Object(E.jsxs)(te.a,{onClick:null,sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(E.jsx)(Y.a,{component:"th",scope:"row",children:e.number}),Object(E.jsx)(Y.a,{align:"left",children:e.name}),Object(E.jsx)(Y.a,{align:"center",children:e.average}),Object(E.jsx)(Y.a,{align:"center",children:e.unclaimed}),Object(E.jsx)(Y.a,{align:"center",children:e.manager}),Object(E.jsx)(Y.a,{align:"center",children:e.scholar}),Object(E.jsx)(Y.a,{align:"center",children:e.lastClaim}),Object(E.jsx)(Y.a,{align:"center",children:e.nextClaim}),Object(E.jsx)(Y.a,{align:"center",children:e.mmr}),Object(E.jsx)(Y.a,{onMouseEnter:c,onMouseLeave:s,onClick:function(){n(t.filter((function(a){return a.ronin_address!==e.roninAddress})),!0)},align:"right",children:e.del})]},a)}))})]})})})}var le=function(){return Object(E.jsx)(_.a,{title:"Download data in .csv format",children:Object(E.jsx)(O.a,{sx:{m:1,minWidth:"200px"},variant:"contained",color:"success",disableElevation:!0,startIcon:Object(E.jsx)(S.a,{}),children:"Export Excel"})})},oe=t(243),de=t(240),je=t(257),he=t(236);var me=function(e){var a=e.onUpdate,t=e.localSettings,r=Object(n.useState)(""),c=Object(l.a)(r,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){i(t.sort_by)}),[t]),Object(E.jsx)(x.a,{children:Object(E.jsxs)(je.a,{fullWidth:!0,children:[Object(E.jsx)(oe.a,{id:"select-label"}),Object(E.jsxs)(he.a,{sx:{m:2,minWidth:"125px"},variant:"standard",name:"sort_by",labelId:"select-label",id:"sort-select",value:s,label:"Sort by",onChange:function(e){i(e.target.value),a(e)},children:[Object(E.jsx)(de.a,{value:"name",children:"Name"}),Object(E.jsx)(de.a,{value:"average_slp",children:"Daily Average SLP"}),Object(E.jsx)(de.a,{value:"unclaimed_slp",children:"Unclaimed SLP"}),Object(E.jsx)(de.a,{value:"manager_share",children:"Manager Share"}),Object(E.jsx)(de.a,{value:"scholar_share",children:"Scholar Share"}),Object(E.jsx)(de.a,{value:"last_claim_raw",children:"Last Claim"}),Object(E.jsx)(de.a,{value:"mmr",children:"MMR"})]})]})})};var be=function(e){var a=e.onUpdate,t=e.localSettings,r=Object(n.useState)(""),c=Object(l.a)(r,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){i(t.sort_type)}),[t]),Object(E.jsx)(x.a,{children:Object(E.jsxs)(je.a,{fullWidth:!0,children:[Object(E.jsx)(oe.a,{id:"select-label"}),Object(E.jsxs)(he.a,{sx:{m:2,minWidth:"125px"},variant:"standard",labelId:"select-label",name:"sort_type",id:"sort-select",value:s,label:"Asc/Desc",onChange:function(e){i(e.target.value),a(e)},children:[Object(E.jsx)(de.a,{value:"ascending",children:"Ascending"}),Object(E.jsx)(de.a,{value:"descending",children:"Descending"})]})]})})},xe=t(112),ue=Object(xe.a)({palette:{mode:"light"}});var pe=t(265),Oe=t(264),ge=t(111),_e=t.n(ge),fe=t(268),ve=t(272),ye=t(270),Se=t(271),we=t(269),Ce=t.p+"static/media/profile.bae0f824.jpg";var ke=function(e){var a=e.open,t=e.onClose;return Object(E.jsxs)(fe.a,{open:a,onClose:t,children:[Object(E.jsx)(we.a,{children:"About"}),Object(E.jsx)(ye.a,{children:Object(E.jsxs)(Se.a,{children:[Object(E.jsxs)(x.a,{children:[Object(E.jsxs)(g.a,{children:["Unofficial scholar tracker for"," ",Object(E.jsx)("a",{href:"https://axieinfinity.com/",style:{textDecoration:"none",color:"#1976D2"},children:"Axie Infinity"}),"."]}),Object(E.jsx)("br",{}),Object(E.jsx)(g.a,{children:"Future releases will include daily SLP data, table customization, multiple currencies, JSON support for other trackers, dark mode, and more."}),Object(E.jsx)("br",{}),Object(E.jsxs)(g.a,{children:["Scholar data provided by"," ",Object(E.jsx)("a",{href:"https://skymavis.com/",style:{textDecoration:"none",color:"#1976D2"},children:"Sky Mavis"}),". Crypto prices courtesy of"," ",Object(E.jsx)("a",{href:"https://www.coingecko.com/en/api",style:{textDecoration:"none",color:"#1976D2"},children:"CoinGecko"}),"."]}),Object(E.jsx)("br",{}),Object(E.jsxs)(g.a,{children:[Object(E.jsx)("a",{style:{color:"#1976D2",textDecoration:"none"},href:"mailto:610b145c-e385-48c8-bf7f-c4b9a2468b18@simplelogin.co?subject=Axie Scholar Tracker Bug",children:"Report bugs or send suggestions"}),"."]})]}),Object(E.jsxs)(x.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",mt:4},children:[Object(E.jsx)(k.a,{src:Ce,sx:{mr:1,height:35,width:35}}),Object(E.jsxs)(g.a,{color:"text.primary",sx:{fontSize:14},children:["by"," ",Object(E.jsx)("a",{style:{textDecoration:"none",color:"#1976D2"},href:"https://github.com/vlipatdev",children:"vlipatdev"})," ","with \u2764\ufe0f"]})]})]})}),Object(E.jsx)(ve.a,{children:Object(E.jsx)(O.a,{onClick:t,children:"Okay"})})]})},Fe=t.p+"static/media/axs_logo.c5d7796b.png";var De=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],r=a[1];return Object(E.jsxs)(Oe.a,{sx:{background:"none"},elevation:0,position:"static",children:[Object(E.jsxs)(pe.a,{children:[Object(E.jsx)(T.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(E.jsx)(k.a,{alt:"axs logo",src:Fe})}),Object(E.jsx)(g.a,{variant:"h1",component:"div",sx:Object(s.a)({flexGrow:1,fontSize:24},ue.breakpoints.down("md"),{fontSize:18}),children:"Axie Scholar Tracker"}),Object(E.jsx)(_.a,{title:"About",children:Object(E.jsx)(O.a,{onClick:function(){r(!0)},sx:{color:"#FFFFFF"},children:Object(E.jsx)(_e.a,{})})})]}),Object(E.jsx)(ke,{open:t,onClose:function(){r(!1)}})]})},Ie=t.p+"static/media/axie_logo.71812b0f.png",ze=t.p+"static/media/background.2ba53e5e.jpg";var Ne=function(){return Object(E.jsxs)(x.a,{sx:{backgroundPosition:"center",backgroundColor:"#1976D2",backgroundImage:"linear-gradient(rgba(21, 101, 192, 0.8),rgba(21, 101, 192, 0.95)),url(".concat(ze,")")},children:[Object(E.jsx)(De,{}),Object(E.jsx)(x.a,{sx:{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",mb:2},children:Object(E.jsx)("img",{src:Ie,alt:"axie logo",style:{height:"80px",marginBottom:"16px"}})})]})},We=t.p+"static/media/axie.4a5e0239.png",Ue=t.p+"static/media/ethereum_logo.6fd3bdfc.png",Ae=Object(b.a)("input")({display:"none"});var Re=function(){var e,a,t,r,c,o=Object(n.useState)([]),h=Object(l.a)(o,2),b=h[0],f=h[1],y=Object(n.useState)([]),w=Object(l.a)(y,2),C=w[0],k=w[1],M=Object(n.useState)([]),P=Object(l.a)(M,2),L=P[0],T=P[1],B=Object(n.useState)({sort_by:"name",sort_type:"ascending"}),G=Object(l.a)(B,2),V=G[0],q=G[1],H=Object(n.useState)({"smooth-love-potion":{php:0,php_24h_change:0,usd:0,usd_24h_change:0},ethereum:{php:0,php_24h_change:0,usd:0,usd_24h_change:0},"axie-infinity":{php:0,php_24h_change:0,usd:0,usd_24h_change:0}}),Z=Object(l.a)(H,2),$=Z[0],Q=Z[1],X=Object(n.useState)(!1),Y=Object(l.a)(X,2),ee=Y[0],ae=Y[1],te=Object(n.useState)("php"),ne=Object(l.a)(te,1)[0];function re(e,a){T(e),ae(a)}function ce(e){var a=new FileReader;e.target.files[0]&&(a.readAsText(e.target.files[0],"UTF-8"),a.onload=function(e){ae(!1);var a=JSON.parse(e.target.result);if(a[0].name&&a[0].ronin_address&&a[0].manager_share)a.length>100?alert("Only JSON files with max 100 ronin addresses are allowed at the moment."):T(a);else if(a[0].name&&a[0].eth&&a[0].managerShare)if(a.length>100)alert("Only JSON files with max 100 ronin addresses are allowed at the moment.");else{var t=a.map((function(e){return{name:e.name,ronin_address:e.eth,manager_share:e.managerShare}}));T(t)}else alert("Incompatible JSON structure.\n\nOnly exported JSON from this site and https://axie-scho-tracker.xyz/ are accepted at the moment.\n\nSupport for other trackers will be added in the future.")})}function se(e){var a=e.target,t=a.name,n=a.value;q((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},t,n))}))}return c="ascending"===V.sort_type?R(C,V.sort_by):R(C,V.sort_by).reverse(),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("scholars"));e&&(f(e.map((function(e){return e.ronin_address}))),T(e));var a=JSON.parse(localStorage.getItem("settings"));a&&q(a),d.a.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Caxie-infinity%2Csmooth-love-potion&vs_currencies=php%2Cusd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=false").then((function(e){Q(e.data)})).catch((function(e){alert("Error fetching crypto data. Please try again later.")}))}),[]),Object(n.useEffect)((function(){f(L.map((function(e){return e.ronin_address}))),localStorage.setItem("scholars",JSON.stringify(L))}),[L]),Object(n.useEffect)((function(){localStorage.setItem("settings",JSON.stringify(V))}),[V]),Object(n.useEffect)((function(){0!==b.length?ee?k(C.filter((function(e){return b.includes(e.ronin_address)}))):d.a.get("https://game-api.axie.technology/api/v1/".concat(b.join("%2C"))).then((function(e){var a=(1===b.length?[e.data]:Object.values(e.data)).map((function(e,a){return{last_updated:I(e.cache_last_updated),name:L[a].name,ronin_address:L[a].ronin_address,average_slp:z(e.in_game_slp,N(e.last_claim)),unclaimed_slp:e.in_game_slp,claimed_slp:e.total_slp-e.in_game_slp,total_slp:e.total_slp,last_claim_in_days:N(e.last_claim),last_claim_date:I(parseInt("".concat(e.last_claim,"000"))),last_claim_raw:parseInt("".concat(e.last_claim,"000")),next_claim_in_days:(r=e.next_claim,Math.floor((parseInt("".concat(r,"000"))-Date.now())/864e5)),next_claim_date:I(parseInt("".concat(e.next_claim,"000"))),next_claim_raw:e.next_claim,manager_percent:parseInt(L[a].manager_share),scholar_percent:U(L[a].manager_share),manager_share:(t=e.total_slp,n=L[a].manager_share,parseInt((t*(n/100)).toFixed(0))),scholar_share:A(e.total_slp,U(L[a].manager_share)),mmr:e.mmr,rank:e.rank};var t,n,r}));k(a)})).catch((function(e){alert("Could not connect to server. Please try again later.")})):(document.body.style.cursor="default",k([]))}),[b]),Object(E.jsxs)(x.a,{sx:{flexGrow:1},children:[Object(E.jsx)(Ne,{}),Object(E.jsxs)(p.a,{maxWidth:"lg",sx:{mb:10},children:[Object(E.jsxs)(x.a,{sx:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"center",mb:6},children:[Object(E.jsx)(_.a,{title:"View on CoinGecko",children:Object(E.jsx)("a",{href:"https://www.coingecko.com/en/coins/ethereum/".concat(ne),target:"blank",rel:"noreferrer",style:{textDecoration:"none",color:"#000000"},children:Object(E.jsxs)(x.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",m:1},children:[Object(E.jsx)("img",{src:Ue,style:{height:"20px",width:"20px",marginRight:"4px"},alt:"ethereum logo"}),Object(E.jsxs)(g.a,{sx:Object(s.a)({mr:1,fontSize:14,fontWeight:"bold"},ue.breakpoints.down("md"),{fontSize:12}),children:[D($.ethereum[ne])," ",ne.toUpperCase()]}),Object(E.jsx)(x.a,{sx:{borderRadius:"100px",backgroundColor:$.ethereum["".concat(ne,"_24h_change")]>=0?"#6cc000":"#ff5341"},children:Object(E.jsxs)(g.a,{sx:(e={color:"#FFFFFF",fontSize:12},Object(s.a)(e,ue.breakpoints.down("md"),{fontSize:10}),Object(s.a)(e,"ml",1),Object(s.a)(e,"mr",1),e),children:[$.ethereum["".concat(ne,"_24h_change")]>0?"+":null,$.ethereum["".concat(ne,"_24h_change")].toFixed(2),"%"]})})]})})}),Object(E.jsx)(_.a,{title:"View on CoinGecko",children:Object(E.jsx)("a",{href:"https://www.coingecko.com/en/coins/axie-infinity/".concat(ne),target:"blank",rel:"noreferrer",style:{textDecoration:"none",color:"#000000"},children:Object(E.jsxs)(x.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",m:1},children:[Object(E.jsx)("img",{src:Fe,style:{height:"20px",width:"20px",marginRight:"4px"},alt:"axs logo"}),Object(E.jsxs)(g.a,{sx:Object(s.a)({mr:1,fontWeight:"bold",fontSize:14},ue.breakpoints.down("md"),{fontSize:12}),children:[D($["axie-infinity"][ne])," ",ne.toUpperCase()]}),Object(E.jsx)(x.a,{sx:{borderRadius:"100px",backgroundColor:$["axie-infinity"]["".concat(ne,"_24h_change")]>=0?"#6cc000":"#ff5341"},children:Object(E.jsxs)(g.a,{sx:(a={color:"#FFFFFF",fontSize:12},Object(s.a)(a,ue.breakpoints.down("md"),{fontSize:10}),Object(s.a)(a,"ml",1),Object(s.a)(a,"mr",1),a),children:[$["axie-infinity"]["".concat(ne,"_24h_change")]>0?"+":null,$["axie-infinity"]["".concat(ne,"_24h_change")].toFixed(2),"%"]})})]})})}),Object(E.jsx)(_.a,{title:"View on CoinGecko",children:Object(E.jsx)("a",{href:"https://www.coingecko.com/en/coins/smooth-love-potion/".concat(ne),target:"blank",rel:"noreferrer",style:{textDecoration:"none",color:"#000000"},children:Object(E.jsxs)(x.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",m:1},children:[Object(E.jsx)("img",{src:F,style:{height:"20px",width:"20px",marginRight:"4px"},alt:"slp logo"}),Object(E.jsxs)(g.a,{sx:(t={mr:1,fontSize:14},Object(s.a)(t,ue.breakpoints.down("md"),{fontSize:12}),Object(s.a)(t,"fontWeight","bold"),t),children:[$["smooth-love-potion"][ne]," ",ne.toUpperCase()]}),Object(E.jsx)(x.a,{sx:{borderRadius:"100px",backgroundColor:$["smooth-love-potion"]["".concat(ne,"_24h_change")]>=0?"#6cc000":"#ff5341"},children:Object(E.jsxs)(g.a,{sx:(r={color:"#FFFFFF",fontSize:12},Object(s.a)(r,ue.breakpoints.down("md"),{fontSize:10}),Object(s.a)(r,"ml",1),Object(s.a)(r,"mr",1),r),children:[$["smooth-love-potion"]["".concat(ne,"_24h_change")]>0?"+":null,$["smooth-love-potion"]["".concat(ne,"_24h_change")].toFixed(2),"%"]})})]})})})]}),Object(E.jsxs)(u.a,{container:!0,spacing:2,sx:{mb:6},children:[Object(E.jsx)(u.a,{item:!0,xs:6,sm:4,lg:2,children:Object(E.jsx)(J,{label:"Total Daily Average",slp:W(C,"average_slp"),slpPrice:$["smooth-love-potion"][ne],currency:ne})}),Object(E.jsx)(u.a,{item:!0,xs:6,sm:4,lg:2,children:Object(E.jsx)(J,{label:"Total Unclaimed",slp:W(C,"unclaimed_slp"),slpPrice:$["smooth-love-potion"][ne],currency:ne})}),Object(E.jsx)(u.a,{item:!0,xs:6,sm:4,lg:2,children:Object(E.jsx)(J,{label:"Total Claimed",slp:W(C,"claimed_slp"),slpPrice:$["smooth-love-potion"][ne],currency:ne})}),Object(E.jsx)(u.a,{item:!0,xs:6,sm:4,lg:2,children:Object(E.jsx)(J,{label:"Total Farmed",slp:W(C,"total_slp"),slpPrice:$["smooth-love-potion"][ne],currency:ne})}),Object(E.jsx)(u.a,{item:!0,xs:6,sm:4,lg:2,children:Object(E.jsx)(J,{label:"Manager Total",slp:W(C,"manager_share"),slpPrice:$["smooth-love-potion"][ne],currency:ne})}),Object(E.jsx)(u.a,{item:!0,xs:6,sm:4,lg:2,children:Object(E.jsx)(J,{label:"Scholar Total",slp:W(C,"scholar_share"),slpPrice:$["smooth-love-potion"][ne],currency:ne})})]}),Object(E.jsx)(K,{localData:L,onUpdate:re,scholars:b.length}),0!==b.length&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(x.a,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[Object(E.jsx)(g.a,{color:"text.secondary",children:"Sort by"}),Object(E.jsxs)(x.a,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[Object(E.jsx)(me,{onUpdate:se,localSettings:V}),Object(E.jsx)(be,{onUpdate:se,localSettings:V})]})]}),Object(E.jsx)(ie,{data:C,localData:L,localSettings:V,onDelete:re,slpPrice:$["smooth-love-potion"][ne]}),Object(E.jsxs)(x.a,{sx:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[Object(E.jsx)(_.a,{title:"Download list of scholars in .json format",children:Object(E.jsx)(O.a,{sx:{m:1,minWidth:"200px"},onClick:function(){!function(e){var a=new Blob([JSON.stringify(e,null,2)],{type:"application/json"});m.a.saveAs(a,"scholars.json")}(L)},startIcon:Object(E.jsx)(S.a,{}),variant:"outlined",children:"Download list"})}),Object(E.jsx)(_.a,{title:"Upload list of scholars",children:Object(E.jsxs)("label",{htmlFor:"contained-button-file",children:[Object(E.jsx)(Ae,{onChange:ce,accept:"application/JSON",id:"contained-button-file",type:"file"}),Object(E.jsx)(O.a,{component:"span",startIcon:Object(E.jsx)(v.a,{}),variant:"outlined",sx:{m:1,minWidth:"200px"},children:"Upload List"})]})}),Object(E.jsx)(j.CSVLink,{filename:"scholars.csv",data:function(e){return e.map((function(e){var a=e.last_updated,t=e.ronin_address;return{last_updated:a,name:e.name,ronin_address:t,average_slp:e.average_slp,unclaimed_slp:e.unclaimed_slp,claimed_slp:e.claimed_slp,total_slp:e.total_slp,last_claim_date:e.last_claim_date,next_claim_date:e.next_claim_date,manager_percent:e.manager_percent,scholar_percent:e.scholar_percent,manager_share:e.manager_share,scholar_share:e.scholar_share,mmr:e.mmr,rank:e.rank}}))}(c),style:{textDecoration:"none"},children:Object(E.jsx)(le,{})})]})]}),0===b.length&&Object(E.jsxs)(x.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(E.jsx)("img",{src:We,alt:"axie",style:{height:"150px",margin:"32px"}}),Object(E.jsx)(g.a,{sx:{mb:10},children:"No scholars added"}),Object(E.jsx)(_.a,{title:"Upload list of scholars",children:Object(E.jsxs)("label",{htmlFor:"contained-button-file",children:[Object(E.jsx)(Ae,{onChange:ce,accept:"application/JSON",id:"contained-button-file",type:"file"}),Object(E.jsx)(O.a,{onClick:null,component:"span",startIcon:Object(E.jsx)(v.a,{}),variant:"outlined",sx:{m:1},disableElevation:!0,children:"Upload list"})]})})]})]})]})},Ee=t(246),Je=t(234);c.a.render(Object(E.jsxs)(Ee.a,{theme:ue,children:[Object(E.jsx)(Je.a,{}),Object(E.jsx)(Re,{}),","]}),document.getElementById("root"))}},[[169,1,2]]]);