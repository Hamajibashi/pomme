import{j as p,k as s}from"./index-2b9cb732.js";import{S as l}from"./sweetalert2.all-27c1d80c.js";const{VITE_BASEURL:r,VITE_APIPATH:i}={VITE_BASEURL:"https://vue3-course-api.hexschool.io",VITE_APIPATH:"hmjbs",BASE_URL:"/pomme/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},D=p("productStore",{state:()=>({productsData:[],productData:{},mealData:{},coffeeData:{},dessertData:{},page:{},category:"",loading:!1}),actions:{getAllProducts(t){this.category="",this.loading=!0;const e=`${r}/v2/api/${i}/products/all`;s.get(e).then(a=>{const o=a.data.products.filter(c=>c.category!=="店內餐點"&&c.category!=="店內飲品"&&c.category!=="店內甜點").reverse(),n=10,d=Math.ceil(o.length/n),g={total_pages:d,current_page:t,has_pre:t>1,has_next:t<d};this.page=g;const u=(t-1)*n,h=u+n;this.productsData=o.slice(u,h),this.loading=!1})},getProducts(t=1,e){this.category=e,this.loading=!0;const a=`${r}/v2/api/${i}/products?page=${t}&category=${e}`;s.get(a).then(o=>{this.productsData=o.data.products,this.page=o.data.pagination,this.loading=!1}).catch(o=>{this.loading=!1,l.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${o.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})},getMenu(){this.loading=!0;const t=`${r}/v2/api/${i}/products/all`;s.get(t).then(e=>{this.mealData=e.data.products.filter(a=>a.category==="店內餐點"),this.coffeeData=e.data.products.filter(a=>a.category==="店內飲品"),this.dessertData=e.data.products.filter(a=>a.category==="店內甜點"),this.loading=!1}).catch(e=>{this.loading=!1,l.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${e.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})},getProduct(t){this.loading=!0;const e=`${r}/v2/api/${i}/product/${t}`;s.get(e).then(a=>{this.productData=a.data.product,this.loading=!1}).catch(a=>{this.loading=!1,l.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${a.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})}},getters:{products:({productsData:t})=>t,product:({productData:t})=>t,meal:({mealData:t})=>t,coffee:({coffeeData:t})=>t,dessert:({dessertData:t})=>t,pagination:({page:t})=>t,isLoading:({loading:t})=>t}});export{D as P};