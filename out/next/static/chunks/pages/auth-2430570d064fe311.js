(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{4661:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return r(929)}])},7038:function(e,t,r){"use strict";var a=r(7536),n=r(7294);let l=(e,t)=>!t||e.length>0,s=e=>{let{name:t,control:r,required:s}=e,i=(0,n.useRef)(null),[u,o]=(0,n.useState)(!1),{field:c,fieldState:{invalid:d}}=(0,a.bc)({name:t,control:r,rules:{required:!0,validate:e=>l(e,s)}});return(0,n.useEffect)(()=>{i.current&&i.current.addEventListener("change",e=>{let t=e.target.value,r=l(t,s);o(!r)})},[]),(0,n.useEffect)(()=>{o(d)},[d]),{inputRef:i,field:c,invalid:u}};t.Z=s},4704:function(e,t,r){"use strict";var a=r(1354),n=r.n(a),l=r(4947);let s=()=>{let e=(e,t)=>{let r=n().AES.encrypt(e,t).toString();localStorage.setItem(l.U,r)},t=e=>{let t=localStorage.getItem(l.U),r=n().AES.decrypt(t,e),a=r.toString(n().enc.Utf8);if(!a)throw Error("Błędne hasło autoryzacyjne");return a};return{encryptAndSave:e,decryptAndRead:t}};t.Z=s},4947:function(e,t,r){"use strict";r.d(t,{U:function(){return a}});let a="deltaAIKey"},929:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var a=r(5893),n=r(7294),l=r(4586),s=r(1163),i=r(7536),u=r(7038),o=r(7057),c=r(2635),d=r(7963),f=(0,r(4831).tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),p=(0,r(5607).Gp)((e,t)=>{let{Component:r,getDividerProps:l}=function(e){var t;let r,a;let{as:l,className:s,orientation:i,...u}=e,o=l||"hr";"hr"===o&&"vertical"===i&&(o="div");let{separatorProps:c}=(t={elementType:"string"==typeof o?o:"hr",orientation:i},a=(0,d.z)(t,{enabled:"string"==typeof t.elementType}),("vertical"===t.orientation&&(r="vertical"),"hr"!==t.elementType)?{separatorProps:{...a,role:"separator","aria-orientation":r}}:{separatorProps:a}),p=(0,n.useMemo)(()=>f({orientation:i,className:s}),[i,s]),m=(0,n.useCallback)((e={})=>({className:p,role:"separator","data-orientation":i,...c,...u,...e}),[p,i,c,u]);return{Component:o,getDividerProps:m}}({...e});return(0,a.jsx)(r,{ref:t,...l()})});p.displayName="NextUI.Divider";var m=r(7626),h=r(5007),v=r(4947);let y=()=>{let e=(0,s.useRouter)(),t=(0,h.I0)(),r=()=>{localStorage.removeItem(v.U),t((0,m.Ll)()),t((0,m.Xn)({title:"Usunięto klucz API",message:"Klucz API został usunięty z pamięci lokalnej",type:"success"})),setTimeout(()=>{e.push("/")},2e3)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c.A,{color:"danger",onPress:r,children:"Usuń klucz"})})};var g=r(4704);let x=()=>{let e=(0,s.useRouter)(),t=(0,h.I0)(),{decryptAndRead:r}=(0,g.Z)(),{control:n,trigger:l}=(0,i.cI)({defaultValues:{password:""}}),{field:d,inputRef:f,invalid:v}=(0,u.Z)({name:"password",control:n,required:!0}),x=async a=>{a.preventDefault();let n=await l();if(n)try{let a=r(d.value);t((0,m.Lb)(a)),t((0,m.Zc)(!0)),e.push("/")}catch(e){t((0,m.Xn)({title:"Błąd autoryzacji",message:e.message,type:"danger"}))}};return(0,a.jsxs)("form",{onSubmit:x,className:"mx-7 flex flex-col items-center gap-3 mt-3",children:[(0,a.jsx)(o.Y,{label:"Hasło autoryzacyjne",...d,ref:f,color:v?"danger":"default",size:"sm"}),(0,a.jsx)(c.A,{color:"primary",type:"submit",children:"Autoryzuj"}),(0,a.jsx)(p,{className:"w-[90%]"}),(0,a.jsx)(y,{})]})},j=()=>{let e=(0,s.useRouter)(),{isAuthorized:t}=(0,l.C)(e=>e.app);return(0,n.useEffect)(()=>{t&&e.push("/")},[]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-xl text-center mt-3",children:"Wykryliśmy klucz API!"}),(0,a.jsx)(x,{})]})};var z=j},2480:function(){}},function(e){e.O(0,[524,774,888,179],function(){return e(e.s=4661)}),_N_E=e.O()}]);