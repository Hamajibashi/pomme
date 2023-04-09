import{_,m as h,a as g,r as b,o as i,c as o,i as f,f as c,T as p,d as x,b as e,F as l,h as n,t as s,g as d}from"./index-4046efe6.js";import{P as r}from"./ProductsStore-b063eb07.js";import"./sweetalert2.all-1c40de96.js";const y={methods:{...h(r,["getMenu"])},computed:{...g(r,["meal","coffee","dessert","isLoading","pagination"])},mounted(){this.getMenu()}},w=e("div",{style:{"background-image":"url('https://images.unsplash.com/photo-1574783756547-258b3c720fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",height:"300px"},class:"d-flex align-items-center justify-content-center bg-setting"},[e("div",{class:"bg-primary p-5 mx-auto","data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"800"},[e("h2",{class:"h3 mb-0 fw-bold text-light text-center"},"美味菜單")])],-1),u={class:"container-md"},v={class:"py-5"},j={class:"row d-flex flex-column flex-sm-row"},k=e("h3",{class:"fw-bold bg-primary text-light py-3 mb-4 w-100"},"餐點",-1),N={class:"card border-0 mb-4 shadow-sm h-100 bg-primary text-light","data-aos":"fade-up"},$=["src","alt"],T={class:"card-body py-4 d-flex justify-content-between align-items-center"},B={class:"w-100"},M={class:"d-flex justify-content-between align-items-center mb-3"},V={class:"mb-0 fw-bold"},D={class:"card-text mb-0 h5"},H={key:0,class:"text-muted"},L={class:"mb-0"},S=e("h3",{class:"fw-bold bg-primary text-light py-3 my-4 w-100"},"飲品",-1),U={class:"card border-0 mb-4 shadow-sm h-100 bg-primary text-light","data-aos":"fade-up"},A=["src","alt"],C={class:"card-body py-4 d-flex justify-content-between align-items-center"},F={class:"w-100"},G={class:"d-flex justify-content-between align-items-center mb-3"},P={class:"mb-0 fw-bold"},q={class:"card-text mb-0 h5"},z={key:0,class:"text-muted"},E={class:"mb-0"},W=e("h3",{class:"fw-bold bg-primary text-light py-3 my-4 w-100"},"甜點",-1),Y={class:"card border-0 mb-4 shadow-sm h-100 bg-primary text-light","data-aos":"fade-up"},I=["src","alt"],J={class:"card-body py-4 d-flex justify-content-between align-items-center"},K={class:"w-100"},O={class:"d-flex justify-content-between align-items-center mb-3"},Q={class:"mb-0 fw-bold"},R={class:"card-text mb-0 h5"},X={key:0,class:"text-muted"},Z={class:"mb-0"};function ee(a,te,se,ie,oe,ae){const m=b("loading-component");return i(),o(l,null,[(i(),f(p,{to:"title"},[c(" | 美味菜單")])),x(m,{active:a.isLoading,"z-index":1060},null,8,["active"]),w,e("div",u,[e("div",v,[e("div",j,[k,(i(!0),o(l,null,n(a.meal,t=>(i(),o("div",{class:"col-md-6 col-lg-4 col-xl-3 mb-2 mb-sm-3",key:t.id},[e("div",N,[e("img",{src:t.imageUrl,class:"card-img-top object-cover",alt:t.title,height:"300"},null,8,$),e("div",T,[e("div",B,[e("div",M,[e("h4",V,s(t.title),1),e("p",D,[c("NT$ "+s(t.price)+" ",1),t.price!==t.origin_price?(i(),o("span",H,[e("del",null,"NT$"+s(t.origin_price),1)])):d("",!0)])]),e("p",L,s(t.content),1)])])])]))),128)),S,(i(!0),o(l,null,n(a.coffee,t=>(i(),o("div",{class:"col-md-6 col-lg-4 col-xl-3 mb-3",key:t.id},[e("div",U,[e("img",{src:t.imageUrl,class:"card-img-top object-cover",alt:t.title,height:"300"},null,8,A),e("div",C,[e("div",F,[e("div",G,[e("h4",P,s(t.title),1),e("p",q,[c("NT$ "+s(t.price)+" ",1),t.price!==t.origin_price?(i(),o("span",z,[e("del",null,"NT$"+s(t.origin_price),1)])):d("",!0)])]),e("p",E,s(t.content),1)])])])]))),128)),W,(i(!0),o(l,null,n(a.dessert,t=>(i(),o("div",{class:"col-md-6 col-lg-4 col-xl-3 mb-3",key:t.id},[e("div",Y,[e("img",{src:t.imageUrl,class:"card-img-top object-cover",alt:t.title,height:"300"},null,8,I),e("div",J,[e("div",K,[e("div",O,[e("h4",Q,s(t.title),1),e("p",R,[c("NT$ "+s(t.price)+" ",1),t.price!==t.origin_price?(i(),o("span",X,[e("del",null,"NT$"+s(t.origin_price),1)])):d("",!0)])]),e("p",Z,s(t.content),1)])])])]))),128))])])])],64)}const de=_(y,[["render",ee]]);export{de as default};
