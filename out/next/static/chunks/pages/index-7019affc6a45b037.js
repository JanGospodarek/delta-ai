(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9516)}])},9516:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var l=r(5893),a=r(7294);let n=()=>(0,l.jsxs)("h1",{className:"flex gap-0.5 items-end text-3xl justify-center",children:["Delta",(0,l.jsxs)("svg",{width:"40",height:"40",children:[(0,l.jsx)("defs",{children:(0,l.jsxs)("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,l.jsx)("stop",{offset:"0%",stopColor:"#00BFFF"}),(0,l.jsx)("stop",{offset:"100%",stopColor:"#0000FF"})]})}),(0,l.jsx)("text",{x:"0",y:"35",fill:"url(#gradient)",fontSize:"35",fontWeight:"bold",children:"AI"})]})]});var s=r(7428),i=r(6162),o=r(7536),c=r(1354),u=r.n(c);let d=()=>{let e=(e,t)=>{let r=u().AES.encrypt(e,t).toString();localStorage.setItem("deltaAIKey",r)},t=e=>{let t=localStorage.getItem("deltaAIKey");try{let r=u().AES.decrypt(t,e),l=r.toString(u().enc.Utf8);if(!l)throw Error("Invalid API key");console.log("API Key:",l)}catch(e){console.error("Error decrypting API key:",e),alert("Incorrect secret. Please try again.")}};return{encryptAndSave:e,decryptAndRead:t}},f=(e,t)=>!t||e.length>0,p=e=>{let{name:t,control:r,required:l}=e,n=(0,a.useRef)(null),[s,i]=(0,a.useState)(!1),{field:c,fieldState:{invalid:u}}=(0,o.bc)({name:t,control:r,rules:{required:!0,validate:e=>f(e,l)}});return(0,a.useEffect)(()=>{n.current&&n.current.addEventListener("change",e=>{let t=e.target.value,r=f(t,l);i(!r)})},[]),(0,a.useEffect)(()=>{i(u)},[u]),{inputRef:n,field:c,invalid:s}},x=e=>{let{open:t,setOpen:r}=e,[n,s]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{if(t){s(!0);let e=setTimeout(()=>{s(!1);let e=setTimeout(()=>{r(!1)},200);return()=>clearTimeout(e)},2e3);return()=>clearTimeout(e)}},[t,r]),t)?(0,l.jsx)("div",{className:"success-overlay",style:{opacity:n?1:0},children:(0,l.jsx)("p",{className:"text-2xl text-white  font-bold ",children:"Klucz zapisany \uD83D\uDE0E"})}):null},h=e=>"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=".concat(e),m=()=>{let[e,t]=(0,a.useState)(!1),r=async(e,r)=>{t(!0);let l=await fetch(h(null!=r?r:""),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return(t(!1),l.ok)?l.json():null};return{post:r,loading:e}};var y=r(5007),g=r(7626);let j=()=>{let e=(0,y.I0)(),{encryptAndSave:t}=d(),{post:r,loading:n}=m(),[c,u]=(0,a.useState)(!1),[f,h]=(0,a.useState)(!1),{control:j,trigger:v}=(0,o.cI)({defaultValues:{apiKey:"",password:""}}),{field:w,inputRef:S,invalid:E}=p({name:"apiKey",control:j,required:!0}),{field:I,inputRef:N,invalid:b}=p({name:"password",control:j,required:!0}),k=async l=>{l.preventDefault();let a=await v();if(!a)return;let n=await r({contents:[{parts:[{text:"This is a test if everything works!"}]}]},w.value);if(!n){h(!0);return}t(w.value,I.value),e((0,g.L)(w.value)),u(!0),h(!1)};return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("p",{className:"text-sm",children:"Podaj klucz API Gemini"}),(0,l.jsxs)("form",{onSubmit:k,className:"flex flex-col gap-2 items-center mt-3",children:[(0,l.jsx)(s.Y,{label:"Klucz API",...w,ref:S,color:E||f?"danger":"default"}),(0,l.jsx)(s.Y,{label:"Hasło autoryzacyjne",...I,ref:N,color:b?"danger":"default"}),(0,l.jsx)(i.A,{color:"primary",type:"submit",isLoading:n,children:"Zapisz"}),f&&(0,l.jsx)("p",{className:"text-red-600 font-semibold text-center",children:"Napotkaliśmy problem podczas sprawdzania klucza API! Sprawdź czy jest on poprawny!"}),(0,l.jsx)(x,{open:c,setOpen:u})]})]})},v=()=>(0,l.jsx)("div",{className:"mx-7 mt-8",children:(0,l.jsx)(j,{})});function w(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(n,{}),(0,l.jsx)(v,{})]})}},2480:function(){}},function(e){e.O(0,[823,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);