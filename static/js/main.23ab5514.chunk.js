(this.webpackJsonpobersberg=this.webpackJsonpobersberg||[]).push([[0],{35:function(e,n,t){"use strict";t.r(n);var i,c,r,s,l,o,a=t(1),j=t.n(a),h=t(20),d=t(4),u=t(5),b={Name:"Obersberg",Separator:"|"},m={Background:"#000000",Foreground:"#0A0A0A",Primary:"#8247E4",Secondary:"#A62639",Third:"#135290",Text:"#FAE1DF",HexAlpha:{100:"FF",99:"FC",98:"FA",97:"F7",96:"F5",95:"F2",94:"F0",93:"ED",92:"EB",91:"E8",90:"E6",89:"E3",88:"E0",87:"DE",86:"DB",85:"D9",84:"D6",83:"D4",82:"D1",81:"CF",80:"CC",79:"C9",78:"C7",77:"C4",76:"C2",75:"BF",74:"BD",73:"BA",72:"B8",71:"B5",70:"B3",69:"B0",68:"AD",67:"AB",66:"A8",65:"A6",64:"A3",63:"A1",62:"9E",61:"9C",60:"99",59:"96",58:"94",57:"91",56:"8F",55:"8C",54:"8A",53:"87",52:"85",51:"82",50:"80",49:"7D",48:"7A",47:"78",46:"75",45:"73",44:"70",43:"6E",42:"6B",41:"69",40:"66",39:"63",38:"61",37:"5E",36:"5C",35:"59",34:"57",33:"54",32:"52",31:"4F",30:"4D",29:"4A",28:"47",27:"45",26:"42",25:"40",24:"3D",23:"3B",22:"38",21:"36",20:"33",19:"30",18:"2E",17:"2B",16:"29",15:"26",14:"24",13:"21",12:"1F",11:"1C",10:"1A",9:"17",8:"14",7:"12",6:"0F",5:"0D",4:"0A",3:"08",2:"05",1:"03",0:"00"}},g={NotFound:{Path:"*",Title:"404"},Home:{Path:"/",Title:"Hauptseite"}},x=function(){return{Routing:b,Colors:m,Views:g}},O=x().Colors,f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"".concat(O.Foreground+O.HexAlpha[e||0])},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"".concat(O.Primary+O.HexAlpha[e||100])},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"".concat(O.Secondary+O.HexAlpha[e||100])},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"".concat(O.Third+O.HexAlpha[e||100])},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"".concat(O.Text+O.HexAlpha[e||100])},k=Object(u.a)(i||(i=Object(d.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500&display=swap');\n\n    body {\n        margin: 0;\n        font-family: 'Quicksand', sans-serif;\n        font-weight: 300;\n        text-align: center;\n        align-items: center;\n        justify-content: center;\n\n        background-color: ",";\n        color: ",";\n    }\n\n    h1, h2, h3, h4, h5, h6 {\n        font-family: 'Quicksand', sans-serif;\n        font-weight: 550;\n    }\n\n    a {\n        color: ",";\n        text-decoration: none;\n    }\n"])),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"".concat(O.Background+O.HexAlpha[e||100])}(),S(),S()),w=u.c.div(c||(c=Object(d.a)(["\n    min-height: calc(100vh - 72px);\n"]))),y=k,F=t(3),E=function(e){var n=x().Routing;return document.title="".concat(n.Name," ").concat(n.Separator," ").concat(e.Title),e.Element},A=t(18),D=t.n(A),H=t(2),B=function(e){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(D.a,{minWidth:1224,children:Object(H.jsx)(e.DesktopElement,{})}),Object(H.jsx)(D.a,{maxWidth:1224,children:e.MobileElement?Object(H.jsx)(e.MobileElement,{}):Object(H.jsx)(e.DesktopElement,{})})]})},N=t(11),T=u.c.div(r||(r=Object(d.a)(["\n    display: flex;\n    position: sticky;\n    top: 0;\n    width: 100%;\n    height: 3.5rem;\n\n    align-items: center;\n    text-align: center;\n    justify-content: flex-start;\n\n    background-color: ",";\n    background-image: linear-gradient(",", ",");\n    background-size: 100% 0.45rem;\n    background-position: center bottom;\n    background-repeat: no-repeat;\n"])),f(90),v(1),v(0)),z=u.c.div(s||(s=Object(d.a)(["\n    display: flex;\n    height: 3rem;\n\n    align-items: center;\n    align-self: flex-start;\n    justify-self: center;\n\n    h1 {\n        color: ",";\n    }\n\n    h2 {\n        font-size: 2em;\n        font-weight: 700;\n\n        margin-left: 1rem;\n        margin-right: 1rem;\n    }\n\n    .Logo {\n        color: ",";\n        margin-right: 0.65rem;\n        margin-left: 0.75rem;\n        height: 2.5rem;\n    }\n"])),p(),v()),I=u.c.nav(l||(l=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n\n    height: 3rem;\n    align-items: center;\n\n    ul {\n        display: flex;\n        flex-direction: row;\n        list-style-type: none;\n        padding: 0.15rem;\n\n        li {\n            margin-left: 1rem;\n            margin-right: 1rem;\n        }\n    }\n"]))),P=t.p+"static/media/Logo.f044222a.svg",L=t(9),M=[{title:"Hauptseite",path:"/",icon:Object(H.jsx)(L.c,{})},{title:"Produkte",path:"/produkte",icon:Object(H.jsx)(L.i,{})},{title:"Anti-Malware",path:"/produkte/anti-malware",icon:Object(H.jsx)(L.a,{})},{title:"Firewall",path:"/produkte/firewall",icon:Object(H.jsx)(L.e,{})},{title:"Verschl\xfcsselung",path:"/produkte/daten-verschluesselung",icon:Object(H.jsx)(L.b,{})}],K=t(36),Q=Object(u.c)(K.a.div)(o||(o=Object(d.a)(["\n    text-decoration: none;\n    ",";\n"])),(function(e){return e.CustomCSS})),W=function(e){return Object(H.jsx)(Q,{CustomCSS:e.CustomCSS?e.CustomCSS:"",whileHover:{scale:1.2,y:-5},whileTap:{scale:.85},transition:{type:"spring",stiffness:500},onClick:e.onClick,children:e.Element})},R=function(e){return Object(H.jsx)(Q,{CustomCSS:e.CustomCSS?e.CustomCSS:"",whileHover:{scale:1.1,x:-3},whileTap:{scale:.95},transition:{type:"spring",stiffness:350},onClick:e.onClick,children:e.Element})},G=function(e){return Object(H.jsx)(Q,{CustomCSS:e.CustomCSS?e.CustomCSS:"",whileHover:{scale:1.2,x:-4,y:3},whileTap:{scale:.95},transition:{type:"spring",stiffness:300},onClick:e.onClick,children:e.Element})},V=t(8);function J(){var e=Object(a.useState)("Obersberg"),n=Object(N.a)(e,2),t=n[0],i=n[1],c=0;return Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)(T,{children:[Object(H.jsxs)(z,{children:[Object(H.jsx)("img",{className:"Logo",srcSet:P,alt:"Logo"}),Object(H.jsx)("h1",{onClick:function(){++c%5===0&&(i("Never gonna give you up"),window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))},children:t}),Object(H.jsx)("h2",{children:"|"})]}),Object(H.jsx)(I,{children:Object(H.jsx)("ul",{children:M.map((function(e,n){return Object(H.jsx)("li",{children:Object(H.jsx)(V.b,{to:e.path,children:Object(H.jsx)(W,{Element:Object(H.jsxs)("h3",{children:[e.icon,e.title]})})})},n)}))})})]})})}var U,Z,X,q,Y,$=t(24),_=t(12),ee=[{title:"Impressum",path:"/impressum",icon:Object(H.jsx)(L.d,{})},{title:"AGB's",path:"/agbs",icon:Object(H.jsx)($.a,{})},{title:"\xdcber uns",path:"/ueber-uns",icon:Object(H.jsx)(L.f,{})},{title:"Platzhalter",path:"/404",icon:Object(H.jsx)(L.h,{})}],ne=[{icon:Object(H.jsx)(_.d,{className:"Icon"})},{icon:Object(H.jsx)(_.c,{className:"Icon"})},{icon:Object(H.jsx)(_.b,{className:"Icon"})},{icon:Object(H.jsx)(_.a,{className:"Icon"})}],te=u.c.div(U||(U=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n\n    height: 4.5rem;\n    margin: 0 auto;\n\n    background-color: ",";\n    background-image: linear-gradient(",", ",");\n    background-size: 100% 0.45rem;\n    background-position: center top;\n    background-repeat: no-repeat;\n"])),f(90),C(0),C(1)),ie=u.c.div(Z||(Z=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    height: 4rem;\n"]))),ce=u.c.ul(X||(X=Object(d.a)(["\n    list-style-type: none;\n    columns: ",";\n"])),Math.ceil(ee.length/2)),re=u.c.ul(q||(q=Object(d.a)(["\n    list-style-type: none;\n    columns: ",";\n\n    .Icon {\n        width: 1.5rem;\n        height: 1.5rem;\n    }\n"])),ne.length);function se(){return Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)(te,{children:[Object(H.jsx)(ie,{children:Object(H.jsx)(ce,{children:ee.map((function(e,n){return Object(H.jsx)("li",{children:Object(H.jsx)(V.b,{to:e.path,title:e.title,children:Object(H.jsx)(R,{Element:Object(H.jsxs)(H.Fragment,{children:[e.icon,e.title]})})})},n)}))})}),Object(H.jsx)(ie,{children:Object(H.jsx)(re,{children:ne.map((function(e,n){return Object(H.jsx)("li",{children:Object(H.jsx)(G,{Element:Object(H.jsx)(H.Fragment,{children:e.icon})})},n)}))})})]})})}var le,oe,ae,je,he,de,ue,be,me,ge,xe=u.c.div(Y||(Y=Object(d.a)(["\n    position: relative;\n\n    display: flex;\n\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    background-color: ",";\n\n    border-radius: 0.5rem;\n    padding: 0.75rem;\n\n    ","\n"])),(function(e){return f(e.Opacity?e.Opacity:null)}),(function(e){return e.CustomCSS?e.CustomCSS:""})),Oe=u.c.div(le||(le=Object(d.a)(["\n    position: relative;\n    display: flex;\n    align-self: center;\n    left: 2.5vw;\n    justify-self: center;\n    overflow: hidden;\n    width: 95vw;\n    height: 0.5rem;\n    background-image: linear-gradient(90deg, ",", ",");\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n"])),C(80),v(80)),fe=(u.c.div(oe||(oe=Object(d.a)(["\n    position: relative;\n    display: flex;\n    align-self: center;\n    left: 2.5vw;\n    justify-self: center;\n    overflow: hidden;\n    width: 95vw;\n    height: 0.5rem;\n    background-image: linear-gradient(1800deg, ",", ",");\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n"])),C(80),v(80)),u.c.div(ae||(ae=Object(d.a)(["\n    position: relative;\n    display: flex;\n    height: 1rem;\n"])))),pe=Object(u.b)(je||(je=Object(d.a)(["\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n"]))),Ce=u.c.div(he||(he=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    margin: 1rem;\n    width: 40%;\n    height: 50%;\n\n\n    h1 {\n        margin: 0.5rem;\n        font-size: 5em;\n    }\n\n    h2 {\n        color: ",";\n        font-size: 3.5em;\n    }\n\n    .Icon1 {\n        width: 50%;\n        height: 25%;\n        color: ",";\n    }\n\n    .Icon2 {\n        margin-left: 50%;\n        width: 50%;\n        height: 25%;\n        color: ",";\n    }\n"])),C(),v(),C()),ve=Object(u.b)(de||(de=Object(d.a)(["\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: center;\n\n    .Link {\n        width: 30%;\n    }\n"]))),Se=Object(u.b)(ue||(ue=Object(d.a)(["\n    flex-grow: 1;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    h1 {\n        color: ",";\n    }\n\n    h3 {\n        color: ",";\n        font-size: 2em;\n    }\n"])),p(),C()),ke=t(25),we=Object(u.c)(K.a.div)(be||(be=Object(d.a)(["\n    position: relative;\n\n    display: flex;\n\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    background-color: ",";\n\n    border-radius: 0.5rem;\n    padding: 0.75rem;\n\n    ","\n"])),(function(e){return f(e.Opacity?e.Opacity:null)}),(function(e){return e.CustomCSS?e.CustomCSS:""})),ye=function(e){return Object(H.jsx)(we,{Opacity:e.Opacity,CustomCSS:e.CustomCSS,whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:500},onClick:e.onClick,children:e.Element})};function Fe(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(xe,{CustomCSS:pe,children:[Object(H.jsxs)(Ce,{children:[Object(H.jsx)("h1",{children:"Obersberg"}),Object(H.jsx)("h2",{children:"Wo Sicherheit die reale Welt trifft"})]}),Object(H.jsxs)(Ce,{children:[Object(H.jsx)(ke.a,{className:"Icon1"}),Object(H.jsx)(L.g,{className:"Icon2"})]})]}),Object(H.jsx)(Oe,{}),Object(H.jsxs)(xe,{CustomCSS:ve,children:[Object(H.jsx)(V.b,{to:"/karriere",className:"Link",children:Object(H.jsx)(ye,{Opacity:50,CustomCSS:Se,Element:Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("h1",{children:"Karriere"}),Object(H.jsx)("p",{children:"Sie sind interessiert an unserer Firma und k\xf6nnen sich vorstellen bei uns Karriere zu machen?"}),Object(H.jsx)("p",{children:"Dann klicken sie hier"})]})})}),Object(H.jsx)(V.b,{to:"/produkte",className:"Link",children:Object(H.jsx)(ye,{Opacity:50,CustomCSS:Se,Element:Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("h3",{children:"Produkte"}),Object(H.jsx)("p",{children:"Sie wollen ihr Unternehmen sicher vor l\xe4stigen Hackerangriffen und unerlaubten Zugriffen machen?"}),Object(H.jsx)("h5",{children:"Klicken sie hier, um ihr Unternehmen sicherer zu machen!"}),Object(H.jsx)("p",{children:"Sie wollen hochertige und leistungsstarke Server einrichten?"}),Object(H.jsx)("h5",{children:"Klicken sie hier, um ihre eigenen Server zu er\xf6ffnen!"})]})})}),Object(H.jsx)(V.b,{to:"/ueber-uns",className:"Link",children:Object(H.jsx)(ye,{Opacity:50,CustomCSS:Se,Element:Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("h1",{children:"\xdcber uns"}),Object(H.jsx)("p",{children:"Hier finden sie unsere Geschichte, unsere Gegenwart und in der Zukunft geplante Projekte."})]})})})]}),Object(H.jsx)(fe,{})]})}var Ee=Object(u.b)(me||(me=Object(d.a)(["\n    flex-direction: column;\n\n    code {\n        font-size: 1.5em;\n        color: ",";\n    }\n\n    h2 {\n        color: ",";\n        border: 0.1rem solid ",";\n        padding: 0.3rem;\n        border-radius: 0.5rem;\n    }\n"])),p(),C(),C()),Ae=Object(u.c)(K.a.div)(ge||(ge=Object(d.a)(["\n    height: 6rem;\n    background-image: linear-gradient(",", ",");\n    width: 6rem;\n    border-radius: 2% 50%,\n"])),C(),p()),De=function(){return Object(H.jsx)(Ae,{animate:{rotate:360,borderRadius:["50% 50%","2% 50%"],x:150},initial:{x:-150},transition:{flip:1/0,duration:4,ease:"easeInOut"},whileHover:{scale:1.4}})};function He(){var e=Object(F.f)();return Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)(xe,{Opacity:null,CustomCSS:Ee,children:[Object(H.jsx)("h1",{children:"404, Page not found"}),Object(H.jsx)(De,{}),Object(H.jsxs)("p",{children:[" Die von dir angeforderte Seite wurde nicht gefunden oder es ist ein Fehler in einem ",Object(H.jsx)("code",{children:"React.Component"})," aufgetreten."]}),Object(H.jsx)(W,{CustomCSS:null,Element:Object(H.jsx)(H.Fragment,{children:Object(H.jsx)("h2",{children:"Kehre zur vorherigen Seite zur\xfcck"})}),onClick:function(){e(-1)}})]})})}var Be=function(){var e=x().Views;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(y,{}),Object(H.jsxs)(w,{children:[Object(H.jsx)(J,{}),Object(H.jsxs)(F.c,{children:[Object(H.jsx)(F.a,{path:e.Home.Path,element:Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(E,{Title:e.Home.Title,Element:Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(B,{DesktopElement:Fe,MobileElement:null})})})})}),Object(H.jsx)(F.a,{path:e.NotFound.Path,element:Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(E,{Title:e.NotFound.Title,Element:Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(B,{DesktopElement:He,MobileElement:null})})})})})]})]}),Object(H.jsx)(se,{})]})};Object(h.render)(Object(H.jsx)(j.a.StrictMode,{children:Object(H.jsx)(V.a,{children:Object(H.jsx)(Be,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.23ab5514.chunk.js.map