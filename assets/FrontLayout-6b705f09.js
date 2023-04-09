import{_ as k,C as y,m as w,a as C,r as c,o as r,c as d,b as t,d as e,w as s,n as l,F as S,e as m,f as i,t as h,g as b}from"./index-4046efe6.js";import{S as V}from"./sweetalert2.all-1c40de96.js";import{C as _}from"./CartStore-e84cab98.js";const M={methods:{subscribe(){V.fire({iconColor:"#004c34",iconHtml:'<i class="bi bi-envelope-fill"></i>',title:"訂閱成功",text:"隨時注意我們的新消息！",showConfirmButton:!1,width:300,timer:1800}),this.$refs.vform.resetForm()},hideMenu(){const n=document.getElementById("navbarSupportedContent");new y(n,{toggle:!1}).hide()},...w(_,["getCart"])},computed:{...C(_,["cart"])},mounted(){this.getCart()}},j={class:"navbar navbar-expand-lg navbar-dark bg-primary sticky-top py-3"},F={class:"container-md"},B=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),H={class:"collapse navbar-collapse justify-content-between",id:"navbarSupportedContent"},N={class:"navbar-nav mb-2 mb-lg-0"},$={class:"nav-item"},D={class:"nav-item"},E={class:"nav-item"},P={class:"nav-item"},T={class:"navbar-nav mb-2 mb-lg-0"},q={class:"nav-item"},z=t("i",{class:"bi bi-cart h5"},null,-1),A={key:0,class:"badge rounded-pill bg-danger position-absolute top-0 start-50"},G={key:0},R={style:{"background-image":"url('https://images.unsplash.com/photo-1646346835055-549f7e3ea8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",height:"200px"},class:"bg-setting"},I={class:"container-md"},L={class:"row"},W={class:"col-md-6"},Y={class:"py-5"},J=t("p",{class:"mb-3 fw-bold text-center text-md-start","data-aos":"fade-up","data-aos-duration":"800"}," 訂閱電子報獲取我們的最新消息！",-1),K={class:"input-group w-100"},O=t("button",{class:"btn btn-primary text-light rounded-0",type:"submit"}," 送出 ",-1),Q={class:"bg-primary pt-5 pb-4"},U={class:"container-md"},X={class:"d-flex align-items-center justify-content-center justify-content-sm-between mb-4"},Z={class:"d-none d-sm-inline"},tt={class:"d-flex list-unstyled mb-0 fs-3"},et=m('<li class="float-hover"><a href="#" class="text-white mx-3"><i class="bi bi-facebook"></i></a></li><li class="float-hover"><a href="#" class="text-white mx-3"><i class="bi bi-instagram"></i></a></li><li class="float-hover"><a href="https://github.com/Hamajibashi/pomme" target="_blank" class="text-white mx-3"><i class="bi bi-github"></i></a></li>',3),st={class:"float-hover"},at=t("i",{class:"bi bi-gear"},null,-1),ot={class:"d-sm-none mb-4 d-flex justify-content-center"},lt={class:"d-flex list-unstyled mb-0 fs-1"},it=m('<li class="float-hover"><a href="#" class="mx-3 text-light"><i class="bi bi-facebook"></i></a></li><li class="float-hover"><a href="#" class="mx-3 text-light"><i class="bi bi-instagram"></i></a></li><li class="float-hover"><a href="https://github.com/Hamajibashi/pomme" target="_blank" class="mx-3 text-light"><i class="bi bi-github"></i></a></li>',3),nt={class:"float-hover"},ct=t("i",{class:"bi bi-gear"},null,-1),rt=m('<div class="d-flex justify-content-center justify-content-sm-between text-light"><ul class="list-unstyled"><li class="mb-2"><i class="bi bi-geo-alt-fill me-1"></i> 高雄市鹽埕區公園二路 166 號 </li><li class="mb-2"><a href="tel:+886-7-98765431" class="text-decoration-none text-light"><i class="bi bi-telephone-fill me-1"></i> 07-9876-5431 </a></li><li class="mb-2"><a href="mailto:pommecafe@mail.com" class="text-decoration-none text-light"><i class="bi bi-envelope-fill me-1"></i> pommecafe@mail.com </a></li><li><i class="bi bi-clock-fill me-1"></i> 營業時間：11:00 ~ 20:00（每周三公休） </li></ul></div><div class="text-light text-center"><p class="mb-2">© <span class="logo">Pomme</span></p><p class="mb-0" style="font-size:0.75rem;">本網站僅供個人作品使用，不提供任何商業用途</p></div>',2);function dt(n,u,mt,ht,bt,o){const a=c("router-link"),f=c("RouterView"),p=c("VeeField"),g=c("error-message"),v=c("VeeForm");return r(),d(S,null,[t("nav",j,[t("div",F,[e(a,{class:"logo h1 text-decoration-none text-light me-5",to:"/",onClick:o.hideMenu},{default:s(()=>[i("Pomme")]),_:1},8,["onClick"]),B,t("div",H,[t("ul",N,[t("li",$,[e(a,{to:"/menu",class:l(["nav-link fw-bold",{"text-secondary":this.$route.path==="/menu"}]),onClick:o.hideMenu},{default:s(()=>[i("美味菜單")]),_:1},8,["class","onClick"])]),t("li",D,[e(a,{to:"/products",class:l(["nav-link fw-bold",{"text-secondary":this.$route.path==="/products"}]),onClick:o.hideMenu},{default:s(()=>[i("線上商店")]),_:1},8,["class","onClick"])]),t("li",E,[e(a,{to:"/news",class:l(["nav-link fw-bold",{"text-secondary":this.$route.path==="/news"}]),onClick:o.hideMenu},{default:s(()=>[i("最新消息")]),_:1},8,["class","onClick"])]),t("li",P,[e(a,{to:"/access",class:l(["nav-link fw-bold",{"text-secondary":this.$route.path==="/access"}]),onClick:o.hideMenu},{default:s(()=>[i("交通方式")]),_:1},8,["class","onClick"])])]),t("ul",T,[t("li",q,[e(a,{to:"/cart",class:l(["nav-link position-relative d-none d-lg-block",{"text-secondary":this.$route.path==="/cart"}])},{default:s(()=>[z,n.cart.length?(r(),d("span",A,h(n.cart.length),1)):b("",!0)]),_:1},8,["class"]),e(a,{to:"/cart",class:l(["nav-link fw-bold d-lg-none",{"text-secondary":this.$route.path==="/cart"}]),onClick:o.hideMenu},{default:s(()=>[i(" 購物車 "),n.cart.length?(r(),d("span",G,"("+h(n.cart.length)+")",1)):b("",!0)]),_:1},8,["class","onClick"])])])])])]),e(f),t("footer",null,[t("div",R,[t("div",I,[t("div",L,[t("div",W,[t("div",Y,[J,e(v,{ref:"vform",class:"w-md-50 mt-md-0 mt-3",onSubmit:o.subscribe,"data-aos":"fade-up","data-aos-duration":"800"},{default:s(({errors:x})=>[t("div",K,[e(p,{id:"email",name:"email",type:"email",class:l(["form-control rounded-0",{"is-invalid":x.email}]),placeholder:"請輸入 Email",rules:"email|required"},null,8,["class"]),O,e(g,{name:"email",class:"invalid-feedback"})])]),_:1},8,["onSubmit"])])])])])]),t("div",Q,[t("div",U,[t("div",X,[e(a,{class:"text-light h2 logo text-decoration-none mb-0",to:"/"},{default:s(()=>[i("Pomme")]),_:1}),t("div",Z,[t("ul",tt,[et,t("li",st,[e(a,{class:"text-white ms-3",to:"/login",target:"_blank"},{default:s(()=>[at]),_:1})])])])]),t("div",ot,[t("ul",lt,[it,t("li",nt,[e(a,{class:"ms-3 text-light",to:"/login",target:"_blank"},{default:s(()=>[ct]),_:1})])])]),rt])])])],64)}const pt=k(M,[["render",dt]]);export{pt as default};