import{S as _}from"./sweetalert2.all-cc361385.js";import{_ as x,o,c as l,b as t,t as s,j as g,F as u,h as y,C as E,H as $,M as k,r as m,i as B,f as D,T as L,d as p,n as P}from"./index-f453f472.js";import{P as V,D as T}from"./DeleteModal-6606eada.js";const A={props:["tempOrder","updateOrder"],data(){return{order:{},isPaid:!1}},watch:{tempOrder(){this.order=this.tempOrder}}},I={class:"modal-dialog modal-xl",role:"document"},S={class:"modal-content border-0"},H=t("div",{class:"modal-header bg-primary text-white"},[t("h5",{class:"modal-title",id:"orderModal"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),R={class:"modal-body"},N={class:"row"},U={class:"col-md-4"},j=t("h3",null,"用戶資料",-1),q={class:"table"},z={key:0},F=t("th",{style:{width:"100px"}},"姓名",-1),G=t("th",null,"Email",-1),J=t("th",null,"電話",-1),K=t("th",null,"地址",-1),Q=t("th",null,"留言",-1),W={class:"col-md-8"},X=t("h3",null,"訂單細節",-1),Y={class:"table"},Z=t("th",{style:{width:"100px"}},"訂單編號",-1),tt=t("th",null,"下單時間",-1),et=t("th",null,"付款時間",-1),st={key:0},ot=t("th",null,"付款狀態",-1),lt={key:0,class:"text-success"},dt={key:1,class:"text-muted"},nt=t("h3",null,"選購商品",-1),it={class:"table"},rt=t("thead",null,[t("tr")],-1),at={class:"text-end"},ct={class:"d-flex justify-content-end"},ht={class:"form-check"},ut={class:"form-check-label",for:"flexCheckDefault"},_t={key:0},mt={key:1},pt={class:"modal-footer"},bt=t("button",{type:"button",class:"btn btn-outline-gray","data-bs-dismiss":"modal"}," 取消 ",-1);function ft(n,d,i,v,e,c){return o(),l("div",I,[t("div",S,[H,t("div",R,[t("div",N,[t("div",U,[j,t("table",q,[e.order.user?(o(),l("tbody",z,[t("tr",null,[F,t("td",null,s(e.order.user.name),1)]),t("tr",null,[G,t("td",null,s(e.order.user.email),1)]),t("tr",null,[J,t("td",null,s(e.order.user.tel),1)]),t("tr",null,[K,t("td",null,s(e.order.user.address),1)]),t("tr",null,[Q,t("td",null,s(e.order.message),1)])])):g("",!0)])]),t("div",W,[X,t("table",Y,[t("tbody",null,[t("tr",null,[Z,t("td",null,s(e.order.id),1)]),t("tr",null,[tt,t("td",null,s(n.$filters.date(e.order.create_at)),1)]),t("tr",null,[et,t("td",null,[e.order.paid_date?(o(),l("span",st,s(n.$filters.date(e.order.paid_date)),1)):g("",!0)])]),t("tr",null,[ot,t("td",null,[e.order.is_paid?(o(),l("strong",lt,"已付款")):(o(),l("span",dt,"未付款"))])])])]),nt,t("table",it,[rt,t("tbody",null,[(o(!0),l(u,null,y(e.order.products,r=>(o(),l("tr",{key:r.id},[t("th",null,s(r.product.title),1),t("td",null,s(r.qty)+" / "+s(r.product.unit),1),t("td",at,s(r.final_total),1)]))),128))])]),t("div",ct,[t("div",ht,[E(t("input",{type:"checkbox",class:"form-check-input",value:"",id:"flexCheckDefault","onUpdate:modelValue":d[0]||(d[0]=r=>e.order.is_paid=r)},null,512),[[$,e.order.is_paid]]),t("label",ut,[e.order.is_paid?(o(),l("span",_t,"已付款")):(o(),l("span",mt,"未付款"))])])])])])]),t("div",pt,[bt,t("button",{type:"button",class:"btn btn-primary",onClick:d[1]||(d[1]=(...r)=>i.updateOrder&&i.updateOrder(...r))}," 修改付款狀態 ")])])])}const gt=x(A,[["render",ft]]),{VITE_BASEURL:b,VITE_APIPATH:f}={VITE_BASEURL:"https://vue3-course-api.hexschool.io",VITE_APIPATH:"hmjbs",BASE_URL:"/pomme/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},yt={components:{PaginationComponent:V,DeleteModal:T,OrderModal:gt},data(){return{orders:[],tempOrder:{},pagination:{},isLoading:!1,deleteModal:null,orderModal:null}},methods:{getOrders(n=1){this.isLoading=!0;const d=`${b}/v2/api/${f}/admin/orders?page=${n}`;this.axios.get(d).then(i=>{this.orders=i.data.orders,this.pagination=i.data.pagination,this.isLoading=!1}).catch(i=>{this.isLoading=!1,console.log(i.response)})},updateOrder(){const n=`${b}/v2/api/${f}/admin/order/${this.tempOrder.id}`;this.axios.put(n,{data:this.tempOrder}).then(d=>{_.fire({iconColor:"#004c34",iconHtml:'<i class="bi bi-check-circle-fill"></i>',text:`${d.data.message}`,showConfirmButton:!1,width:250,timer:1200}),this.orderModal.hide(),this.getOrders()}).catch(d=>{_.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${d.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})},deleteOrder(n){const d=`${b}/v2/api/${f}/admin/order/${n}`;this.axios.delete(d).then(i=>{_.fire({iconColor:"#004c34",iconHtml:'<i class="bi bi-check-circle-fill"></i>',text:`${i.data.message}`,showConfirmButton:!1,width:250,timer:1200}),this.deleteModal.hide(),this.getOrders()}).catch(i=>{_.fire({iconColor:"#992525",iconHtml:'<i class="bi bi-exclamation-triangle-fill"></i>',text:`${i.response.data.message}`,showConfirmButton:!1,width:250,timer:1500})})},openModal(n,d){n==="delete"?(this.tempOrder={...d},this.deleteModal.show()):n==="edit"&&(this.tempOrder={...d},this.orderModal.show())}},mounted(){this.getOrders(),this.deleteModal=new k("#deleteModal"),this.orderModal=new k("#orderModal")}},kt={class:"container p-5"},xt=t("h1",{class:"h2 fw-bold mb-4"},"訂單管理",-1),vt={class:"table table-hover mb-4"},wt=t("thead",{class:"table-dark"},[t("tr",null,[t("th",{width:"120"}," 購買時間 "),t("th",null,"Email"),t("th",{width:"120"}," 購買品項 "),t("th",{width:"120"}," 應付金額 "),t("th",{width:"100"}," 是否付款 "),t("th",{width:"120"}," 編輯 ")])],-1),Mt={class:"list-unstyled"},Ot={key:0,class:"text-success"},Ct={key:1,class:"text-muted"},Et={class:"btn-group"},$t=["onClick"],Bt=["onClick"],Dt={id:"orderModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"},Lt={id:"deleteModal",ref:"deleteModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"};function Pt(n,d,i,v,e,c){const r=m("loading-component"),w=m("pagination-component"),M=m("order-modal"),O=m("delete-modal");return o(),l(u,null,[(o(),B(L,{to:"title"},[D(" | 訂單管理")])),p(r,{active:e.isLoading,"z-index":1060},null,8,["active"]),t("div",kt,[xt,t("table",vt,[wt,t("tbody",null,[(o(!0),l(u,null,y(e.orders,a=>(o(),l(u,{key:a.id},[e.orders.length?(o(),l("tr",{key:0,class:P({"text-secondary":a.is_paid})},[t("td",null,s(n.$filters.date(a.create_at)),1),t("td",null,s(a.user.email),1),t("td",null,[t("ul",Mt,[(o(!0),l(u,null,y(a.products,(h,C)=>(o(),l("li",{key:C},s(h.product.title)+" 數量："+s(h.qty)+" "+s(h.product.unit),1))),128))])]),t("td",null,s(a.total),1),t("td",null,[a.is_paid?(o(),l("span",Ot,"已付款")):(o(),l("span",Ct,"未付款"))]),t("td",null,[t("div",Et,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:h=>c.openModal("edit",a)}," 檢視 ",8,$t),t("button",{type:"button",class:"btn btn-outline-danger btn-sm","data-bs-toggle":"modal","data-bs-target":"#deleteModal",onClick:h=>c.openModal("delete",a)}," 刪除 ",8,Bt)])])],2)):g("",!0)],64))),128))])]),p(w,{onEmitPages:c.getOrders,pages:e.pagination},null,8,["onEmitPages","pages"]),t("div",Dt,[p(M,{"temp-order":e.tempOrder,"update-order":c.updateOrder},null,8,["temp-order","update-order"])],512),t("div",Lt,[p(O,{item:e.tempOrder,onDelItem:c.deleteOrder},null,8,["item","onDelItem"])],512)])],64)}const It=x(yt,[["render",Pt]]);export{It as default};
