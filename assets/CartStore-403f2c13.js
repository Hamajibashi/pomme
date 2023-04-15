import{j as n,k as s}from"./index-2b9cb732.js";import{S as a}from"./sweetalert2.all-27c1d80c.js";const{VITE_BASEURL:l,VITE_APIPATH:c}={VITE_BASEURL:"https://vue3-course-api.hexschool.io",VITE_APIPATH:"hmjbs",BASE_URL:"/pomme/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},f=n("cart",{state:()=>({cartsData:[],totalData:0,finalTotalData:0,loadingItem:"",loading:!1}),actions:{getCart(){this.loading=!0;const t=`${l}/v2/api/${c}/cart`;s.get(t).then(i=>{this.cartsData=i.data.data.carts,this.totalData=i.data.data.total,this.finalTotalData=i.data.data.final_total,this.loading=!1}).catch(i=>{this.loading=!1,a.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${i.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})},addToCart(t,i=1){const o={product_id:t,qty:i};this.loadingItem=t;const e=`${l}/v2/api/${c}/cart`;s.post(e,{data:o}).then(r=>{this.loadingItem="",this.getCart(),a.fire({iconColor:"#004c34",iconHtml:'<i class="bi bi-cart-check-fill"></i>',text:`${r.data.message}`,showConfirmButton:!1,width:250,timer:1200})}).catch(r=>{a.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${r.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})},updateItem(t){const i={product_id:t.id,qty:t.qty};this.loadingItem=t.id;const o=`${l}/v2/api/${c}/cart/${t.id}`;s.put(o,{data:i}).then(e=>{this.getCart(),a.fire({iconColor:"#004c34",iconHtml:'<i class="bi bi-cart-check-fill"></i>',text:`${e.data.message}`,showConfirmButton:!1,width:250,timer:1200}),this.loadingItem=""}).catch(e=>{a.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${e.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})},removeItem(t){this.loadingItem=t;const i=`${l}/v2/api/${c}/cart/${t}`;s.delete(i).then(o=>{this.getCart(),a.fire({iconColor:"#004c34",iconHtml:'<i class="bi bi-check-circle-fill"></i>',text:`${o.data.message}`,showConfirmButton:!1,width:250,timer:1200}),this.loadingItem=""}).catch(o=>{a.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${o.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})},removeAll(){const t=`${l}/v2/api/${c}/carts`;s.delete(t).then(()=>{this.getCart(),a.fire({iconColor:"#004c34",iconHtml:'<i class="bi bi-check-circle-fill"></i>',text:"購物車已清空",showConfirmButton:!1,width:250,timer:1200})}).catch(i=>{a.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${i.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})},useCoupon(t){const i=`${l}/v2/api/${c}/coupon`,o={code:t};s.post(i,{data:o}).then(e=>{this.finalTotalData=e.data.data.final_total,a.fire({iconColor:"#004c34",iconHtml:'<i class="bi bi-check-circle-fill"></i>',text:"已套用優惠券！",showConfirmButton:!1,width:250,timer:1200}),this.getCart()}).catch(e=>{a.fire({iconColor:"#004c34",iconHtml:'<i class="bi bi-check-circle-fill"></i>',text:`${e.response.data.message}`,showConfirmButton:!1,width:250,timer:1200})})}},getters:{cart:({cartsData:t})=>t,total:({totalData:t})=>t,final_total:({finalTotalData:t})=>t,isLoading:({loading:t})=>t}});export{f as C};