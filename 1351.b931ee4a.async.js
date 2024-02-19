!(function(){"use strict";var hn=Object.defineProperty,yn=Object.defineProperties;var xn=Object.getOwnPropertyDescriptors;var Ne=Object.getOwnPropertySymbols;var Pr=Object.prototype.hasOwnProperty,Ar=Object.prototype.propertyIsEnumerable;var Tr=(R,j,o)=>j in R?hn(R,j,{enumerable:!0,configurable:!0,writable:!0,value:o}):R[j]=o,K=(R,j)=>{for(var o in j||(j={}))Pr.call(j,o)&&Tr(R,o,j[o]);if(Ne)for(var o of Ne(j))Ar.call(j,o)&&Tr(R,o,j[o]);return R},or=(R,j)=>yn(R,xn(j));var ar=(R,j)=>{var o={};for(var a in R)Pr.call(R,a)&&j.indexOf(a)<0&&(o[a]=R[a]);if(R!=null&&Ne)for(var a of Ne(R))j.indexOf(a)<0&&Ar.call(R,a)&&(o[a]=R[a]);return o};(self.webpackChunk_yuntijs_charts=self.webpackChunk_yuntijs_charts||[]).push([[1351],{88700:function(R,j,o){o.d(j,{E_:function(){return J},nc:function(){return H}});var a=o(50959);function D(x){var l=[];if(x.length===0)return"";if(typeof x[0]!="string")throw new TypeError("Url must be a string. Received "+x[0]);if(x[0].match(/^[^/:]+:\/*$/)&&x.length>1){var C=x.shift();x[0]=C+x[0]}x[0].match(/^file:\/\/\//)?x[0]=x[0].replace(/^([^/:]+):\/*/,"$1:///"):x[0]=x[0].replace(/^([^/:]+):\/*/,"$1://");for(var f=0;f<x.length;f++){var w=x[f];if(typeof w!="string")throw new TypeError("Url must be a string. Received "+w);w!==""&&(f>0&&(w=w.replace(/^[\/]+/,"")),f<x.length-1?w=w.replace(/[\/]+$/,""):w=w.replace(/[\/]+$/,"/"),l.push(w))}var u=l.join("/");u=u.replace(/\/(\?|&|#[^!])/g,"$1");var v=u.split("?");return u=v.shift()+(v.length>0?"?":"")+v.join("&"),u}function c(){var x;return typeof arguments[0]=="object"?x=arguments[0]:x=[].slice.call(arguments),D(x)}var M="https://unpkg.com",W="https://registry.npmmirror.com",Q=function(l){var C=l.pkg,f=l.version,w=f===void 0?"latest":f,u=l.path,v=l.proxy;switch(v){case"unpkg":return c(M,"".concat(C,"@").concat(w),u);default:return c(W,C,w,"files",u)}},q=o(11527),J=(0,a.createContext)(null),ne=null,z=function(l){var C=l.pkg,f=l.version,w=l.path;return Q({path:w,pkg:C,proxy:"aliyun",version:f})},H=function(){var l=(0,a.useContext)(J);return l?(l==null?void 0:l.proxy)!=="custom"?function(C){var f=C.pkg,w=C.version,u=C.path;return Q({path:u,pkg:f,proxy:l.proxy,version:w})}:(l==null?void 0:l.customCdnFn)||z:z},V=null},35405:function(R,j,o){o.d(j,{Z:function(){return dn}});var a=o(20237),D=o(57596),c=o(50959),M=o(82187),W=o.n(M),Q=o(96446),q=o(89968),J=o(1572),ne=o(40237),z=o(59350),H=o(20666);const V=r=>{const{componentCls:t,colorText:n,fontSize:e,lineHeight:s,fontFamily:p}=r;return{[t]:{color:n,fontSize:e,lineHeight:s,fontFamily:p}}},x=()=>({});var l=(0,H.I$)("App",V,x);const C=()=>c.useContext(z.Z),f=r=>{const{prefixCls:t,children:n,className:e,rootClassName:s,message:p,notification:_,style:B,component:L="div"}=r,{getPrefixCls:X}=(0,c.useContext)(Q.E_),oe=X("app",t),[te,ge,me]=l(oe),de=W()(ge,oe,e,s,me),$=(0,c.useContext)(z.J),fe=c.useMemo(()=>({message:Object.assign(Object.assign({},$.message),p),notification:Object.assign(Object.assign({},$.notification),_)}),[p,_,$.message,$.notification]),[jr,fn]=(0,q.Z)(fe.message),[wr,pn]=(0,ne.Z)(fe.notification),[kr,bn]=(0,J.Z)(),gn=c.useMemo(()=>({message:jr,notification:wr,modal:kr}),[jr,wr,kr]),mn=L===!1?c.Fragment:L,vn={className:de,style:B};return te(c.createElement(z.Z.Provider,{value:gn},c.createElement(z.J.Provider,{value:fe},c.createElement(mn,Object.assign({},L===!1?void 0:vn),bn,fn,pn,n))))};f.useApp=C;var w=f,u=o(50333),v=o(88700),g=function(t){var n=document.createElement("link");return n.rel="stylesheet",n.href=t,n},m=(0,c.memo)(function(r){var t=r.url,n=(0,c.useRef)(!1);return(0,c.useEffect)(function(){if(!n.current){n.current=!0;var e=g(t);document.head.append(e)}},[]),null}),d=m,i=o(16488),k,h,A,E,T,U,F,Z,N,P=function(t){var n=t.css,e=t.token,s=t.isDarkMode,p=(0,u.F4)(k||(k=(0,i.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `]))),_=s?e.cyan9A:e.cyan11A,B=s?e.cyan2A:e.cyan6A;return{blur:n(h||(h=(0,i.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:n(A||(A=(0,i.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:n(E||(E=(0,i.Z)([`
      ::-webkit-scrollbar {
        width: 0;
        height: 4px;
        background-color: transparent;

        &-thumb {
          background-color: `,`;
          border-radius: 4px;
          transition: background-color 500ms `,`;
        }

        &-corner {
          display: none;
          width: 0;
          height: 0;
        }
      }
    `])),e.colorFill,e.motionEaseOut),gradientAnimation:n(T||(T=(0,i.Z)([`
      background-image: linear-gradient(
        -45deg,
        `,`,
        `,`,
        `,`,
        `,`
      );
      background-size: 400% 400%;
      border-radius: inherit;
      animation: 5s `,` 5s ease infinite;
    `])),e.gold,e.magenta,e.geekblue,e.cyan,p),markdown:n(U||(U=(0,i.Z)([`
      color: `,`;

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: 600;
      }

      p {
        margin-block: 0 0;
        font-size: 14px;
        line-height: 2;
        color: `,`;

        + * {
          margin-block-end: 1em;
        }

        &:not(:last-child) {
          margin-bottom: 1.5em;
        }
      }

      blockquote {
        margin: 16px 0;
        padding: 0 12px;

        p {
          font-style: italic;
          color: `,`;
        }
      }

      a {
        color: `,`;

        &:hover {
          color: `,`;
        }

        &:active {
          color: `,`;
        }
      }

      img {
        max-width: 100%;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;
        border-radius: `,`px;

        > code {
          padding: 0 !important;
          background: unset !important;
          border: none !important;
          border-radius: unset !important;
        }
      }

      *:not([data-code-type='highlighter'], pre) code {
        padding: 2px 6px;

        font-size: `,`px;
        color: `,`;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      }

      table {
        border-spacing: 0;

        width: 100%;
        margin-block: 1em 1em;
        margin-inline: 0 0;
        padding: 8px;

        border: 1px solid `,`;
        border-radius: `,`px;

        code {
          display: inline-flex;
        }
      }

      th,
      td {
        padding-block: 10px 10px;
        padding-inline: 16px 16px;
      }

      thead {
        tr {
          th {
            background: `,`;

            &:first-child {
              border-top-left-radius: `,`px;
              border-bottom-left-radius: `,`px;
            }

            &:last-child {
              border-top-right-radius: `,`px;
              border-bottom-right-radius: `,`px;
            }
          }
        }
      }

      > ul > li {
        list-style-type: disc;
      }

      > ol,
      > ul {
        > li {
          margin-left: 24px;
          line-height: 1.8;

          &::marker {
            color: `,` !important;
          }
        }
      }

      ol,
      ul {
        > li::marker {
          color: `,`;
        }
      }

      details {
        margin-bottom: 1em;
        padding: 12px 16px;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        transition: all 400ms `,`;
      }

      details[open] {
        summary {
          padding-bottom: 12px;
          border-bottom: 1px solid `,`;
        }
      }
    `])),e.colorText,e.colorText,e.colorTextDescription,e.colorLink,e.colorLinkHover,e.colorLinkActive,e.borderRadius,e.fontSizeSM,_,B,s?e.cyan1A:e.cyan6A,e.borderRadiusSM,e.colorBorderSecondary,e.borderRadius,e.colorFillTertiary,e.borderRadius,e.borderRadius,e.borderRadius,e.borderRadius,s?e.cyan9A:e.cyan10A,e.colorTextDescription,e.colorFillTertiary,e.colorBorderSecondary,e.borderRadiusLG,e.motionEaseOut,e.colorBorder),markdownInChat:n(F||(F=(0,i.Z)([`
      h1 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1.6em;
      }

      h2 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1.4em;
      }

      h3 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1.2em;
      }

      h4 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1.1em;
      }

      h5 {
        margin-top: 0;
        margin-block-start: 0;
        font-size: 1em;
      }

      > *:last-child {
        margin-bottom: 0 !important;
      }

      p {
        line-height: 1.8 !important;
        white-space: pre-wrap !important;

        + * {
          margin-block-end: 0.5em !important;
        }

        &:not(:last-child) {
          margin-bottom: 1em !important;
        }
      }
    `]))),noScrollbar:n(Z||(Z=(0,i.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:n(N||(N=(0,i.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),e.colorTextSecondary,e.colorText)}},S=o(18534),y=o(30994);function b(r,t,n){var e=-1,s=r.length;t<0&&(t=-t>s?0:s+t),n=n>s?s:n,n<0&&(n+=s),s=t>n?0:n-t>>>0,t>>>=0;for(var p=Array(s);++e<s;)p[e]=r[e+t];return p}var O=b;function G(r,t,n){var e=r.length;return n=n===void 0?e:n,!t&&n>=e?r:O(r,t,n)}var ae=G,Be="\\ud800-\\udfff",Oe="\\u0300-\\u036f",We="\\ufe20-\\ufe2f",Ce="\\u20d0-\\u20ff",je=Oe+We+Ce,Je="\\ufe0e\\ufe0f",Ke="\\u200d",Ge=RegExp("["+Ke+Be+je+Je+"]");function we(r){return Ge.test(r)}var ve=we;function ie(r){return r.split("")}var $e=ie,he="\\ud800-\\udfff",Ve="\\u0300-\\u036f",ke="\\ufe20-\\ufe2f",Te="\\u20d0-\\u20ff",Pe=Ve+ke+Te,Ae="\\ufe0e\\ufe0f",Ye="["+he+"]",ye="["+Pe+"]",xe="\\ud83c[\\udffb-\\udfff]",Xe="(?:"+ye+"|"+xe+")",Ee="[^"+he+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Ie="[\\ud800-\\udbff][\\udc00-\\udfff]",Qe="\\u200d",_e=Xe+"?",De="["+Ae+"]?",qe="(?:"+Qe+"(?:"+[Ee,Re,Ie].join("|")+")"+De+_e+")*",er=De+_e+qe,rr="(?:"+[Ee+ye+"?",ye,Re,Ie,Ye].join("|")+")",nr=RegExp(xe+"(?="+xe+")|"+rr+er,"g");function I(r){return r.match(nr)||[]}var ee=I;function se(r){return ve(r)?ee(r):$e(r)}var tr=se;function pe(r){return function(t){t=(0,y.Z)(t);var n=ve(t)?tr(t):void 0,e=n?n[0]:t.charAt(0),s=n?ae(n,1).join(""):t.slice(1);return e[r]()+s}}var Ze=pe,Er=Ze("toUpperCase"),Rr=Er;function Ir(r){return Rr((0,y.Z)(r).toLowerCase())}var ir=Ir,_r=o(51741),Dr=(0,_r.Z)(function(r,t,n){return t=t.toLowerCase(),r+(n?ir(t):t)}),Zr=Dr,Y=o(51991);function sr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),n.push.apply(n,e)}return n}function Me(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):sr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function cr(r,t){var n=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=Mr(r))||t&&r&&typeof r.length=="number"){n&&(r=n);var e=0,s=function(){};return{s,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(X){throw X},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var p=!0,_=!1,B;return{s:function(){n=n.call(r)},n:function(){var X=n.next();return p=X.done,X},e:function(X){_=!0,B=X},f:function(){try{!p&&n.return!=null&&n.return()}finally{if(_)throw B}}}}function Mr(r,t){if(r){if(typeof r=="string")return lr(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lr(r,t)}}function lr(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}var Lr=function(t){var n,e=t.name,s=t.scale,p=t.appearance;return n={},(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)(n,"".concat(e,"Bg"),s["".concat(p,"A")][1]),"".concat(e,"BgHover"),s["".concat(p,"A")][2]),"".concat(e,"Border"),s[p][4]),"".concat(e,"BorderSecondary"),s[p][3]),"".concat(e,"BorderHover"),s[p][5]),"".concat(e,"Hover"),s[p][10]),"".concat(e),s[p][9]),"".concat(e,"Active"),s[p][7]),"".concat(e,"TextHover"),s["".concat(p,"A")][10]),"".concat(e,"Text"),s["".concat(p,"A")][9]),(0,a.Z)(n,"".concat(e,"TextActive"),s["".concat(p,"A")][7])},zr=function(t){var n=t.name,e=t.scale,s=t.appearance,p={},_=cr(e[s].entries()),B;try{for(_.s();!(B=_.n()).done;){var L=(0,S.Z)(B.value,2),X=L[0],oe=L[1];X===0||X===12||(p["".concat(n).concat(X)]=oe)}}catch(fe){_.e(fe)}finally{_.f()}var te=cr(e["".concat(s,"A")].entries()),ge;try{for(te.s();!(ge=te.n()).done;){var me=(0,S.Z)(ge.value,2),de=me[0],$=me[1];de===0||de===12||(p["".concat(n).concat(de,"A")]=$)}}catch(fe){te.e(fe)}finally{te.f()}return Me(Me({},p),Lr({appearance:s,name:n,scale:e}))},Ur=function(t){for(var n=t.isDarkMode,e={},s=0,p=Object.entries(Y._);s<p.length;s++){var _=(0,S.Z)(p[s],2),B=_[0],L=_[1];e=Me(Me({},e),zr({appearance:n?"dark":"light",name:Zr(B),scale:L}))}return e},re=function(t){var n=t.type,e=t.scale,s=t.appearance,p=ir(n),_=s==="dark";return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"color".concat(p,"Bg"),e[s][1]),"color".concat(p,"BgHover"),e[s][2]),"color".concat(p,"Border"),e[s][4]),"color".concat(p,"BorderHover"),e[s][_?5:3]),"color".concat(p,"Hover"),e[s][_?10:8]),"color".concat(p),e[s][9]),"color".concat(p,"Active"),e[s][_?7:10]),"color".concat(p,"TextHover"),e[s][_?10:8]),"color".concat(p,"Text"),e[s][9]),"color".concat(p,"TextActive"),e[s][_?7:10])},Le=function(t){var n=t.scale,e=t.appearance;return{colorBgContainer:e==="dark"?n[e][1]:n[e][0],colorBgElevated:e==="dark"?n[e][2]:n[e][0],colorBgLayout:e==="dark"?n[e][0]:n[e][1],colorBgMask:n.lightA[8],colorBgSpotlight:n[e][5],colorBorder:n[e][4],colorBorderSecondary:n[e][3],colorFill:n["".concat(e,"A")][3],colorFillQuaternary:n["".concat(e,"A")][0],colorFillSecondary:n["".concat(e,"A")][2],colorFillTertiary:n["".concat(e,"A")][1],colorText:n[e][12],colorTextQuaternary:n[e][6],colorTextSecondary:n[e][10],colorTextTertiary:n[e][8]}},ur={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}};function dr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),n.push.apply(n,e)}return n}function ce(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):dr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Fr=re({appearance:"dark",scale:Y._.bnw,type:"Primary"}),fr=Le({appearance:"dark",scale:Y._.gray}),Hr=re({appearance:"dark",scale:Y._.lime,type:"Success"}),Nr=re({appearance:"dark",scale:Y._.gold,type:"Warning"}),Br=re({appearance:"dark",scale:Y._.red,type:"Error"}),ze=re({appearance:"dark",scale:Y._.blue,type:"Info"}),Wr=ce(ce(ce(ce(ce(ce(ce({},Fr),fr),Hr),Nr),Br),ze),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:ze.colorInfoText,colorLinkActive:ze.colorInfoTextActive,colorLinkHover:ze.colorInfoTextHover,colorTextLightSolid:fr.colorBgLayout}),Jr=Wr;function pr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),n.push.apply(n,e)}return n}function Ue(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):pr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Kr=function(t,n){var e=t.primaryColor,s=t.neutralColor,p={},_={},B=Y._[e];B&&(p=re({appearance:"dark",scale:B,type:"Primary"}));var L=ur[s];return L&&(_=Le({appearance:"dark",scale:L})),Ue(Ue(Ue(Ue({},n),Jr),p),_)};function br(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),n.push.apply(n,e)}return n}function le(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?br(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):br(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Gr=re({appearance:"light",scale:Y._.bnw,type:"Primary"}),gr=Le({appearance:"light",scale:Y._.gray}),$r=re({appearance:"light",scale:Y._.green,type:"Success"}),Vr=re({appearance:"light",scale:Y._.orange,type:"Warning"}),Yr=re({appearance:"light",scale:Y._.volcano,type:"Error"}),Fe=re({appearance:"light",scale:Y._.geekblue,type:"Info"}),Xr=le(le(le(le(le(le(le({},Gr),gr),$r),Vr),Yr),Fe),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Fe.colorInfoText,colorLinkActive:Fe.colorInfoTextActive,colorLinkHover:Fe.colorInfoTextHover,colorTextLightSolid:gr.colorBgLayout}),Qr=Xr;function mr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),n.push.apply(n,e)}return n}function He(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):mr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var qr=function(t,n){var e=t.primaryColor,s=t.neutralColor,p={},_={},B=Y._[e];B&&(p=re({appearance:"light",scale:B,type:"Primary"}));var L=ur[s];return L&&(_=Le({appearance:"light",scale:L})),He(He(He(He({},n),Qr),p),_)},vr='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',en='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',hr='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',rn="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",nn={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[en,hr,vr].join(","),fontFamilyCode:[rn,hr,vr].join(",")};function yr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),n.push.apply(n,e)}return n}function xr(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):yr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var tn=function(t){var n=t.neutralColor,e=t.appearance,s=t.primaryColor,p=e==="dark";return{algorithm:p?Kr:qr,token:xr(xr({},nn),{},{neutralColor:n,primaryColor:s})}},Se=o(36007),Sr,on=function(r){return(0,u.iv)(Sr||(Sr=(0,i.Z)([`
  .`,`-checkbox-inner:after {
    border-color: `,` !important;
  }

  .`,`-btn {
    box-shadow: none;
  }

  .`,`-btn-primary:not(:disabled) {
    color: `,` !important;

    &:hover {
      color: `,` !important;
    }

    &:active {
      color: `,` !important;
    }
  }

  .`,`-tooltip-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: unset;
    padding: 4px 8px;

    color: `,` !important;

    background-color: `,` !important;
    border-radius: `,`px !important;
  }

  .`,`-tooltip-arrow {
    &::before,
    &::after {
      background: `,` !important;
    }
  }

  .`,`-switch-handle::before {
    background: `,` !important;
  }

  .`,`-image-preview-close,
    .`,"-image-preview-switch-right,.",`-image-preview-switch-left {
    `,`;
    border-radius: `,`px;
    background: `,`;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
  }

  .`,`-popover-inner {
    border: 1px solid `,`;
    box-shadow: `,`;
  }

  ul.`,`-dropdown-menu {
    border: 1px solid `,`;
    border-radius: `,`px !important;
    box-shadow: `,`;
  }

  @media (max-width: 575px) {
    .`,`-tooltip {
      display: none !important;
    }
  }
`])),r.prefixCls,(0,Se.XV)(r.colorPrimary),r.prefixCls,r.prefixCls,(0,Se.XV)(r.colorPrimary),(0,Se.XV)(r.colorPrimary),(0,Se.XV)(r.colorPrimaryActive),r.prefixCls,r.colorBgLayout,r.colorText,r.borderRadiusSM,r.prefixCls,r.colorText,r.prefixCls,r.colorBgContainer,r.prefixCls,r.prefixCls,r.prefixCls,r.stylish.blur,r.borderRadiusLG,(0,Se.m4)(r.colorBgMask,.1),r.prefixCls,r.colorBorderSecondary,r.boxShadowSecondary,r.prefixCls,r.colorBorderSecondary,r.borderRadius,r.boxShadowSecondary,r.prefixCls)},Or,an=function(r){return(0,u.iv)(Or||(Or=(0,i.Z)([`
  html,
  body {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;

    overflow-x: hidden;
    overflow-y: auto;

    margin: 0;
    padding: 0;

    font-family: `,`;
    font-size: `,`px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    line-height: 1;
    color: `,`;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    vertical-align: baseline;

    color-scheme: dark;
    background-color: `,`;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    overflow-x: hidden;
    height: 100dvh;
  }

  #root {
    min-height: 100dvh;
  }

  code {
    font-family: `,` !important;

    span {
      font-family: `,` !important;
    }
  }

  p {
    word-wrap: break-word;
  }

  ::selection {
    color: #000;
    background: `,`;

    -webkit-text-fill-color: unset !important;
  }

  * {
    box-sizing: border-box;
    vertical-align: baseline;
  }

  @media only screen and (min-width: 574px) {
    * {
      ::-webkit-scrollbar {
        cursor: pointer;
        width: 4px;
        height: 4px;
        background-color: transparent;
      }

      ::-webkit-scrollbar-thumb {
        cursor: pointer;
        background-color: transparent;
        border-radius: 2px;
        transition: background-color 500ms `,`;

        &:hover {
          background-color: `,`;
        }
      }

      ::-webkit-scrollbar-corner {
        display: none;
        width: 0;
        height: 0;
      }

      &:hover {
        ::-webkit-scrollbar-thumb {
          background-color: `,`;
        }
      }
    }
  }
`])),r.fontFamily,r.fontSize,r.colorTextBase,r.colorBgLayout,r.fontFamilyCode,r.fontFamilyCode,r.yellow9,r.motionEaseOut,r.colorText,r.colorFill)},sn=(0,u.vJ)(function(r){var t=r.theme;return[an(t),on(t)]}),cn=sn,ue=o(11527),ln=["children","customStylish","customToken","enableWebfonts","webfonts","customTheme"];function Cr(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),n.push.apply(n,e)}return n}function be(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cr(Object(n),!0).forEach(function(e){(0,a.Z)(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):Cr(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var un=(0,c.memo)(function(r){var t=r.children,n=r.customStylish,e=r.customToken,s=r.enableWebfonts,p=s===void 0?!0:s,_=r.webfonts,B=r.customTheme,L=B===void 0?{}:B,X=(0,D.Z)(r,ln),oe=(0,v.nc)(),te=_||[oe({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),oe({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),oe({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),oe({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],ge=(0,c.useCallback)(function($){return be(be({},P($)),n==null?void 0:n($))},[n]),me=(0,c.useCallback)(function($){return be(be({},Ur($)),e==null?void 0:e($))},[e]),de=(0,c.useCallback)(function($){return tn({appearance:$,neutralColor:L.neutralColor,primaryColor:L.primaryColor})},[L.primaryColor,L.neutralColor]);return(0,ue.jsxs)(ue.Fragment,{children:[p&&(te==null?void 0:te.length)>0&&te.map(function($){return(0,ue.jsx)(d,{url:$},$)}),(0,ue.jsx)(u.V9,{speedy:!0,children:(0,ue.jsxs)(u.f6,be(be({customStylish:ge,customToken:me},X),{},{theme:de,children:[(0,ue.jsx)(cn,{}),(0,ue.jsx)(w,{style:{minHeight:"inherit",width:"inherit"},children:t})]}))})]})}),dn=un},79122:function(R,j,o){var a=o(53530),D=o(50959),c=o(11527),M=(0,D.memo)(function(){return(0,c.jsxs)(a.ql,{children:[(0,c.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,c.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,c.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,c.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,c.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,c.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,c.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,c.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,c.jsx)("meta",{content:"#000000",name:"theme-color"})]})});j.Z=M},48098:function(R,j,o){o.d(j,{f:function(){return c}});var a=o(98012),D=o(84105),c=(0,a.Ue)()((0,D.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},3341:function(R){R.exports=function j(o,a){if(o===a)return!0;if(o&&a&&typeof o=="object"&&typeof a=="object"){if(o.constructor!==a.constructor)return!1;var D,c,M;if(Array.isArray(o)){if(D=o.length,D!=a.length)return!1;for(c=D;c--!==0;)if(!j(o[c],a[c]))return!1;return!0}if(o.constructor===RegExp)return o.source===a.source&&o.flags===a.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===a.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===a.toString();if(M=Object.keys(o),D=M.length,D!==Object.keys(a).length)return!1;for(c=D;c--!==0;)if(!Object.prototype.hasOwnProperty.call(a,M[c]))return!1;for(c=D;c--!==0;){var W=M[c];if(!j(o[W],a[W]))return!1}return!0}return o!==o&&a!==a}},2179:function(R,j,o){var a=o(50959),D=o(4322);function c(z,H){return z===H&&(z!==0||1/z===1/H)||z!==z&&H!==H}var M=typeof Object.is=="function"?Object.is:c,W=D.useSyncExternalStore,Q=a.useRef,q=a.useEffect,J=a.useMemo,ne=a.useDebugValue;j.useSyncExternalStoreWithSelector=function(z,H,V,x,l){var C=Q(null);if(C.current===null){var f={hasValue:!1,value:null};C.current=f}else f=C.current;C=J(function(){function u(i){if(!v){if(v=!0,g=i,i=x(i),l!==void 0&&f.hasValue){var k=f.value;if(l(k,i))return m=k}return m=i}if(k=m,M(g,i))return k;var h=x(i);return l!==void 0&&l(k,h)?k:(g=i,m=h)}var v=!1,g,m,d=V===void 0?null:V;return[function(){return u(H())},d===null?void 0:function(){return u(d())}]},[H,V,x,l]);var w=W(z,C[0],C[1]);return q(function(){f.hasValue=!0,f.value=w},[w]),ne(w),w}},7231:function(R,j,o){R.exports=o(2179)},28019:function(R,j){function o(a,D){for(var c=-1,M=a==null?0:a.length,W=Array(M);++c<M;)W[c]=D(a[c],c,a);return W}j.Z=o},51741:function(R,j,o){o.d(j,{Z:function(){return nr}});function a(I,ee,se,tr){var pe=-1,Ze=I==null?0:I.length;for(tr&&Ze&&(se=I[++pe]);++pe<Ze;)se=ee(se,I[pe],pe,I);return se}var D=a;function c(I){return function(ee){return I==null?void 0:I[ee]}}var M=c,W={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Q=M(W),q=Q,J=o(30994),ne=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,z="\\u0300-\\u036f",H="\\ufe20-\\ufe2f",V="\\u20d0-\\u20ff",x=z+H+V,l="["+x+"]",C=RegExp(l,"g");function f(I){return I=(0,J.Z)(I),I&&I.replace(ne,q).replace(C,"")}var w=f,u=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function v(I){return I.match(u)||[]}var g=v,m=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function d(I){return m.test(I)}var i=d,k="\\ud800-\\udfff",h="\\u0300-\\u036f",A="\\ufe20-\\ufe2f",E="\\u20d0-\\u20ff",T=h+A+E,U="\\u2700-\\u27bf",F="a-z\\xdf-\\xf6\\xf8-\\xff",Z="\\xac\\xb1\\xd7\\xf7",N="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",P="\\u2000-\\u206f",S=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",y="A-Z\\xc0-\\xd6\\xd8-\\xde",b="\\ufe0e\\ufe0f",O=Z+N+P+S,G="['\u2019]",ae="["+O+"]",Be="["+T+"]",Oe="\\d+",We="["+U+"]",Ce="["+F+"]",je="[^"+k+O+Oe+U+F+y+"]",Je="\\ud83c[\\udffb-\\udfff]",Ke="(?:"+Be+"|"+Je+")",Ge="[^"+k+"]",we="(?:\\ud83c[\\udde6-\\uddff]){2}",ve="[\\ud800-\\udbff][\\udc00-\\udfff]",ie="["+y+"]",$e="\\u200d",he="(?:"+Ce+"|"+je+")",Ve="(?:"+ie+"|"+je+")",ke="(?:"+G+"(?:d|ll|m|re|s|t|ve))?",Te="(?:"+G+"(?:D|LL|M|RE|S|T|VE))?",Pe=Ke+"?",Ae="["+b+"]?",Ye="(?:"+$e+"(?:"+[Ge,we,ve].join("|")+")"+Ae+Pe+")*",ye="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xe="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Xe=Ae+Pe+Ye,Ee="(?:"+[We,we,ve].join("|")+")"+Xe,Re=RegExp([ie+"?"+Ce+"+"+ke+"(?="+[ae,ie,"$"].join("|")+")",Ve+"+"+Te+"(?="+[ae,ie+he,"$"].join("|")+")",ie+"?"+he+"+"+ke,ie+"+"+Te,xe,ye,Oe,Ee].join("|"),"g");function Ie(I){return I.match(Re)||[]}var Qe=Ie;function _e(I,ee,se){return I=(0,J.Z)(I),ee=se?void 0:ee,ee===void 0?i(I)?Qe(I):g(I):I.match(ee)||[]}var De=_e,qe="['\u2019]",er=RegExp(qe,"g");function rr(I){return function(ee){return D(De(w(ee).replace(er,"")),I,"")}}var nr=rr},30994:function(R,j,o){o.d(j,{Z:function(){return C}});var a=o(66711),D=o(28019),c=o(56052),M=o(33918),W=o(13795),Q="[object Symbol]";function q(f){return typeof f=="symbol"||(0,W.Z)(f)&&(0,M.Z)(f)==Q}var J=q,ne=1/0,z=a.Z?a.Z.prototype:void 0,H=z?z.toString:void 0;function V(f){if(typeof f=="string")return f;if((0,c.Z)(f))return(0,D.Z)(f,V)+"";if(J(f))return H?H.call(f):"";var w=f+"";return w=="0"&&1/f==-ne?"-0":w}var x=V;function l(f){return f==null?"":x(f)}var C=l},98012:function(R,j,o){o.d(j,{Ue:function(){return V}});const a=l=>{let C;const f=new Set,w=(k,h)=>{const A=typeof k=="function"?k(C):k;if(!Object.is(A,C)){const E=C;C=(h!=null?h:typeof A!="object"||A===null)?A:Object.assign({},C,A),f.forEach(T=>T(C,E))}},u=()=>C,d={setState:w,getState:u,getInitialState:()=>i,subscribe:k=>(f.add(k),()=>f.delete(k)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),f.clear()}},i=C=l(w,u,d);return d},D=l=>l?a(l):a;var c=l=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),D(l)),M=o(50959),W=o(7231);const{useDebugValue:Q}=M,{useSyncExternalStoreWithSelector:q}=W;let J=!1;const ne=l=>l;function z(l,C=ne,f){f&&!J&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),J=!0);const w=q(l.subscribe,l.getState,l.getServerState||l.getInitialState,C,f);return Q(w),w}const H=l=>{typeof l!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const C=typeof l=="function"?D(l):l,f=(w,u)=>z(C,w,u);return Object.assign(f,C),f},V=l=>l?H(l):H;var x=l=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),V(l))},84105:function(R,j,o){o.d(j,{mW:function(){return q},tJ:function(){return w}});const a=(u,v)=>(g,m,d)=>(d.dispatch=i=>(g(k=>u(k,i),!1,i),i),d.dispatchFromDevtools=!0,K({dispatch:(...i)=>d.dispatch(...i)},v)),D=null,c=new Map,M=u=>{const v=c.get(u);return v?Object.fromEntries(Object.entries(v.stores).map(([g,m])=>[g,m.getState()])):{}},W=(u,v,g)=>{if(u===void 0)return{type:"untracked",connection:v.connect(g)};const m=c.get(g.name);if(m)return K({type:"tracked",store:u},m);const d={connection:v.connect(g),stores:{}};return c.set(g.name,d),K({type:"tracked",store:u},d)},q=(u,v={})=>(g,m,d)=>{const P=v,{enabled:i,anonymousActionType:k,store:h}=P,A=ar(P,["enabled","anonymousActionType","store"]);let E;try{E=(i!=null?i:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(y){}if(!E)return i&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),u(g,m,d);const S=W(h,E,A),{connection:T}=S,U=ar(S,["connection"]);let F=!0;d.setState=(y,b,O)=>{const G=g(y,b);if(!F)return G;const ae=O===void 0?{type:k||"anonymous"}:typeof O=="string"?{type:O}:O;return h===void 0?(T==null||T.send(ae,m()),G):(T==null||T.send(or(K({},ae),{type:`${h}/${ae.type}`}),or(K({},M(A.name)),{[h]:d.getState()})),G)};const Z=(...y)=>{const b=F;F=!1,g(...y),F=b},N=u(d.setState,m,d);if(U.type==="untracked"?T==null||T.init(N):(U.stores[U.store]=d,T==null||T.init(Object.fromEntries(Object.entries(U.stores).map(([y,b])=>[y,y===U.store?N:b.getState()])))),d.dispatchFromDevtools&&typeof d.dispatch=="function"){let y=!1;const b=d.dispatch;d.dispatch=(...O)=>{O[0].type==="__setState"&&!y&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),y=!0),b(...O)}}return T.subscribe(y=>{var b;switch(y.type){case"ACTION":if(typeof y.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return J(y.payload,O=>{if(O.type==="__setState"){if(h===void 0){Z(O.state);return}Object.keys(O.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const G=O.state[h];if(G==null)return;JSON.stringify(d.getState())!==JSON.stringify(G)&&Z(G);return}d.dispatchFromDevtools&&typeof d.dispatch=="function"&&d.dispatch(O)});case"DISPATCH":switch(y.payload.type){case"RESET":return Z(N),h===void 0?T==null?void 0:T.init(d.getState()):T==null?void 0:T.init(M(A.name));case"COMMIT":if(h===void 0){T==null||T.init(d.getState());return}return T==null?void 0:T.init(M(A.name));case"ROLLBACK":return J(y.state,O=>{if(h===void 0){Z(O),T==null||T.init(d.getState());return}Z(O[h]),T==null||T.init(M(A.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return J(y.state,O=>{if(h===void 0){Z(O);return}JSON.stringify(d.getState())!==JSON.stringify(O[h])&&Z(O[h])});case"IMPORT_STATE":{const{nextLiftedState:O}=y.payload,G=(b=O.computedStates.slice(-1)[0])==null?void 0:b.state;if(!G)return;Z(h===void 0?G:G[h]),T==null||T.send(null,O);return}case"PAUSE_RECORDING":return F=!F}return}}),N},J=(u,v)=>{let g;try{g=JSON.parse(u)}catch(m){console.error("[zustand devtools middleware] Could not parse the received json",m)}g!==void 0&&v(g)},ne=u=>(v,g,m)=>{const d=m.subscribe;return m.subscribe=(k,h,A)=>{let E=k;if(h){const T=(A==null?void 0:A.equalityFn)||Object.is;let U=k(m.getState());E=F=>{const Z=k(F);if(!T(U,Z)){const N=U;h(U=Z,N)}},A!=null&&A.fireImmediately&&h(U,U)}return d(E)},u(v,g,m)},z=null,H=(u,v)=>(...g)=>Object.assign({},u,v(...g));function V(u,v){let g;try{g=u()}catch(d){return}return{getItem:d=>{var i;const k=A=>A===null?null:JSON.parse(A,v==null?void 0:v.reviver),h=(i=g.getItem(d))!=null?i:null;return h instanceof Promise?h.then(k):k(h)},setItem:(d,i)=>g.setItem(d,JSON.stringify(i,v==null?void 0:v.replacer)),removeItem:d=>g.removeItem(d)}}const x=u=>v=>{try{const g=u(v);return g instanceof Promise?g:{then(m){return x(m)(g)},catch(m){return this}}}catch(g){return{then(m){return this},catch(m){return x(m)(g)}}}},l=(u,v)=>(g,m,d)=>{let i=K({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:S=>S,version:0,merge:(S,y)=>K(K({},y),S)},v),k=!1;const h=new Set,A=new Set;let E;try{E=i.getStorage()}catch(S){}if(!E)return u((...S)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),g(...S)},m,d);const T=x(i.serialize),U=()=>{const S=i.partialize(K({},m()));let y;const b=T({state:S,version:i.version}).then(O=>E.setItem(i.name,O)).catch(O=>{y=O});if(y)throw y;return b},F=d.setState;d.setState=(S,y)=>{F(S,y),U()};const Z=u((...S)=>{g(...S),U()},m,d);let N;const P=()=>{var S;if(!E)return;k=!1,h.forEach(b=>b(m()));const y=((S=i.onRehydrateStorage)==null?void 0:S.call(i,m()))||void 0;return x(E.getItem.bind(E))(i.name).then(b=>{if(b)return i.deserialize(b)}).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==i.version){if(i.migrate)return i.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var O;return N=i.merge(b,(O=m())!=null?O:Z),g(N,!0),U()}).then(()=>{y==null||y(N,void 0),k=!0,A.forEach(b=>b(N))}).catch(b=>{y==null||y(void 0,b)})};return d.persist={setOptions:S=>{i=K(K({},i),S),S.getStorage&&(E=S.getStorage())},clearStorage:()=>{E==null||E.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>P(),hasHydrated:()=>k,onHydrate:S=>(h.add(S),()=>{h.delete(S)}),onFinishHydration:S=>(A.add(S),()=>{A.delete(S)})},P(),N||Z},C=(u,v)=>(g,m,d)=>{let i=K({storage:V(()=>localStorage),partialize:P=>P,version:0,merge:(P,S)=>K(K({},S),P)},v),k=!1;const h=new Set,A=new Set;let E=i.storage;if(!E)return u((...P)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),g(...P)},m,d);const T=()=>{const P=i.partialize(K({},m()));return E.setItem(i.name,{state:P,version:i.version})},U=d.setState;d.setState=(P,S)=>{U(P,S),T()};const F=u((...P)=>{g(...P),T()},m,d);d.getInitialState=()=>F;let Z;const N=()=>{var P,S;if(!E)return;k=!1,h.forEach(b=>{var O;return b((O=m())!=null?O:F)});const y=((S=i.onRehydrateStorage)==null?void 0:S.call(i,(P=m())!=null?P:F))||void 0;return x(E.getItem.bind(E))(i.name).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==i.version){if(i.migrate)return i.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var O;return Z=i.merge(b,(O=m())!=null?O:F),g(Z,!0),T()}).then(()=>{y==null||y(Z,void 0),Z=m(),k=!0,A.forEach(b=>b(Z))}).catch(b=>{y==null||y(void 0,b)})};return d.persist={setOptions:P=>{i=K(K({},i),P),P.storage&&(E=P.storage)},clearStorage:()=>{E==null||E.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>N(),hasHydrated:()=>k,onHydrate:P=>(h.add(P),()=>{h.delete(P)}),onFinishHydration:P=>(A.add(P),()=>{A.delete(P)})},i.skipHydration||N(),Z||F},w=(u,v)=>"getStorage"in v||"serialize"in v||"deserialize"in v?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),l(u,v)):C(u,v)}}]);
}());