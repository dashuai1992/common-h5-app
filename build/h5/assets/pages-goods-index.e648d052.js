import{d as e,r as s,o as t,c as a,w as l,a as c,b as i,e as r,F as u,f as n,t as o,h as d,k as p,l as g,i as f,g as _,p as y,q as m,S as v,n as k,s as x,u as b,v as z,x as S,m as h}from"./index-9d557532.js";import{_ as w,M as j}from"./MyNavbar.627c0318.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";const I=C(e({__name:"MyGoodsPicture",setup(e){const k=s(["@/static/images/rust-01-title.jpg","@/static/images/bg3.png"]),x=s(643);return(e,s)=>{const b=m,z=v,S=d,h=p(g("uni-icons"),w),j=f,C=_;return t(),a(C,{class:"goods-picture"},{default:l((()=>[c(C,{class:"goods-picture-container"},{default:l((()=>[c(S,{class:"swiper",circular:"",autoplay:""},{default:l((()=>[(t(!0),i(u,null,r(k.value,((e,s)=>(t(),a(z,{key:s},{default:l((()=>[c(b,{class:"image",onClick:s=>{return t=e,console.log(t),void y({current:t,urls:["@/static/images/rust-01-title.jpg"]});var t},mode:"aspectFill",src:e},null,8,["onClick","src"])])),_:2},1024)))),128))])),_:1}),c(C,{class:"view-times"},{default:l((()=>[c(h,{type:"eye",color:"",size:"18"}),c(j,null,{default:l((()=>[n(o(x.value)+"浏览",1)])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-bad90e55"]]);const T=C({name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes(){const{type:e,disabled:s,inverted:t,circle:a,mark:l,size:c,isTrue:i}=this;return["uni-tag--"+e,"uni-tag--"+c,i(s)?"uni-tag--disabled":"",i(t)?"uni-tag--"+e+"--inverted":"",i(a)?"uni-tag--circle":"",i(l)?"uni-tag--mark":"",i(t)?"uni-tag--inverted uni-tag-text--"+e:"","small"===c?"uni-tag-text--small":""].join(" ")}},methods:{isTrue:e=>!0===e||"true"===e,onClick(){this.isTrue(this.disabled)||this.$emit("click")}}},[["render",function(e,s,c,i,r,u){const d=f;return c.text?(t(),a(d,{key:0,class:k(["uni-tag",u.classes]),style:x(c.customStyle),onClick:u.onClick},{default:l((()=>[n(o(c.text),1)])),_:1},8,["class","style","onClick"])):b("",!0)}],["__scopeId","data-v-4a387905"]]);const M=C({},[["render",function(e,s){const i=m,r=f,u=_,o=p(g("uni-tag"),T);return t(),a(u,{class:"goods-user"},{default:l((()=>[c(u,{class:"left"},{default:l((()=>[c(i,{class:"avatar",src:"/common-h5-app/assets/bg3-032f94c3.png",mode:"aspectFill"}),c(u,{class:"user-info"},{default:l((()=>[c(r,{class:"user-name"},{default:l((()=>[n("乌鸦坐飞机")])),_:1}),c(r,{class:"user-location"},{default:l((()=>[n("龙卷风摧毁停车场")])),_:1})])),_:1})])),_:1}),c(u,{class:"right"},{default:l((()=>[c(o,{class:"tag",circle:"",size:"small",text:"优质卖家",type:"success"}),c(o,{class:"tag",circle:"",size:"small",text:"一般",type:"warning"}),c(o,{class:"tag",circle:"",size:"small",text:"他有好东西",type:"success"}),c(o,{class:"tag",circle:"",size:"small",text:"一般",type:"warning"}),c(o,{class:"tag",circle:"",size:"small",text:"一般",type:"warning"}),c(o,{class:"tag",circle:"",size:"small",text:"中",type:"success"}),c(o,{class:"tag",circle:"",size:"small",text:"垃圾",type:"error"}),c(o,{class:"tag",circle:"",size:"small",text:"他有好东西",type:"success"})])),_:1})])),_:1})}],["__scopeId","data-v-10349319"]]),B=C(e({__name:"MyGoodsDescribe",setup(e){const d=s([{key:"成色",value:"全新"},{key:"商品分类",value:"休闲商品-居家"},{key:"商品位置",value:"北京大学（北校区）"},{key:"交易方式",value:"自提"},{key:"发布时间",value:"2024-04-09 00:53:29"}]);return(e,s)=>{const y=f,m=p(g("uni-icons"),w),v=_;return t(),a(v,{class:"goods-describe"},{default:l((()=>[c(v,{class:"describe-title"},{default:l((()=>[c(y,{class:"title-text"},{default:l((()=>[n(" 南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了 ")])),_:1}),c(v,{class:"goods-share"},{default:l((()=>[c(m,{type:"redo",size:"24"}),c(y,null,{default:l((()=>[n("分享")])),_:1})])),_:1})])),_:1}),c(y,{class:"goods-price"},{default:l((()=>[n("￥200")])),_:1}),c(v,{class:"describe-text"},{default:l((()=>[c(y,null,{default:l((()=>[n(" 南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了。 ")])),_:1})])),_:1}),(t(!0),i(u,null,r(d.value,((e,s)=>(t(),a(v,{class:"goods-property",key:s},{default:l((()=>[c(y,{class:"property-key"},{default:l((()=>[n(o(e.key),1)])),_:2},1024),c(y,{class:"property-value"},{default:l((()=>[n(o(e.value),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-dbf18f54"]]),F=C(e({__name:"index",props:{id:{}},setup(e){const s=e;return z((()=>{S({icon:"none",title:"带过来的查询参数是："+s.id})})),(e,s)=>{const i=p(g("MyNavbar"),j),r=h,u=_;return t(),a(u,{class:"goods-page"},{default:l((()=>[c(i,{type:"TITLE",title:"详情"}),c(r,{"enable-back-to-top":"",class:"scroll-view","scroll-y":""},{default:l((()=>[c(I),c(M),c(B)])),_:1})])),_:1})}}}),[["__scopeId","data-v-0b78b7f6"]]);export{F as default};
