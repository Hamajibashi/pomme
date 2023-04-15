import{S as _}from"./sweetalert2.all-243e5160.js";import{_ as k,m as S,a as C,r as f,o as n,c as p,i as T,f as d,T as E,d as o,b as e,F as h,h as j,t as r,w as g,e as B,n as u}from"./index-4f2d9b50.js";import{C as v}from"./CartStore-cd458208.js";const{VITE_BASEURL:U,VITE_APIPATH:A}={VITE_BASEURL:"https://vue3-course-api.hexschool.io",VITE_APIPATH:"hmjbs",BASE_URL:"/pomme/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},L={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{createOrder(){const s=this.form,t=`${U}/v2/api/${A}/order`;this.axios.post(t,{data:s}).then(c=>{_.fire({iconColor:"#004c34",iconHtml:'<i class="bi bi-check-circle-fill"></i>',text:`${c.data.message}`,showConfirmButton:!1,width:250,timer:1200}),this.$refs.form.resetForm(),this.getCart(),this.$router.push(`/checkout/${c.data.orderId}`)}).catch(c=>{_.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${c.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})},...S(v,["getCart"])},computed:{...C(v,["cart","total","final_total","isLoading"])},mounted(){this.getCart()}},N={class:"container-md"},$={class:"py-5"},F=B('<div class="mb-5 d-flex flex-column flex-sm-row text-center justify-content-center align-items-center"><div class="bg-secondary text-light p-3 w-100"><span class="fs-7">Step.1</span><p class="mb-0">訂單建立</p></div><i class="bi bi-arrow-right fs-4 mx-2 d-none d-sm-block"></i><i class="bi bi-arrow-down fs-4 mb-2 d-sm-none"></i><div class="bg-primary text-light p-3 w-100"><span class="fs-7">Step.2</span><p class="mb-0">確認結帳</p></div><i class="bi bi-arrow-right fs-4 mx-2 d-none d-sm-block"></i><i class="bi bi-arrow-down fs-4 mb-2 d-sm-none"></i><div class="bg-primary text-light p-3 w-100"><span class="fs-7">Step.3</span><p class="mb-0">完成訂單</p></div></div>',1),I={class:"row flex-row-reverse justify-content-center"},R={class:"col-lg-5"},q={class:"border p-4 mb-4"},O=e("h4",{class:"fw-bold mb-3"},"訂單明細",-1),P=["src","alt"],D={class:"w-100"},H={class:"d-flex justify-content-between"},z={class:"mb-0 fw-bold"},M={class:"mb-0"},G={class:"mb-0 fs-7"},J={key:0,class:"border-top pt-4"},K={class:"d-flex justify-content-between"},Q=e("p",{class:"mb-0 h4 fw-bold"},"總計",-1),W={class:"mb-0 h4 fw-bold"},X={key:1,class:"border-top pt-4"},Y={class:"d-flex justify-content-end mb-2 text-muted"},Z={class:"mb-0"},ee={class:"d-flex justify-content-between mb-0 fw-bold h4"},se=e("p",{class:"mb-0"},"優惠價",-1),te={class:"mb-0"},oe={class:"col-lg-7"},le={class:"mb-3"},ae=e("label",{for:"name",class:"form-label d-flex align-items-center"},[d("收件人姓名"),e("span",{class:"badge bg-danger ms-2"},"必填")],-1),ie={class:"mb-3"},ne=e("label",{for:"email",class:"form-label d-flex align-items-center"},[d("收件人 Email"),e("span",{class:"badge bg-danger ms-2"},"必填")],-1),re={class:"mb-3"},de=e("label",{for:"tel",class:"form-label d-flex align-items-center"},[d("收件人電話"),e("span",{class:"badge bg-danger ms-2"},"必填")],-1),ce={class:"mb-3"},me=e("label",{for:"address",class:"form-label d-flex align-items-center"},[d("收件人地址"),e("span",{class:"badge bg-danger ms-2"},"必填")],-1),fe={class:"mb-3"},pe=e("label",{for:"message",class:"form-label"},"留言",-1),be={class:"d-flex justify-content-between align-items-center"},ue=e("i",{class:"bi bi-caret-left-fill"},null,-1),_e=["disabled"];function he(s,t,c,ge,a,w){const V=f("loading-component"),m=f("VeeField"),b=f("error-message"),y=f("RouterLink"),x=f("VeeForm");return n(),p(h,null,[(n(),T(E,{to:"title"},[d(" | 建立訂單")])),o(V,{active:s.isLoading,"z-index":1060},null,8,["active"]),e("div",N,[e("div",$,[F,e("div",I,[e("div",R,[e("div",q,[O,(n(!0),p(h,null,j(s.cart,l=>(n(),p("div",{class:"d-flex mb-4",key:l.id},[e("img",{src:l.product.imageUrl,alt:l.product.title,class:"me-2 img-fluid object-cover",style:{width:"48px",height:"48px"}},null,8,P),e("div",D,[e("div",H,[e("p",z,r(l.product.title),1),e("p",M,"NT$ "+r(s.$filters.currency(l.product.price)),1)]),e("p",G,"數量："+r(l.qty),1)])]))),128)),s.total===s.final_total?(n(),p("div",J,[e("div",K,[Q,e("p",W,"NT$ "+r(s.$filters.currency(s.final_total)),1)])])):(n(),p("div",X,[e("div",Y,[e("p",Z,"- NT$ "+r(s.$filters.currency(s.total-s.final_total)),1)]),e("div",ee,[se,e("p",te,"NT$ "+r(s.$filters.currency(s.final_total)),1)])]))])]),e("div",oe,[o(x,{ref:"form",onSubmit:w.createOrder},{default:g(({errors:l})=>[e("div",le,[ae,o(m,{id:"name",name:"姓名",type:"text",class:u(["form-control",{"is-invalid":l.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:a.form.user.name,"onUpdate:modelValue":t[0]||(t[0]=i=>a.form.user.name=i)},null,8,["class","modelValue"]),o(b,{name:"姓名",class:"invalid-feedback"})]),e("div",ie,[ne,o(m,{id:"email",name:"email",type:"email",class:u(["form-control",{"is-invalid":l.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:a.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=i=>a.form.user.email=i)},null,8,["class","modelValue"]),o(b,{name:"email",class:"invalid-feedback"})]),e("div",re,[de,o(m,{id:"tel",name:"電話",type:"tel",class:u(["form-control",{"is-invalid":l.電話}]),placeholder:"請輸入電話",rules:"required|min:8|integer",modelValue:a.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=i=>a.form.user.tel=i)},null,8,["class","modelValue"]),o(b,{name:"電話",class:"invalid-feedback"})]),e("div",ce,[me,o(m,{id:"address",name:"地址",type:"text",class:u(["form-control",{"is-invalid":l.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:a.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=i=>a.form.user.address=i)},null,8,["class","modelValue"]),o(b,{name:"地址",class:"invalid-feedback"})]),e("div",fe,[pe,o(m,{id:"message",name:"留言",class:"form-control",placeholder:"有任何需求歡迎填寫",cols:"30",rows:"8",maxlength:"50",modelValue:a.form.message,"onUpdate:modelValue":t[4]||(t[4]=i=>a.form.message=i),as:"textarea"},null,8,["modelValue"])]),e("div",be,[o(y,{to:"/cart",class:"text-decoration-none"},{default:g(()=>[ue,d(" 回到購物車")]),_:1}),e("button",{type:"submit",class:"btn btn-primary",disabled:s.cart.length===0},"送出訂單",8,_e)])]),_:1},8,["onSubmit"])])])])])],64)}const ye=k(L,[["render",he]]);export{ye as default};
