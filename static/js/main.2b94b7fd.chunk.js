(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{44:function(n,e,t){"use strict";t.r(e);var c,r,i,a,o,s,d,l,j,b,u,h,x,p,O,g,f,m,v,w,y,k,E,P,L,C,z,B,N,S,T,F,I,D,X=t(1),A=t.n(X),J=t(26),R=t.n(J),_=t(2),G=t(3),W=Object(G.a)(c||(c=Object(_.a)(["\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        font-family: 'PT Sans', sans-serif;\n        scroll-behavior: smooth;\n    } \n\n    body {\n        background: #202329;\n    }\n"]))),M=G.c.div(r||(r=Object(_.a)(["\n    width: 90%;\n    max-width: 1300px;\n    margin: auto;\n    overflow: hidden;\n"]))),q=G.c.section(i||(i=Object(_.a)(["\n    width: 100%;\n    background: ",";\n    padding: 70px 0;\n"])),(function(n){return n.black?"rgb(36,40,47)":"white"})),H=W,K=t(16),Q=t(5),U=t.p+"static/media/banner.de13d484.png",V=t(0),Y=G.c.div(a||(a=Object(_.a)(["\n    text-align: center;\n    margin: 60px 0px;\n    background-color: white;\n\n"]))),Z=G.c.img(o||(o=Object(_.a)(["\n    width: 100%;\n    max-width: 622px;\n    height: auto;\n"]))),$=function(){return Object(V.jsx)(Y,{children:Object(V.jsx)(Z,{src:U,alt:"rick and morty"})})},nn=G.c.div(s||(s=Object(_.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n"]))),en=G.c.div(d||(d=Object(_.a)(["\n    background: rgb(60, 62, 68);\n    width: 300px;\n    overflow: hidden;\n    border-radius: 5px;\n    margin: 10px 5px;\n\n    ","\n"])),(function(n){return n.row&&Object(G.b)(l||(l=Object(_.a)(["\n        display: flex;\n        flex-direction: row;\n        width: 600px;\n        height: 220px;\n        margin: 10px;\n\n        @media screen and (max-width:500px) {\n            flex-direction: column;\n            width: 100%;\n            height: 100%;\n        }\n    "])))})),tn=G.c.div(j||(j=Object(_.a)(["\n    flex: 2 1 0%;\n    width: 100%;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n"]))),cn=G.c.div(b||(b=Object(_.a)(["\n    flex: 3 1 0%;\n    width: 100%;\n    padding: 0.75rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: left;\n"]))),rn=G.c.div(u||(u=Object(_.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-bottom: 15px;\n"]))),an=G.c.h5(h||(h=Object(_.a)(["\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    height: 50px;\n    color: white;\n    text-align: center;\n    font-size: 16px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),on=G.c.p(x||(x=Object(_.a)(["\n    line-height: 25px;\n    color: white;\n    display: flex;\n    align-items: center;\n"]))),sn=G.c.p(p||(p=Object(_.a)(["\n    color: rgb(158, 158, 158);\n    font-size: 0.9375rem;\n    font-weight: bold;\n"]))),dn=G.c.span(O||(O=Object(_.a)(["\n    height: 0.5rem;\n    width: 0.5rem;\n    margin-right: 0.375rem;\n    border-radius: 50%;\n\n    ","\n    ","\n    ","\n"])),(function(n){return"Alive"===n.status&&"background: rgb(85, 204, 68)"}),(function(n){return"Dead"===n.status&&"background: rgb(214, 61, 46)"}),(function(n){return"unknown"===n.status&&"background: rgb(158, 158, 158)"})),ln=t(8),jn=t(9),bn=function(n){var e=n.children,t=n.controles,c=void 0===t||t,r=n.autoplay,i=void 0!==r&&r,a=n.velocidad,o=void 0===a?"500":a,s=n.intervalo,d=void 0===s?"5000":s,l=Object(X.useRef)(null),j=Object(X.useRef)(null),b=Object(X.useCallback)((function(){if(l.current.children.length>0){var n=l.current.children[0];l.current.style.transition="".concat(o,"ms ease-out all");var e=l.current.children[0].offsetWidth;l.current.style.transform="translateX(-".concat(e,"px)");l.current.addEventListener("transitionend",(function e(){l.current.style.transition="none",l.current.style.transform="translateX(0)",l.current.appendChild(n),l.current.removeEventListener("transitionend",e)}))}}),[o]);return Object(X.useEffect)((function(){return i&&(j.current=setInterval((function(){b()}),d),l.current.addEventListener("mouseenter",(function(){clearInterval(j.current)})),l.current.addEventListener("mouseleave",(function(){j.current=setInterval((function(){b()}),d)}))),function(){return clearInterval(j.current)}}),[i,d,b]),Object(V.jsxs)(un,{children:[Object(V.jsx)(hn,{ref:l,children:e}),c&&Object(V.jsxs)(pn,{children:[Object(V.jsx)(On,{onClick:function(){if(l.current.children.length>0){var n=l.current.children.length-1,e=l.current.children[n];l.current.insertBefore(e,l.current.firstChild),l.current.style.transition="none";var t=l.current.children[0].offsetWidth;l.current.style.transform="translateX(-".concat(t,"px)"),setTimeout((function(){l.current.style.transition="".concat(o,"ms ease-out all"),l.current.style.transform="translateX(0)"}),30)}},children:Object(V.jsx)(ln.a,{icon:jn.b})}),Object(V.jsx)(On,{derecho:!0,onClick:b,children:Object(V.jsx)(ln.a,{icon:jn.c})})]})]})},un=G.c.div(g||(g=Object(_.a)(["\n\tposition: relative;\n"]))),hn=G.c.div(f||(f=Object(_.a)(["\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n"]))),xn=G.c.div(m||(m=Object(_.a)(["\n\tmin-width: 20%;\n\toverflow: hidden;\n\ttransition: .3s ease all;\n\tz-index: 10;\n\t/* max-height: 500px; */\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\n\t@media screen and (max-width: 900px) {\n\t\tmin-width: 25%;\n\t}\n\n\t@media screen and (max-width: 750px) {\n\t\tmin-width: 33%;\n\t}\n\n\t@media screen and (max-width: 600px) {\n\t\tmin-width: 50%;\n\t}\n"]))),pn=(G.c.div(v||(v=Object(_.a)(["\n\tbackground: ",";\n\tcolor: ",";\n\twidth: 100%;\n\tpadding: 10px 60px;\n\ttext-align: center;\n\tposition: absolute;\n\tbottom: 0;\n\n\t@media screen and (max-width: 700px) {\n\t\tposition: relative;\n\t\tbackground: #000;\n\t}\n"])),(function(n){return n.colorFondo?n.colorFondo:"rgba(0,0,0,.3)"}),(function(n){return n.colorTexto?n.colorTexto:"#fff"})),G.c.div(w||(w=Object(_.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 20;\n\twidth: 100%;\n\theight: 100%;\n\tpointer-events: none;\n"])))),On=G.c.button(y||(y=Object(_.a)(["\n\tpointer-events: all;\n\tbackground: rgba(0,0,0,.1);\n\tborder: none;\n\tcursor: pointer;\n\toutline: none;\n\twidth: 50px;\n\theight: 100%;\n\ttext-align: center;\n\tposition: absolute;\n\ttransition: .3s ease all;\n\tfont-size: 25px;\n\n\tpath {\n\t\tfill: rgba(255,255,255,.2);\n\t}\n\n\t&:hover {\n\t\tbackground: rgba(0,0,0,.4);\n\t\tpath {\n\t\t\tfill: rgba(255,255,255,1);\n\t\t}\n\t}\n\n\tpath {\n\t\tfilter: ",";\n\t}\n\n\t","\n"])),(function(n){return n.derecho?"drop-shadow(-2px 0px 0px #fff)":"drop-shadow(2px 0px 0px #fff)"}),(function(n){return n.derecho?"right: 0":"left: 0"})),gn=G.c.p(k||(k=Object(_.a)(["\n\tfont-size: 1.25rem;\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n\tmargin-bottom: 10px;\n\tcolor: white;\n\tletter-spacing: 2px;\n"]))),fn=t(7),mn=t(21),vn=t.n(mn),wn=t(30),yn={},kn=function(n){var e=Object(X.useState)({data:null,isLoading:!0,hasError:!1,error:null}),t=Object(fn.a)(e,2),c=t[0],r=t[1];Object(X.useEffect)((function(){i()}),[n]);var i=function(){var e=Object(wn.a)(vn.a.mark((function e(){var t,c;return vn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!yn[n]){e.next=3;break}return r({data:yn[n],isLoading:!1,hasError:!1,error:null}),e.abrupt("return");case 3:return r({data:null,isLoading:!0,hasError:!1,error:null}),e.next=6,fetch(n);case 6:if((t=e.sent).ok){e.next=10;break}return r({data:null,isLoading:!1,hasError:!0,error:{code:t.status,message:t.statusText}}),e.abrupt("return");case 10:return e.next=12,t.json();case 12:c=e.sent,r({data:c,isLoading:!1,hasError:!1,error:null}),yn[n]=c;case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{data:c.data,isLoading:c.isLoading,hasError:c.hasError}},En=function(){var n=Object(X.useState)(1),e=Object(fn.a)(n,2),t=e[0],c=e[1],r=Object(X.useState)(""),i=Object(fn.a)(r,2),a=i[0],o=i[1],s=function(n){c(n)};return{currentPage:t,name:a,changePage:s,searchByName:function(n){o(n),s(1)}}},Pn="https://rickandmortyapi.com/api/",Ln="".concat(Pn,"character"),Cn="".concat(Pn,"episode"),zn="".concat(Pn,"location"),Bn="page",Nn="name",Sn=function(){var n=En(),e=n.currentPage,t=n.name,c=n.changePage,r=n.searchByName,i=kn("".concat(Ln,"?").concat(Bn,"=").concat(e,"&").concat(Nn,"=").concat(t)),a=i.data,o=i.isLoading,s=i.hasError,d=Object(X.useState)({data:[],pages:0,totalCount:0}),l=Object(fn.a)(d,2),j=l[0],b=l[1];return Object(X.useEffect)((function(){!function(){var n,e;b({data:null===a||void 0===a?void 0:a.results,pages:null===a||void 0===a||null===(n=a.info)||void 0===n?void 0:n.pages,totalCount:null===a||void 0===a||null===(e=a.info)||void 0===e?void 0:e.count})}()}),[a]),{characters:j,changePage:c,isLoading:o,searchByName:r,currentPage:e,hasError:s}},Tn=function(){var n=En(),e=n.currentPage,t=n.name,c=n.changePage,r=n.searchByName,i=kn("".concat(zn,"?").concat(Bn,"=").concat(e,"&").concat(Nn,"=").concat(t)),a=i.data,o=i.isLoading,s=i.hasError,d=Object(X.useState)({data:[],pages:0,totalCount:0}),l=Object(fn.a)(d,2),j=l[0],b=l[1];return Object(X.useEffect)((function(){!function(){var n,e;b({data:null===a||void 0===a?void 0:a.results,pages:null===a||void 0===a||null===(n=a.info)||void 0===n?void 0:n.pages,totalCount:null===a||void 0===a||null===(e=a.info)||void 0===e?void 0:e.count})}()}),[a]),{locations:j,changePage:c,isLoading:o,searchByName:r,currentPage:e,hasError:s}},Fn=function(){var n=En(),e=n.currentPage,t=n.name,c=n.changePage,r=n.searchByName,i=kn("".concat(Cn,"?").concat(Bn,"=").concat(e,"&").concat(Nn,"=").concat(t)),a=i.data,o=i.isLoading,s=i.hasError,d=Object(X.useState)({data:[],pages:0,totalCount:0}),l=Object(fn.a)(d,2),j=l[0],b=l[1];return Object(X.useEffect)((function(){!function(){var n,e;b({data:null===a||void 0===a?void 0:a.results,pages:null===a||void 0===a||null===(n=a.info)||void 0===n?void 0:n.pages,totalCount:null===a||void 0===a||null===(e=a.info)||void 0===e?void 0:e.count})}()}),[a]),{episodes:j,changePage:c,isLoading:o,searchByName:r,currentPage:e,hasError:s}},In=function(){var n,e,t,c=Sn().characters,r=Tn().locations,i=Fn().episodes;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(q,{children:Object(V.jsx)($,{})}),Object(V.jsx)(q,{black:!0,children:Object(V.jsxs)(M,{children:[Object(V.jsx)(gn,{children:"Characters"}),Object(V.jsx)(bn,{autoplay:!0,children:null===c||void 0===c||null===(n=c.data)||void 0===n?void 0:n.map((function(n,e){return Object(V.jsx)(xn,{children:Object(V.jsxs)(en,{children:[Object(V.jsx)(tn,{children:Object(V.jsx)("img",{src:n.image,alt:n.name})}),Object(V.jsx)(cn,{children:Object(V.jsx)(an,{children:n.name})})]})},e)}))}),Object(V.jsx)("br",{}),Object(V.jsx)(gn,{children:"Locations"}),Object(V.jsx)(bn,{autoplay:!0,velocidad:"700",children:null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.map((function(n,e){return Object(V.jsx)(xn,{children:Object(V.jsx)(en,{children:Object(V.jsxs)(cn,{children:[Object(V.jsx)(an,{children:n.name}),Object(V.jsxs)(rn,{children:[Object(V.jsx)(sn,{children:"Dimension:"}),Object(V.jsx)(on,{children:n.dimension})]}),Object(V.jsxs)(rn,{children:[Object(V.jsx)(sn,{children:"Type:"}),Object(V.jsx)(on,{children:n.type})]})]})})},e)}))}),Object(V.jsx)("br",{}),Object(V.jsx)(gn,{children:"Episodes"}),Object(V.jsx)(bn,{autoplay:!0,velocidad:"900",children:null===i||void 0===i||null===(t=i.data)||void 0===t?void 0:t.map((function(n,e){return Object(V.jsx)(xn,{children:Object(V.jsx)(en,{children:Object(V.jsxs)(cn,{children:[Object(V.jsx)(an,{children:n.name}),Object(V.jsxs)(rn,{children:[Object(V.jsx)(sn,{children:"Episode:"}),Object(V.jsx)(on,{children:n.episode})]}),Object(V.jsxs)(rn,{children:[Object(V.jsx)(sn,{children:"Air date:"}),Object(V.jsx)(on,{children:n.air_date})]})]})})},e)}))})]})})]})},Dn=G.c.div(E||(E=Object(_.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"]))),Xn=G.c.div(P||(P=Object(_.a)(["\n    width: auto;\n\n    button:first-child {\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n    }\n\n    button:last-child {\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px;\n    }\n"]))),An=G.c.button(L||(L=Object(_.a)(["\n    width: auto;\n    background: ",";\n    color: ",";\n    padding: 10px;\n    font-size: 1.125rem;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    \n    @media (min-width: 768px) {\n        &:hover {\n            background: white;\n            color: black;\n        }\n    }\n"])),(function(n){return n.active?"white":"rgb(60,62,68)"}),(function(n){return n.active?"black":"white"})),Jn=function(n){for(var e=n.changePage,t=n.pages,c=n.currentPage,r=[],i=1;i<=t;i++)r.push(i);function a(n){var c=Number(n.target.textContent);c>=1&&c<=t&&(e(c),window.scrollTo(0,0))}return Object(V.jsx)(Dn,{children:Object(V.jsxs)(Xn,{children:[1!==c&&Object(V.jsx)(An,{onClick:function(){var n=c-1;n>0&&(e(n),window.scrollTo(0,0))},children:Object(V.jsx)(ln.a,{icon:jn.b})}),(c<4?r.slice(0,c+4):c>t-4&&t-7>=1?r.slice(t-7):r.slice(c-4,c+3)).map((function(n,e){return Object(V.jsx)(An,{onClick:a,active:c===n,children:n},e)})),c!==t&&Object(V.jsx)(An,{onClick:function(){var n=c+1;n<t+1&&(e(n),window.scrollTo(0,0))},children:Object(V.jsx)(ln.a,{icon:jn.c})})]})})},Rn=G.c.h2(C||(C=Object(_.a)(["\n    font-size: 1.5rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    margin-bottom: 10px;\n    color: white;\n    letter-spacing: 2px;\n    text-align: center;\n    padding: 10px 0;\n"]))),_n=G.c.div(z||(z=Object(_.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    @media (max-width: 768px) {\n        flex-direction: column;\n        margin-bottom: 20px;\n    }\n"]))),Gn=t.p+"static/media/loading.50dbc308.svg",Wn=G.c.div(B||(B=Object(_.a)(["\n  min-height: 500px;\n  width: 100%;\n  display: grid;\n  place-content: center;\n  padding: 50px 0;\n"]))),Mn=G.c.img(N||(N=Object(_.a)(["\n  width: 150px;\n"]))),qn=function(){return Object(V.jsx)(Wn,{children:Object(V.jsx)(Mn,{src:Gn,alt:"Loading"})})},Hn=G.c.form(S||(S=Object(_.a)(["\n    width: 350px;\n    height: 38px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n\n    @media (max-width: 768px) {\n        width: 100%;\n    }\n"]))),Kn=G.c.input(T||(T=Object(_.a)(["\n    width: 90%;\n    outline: none;\n    padding: 5px 15px;\n    font-size: 1.2rem;\n    border-radius: 5px 0 0 5px;\n    border: none;\n"]))),Qn=G.c.button(F||(F=Object(_.a)(["\n    width: 40px;\n    height: auto;\n    cursor: pointer;\n    border: none;\n    font-size: 1.2rem;\n    background: rgb(60,62,68);\n    color: white;\n    border-radius: 0 5px 5px 0;\n"]))),Un=function(n){var e=n.searchByName,t=Object(X.useState)(""),c=Object(fn.a)(t,2),r=c[0],i=c[1],a=function(n){n.preventDefault(),e(r)};return Object(V.jsxs)(Hn,{onSubmit:a,children:[Object(V.jsx)(Kn,{id:"search",name:"search",type:"text",value:r,onChange:function(n){var e=n.target;i(e.value)}}),Object(V.jsx)(Qn,{type:"button",onClick:a,children:Object(V.jsx)(ln.a,{icon:jn.e})})]})},Vn=G.c.article(I||(I=Object(_.a)(["\n    background: rgb(60, 62, 68);\n    width: 100%;\n    border-radius: 5px;\n    margin: 10px 5px;\n    padding: 70px 0;\n"]))),Yn=G.c.h3(D||(D=Object(_.a)(["\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    color: white;\n    text-align: center;\n    font-size: 16px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),Zn=function(){return Object(V.jsx)(Vn,{children:Object(V.jsx)(Yn,{children:"No results found"})})};function $n(){var n=Sn(),e=n.characters,t=n.changePage,c=n.isLoading,r=n.searchByName,i=n.currentPage,a=n.hasError,o=e.data,s=e.pages;return Object(V.jsx)(q,{black:!0,children:Object(V.jsxs)(M,{children:[Object(V.jsxs)(_n,{children:[Object(V.jsx)(Rn,{children:"Characters"}),Object(V.jsx)(Un,{searchByName:r})]}),Object(V.jsxs)(nn,{children:[a&&Object(V.jsx)(Zn,{}),c&&Object(V.jsx)(qn,{}),!c&&(null===o||void 0===o?void 0:o.map((function(n){return Object(V.jsxs)(en,{row:!0,children:[Object(V.jsx)(tn,{children:Object(V.jsx)("img",{src:n.image,alt:n.name})}),Object(V.jsxs)(cn,{children:[Object(V.jsxs)(rn,{children:[Object(V.jsx)(an,{children:n.name}),Object(V.jsxs)(on,{children:[Object(V.jsx)(dn,{status:n.status}),n.status," - ",n.species]})]}),Object(V.jsxs)(rn,{children:[Object(V.jsx)(sn,{children:"Last known location:"}),Object(V.jsx)(on,{children:n.location.name})]}),Object(V.jsxs)(rn,{children:[Object(V.jsx)(sn,{children:"First seen in:"}),Object(V.jsx)(on,{children:n.origin.name})]})]})]},n.id)})))]}),!a&&Object(V.jsx)(Jn,{changePage:t,pages:s,currentPage:i})]})})}function ne(){var n=Tn(),e=n.locations,t=n.changePage,c=n.isLoading,r=n.searchByName,i=n.currentPage,a=n.hasError,o=e.data,s=e.pages;return Object(V.jsx)(q,{black:!0,children:Object(V.jsxs)(M,{children:[Object(V.jsxs)(_n,{children:[Object(V.jsx)(Rn,{children:"Locations"}),Object(V.jsx)(Un,{searchByName:r})]}),Object(V.jsxs)(nn,{children:[a&&Object(V.jsx)(Zn,{}),c&&Object(V.jsx)(qn,{}),!c&&(null===o||void 0===o?void 0:o.map((function(n){return Object(V.jsx)(en,{children:Object(V.jsxs)(cn,{children:[Object(V.jsx)(an,{children:n.name}),Object(V.jsxs)(rn,{children:[Object(V.jsx)(sn,{children:"Dimension:"}),Object(V.jsx)(on,{children:n.dimension})]}),Object(V.jsxs)(rn,{children:[Object(V.jsx)(sn,{children:"Type:"}),Object(V.jsx)(on,{children:n.type})]})]})},n.id)})))]}),!a&&Object(V.jsx)(Jn,{changePage:t,pages:s,currentPage:i})]})})}function ee(){var n=Fn(),e=n.episodes,t=n.changePage,c=n.isLoading,r=n.searchByName,i=n.currentPage,a=n.hasError,o=e.data,s=e.pages;return Object(V.jsx)(q,{black:!0,children:Object(V.jsxs)(M,{children:[Object(V.jsxs)(_n,{children:[Object(V.jsx)(Rn,{children:"Episodes"}),Object(V.jsx)(Un,{searchByName:r})]}),Object(V.jsxs)(nn,{children:[a&&Object(V.jsx)(Zn,{}),c&&Object(V.jsx)(qn,{}),!c&&(null===o||void 0===o?void 0:o.map((function(n){return Object(V.jsx)(en,{children:Object(V.jsxs)(cn,{children:[Object(V.jsx)(an,{children:n.name}),Object(V.jsxs)(rn,{children:[Object(V.jsx)(sn,{children:"Episode:"}),Object(V.jsx)(on,{children:n.episode})]}),Object(V.jsxs)(rn,{children:[Object(V.jsx)(sn,{children:"Air date:"}),Object(V.jsx)(on,{children:n.air_date})]})]})},n.id)})))]}),!a&&Object(V.jsx)(Jn,{changePage:t,pages:s,currentPage:i})]})})}var te,ce,re,ie,ae,oe,se,de,le,je,be,ue=t.p+"static/media/logo.accf5a43.png",he=G.c.div(te||(te=Object(_.a)(["\n    background-color: white;\n    padding: 0 30px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    border-bottom: 1px solid #E2E8F0;\n"]))),xe=G.c.img(ce||(ce=Object(_.a)(["\n    width: 50px;\n"]))),pe=G.c.div(re||(re=Object(_.a)(["\n    display: none;\n    flex-direction: column;\n    font-size: 28px;\n    cursor: pointer;\n\n    @media (max-width: 768px) {\n        display: flex;\n    }\n"]))),Oe=G.c.div(ie||(ie=Object(_.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    overflow: hidden;\n\n    @media (max-width: 768px) {\n        flex-direction: column;\n        width: 100%;\n        max-height: ",";\n        transition: max-height 0.5s ease;\n    }\n"])),(function(n){return n.isOpen?"300px":"0"})),ge=Object(G.c)(K.b)(ae||(ae=Object(_.a)(["\n    display: inline-block;\n    text-decoration: none;\n    margin: 16px 20px;\n    color: black;\n    font-size: 1.25em;\n    cursor: pointer;\n"]))),fe=function(){var n=Object(X.useState)(!1),e=Object(fn.a)(n,2),t=e[0],c=e[1];return Object(V.jsxs)(he,{children:[Object(V.jsx)(K.b,{to:"/",children:Object(V.jsx)(xe,{src:ue,alt:"rick and morty"})}),Object(V.jsx)(pe,{onClick:function(){return c(!t)},children:Object(V.jsx)(ln.a,{icon:t?jn.f:jn.a})}),Object(V.jsxs)(Oe,{isOpen:t,children:[Object(V.jsx)(ge,{to:"/characters",children:"Characters"}),Object(V.jsx)(ge,{to:"/locations",children:"Locations"}),Object(V.jsx)(ge,{to:"/episodes",children:"Episodes"})]})]})},me=t(31),ve=G.c.footer(oe||(oe=Object(_.a)(["\n    width: 100%;\n    background: rgb(32, 35, 41);\n    text-align: center;\n    color: rgb(158, 158, 158);\n    padding: 50px 0;\n"]))),we=G.c.div(se||(se=Object(_.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 25px 0;\n"]))),ye=G.c.a(de||(de=Object(_.a)(["\n    font-size: 2.5rem;\n    margin: 0 20px;\n    padding: 20px;\n    border-radius: 5px;\n    width: 90px;\n    color: rgb(158, 158, 158);\n    text-decoration: none;\n\n    &:hover {\n        background: white;\n        color: rgb(32, 35, 41);\n        cursor: pointer;\n    }\n"]))),ke=G.c.ul(le||(le=Object(_.a)(["\n    text-decoration: none;\n    list-style: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    \n    li {\n        margin: 0 20px;\n    }\n"]))),Ee=G.c.p(je||(je=Object(_.a)(["\n    font-size: .875rem;\n    padding: 5px;\n"]))),Pe=G.c.span(be||(be=Object(_.a)(["\n    border-bottom: 1px solid;\n    font-weight: bold;\n"]))),Le=function(){var n=Sn().characters.totalCount,e=Tn().locations.totalCount,t=Fn().episodes.totalCount;return Object(V.jsx)(ve,{children:Object(V.jsxs)(M,{children:[Object(V.jsxs)(ke,{children:[Object(V.jsxs)("li",{children:["Characters: ",n]}),Object(V.jsxs)("li",{children:["Locations: ",e]}),Object(V.jsxs)("li",{children:["Episodes: ",t]})]}),Object(V.jsxs)(we,{children:[Object(V.jsx)(ye,{href:"https://github.com/JesusEfrainGarciaRodriguez",children:Object(V.jsx)(ln.a,{icon:me.a})}),Object(V.jsx)(ye,{href:"mailto:efraingarcia_86@hotmail.com",children:Object(V.jsx)(ln.a,{icon:jn.d})})]}),Object(V.jsxs)(Ee,{children:["by ",Object(V.jsx)(Pe,{children:"Efrain Garcia"})," 2021"]})]})})};var Ce=function(){return Object(V.jsxs)(K.a,{children:[Object(V.jsx)(H,{}),Object(V.jsx)(fe,{}),Object(V.jsxs)(Q.c,{children:[Object(V.jsx)(Q.a,{path:"/characters",component:$n}),Object(V.jsx)(Q.a,{path:"/locations",component:ne}),Object(V.jsx)(Q.a,{path:"/episodes",component:ee}),Object(V.jsx)(Q.a,{path:"/",component:In})]}),Object(V.jsx)(Le,{})]})};R.a.render(Object(V.jsx)(A.a.StrictMode,{children:Object(V.jsx)(Ce,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.2b94b7fd.chunk.js.map