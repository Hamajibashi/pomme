import{k as l,l as i}from"./index-f453f472.js";import{S as r}from"./sweetalert2.all-cc361385.js";const{VITE_BASEURL:s,VITE_APIPATH:o}={VITE_BASEURL:"https://vue3-course-api.hexschool.io",VITE_APIPATH:"hmjbs",BASE_URL:"/pomme/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},g=l("articlesStore",{state:()=>({articlesData:[],articleData:[],page:{},loading:!1}),actions:{getArticles(t=1){this.loading=!0;const e=`${s}/v2/api/${o}/articles?page=${t}`;i.get(e).then(a=>{this.articlesData=a.data.articles,this.page=a.data.pagination,this.loading=!1}).catch(a=>{this.loading=!1,console.log(a.response)})},getArticle(t){this.loading=!0;const e=`${s}/v2/api/${o}/article/${t}`;i.get(e).then(a=>{this.articleData=a.data.article,this.loading=!1}).catch(a=>{this.loading=!1,r.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${a.response.data.message}`,showConfirmButton:!1,width:250,timer:1500}),console.log(a.response)})}},getters:{articles:({articlesData:t})=>t,article:({articleData:t})=>t,pagination:({page:t})=>t,isLoading:({loading:t})=>t}});export{g as A};
