import{_ as d,o as n,c as l,b as t,f as s,t as i}from"./index-4046efe6.js";const c={props:["item"],emits:["del-item"]},r={class:"modal-dialog"},b={class:"modal-content border-0"},m=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除指定項目")]),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),_={class:"modal-body text-dark"},p={class:"text-danger"},u={class:"modal-footer"},h=t("button",{type:"button",class:"btn btn-outline-gray","data-bs-dismiss":"modal"}," 取消 ",-1);function g(o,e,a,f,v,x){return n(),l("div",r,[t("div",b,[m,t("div",_,[s(" 確定要刪除"),t("strong",p,i(a.item.title),1),s("嗎？ ")]),t("div",u,[h,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=y=>o.$emit("del-item"))}," 確認刪除 ")])])])}const k=d(c,[["render",g]]);export{k as D};