(this["webpackJsonplearn-react-hooks"]=this["webpackJsonplearn-react-hooks"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),a=c.n(s),i=c(22),r=c.n(i),j=(c(31),c(5)),o=c(9),l=c(3),d=c(18),b=c(23);var u=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"Sanjay",children:[Object(n.jsx)("div",{className:"Sanjay-title",children:"Sanjay R. Prajapati"}),Object(n.jsxs)("div",{className:"Sanjay-content",children:[Object(n.jsx)("p",{children:"Front-end web developer at DiOlO"}),Object(n.jsx)("p",{children:"CSE Undergrad @IIITV"}),Object(n.jsx)("p",{children:"HTML5, CSS3, JavaScript, Node.js, ReactJs, MongoDB, Express.js, Sass"})]}),Object(n.jsxs)("div",{className:"Sanjay-social-links",children:[Object(n.jsx)("a",{href:"https://github.com/sanjay270899",target:"_",children:Object(n.jsx)("div",{className:"Sanjay-social-links-items",children:Object(n.jsx)(d.a,{})})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/sanjay270899/",target:"_",children:Object(n.jsx)("div",{className:"Sanjay-social-links-items",children:Object(n.jsx)(d.b,{})})}),Object(n.jsx)("a",{href:"https://www.codechef.com/users/sanjay270899",target:"_",children:Object(n.jsx)("div",{className:"Sanjay-social-links-items",children:Object(n.jsx)(b.a,{})})})]})]})})};c(32);var h=function(){return Object(n.jsx)("div",{className:"Footer",children:"\xa9 learn-react-hooks"})};c(33);var x=function(){var e=Object(s.useState)((function(){return console.log("production"),console.log("".concat(c,"/")),"/learn-react-hooks"})),t=Object(j.a)(e,2),c=t[0];return t[1],Object(n.jsxs)("div",{className:"Header",children:[Object(n.jsx)("div",{className:"Header-l",children:"Learn-React-Hooks"}),Object(n.jsxs)("div",{className:"Header-r",children:[Object(n.jsx)(o.b,{to:"".concat(c,"/references"),children:Object(n.jsx)("div",{className:"Header-r-items",children:"References"})}),Object(n.jsx)(o.b,{to:"".concat(c,"/author"),children:Object(n.jsx)("div",{className:"Header-r-items",children:"Author"})})]})]})};var O=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"https://reactjs.org/docs/hooks-intro.html",target:"_",children:"Introducing Hooks"})}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"https://youtu.be/f687hBjwFcM",target:"_",children:"YT Tutorial"})})]})})};var m=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1];Object(s.useEffect)((function(){console.log("Component is re-rendered.")}));var i=Object(s.useState)(""),r=Object(j.a)(i,2),o=r[0],l=r[1],d=Object(s.useState)(""),b=Object(j.a)(d,2),u=b[0],h=b[1];Object(s.useEffect)((function(){console.log("Re-rendered due to value3.")}),[u]),Object(s.useEffect)((function(){console.log("Empty Dependency Array.")}),[]),Object(s.useEffect)((function(){return console.log("Clean Up useEffect."),function(){console.log("UseEffect.js component is unmounted.")}}),[]);var x=Object(s.useState)((function(){var e=localStorage.getItem("name");return e?JSON.parse(e):""})),O=Object(j.a)(x,2),m=O[0],f=O[1];return Object(s.useEffect)((function(){localStorage.setItem("name",JSON.stringify(m))}),[m]),Object(n.jsxs)("div",{className:"useState-Hook container",children:[Object(n.jsx)("center",{children:Object(n.jsx)("h1",{children:"useEffect Hook"})}),Object(n.jsx)("a",{className:"code-link",href:"https://github.com/sanjay270899/learn-react-hooks/blob/main/src/Hooks/UseEffect/index.js",target:"_",children:"Code Link"}),Object(n.jsx)("i",{children:"Note: Initially every useEffect will be executed once."}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"box-title",children:"Simple useEffect"}),Object(n.jsxs)("div",{className:"box-content",children:[Object(n.jsx)("p",{children:"It will run every time, when the component re-renders."}),Object(n.jsx)("p",{children:"Re-render the component by change the value of value1 in below input box."}),Object(n.jsxs)("p",{children:["Value1: ",Object(n.jsx)("input",{type:"text",name:"value1",value:c,onChange:function(e){return a(e.target.value)}})]})]})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"box-title",children:"useEffect Hook with dependency array"}),Object(n.jsxs)("div",{className:"box-content",children:[Object(n.jsx)("p",{children:"Now if we want that useEffect should not run every time, when the component re-renders,"}),Object(n.jsx)("p",{children:"and only runs when a particular state changes then we can pass depedent state in []."}),Object(n.jsx)("p",{children:"Now console will log only when value3 changes."}),Object(n.jsxs)("p",{children:["Value2: ",Object(n.jsx)("input",{type:"text",name:"value2",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(n.jsxs)("p",{children:["Value3: ",Object(n.jsx)("input",{type:"text",name:"value3",value:u,onChange:function(e){return h(e.target.value)}})]})]})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"box-title",children:"useEffect Hook with empty dependency array"}),Object(n.jsx)("div",{className:"box-content",children:Object(n.jsx)("p",{children:"It will run only once, when the component is rendered first time."})})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"box-title",children:"useEffect Hook with clean up function"}),Object(n.jsxs)("div",{className:"box-content",children:[Object(n.jsx)("p",{children:"If we return a function from useEffect, it will treated as a clean up function."}),Object(n.jsx)("p",{children:"That function will be called when this component is unmouted (closed)."})]})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"box-title",children:"Persist state with useEffect Hook"}),Object(n.jsxs)("div",{className:"box-content",children:[Object(n.jsx)("p",{children:"Value will persist, even after refresh."}),Object(n.jsxs)("p",{children:["Name: ",Object(n.jsx)("input",{type:"text",value:m,onChange:function(e){return f(e.target.value)}})]})]})]})]})},f=c(25),v=c(10),p=c(15);var N=function(){var e=Object(s.useState)(0),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)({count1:0,count2:0}),r=Object(j.a)(i,2),o=r[0],l=r[1],d=Object(s.useState)([1,3,2]),b=Object(j.a)(d,2),u=b[0],h=b[1],x=Object(s.useState)(0),O=Object(j.a)(x,2),m=O[0],N=O[1],g=function(e){var t=Object(s.useState)(e),c=Object(j.a)(t,2),n=c[0],a=c[1];return[n,function(e){a(Object(v.a)(Object(v.a)({},n),{},Object(p.a)({},e.target.name,e.target.value)))}]}({name:"",password:""}),w=Object(j.a)(g,2),S=w[0],y=w[1],k=Object(s.useState)((function(){})),E=Object(j.a)(k,2);return E[0],E[1],Object(n.jsxs)("div",{className:"useState-Hook container",children:[Object(n.jsx)("center",{children:Object(n.jsx)("h1",{children:"useState Hook"})}),Object(n.jsx)("a",{className:"code-link",href:"https://github.com/sanjay270899/learn-react-hooks/blob/main/src/Hooks/UseState/index.js",target:"_",children:"Code Link"}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"box-title",children:"Simple Integer State"}),Object(n.jsxs)("div",{className:"box-content",children:[Object(n.jsx)("button",{onClick:function(){return a((function(e){return e+1}))},children:"+"}),Object(n.jsx)("div",{children:c})]})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"box-title",children:"Object State"}),Object(n.jsxs)("div",{className:"box-content",children:[Object(n.jsx)("button",{onClick:function(){return l((function(e){return Object(v.a)(Object(v.a)({},e),{},{count1:e.count1+1})}))},children:"+"}),"\xa0",Object(n.jsx)("span",{children:o.count1}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:function(){return l((function(e){return Object(v.a)(Object(v.a)({},e),{},{count2:e.count2+1})}))},children:"+"}),"\xa0",Object(n.jsx)("span",{children:o.count2})]})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"box-title",children:"Array State"}),Object(n.jsxs)("div",{className:"box-content",children:[u.map((function(e){return Object(n.jsx)("div",{children:e},Math.random())})),Object(n.jsx)("input",{type:"number",value:m,onChange:function(e){return N(e.target.value)}}),Object(n.jsx)("button",{onClick:function(){h((function(e){return[].concat(Object(f.a)(e),[parseInt(m)])})),N(0)},children:"Add New Number"})]})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"box-title",children:"Custom useState Hook"}),Object(n.jsxs)("div",{className:"box-content",children:["Name: ",Object(n.jsx)("input",{type:"text",name:"name",value:S.name,onChange:y}),Object(n.jsx)("br",{}),"Password: ",Object(n.jsx)("input",{type:"password",name:"password",value:S.password,onChange:y})]})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"box-title",children:"Lazy initital State in useState Hook"}),Object(n.jsxs)("div",{className:"box-content",children:[Object(n.jsx)("p",{children:"The initialState argument is the state used during the initial render. In subsequent renders, it is disregarded."}),Object(n.jsx)("p",{children:"Some time initial state of the useState is calculated with some expensive logic."}),Object(n.jsx)("p",{children:"Now, if we direct call that expensive function, than that expensive function will be called"}),Object(n.jsx)("p",{children:"every time when compenents re-renders."}),Object(n.jsx)("p",{children:"If the initial state is the result of an expensive computation,"}),Object(n.jsx)("p",{children:"you may provide a function instead, which will be executed only on the initial render."}),Object(n.jsx)("p",{children:"And that function will return initial run."})]})]})]})};var g=function(){var e=Object(s.useState)((function(){return console.log("production"),console.log("".concat(c,"/")),"/learn-react-hooks"})),t=Object(j.a)(e,2),c=t[0];return t[1],Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(o.b,{to:"".concat(c,"/"),children:Object(n.jsx)(x,{})}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"".concat(c,"/"),exact:!0,children:Object(n.jsxs)("div",{className:"Routes container",children:[Object(n.jsx)("div",{className:"Routes-title",children:"Topics"}),Object(n.jsx)(o.b,{to:"".concat(c,"/usestate"),children:Object(n.jsx)("div",{className:"Routes-links",children:"useState"})}),Object(n.jsx)(o.b,{to:"".concat(c,"/useeffect"),children:Object(n.jsx)("div",{className:"Routes-links",children:"useEffect"})})]})}),Object(n.jsx)(l.a,{path:"".concat(c,"/usestate"),exact:!0,children:Object(n.jsx)(N,{})}),Object(n.jsx)(l.a,{path:"".concat(c,"/useeffect"),exact:!0,children:Object(n.jsx)(m,{})}),Object(n.jsx)(l.a,{path:"".concat(c,"/references"),exact:!0,children:Object(n.jsx)(O,{})}),Object(n.jsx)(l.a,{path:"".concat(c,"/author"),exact:!0,children:Object(n.jsx)(u,{})})]}),Object(n.jsx)(h,{})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),w()}},[[39,1,2]]]);
//# sourceMappingURL=main.263c8b59.chunk.js.map