(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{44:function(n,e,t){"use strict";t.r(e);var c,r,i,a,s,o,d,j,l,b,x,u,h,p,O,f,m,g,w,v,y,k,C,E,z,S,P,L,T,F,I=t(1),X=t.n(I),A=t(27),D=t.n(A),J=t(2),R=t(3),_=Object(R.a)(c||(c=Object(J.a)(["\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        font-family: 'PT Sans', sans-serif;\n        scroll-behavior: smooth;\n    } \n"]))),B=R.c.div(r||(r=Object(J.a)(["\n    width: 90%;\n    max-width: 1300px;\n    margin: auto;\n    overflow: hidden;\n"]))),G=R.c.section(i||(i=Object(J.a)(["\n    width: 100%;\n    background: ",";\n    padding: 70px 0;\n"])),(function(n){return n.black?"rgb(36,40,47)":"white"})),W=_,M=t(18),N=t(5),q=t.p+"static/media/banner.de13d484.png",H=t(0),K=R.c.div(a||(a=Object(J.a)(["\n    text-align: center;\n    margin: 60px 0px;\n    background-color: white;\n\n"]))),Q=R.c.img(s||(s=Object(J.a)(["\n    width: 100%;\n    max-width: 622px;\n    height: auto;\n"]))),U=function(){return Object(H.jsx)(K,{children:Object(H.jsx)(Q,{src:q,alt:"rick and morty"})})},V=R.c.div(o||(o=Object(J.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n"]))),Y=R.c.div(d||(d=Object(J.a)(["\n    background: rgb(60, 62, 68);\n    width: 300px;\n    overflow: hidden;\n    border-radius: 5px;\n    margin: 10px 5px;\n\n    ","\n"])),(function(n){return n.row&&Object(R.b)(j||(j=Object(J.a)(["\n        display: flex;\n        flex-direction: row;\n        width: 600px;\n        height: 220px;\n        margin: 10px;\n\n        @media screen and (max-width:500px) {\n            flex-direction: column;\n            width: 100%;\n            height: 100%;\n        }\n    "])))})),Z=R.c.div(l||(l=Object(J.a)(["\n    flex: 2 1 0%;\n    width: 100%;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n"]))),$=R.c.div(b||(b=Object(J.a)(["\n    flex: 3 1 0%;\n    width: 100%;\n    padding: 0.75rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: left;\n"]))),nn=R.c.div(x||(x=Object(J.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-bottom: 15px;\n"]))),en=R.c.h5(u||(u=Object(J.a)(["\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    height: 50px;\n    color: white;\n    text-align: center;\n    font-size: 16px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),tn=R.c.p(h||(h=Object(J.a)(["\n    line-height: 25px;\n    color: white;\n    display: flex;\n    align-items: center;\n"]))),cn=R.c.p(p||(p=Object(J.a)(["\n    color: rgb(158, 158, 158);\n    font-size: 0.9375rem;\n    font-weight: bold;\n"]))),rn=R.c.span(O||(O=Object(J.a)(["\n    height: 0.5rem;\n    width: 0.5rem;\n    margin-right: 0.375rem;\n    border-radius: 50%;\n\n    ","\n    ","\n    ","\n"])),(function(n){return"Alive"===n.status&&"background: rgb(85, 204, 68)"}),(function(n){return"Dead"===n.status&&"background: rgb(214, 61, 46)"}),(function(n){return"unknown"===n.status&&"background: rgb(158, 158, 158)"})),an=t(9),sn=t(10),on=function(n){var e=n.children,t=n.controles,c=void 0===t||t,r=n.autoplay,i=void 0!==r&&r,a=n.velocidad,s=void 0===a?"500":a,o=n.intervalo,d=void 0===o?"5000":o,j=Object(I.useRef)(null),l=Object(I.useRef)(null),b=Object(I.useCallback)((function(){if(j.current.children.length>0){var n=j.current.children[0];j.current.style.transition="".concat(s,"ms ease-out all");var e=j.current.children[0].offsetWidth;j.current.style.transform="translateX(-".concat(e,"px)");j.current.addEventListener("transitionend",(function e(){j.current.style.transition="none",j.current.style.transform="translateX(0)",j.current.appendChild(n),j.current.removeEventListener("transitionend",e)}))}}),[s]);return Object(I.useEffect)((function(){return i&&(l.current=setInterval((function(){b()}),d),j.current.addEventListener("mouseenter",(function(){clearInterval(l.current)})),j.current.addEventListener("mouseleave",(function(){l.current=setInterval((function(){b()}),d)}))),function(){return clearInterval(l.current)}}),[i,d,b]),Object(H.jsxs)(dn,{children:[Object(H.jsx)(jn,{ref:j,children:e}),c&&Object(H.jsxs)(bn,{children:[Object(H.jsx)(xn,{onClick:function(){if(j.current.children.length>0){var n=j.current.children.length-1,e=j.current.children[n];j.current.insertBefore(e,j.current.firstChild),j.current.style.transition="none";var t=j.current.children[0].offsetWidth;j.current.style.transform="translateX(-".concat(t,"px)"),setTimeout((function(){j.current.style.transition="".concat(s,"ms ease-out all"),j.current.style.transform="translateX(0)"}),30)}},children:Object(H.jsx)(an.a,{icon:sn.b})}),Object(H.jsx)(xn,{derecho:!0,onClick:b,children:Object(H.jsx)(an.a,{icon:sn.c})})]})]})},dn=R.c.div(f||(f=Object(J.a)(["\n\tposition: relative;\n"]))),jn=R.c.div(m||(m=Object(J.a)(["\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n"]))),ln=R.c.div(g||(g=Object(J.a)(["\n\tmin-width: 20%;\n\toverflow: hidden;\n\ttransition: .3s ease all;\n\tz-index: 10;\n\t/* max-height: 500px; */\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\n\t@media screen and (max-width: 900px) {\n\t\tmin-width: 25%;\n\t}\n\n\t@media screen and (max-width: 750px) {\n\t\tmin-width: 33%;\n\t}\n\n\t@media screen and (max-width: 600px) {\n\t\tmin-width: 50%;\n\t}\n"]))),bn=(R.c.div(w||(w=Object(J.a)(["\n\tbackground: ",";\n\tcolor: ",";\n\twidth: 100%;\n\tpadding: 10px 60px;\n\ttext-align: center;\n\tposition: absolute;\n\tbottom: 0;\n\n\t@media screen and (max-width: 700px) {\n\t\tposition: relative;\n\t\tbackground: #000;\n\t}\n"])),(function(n){return n.colorFondo?n.colorFondo:"rgba(0,0,0,.3)"}),(function(n){return n.colorTexto?n.colorTexto:"#fff"})),R.c.div(v||(v=Object(J.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 20;\n\twidth: 100%;\n\theight: 100%;\n\tpointer-events: none;\n"])))),xn=R.c.button(y||(y=Object(J.a)(["\n\tpointer-events: all;\n\tbackground: rgba(0,0,0,.1);\n\tborder: none;\n\tcursor: pointer;\n\toutline: none;\n\twidth: 50px;\n\theight: 100%;\n\ttext-align: center;\n\tposition: absolute;\n\ttransition: .3s ease all;\n\tfont-size: 25px;\n\n\tpath {\n\t\tfill: rgba(255,255,255,.2);\n\t}\n\n\t&:hover {\n\t\tbackground: rgba(0,0,0,.4);\n\t\tpath {\n\t\t\tfill: rgba(255,255,255,1);\n\t\t}\n\t}\n\n\tpath {\n\t\tfilter: ",";\n\t}\n\n\t","\n"])),(function(n){return n.derecho?"drop-shadow(-2px 0px 0px #fff)":"drop-shadow(2px 0px 0px #fff)"}),(function(n){return n.derecho?"right: 0":"left: 0"})),un=R.c.p(k||(k=Object(J.a)(["\n\tfont-size: 1.25rem;\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n\tmargin-bottom: 10px;\n\tcolor: white;\n\tletter-spacing: 2px;\n"]))),hn=t(8),pn=t.n(hn),On=t(14),fn=t(7),mn=function(){var n=Object(I.useState)([]),e=Object(fn.a)(n,2),t=e[0],c=e[1],r=Object(I.useState)(0),i=Object(fn.a)(r,2),a=i[0],s=i[1],o=Object(I.useState)(0),d=Object(fn.a)(o,2),j=d[0],l=d[1],b=function(){var n=Object(On.a)(pn.a.mark((function n(){var e,t;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://rickandmortyapi.com/api/character");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,c(t.results),s(t.info.count),l(t.info.pages);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(I.useEffect)((function(){b()}),[]),{characters:t,totalCount:a,pages:j,changePage:function(){var n=Object(On.a)(pn.a.mark((function n(e){var t,r;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://rickandmortyapi.com/api/character?page=".concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:r=n.sent,c(r.results);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},gn=function(){var n=Object(I.useState)([]),e=Object(fn.a)(n,2),t=e[0],c=e[1],r=Object(I.useState)(0),i=Object(fn.a)(r,2),a=i[0],s=i[1],o=Object(I.useState)(0),d=Object(fn.a)(o,2),j=d[0],l=d[1],b=function(){var n=Object(On.a)(pn.a.mark((function n(){var e,t;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://rickandmortyapi.com/api/location");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,c(t.results),s(t.info.count),l(t.info.pages);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(I.useEffect)((function(){b()}),[]),{locations:t,totalCount:a,pages:j,changePage:function(){var n=Object(On.a)(pn.a.mark((function n(e){var t,r;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://rickandmortyapi.com/api/location?page=".concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:r=n.sent,c(r.results);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},wn=function(){var n=Object(I.useState)([]),e=Object(fn.a)(n,2),t=e[0],c=e[1],r=Object(I.useState)(0),i=Object(fn.a)(r,2),a=i[0],s=i[1],o=Object(I.useState)(0),d=Object(fn.a)(o,2),j=d[0],l=d[1],b=function(){var n=Object(On.a)(pn.a.mark((function n(){var e,t;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://rickandmortyapi.com/api/episode");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,c(t.results),s(t.info.count),l(t.info.pages);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(I.useEffect)((function(){b()}),[]),{episodes:t,totalCount:a,pages:j,changePage:function(){var n=Object(On.a)(pn.a.mark((function n(e){var t,r;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://rickandmortyapi.com/api/episode?page=".concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:r=n.sent,c(r.results);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},vn=function(){var n=mn().characters,e=gn().locations,t=wn().episodes;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(G,{children:Object(H.jsx)(U,{})}),Object(H.jsx)(G,{black:!0,children:Object(H.jsxs)(B,{children:[Object(H.jsx)(un,{children:"Characters"}),Object(H.jsx)(on,{autoplay:!0,children:n.map((function(n,e){return Object(H.jsx)(ln,{children:Object(H.jsxs)(Y,{children:[Object(H.jsx)(Z,{children:Object(H.jsx)("img",{src:n.image,alt:n.name})}),Object(H.jsx)($,{children:Object(H.jsx)(en,{children:n.name})})]})},e)}))}),Object(H.jsx)("br",{}),Object(H.jsx)(un,{children:"Locations"}),Object(H.jsx)(on,{autoplay:!0,velocidad:"700",children:e.map((function(n,e){return Object(H.jsx)(ln,{children:Object(H.jsx)(Y,{children:Object(H.jsxs)($,{children:[Object(H.jsx)(en,{children:n.name}),Object(H.jsxs)(nn,{children:[Object(H.jsx)(cn,{children:"Dimension:"}),Object(H.jsx)(tn,{children:n.dimension})]}),Object(H.jsxs)(nn,{children:[Object(H.jsx)(cn,{children:"Type:"}),Object(H.jsx)(tn,{children:n.type})]})]})})},e)}))}),Object(H.jsx)("br",{}),Object(H.jsx)(un,{children:"Episodes"}),Object(H.jsx)(on,{autoplay:!0,velocidad:"900",children:t.map((function(n,e){return Object(H.jsx)(ln,{children:Object(H.jsx)(Y,{children:Object(H.jsxs)($,{children:[Object(H.jsx)(en,{children:n.name}),Object(H.jsxs)(nn,{children:[Object(H.jsx)(cn,{children:"Episode:"}),Object(H.jsx)(tn,{children:n.episode})]}),Object(H.jsxs)(nn,{children:[Object(H.jsx)(cn,{children:"Air date:"}),Object(H.jsx)(tn,{children:n.air_date})]})]})})},e)}))})]})})]})},yn=R.c.div(C||(C=Object(J.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"]))),kn=R.c.div(E||(E=Object(J.a)(["\n    width: auto;\n\n    button:first-child {\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n    }\n\n    button:last-child {\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px;\n    }\n"]))),Cn=R.c.button(z||(z=Object(J.a)(["\n    width: auto;\n    background: ",";\n    color: ",";\n    padding: 10px;\n    font-size: 1.125rem;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    \n    @media (min-width: 768px) {\n        &:hover {\n            background: white;\n            color: black;\n        }\n    }\n"])),(function(n){return n.active?"white":"rgb(60,62,68)"}),(function(n){return n.active?"black":"white"})),En=function(n){for(var e=n.changePage,t=n.pages,c=Object(I.useState)(1),r=Object(fn.a)(c,2),i=r[0],a=r[1],s=[],o=1;o<=t;o++)s.push(o);function d(n){var c=Number(n.target.textContent);c>=1&&c<=t&&(a(c),e(c),window.scrollTo(0,0))}return Object(H.jsx)(yn,{children:Object(H.jsxs)(kn,{children:[1!==i&&Object(H.jsx)(Cn,{onClick:function(){var n=i-1;n>0&&(e(n),a(n),window.scrollTo(0,0))},children:Object(H.jsx)(an.a,{icon:sn.b})}),(i<4?s.slice(0,i+4):i>t-4&&t-7>=1?s.slice(t-7):s.slice(i-4,i+3)).map((function(n,e){return Object(H.jsx)(Cn,{onClick:d,active:i===n,children:n},e)})),i!==t&&Object(H.jsx)(Cn,{onClick:function(){var n=i+1;n<t+1&&(e(n),a(n),window.scrollTo(0,0))},children:Object(H.jsx)(an.a,{icon:sn.c})})]})})},zn=R.c.h2(S||(S=Object(J.a)(["\n    font-size: 1.5rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    margin-bottom: 10px;\n    color: white;\n    letter-spacing: 2px;\n    text-align: center;\n    padding: 10px 0;\n"]))),Sn=R.c.div(P||(P=Object(J.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    @media (max-width: 768px) {\n        flex-direction: column;\n        margin: 20px;\n    }\n"]))),Pn=R.c.div(L||(L=Object(J.a)(["\n    width: 350px;\n    height: 38px;\n    display: flex;\n    flex-direction: row;\n"]))),Ln=R.c.input(T||(T=Object(J.a)(["\n    width: 90%;\n    outline: none;\n    padding: 5px 15px;\n    font-size: 1.2rem;\n    border-radius: 5px 0 0 5px;\n    border: none;\n"]))),Tn=R.c.button(F||(F=Object(J.a)(["\n    width: 40px;\n    height: auto;\n    cursor: pointer;\n    border: none;\n    font-size: 1.2rem;\n    background: rgb(60,62,68);\n    color: white;\n    border-radius: 0 5px 5px 0;\n"]))),Fn=function(){return Object(H.jsxs)(Pn,{children:[Object(H.jsx)(Ln,{type:"text"}),Object(H.jsx)(Tn,{children:Object(H.jsx)(an.a,{icon:sn.e})})]})};function In(){var n=mn(),e=n.characters,t=n.changePage,c=n.pages;return Object(H.jsx)(G,{black:!0,children:Object(H.jsxs)(B,{children:[Object(H.jsxs)(Sn,{children:[Object(H.jsx)(zn,{children:"Characters"}),Object(H.jsx)(Fn,{})]}),Object(H.jsx)(V,{children:e.map((function(n){return Object(H.jsxs)(Y,{row:!0,children:[Object(H.jsx)(Z,{children:Object(H.jsx)("img",{src:n.image,alt:n.name})}),Object(H.jsxs)($,{children:[Object(H.jsxs)(nn,{children:[Object(H.jsx)(en,{children:n.name}),Object(H.jsxs)(tn,{children:[Object(H.jsx)(rn,{status:n.status}),n.status," - ",n.species]})]}),Object(H.jsxs)(nn,{children:[Object(H.jsx)(cn,{children:"Last known location:"}),Object(H.jsx)(tn,{children:n.location.name})]}),Object(H.jsxs)(nn,{children:[Object(H.jsx)(cn,{children:"First seen in:"}),Object(H.jsx)(tn,{children:n.origin.name})]})]})]},n.id)}))}),Object(H.jsx)(En,{changePage:t,pages:c})]})})}function Xn(){var n=gn(),e=n.locations,t=n.changePage,c=n.pages;return Object(H.jsx)(G,{black:!0,children:Object(H.jsxs)(B,{children:[Object(H.jsxs)(Sn,{children:[Object(H.jsx)(zn,{children:"Locations"}),Object(H.jsx)(Fn,{})]}),Object(H.jsx)(V,{children:e.map((function(n){return Object(H.jsx)(Y,{children:Object(H.jsxs)($,{children:[Object(H.jsx)(en,{children:n.name}),Object(H.jsxs)(nn,{children:[Object(H.jsx)(cn,{children:"Dimension:"}),Object(H.jsx)(tn,{children:n.dimension})]}),Object(H.jsxs)(nn,{children:[Object(H.jsx)(cn,{children:"Type:"}),Object(H.jsx)(tn,{children:n.type})]})]})},n.id)}))}),Object(H.jsx)(En,{changePage:t,pages:c})]})})}function An(){var n=wn(),e=n.episodes,t=n.pages,c=n.changePage;return Object(H.jsx)(G,{black:!0,children:Object(H.jsxs)(B,{children:[Object(H.jsxs)(Sn,{children:[Object(H.jsx)(zn,{children:"Episodes"}),Object(H.jsx)(Fn,{})]}),Object(H.jsx)(V,{children:e.map((function(n){return Object(H.jsx)(Y,{children:Object(H.jsxs)($,{children:[Object(H.jsx)(en,{children:n.name}),Object(H.jsxs)(nn,{children:[Object(H.jsx)(cn,{children:"Episode:"}),Object(H.jsx)(tn,{children:n.episode})]}),Object(H.jsxs)(nn,{children:[Object(H.jsx)(cn,{children:"Air date:"}),Object(H.jsx)(tn,{children:n.air_date})]})]})},n.id)}))}),Object(H.jsx)(En,{changePage:c,pages:t})]})})}var Dn,Jn,Rn,_n,Bn,Gn,Wn,Mn,Nn,qn,Hn,Kn=t.p+"static/media/logo.accf5a43.png",Qn=R.c.div(Dn||(Dn=Object(J.a)(["\n    background-color: white;\n    padding: 0 30px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    border-bottom: 1px solid #E2E8F0;\n"]))),Un=R.c.img(Jn||(Jn=Object(J.a)(["\n    width: 50px;\n"]))),Vn=R.c.div(Rn||(Rn=Object(J.a)(["\n    display: none;\n    flex-direction: column;\n    font-size: 28px;\n    cursor: pointer;\n\n    @media (max-width: 768px) {\n        display: flex;\n    }\n"]))),Yn=R.c.div(_n||(_n=Object(J.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    overflow: hidden;\n\n    @media (max-width: 768px) {\n        flex-direction: column;\n        width: 100%;\n        max-height: ",";\n        transition: max-height 0.5s ease;\n    }\n"])),(function(n){return n.isOpen?"300px":"0"})),Zn=Object(R.c)(M.b)(Bn||(Bn=Object(J.a)(["\n    display: inline-block;\n    text-decoration: none;\n    margin: 16px 20px;\n    color: black;\n    font-size: 1.25em;\n    cursor: pointer;\n"]))),$n=function(){var n=Object(I.useState)(!1),e=Object(fn.a)(n,2),t=e[0],c=e[1];return Object(H.jsxs)(Qn,{children:[Object(H.jsx)(M.b,{to:"/",children:Object(H.jsx)(Un,{src:Kn,alt:"rick and morty"})}),Object(H.jsx)(Vn,{onClick:function(){return c(!t)},children:Object(H.jsx)(an.a,{icon:t?sn.f:sn.a})}),Object(H.jsxs)(Yn,{isOpen:t,children:[Object(H.jsx)(Zn,{to:"/characters",children:"Characters"}),Object(H.jsx)(Zn,{to:"/locations",children:"Locations"}),Object(H.jsx)(Zn,{to:"/episodes",children:"Episodes"})]})]})},ne=t(31),ee=R.c.footer(Gn||(Gn=Object(J.a)(["\n    width: 100%;\n    background: rgb(32, 35, 41);\n    text-align: center;\n    color: rgb(158, 158, 158);\n    padding: 50px 0;\n"]))),te=R.c.div(Wn||(Wn=Object(J.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 25px 0;\n"]))),ce=R.c.a(Mn||(Mn=Object(J.a)(["\n    font-size: 2.5rem;\n    margin: 0 20px;\n    padding: 20px;\n    border-radius: 5px;\n    width: 90px;\n    color: rgb(158, 158, 158);\n    text-decoration: none;\n\n    &:hover {\n        background: white;\n        color: rgb(32, 35, 41);\n        cursor: pointer;\n    }\n"]))),re=R.c.ul(Nn||(Nn=Object(J.a)(["\n    text-decoration: none;\n    list-style: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    \n    li {\n        margin: 0 20px;\n    }\n"]))),ie=R.c.p(qn||(qn=Object(J.a)(["\n    font-size: .875rem;\n    padding: 5px;\n"]))),ae=R.c.span(Hn||(Hn=Object(J.a)(["\n    border-bottom: 1px solid;\n    font-weight: bold;\n"]))),se=function(){var n=mn().totalCount,e=wn().totalCount,t=gn().totalCount;return Object(H.jsx)(ee,{children:Object(H.jsxs)(B,{children:[Object(H.jsxs)(re,{children:[Object(H.jsxs)("li",{children:["Characters: ",n]}),Object(H.jsxs)("li",{children:["Locations: ",t]}),Object(H.jsxs)("li",{children:["Episodes: ",e]})]}),Object(H.jsxs)(te,{children:[Object(H.jsx)(ce,{href:"https://github.com/JesusEfrainGarciaRodriguez",children:Object(H.jsx)(an.a,{icon:ne.a})}),Object(H.jsx)(ce,{href:"mailto:efraingarcia_86@hotmail.com",children:Object(H.jsx)(an.a,{icon:sn.d})})]}),Object(H.jsxs)(ie,{children:["by ",Object(H.jsx)(ae,{children:"Efrain Garcia"})," 2021"]})]})})};var oe=function(){return Object(H.jsxs)(M.a,{children:[Object(H.jsx)(W,{}),Object(H.jsx)($n,{}),Object(H.jsxs)(N.c,{children:[Object(H.jsx)(N.a,{path:"/characters",component:In}),Object(H.jsx)(N.a,{path:"/locations",component:Xn}),Object(H.jsx)(N.a,{path:"/episodes",component:An}),Object(H.jsx)(N.a,{path:"/",component:vn})]}),Object(H.jsx)(se,{})]})};D.a.render(Object(H.jsx)(X.a.StrictMode,{children:Object(H.jsx)(oe,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.7cf8c275.chunk.js.map