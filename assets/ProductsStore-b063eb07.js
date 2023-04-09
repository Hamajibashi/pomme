import{j as d,k as l}from"./index-4046efe6.js";import{S as c}from"./sweetalert2.all-1c40de96.js";const{VITE_BASEURL:r,VITE_APIPATH:s}={VITE_BASEURL:"https://vue3-course-api.hexschool.io",VITE_APIPATH:"hmjbs",BASE_URL:"/pomme/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},p=d("productStore",{state:()=>({productsData:[],productData:{},mealData:{},coffeeData:{},dessertData:{},page:{},category:"",loading:!1}),actions:{getProducts(t=1,a){this.category="",this.loading=!0;let e=`${r}/v2/api/${s}/products?page=${t}`;a&&(e=`${r}/v2/api/${s}/products?page=${t}&category=${a}`,this.category=a),l.get(e).then(i=>{if(a)this.productsData=i.data.products,this.page=i.data.pagination;else{this.productsData=i.data.products.filter(n=>n.category!=="店內餐點"&&n.category!=="店內飲品"&&n.category!=="店內甜點");let o=i.data.pagination;o.total_pages=2,o.current_page=t,o.has_pre=t>1,o.has_next=t<o.total_pages,this.page=o}this.loading=!1}).catch(i=>{this.loading=!1,c.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${i.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})},getMenu(){this.loading=!0;const t=`${r}/v2/api/${s}/products/all`;l.get(t).then(a=>{this.mealData=a.data.products.filter(e=>e.category==="店內餐點"),this.coffeeData=a.data.products.filter(e=>e.category==="店內飲品"),this.dessertData=a.data.products.filter(e=>e.category==="店內甜點"),this.loading=!1}).catch(a=>{this.loading=!1,c.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${a.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})},getProduct(t){this.loading=!0;const a=`${r}/v2/api/${s}/product/${t}`;l.get(a).then(e=>{this.productData=e.data.product,this.loading=!1}).catch(e=>{this.loading=!1,c.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${e.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})}},getters:{products:({productsData:t})=>t,product:({productData:t})=>t,meal:({mealData:t})=>t,coffee:({coffeeData:t})=>t,dessert:({dessertData:t})=>t,pagination:({page:t})=>t,isLoading:({loading:t})=>t}});export{p as P};
