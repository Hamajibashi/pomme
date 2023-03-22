import{_ as u,m as b,a as h,r as d,o as l,c as n,i as p,f as s,t as a,T as x,d as o,b as t,w as c,F as m,h as g,e as v}from"./index-ef2929e7.js";import{A as _}from"./ArticlesStore-c73fa47b.js";import"./sweetalert2.all-1df281d9.js";const w={methods:{...b(_,["getArticle"])},computed:{...h(_,["article","isLoading"])},mounted(){const{id:e}=this.$route.params;this.getArticle(e)}},y=t("div",{style:{"background-image":"url('https://images.unsplash.com/photo-1506361201900-f4bc8d2e8c2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",height:"300px","background-size":"cover","background-position":"center center","background-attachment":"fixed"},class:"d-flex align-items-center justify-content-center"},[t("div",{class:"bg-primary p-5 mx-auto","data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"800"},[t("h2",{class:"h3 mb-0 fw-bold text-light text-center"},"最新消息")])],-1),k={class:"container-md"},A={class:"py-5"},$={"aria-label":"breadcrumb"},j={class:"breadcrumb"},B={class:"breadcrumb-item"},V={class:"breadcrumb-item"},H={class:"breadcrumb-item fw-bold"},L={class:"d-flex justify-content-center"},M={class:"card bg-transparent border-0 mb-3","data-aos":"fade-up","data-aos-duration":"800"},T={class:"d-flex mb-2"},N={class:"me-2"},S={class:"d-flex"},D={class:"card-header border-0 rounded-0 bg-primary text-light p-3 mb-2"},z={class:"card-title fw-bold mb-0"},C={class:"mb-2"},F=t("i",{class:"bi bi-pencil-fill me-1"},null,-1),G={class:"d-flex flex-column flex-xl-row align-items-center align-items-xl-start"},q=["src","alt"],E={class:"card-body py-0 px-4 px-xl-3 d-flex flex-column justify-content-between h-100"},U=["innerHTML"],W={class:"d-flex justify-content-between border-top pt-2"},Y=t("i",{class:"bi bi-caret-left-fill ms-1"},null,-1),I=v('<ul class="list-unstyled d-flex"><li class="float-hover"><a href="#" class="fs-4 me-3"><i class="bi bi-facebook"></i></a></li><li class="float-hover"><a href="#" class="fs-4"><i class="bi bi-instagram"></i></a></li></ul>',1);function J(e,K,O,P,Q,R){const f=d("loading-component"),i=d("router-link");return l(),n(m,null,[(l(),p(x,{to:"title"},[s(" | "+a(e.article.title),1)])),o(f,{active:e.isLoading,"z-index":1060},null,8,["active"]),y,t("div",k,[t("div",A,[t("nav",$,[t("ol",j,[t("li",B,[o(i,{to:"/",class:"text-decoration-none"},{default:c(()=>[s("首頁")]),_:1})]),t("li",V,[o(i,{to:"/news",class:"text-decoration-none"},{default:c(()=>[s("最新消息")]),_:1})]),t("li",H,[o(i,{to:`/news/${e.id}`,class:"text-decoration-none"},{default:c(()=>[s(a(e.article.title),1)]),_:1},8,["to"])])])]),t("div",L,[t("div",M,[t("div",T,[t("time",N,a(e.$filters.date(e.article.create_at)),1),t("div",S,[(l(!0),n(m,null,g(e.article.tag,r=>(l(),n("span",{class:"badge bg-primary me-1 fs-7",key:r},a(r),1))),128))])]),t("div",D,[t("h3",z,a(e.article.title),1)]),t("p",C,[F,s(a(e.article.author),1)]),t("div",G,[t("img",{src:e.article.imageUrl,class:"card-img-top img-fluid object-cover rounded-0 mb-3 mb-xl-0",alt:e.article.title,style:{"max-width":"600px"}},null,8,q),t("div",E,[t("div",{innerHTML:e.article.content,class:"card-text"},null,8,U),t("div",W,[o(i,{to:"/news",class:"float-hover text-decoration-none text-end pt-2"},{default:c(()=>[Y,s("回到最新消息")]),_:1}),I])])])])])])])],64)}const et=u(w,[["render",J]]);export{et as default};
