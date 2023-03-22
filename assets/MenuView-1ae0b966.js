import{_,m as h,a as b,r as g,o as i,c as o,i as f,f as c,T as p,d as x,b as e,F as n,h as l,t as s,j as d}from"./index-f453f472.js";import{P as r}from"./ProductsStore-fcf74dfa.js";import"./sweetalert2.all-cc361385.js";const y={methods:{...h(r,["getMenu"])},computed:{...b(r,["meal","coffee","dessert","isLoading","pagination"])},mounted(){this.getMenu()}},u=e("div",{style:{"background-image":"url('https://images.unsplash.com/photo-1574783756547-258b3c720fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",height:"300px","background-size":"cover","background-position":"center center","background-attachment":"fixed"},class:"d-flex align-items-center justify-content-center"},[e("div",{class:"bg-primary p-5 mx-auto","data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"800"},[e("h2",{class:"h3 mb-0 fw-bold text-light text-center"},"美味菜單")])],-1),w={class:"container-md"},v={class:"py-5"},k={class:"row d-flex flex-column flex-sm-row"},j=e("h3",{class:"fw-bold bg-primary text-light py-3 mb-4 w-100"},"餐點",-1),N={class:"card border-0 mb-4 shadow-sm h-100 bg-primary text-light","data-aos":"fade-up"},$=["src","alt"],T={class:"card-body py-4 d-flex justify-content-between align-items-center"},B={class:"w-100"},M={class:"d-flex justify-content-between align-items-center mb-3"},V={class:"mb-0 fw-bold"},D={class:"card-text mb-0 h5"},H={key:0,class:"text-muted"},L={class:"mb-0"},S=e("h3",{class:"fw-bold bg-primary text-light py-3 my-4 w-100"},"飲品",-1),U={class:"card border-0 mb-4 shadow-sm h-100 bg-primary text-light","data-aos":"fade-up"},z=["src","alt"],A={class:"card-body py-4 d-flex justify-content-between align-items-center"},C={class:"w-100"},F={class:"d-flex justify-content-between align-items-center mb-3"},G={class:"mb-0 fw-bold"},P={class:"card-text mb-0 h5"},q={key:0,class:"text-muted"},E={class:"mb-0"},W=e("h3",{class:"fw-bold bg-primary text-light py-3 my-4 w-100"},"甜點",-1),Y={class:"card border-0 mb-4 shadow-sm h-100 bg-primary text-light","data-aos":"fade-up"},I=["src","alt"],J={class:"card-body py-4 d-flex justify-content-between align-items-center"},K={class:"w-100"},O={class:"d-flex justify-content-between align-items-center mb-3"},Q={class:"mb-0 fw-bold"},R={class:"card-text mb-0 h5"},X={key:0,class:"text-muted"},Z={class:"mb-0"};function ee(a,te,se,ie,oe,ae){const m=g("loading-component");return i(),o(n,null,[(i(),f(p,{to:"title"},[c(" | 美味菜單")])),x(m,{active:a.isLoading,"z-index":1060},null,8,["active"]),u,e("div",w,[e("div",v,[e("div",k,[j,(i(!0),o(n,null,l(a.meal,t=>(i(),o("div",{class:"col-md-6 col-lg-4 col-xl-3 mb-2 mb-sm-3",key:t.id},[e("div",N,[e("img",{src:t.imageUrl,class:"card-img-top object-cover",alt:t.title,height:"300"},null,8,$),e("div",T,[e("div",B,[e("div",M,[e("h4",V,s(t.title),1),e("p",D,[c("NT$ "+s(t.price)+" ",1),t.price!==t.origin_price?(i(),o("span",H,[e("del",null,"NT$"+s(t.origin_price),1)])):d("",!0)])]),e("p",L,s(t.content),1)])])])]))),128)),S,(i(!0),o(n,null,l(a.coffee,t=>(i(),o("div",{class:"col-md-6 col-lg-4 col-xl-3 mb-3",key:t.id},[e("div",U,[e("img",{src:t.imageUrl,class:"card-img-top object-cover",alt:t.title,height:"300"},null,8,z),e("div",A,[e("div",C,[e("div",F,[e("h4",G,s(t.title),1),e("p",P,[c("NT$ "+s(t.price)+" ",1),t.price!==t.origin_price?(i(),o("span",q,[e("del",null,"NT$"+s(t.origin_price),1)])):d("",!0)])]),e("p",E,s(t.content),1)])])])]))),128)),W,(i(!0),o(n,null,l(a.dessert,t=>(i(),o("div",{class:"col-md-6 col-lg-4 col-xl-3 mb-3",key:t.id},[e("div",Y,[e("img",{src:t.imageUrl,class:"card-img-top object-cover",alt:t.title,height:"300"},null,8,I),e("div",J,[e("div",K,[e("div",O,[e("h4",Q,s(t.title),1),e("p",R,[c("NT$ "+s(t.price)+" ",1),t.price!==t.origin_price?(i(),o("span",X,[e("del",null,"NT$"+s(t.origin_price),1)])):d("",!0)])]),e("p",Z,s(t.content),1)])])])]))),128))])])])],64)}const de=_(y,[["render",ee]]);export{de as default};
