"use strict";(self.webpackChunk_yuntijs_charts=self.webpackChunk_yuntijs_charts||[]).push([[2433],{2613:function(p,o,e){e.r(o);var d=e(8891),l=e(11527);o.default=function(){return(0,l.jsx)(d.w,{loading:!0,options:{title:"\u6298\u7EBF\u56FE",data:[{year:"1991",value:3},{year:"1992",value:4},{year:"1993",value:3.5},{year:"1994",value:5},{year:"1995",value:4.9},{year:"1996",value:6},{year:"1997",value:7},{year:"1998",value:9},{year:"1999",value:13}],encode:{x:"year",y:"value"}}})}},47362:function(p,o,e){e.r(o);var d=e(8891),l=e(11527);o.default=function(){return(0,l.jsx)(d.w,{loading:!0,options:{title:"\u6298\u7EBF\u56FE222",data:[{year:"1991",value:3},{year:"1992",value:4},{year:"1993",value:3.5},{year:"1994",value:5},{year:"1995",value:4.9},{year:"1996",value:6},{year:"1997",value:7},{year:"1998",value:9},{year:"1999",value:13}],encode:{x:"year",y:"value"}}})}},44730:function(p,o,e){e.r(o);var d=e(41315),l=e(66362),C=e(50333),D=e(36659),n=e(83701),f=e(47623),y=e(81057),r=e(11527),m=[{description:"Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.",icon:D.Z,title:"Themeable"},{description:"voids unnecessary styles props at runtime, making it more performant than other UI libraries.",icon:n.Z,title:"Fast"},{description:"Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.",icon:f.Z,title:"Light & Dark UI"}],x=`import { LineChart } from '@yuntijs/charts'

export default () => (
  <LineChart
    options={{
      data: [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 },
      ],
      encode: { x: "year", y: "value" },
    }} 
  />
)`;o.default=function(){var j=(0,C.Fg)();return(0,r.jsxs)(y.Z,{gap:16,children:[(0,r.jsxs)(y.Z,{children:[(0,r.jsx)("h2",{style:{fontSize:20},children:"\u2601\uFE0F Start building your CloudNative web app now"}),(0,r.jsxs)("div",{style:{color:j.colorTextDescription,textAlign:"center"},children:["The YuntiCharts components are inspired by",(0,r.jsx)("a",{href:"(https://g2.antv.antgroup.com",rel:"noreferrer",target:"_blank",children:"AntV G2"})," ","and developed based on"," ",(0,r.jsx)("a",{href:"https://ant.design/components/overview",rel:"noreferrer",target:"_blank",children:"Antd components"}),", fully compatible with Antd components, ",(0,r.jsx)("br",{}),"and it is recommended to use"," ",(0,r.jsx)("a",{href:"https://ant-design.github.io/antd-style",rel:"noreferrer",target:"_blank",children:"antd-style"})," ","as the default css-in-js styling solution."]})]}),(0,r.jsx)(d.ZP,{language:"tsx",style:{width:"100%"},type:"ghost",children:x}),(0,r.jsx)(l.Z,{items:m})]})}},8891:function(p,o,e){e.d(o,{w:function(){return G}});var d=e(26068),l=e.n(d),C=e(48305),D=e.n(C),n=e(50959),f=e(19665),y=e(56301),r=e(47059),m=e(77191),x=e(93880),j={autoFit:!0},K="#E2E2E2",Z={y:{title:!1,grid:!0,gridLineDash:[3,3],gridStroke:K,gridStrokeOpacity:"1",line:!1,tick:!1},x:{title:!1,grid:!1,line:!0,tick:!0,labelAutoHide:!0,labelAutoRotate:!1}},R=j,S=e(78353),F=function(v){var i=(0,S.r)(),g=i.isDarkMode,c=(0,n.useMemo)(function(){return v||(g?"classicDark":"classic")},[g,v]);return{theme:c}},H=F,P=e(11527),$=(0,n.forwardRef)(function(u,v){var i=u.options,g=u.style,c=u.onInit,A=u.renderer,I=u.loading,V=I===void 0?!1:I,Y=u.libs,U=u.isMergeOptions,J=U===void 0?!0:U,_=u.defaultOptions,s=(0,n.useRef)(null),a=(0,n.useRef)(),Q=H(),E=Q.theme,B=(0,n.useMemo)(function(){var t,h=s==null||(t=s.current)===null||t===void 0||(t=t.parentElement)===null||t===void 0||(t=t.parentElement)===null||t===void 0?void 0:t.parentElement;return{height:(h==null?void 0:h.clientHeight)||(i==null?void 0:i.height),width:(h==null?void 0:h.clientWidth)||(i==null?void 0:i.width)}},[s==null?void 0:s.current]),M=B.width,O=B.height,X=(0,n.useState)(!1),W=D()(X,2),T=W[0],w=W[1];(0,n.useEffect)(function(){if(!(a.current||!s.current)){var t=(0,f.l7)(f.r_,l()(l()({},(0,y.C)()),Y||{}));return a.current=new t({container:s.current,renderer:A,autoFit:!0,theme:E,width:M,height:O}),w(!0),function(){a.current&&(a.current.destroy(),a.current=void 0)}}},[A]),(0,n.useEffect)(function(){T&&(c==null||c(a==null?void 0:a.current))},[T,c]),(0,n.useImperativeHandle)(v,function(){return a.current},[T]);var L=(0,n.useMemo)(function(){var t=(0,m.Z)({},R,_,{theme:E,width:M,height:O});return J?(0,m.Z)(t,i):(0,x.Z)(t,i)},[i,_,R,E,M,O]);return(0,n.useEffect)(function(){a.current&&L&&(a.current.options(L),a.current.render())},[L,E,M,O]),(0,P.jsx)(r.Z,{spinning:V,children:(0,P.jsx)("div",{ref:s,style:g})})}),b=$,z={type:"view",scale:{x:{range:[0,1]},y:{domainMin:0,nice:!0}},axis:Z,children:[{type:"line"}]},N=z,G=function(v){return(0,P.jsx)(b,l()(l()({},v),{},{defaultOptions:N}))},k=null}}]);
