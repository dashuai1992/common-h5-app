import{o,c as s,w as n,y as c,s as l,n as e,i,d as a,J as t,E as d,a as f,f as u,t as _,K as r,u as p,A as m,L as h,z as y,k as g,l as b,g as k}from"./index-9d557532.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";const v=[{font_class:"arrow-down",unicode:""},{font_class:"arrow-left",unicode:""},{font_class:"arrow-right",unicode:""},{font_class:"arrow-up",unicode:""},{font_class:"auth",unicode:""},{font_class:"auth-filled",unicode:""},{font_class:"back",unicode:""},{font_class:"bars",unicode:""},{font_class:"calendar",unicode:""},{font_class:"calendar-filled",unicode:""},{font_class:"camera",unicode:""},{font_class:"camera-filled",unicode:""},{font_class:"cart",unicode:""},{font_class:"cart-filled",unicode:""},{font_class:"chat",unicode:""},{font_class:"chat-filled",unicode:""},{font_class:"chatboxes",unicode:""},{font_class:"chatboxes-filled",unicode:""},{font_class:"chatbubble",unicode:""},{font_class:"chatbubble-filled",unicode:""},{font_class:"checkbox",unicode:""},{font_class:"checkbox-filled",unicode:""},{font_class:"checkmarkempty",unicode:""},{font_class:"circle",unicode:""},{font_class:"circle-filled",unicode:""},{font_class:"clear",unicode:""},{font_class:"close",unicode:""},{font_class:"closeempty",unicode:""},{font_class:"cloud-download",unicode:""},{font_class:"cloud-download-filled",unicode:""},{font_class:"cloud-upload",unicode:""},{font_class:"cloud-upload-filled",unicode:""},{font_class:"color",unicode:""},{font_class:"color-filled",unicode:""},{font_class:"compose",unicode:""},{font_class:"contact",unicode:""},{font_class:"contact-filled",unicode:""},{font_class:"down",unicode:""},{font_class:"bottom",unicode:""},{font_class:"download",unicode:""},{font_class:"download-filled",unicode:""},{font_class:"email",unicode:""},{font_class:"email-filled",unicode:""},{font_class:"eye",unicode:""},{font_class:"eye-filled",unicode:""},{font_class:"eye-slash",unicode:""},{font_class:"eye-slash-filled",unicode:""},{font_class:"fire",unicode:""},{font_class:"fire-filled",unicode:""},{font_class:"flag",unicode:""},{font_class:"flag-filled",unicode:""},{font_class:"folder-add",unicode:""},{font_class:"folder-add-filled",unicode:""},{font_class:"font",unicode:""},{font_class:"forward",unicode:""},{font_class:"gear",unicode:""},{font_class:"gear-filled",unicode:""},{font_class:"gift",unicode:""},{font_class:"gift-filled",unicode:""},{font_class:"hand-down",unicode:""},{font_class:"hand-down-filled",unicode:""},{font_class:"hand-up",unicode:""},{font_class:"hand-up-filled",unicode:""},{font_class:"headphones",unicode:""},{font_class:"heart",unicode:""},{font_class:"heart-filled",unicode:""},{font_class:"help",unicode:""},{font_class:"help-filled",unicode:""},{font_class:"home",unicode:""},{font_class:"home-filled",unicode:""},{font_class:"image",unicode:""},{font_class:"image-filled",unicode:""},{font_class:"images",unicode:""},{font_class:"images-filled",unicode:""},{font_class:"info",unicode:""},{font_class:"info-filled",unicode:""},{font_class:"left",unicode:""},{font_class:"link",unicode:""},{font_class:"list",unicode:""},{font_class:"location",unicode:""},{font_class:"location-filled",unicode:""},{font_class:"locked",unicode:""},{font_class:"locked-filled",unicode:""},{font_class:"loop",unicode:""},{font_class:"mail-open",unicode:""},{font_class:"mail-open-filled",unicode:""},{font_class:"map",unicode:""},{font_class:"map-filled",unicode:""},{font_class:"map-pin",unicode:""},{font_class:"map-pin-ellipse",unicode:""},{font_class:"medal",unicode:""},{font_class:"medal-filled",unicode:""},{font_class:"mic",unicode:""},{font_class:"mic-filled",unicode:""},{font_class:"micoff",unicode:""},{font_class:"micoff-filled",unicode:""},{font_class:"minus",unicode:""},{font_class:"minus-filled",unicode:""},{font_class:"more",unicode:""},{font_class:"more-filled",unicode:""},{font_class:"navigate",unicode:""},{font_class:"navigate-filled",unicode:""},{font_class:"notification",unicode:""},{font_class:"notification-filled",unicode:""},{font_class:"paperclip",unicode:""},{font_class:"paperplane",unicode:""},{font_class:"paperplane-filled",unicode:""},{font_class:"person",unicode:""},{font_class:"person-filled",unicode:""},{font_class:"personadd",unicode:""},{font_class:"personadd-filled",unicode:""},{font_class:"personadd-filled-copy",unicode:""},{font_class:"phone",unicode:""},{font_class:"phone-filled",unicode:""},{font_class:"plus",unicode:""},{font_class:"plus-filled",unicode:""},{font_class:"plusempty",unicode:""},{font_class:"pulldown",unicode:""},{font_class:"pyq",unicode:""},{font_class:"qq",unicode:""},{font_class:"redo",unicode:""},{font_class:"redo-filled",unicode:""},{font_class:"refresh",unicode:""},{font_class:"refresh-filled",unicode:""},{font_class:"refreshempty",unicode:""},{font_class:"reload",unicode:""},{font_class:"right",unicode:""},{font_class:"scan",unicode:""},{font_class:"search",unicode:""},{font_class:"settings",unicode:""},{font_class:"settings-filled",unicode:""},{font_class:"shop",unicode:""},{font_class:"shop-filled",unicode:""},{font_class:"smallcircle",unicode:""},{font_class:"smallcircle-filled",unicode:""},{font_class:"sound",unicode:""},{font_class:"sound-filled",unicode:""},{font_class:"spinner-cycle",unicode:""},{font_class:"staff",unicode:""},{font_class:"staff-filled",unicode:""},{font_class:"star",unicode:""},{font_class:"star-filled",unicode:""},{font_class:"starhalf",unicode:""},{font_class:"trash",unicode:""},{font_class:"trash-filled",unicode:""},{font_class:"tune",unicode:""},{font_class:"tune-filled",unicode:""},{font_class:"undo",unicode:""},{font_class:"undo-filled",unicode:""},{font_class:"up",unicode:""},{font_class:"top",unicode:""},{font_class:"upload",unicode:""},{font_class:"upload-filled",unicode:""},{font_class:"videocam",unicode:""},{font_class:"videocam-filled",unicode:""},{font_class:"vip",unicode:""},{font_class:"vip-filled",unicode:""},{font_class:"wallet",unicode:""},{font_class:"wallet-filled",unicode:""},{font_class:"weibo",unicode:""},{font_class:"weixin",unicode:""}];const x=w({name:"UniIcons",emits:["click"],props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customPrefix:{type:String,default:""},fontFamily:{type:String,default:""}},data:()=>({icons:v}),computed:{unicode(){let o=this.icons.find((o=>o.font_class===this.type));return o?o.unicode:""},iconSize(){return"number"==typeof(o=this.size)||/^[0-9]*$/g.test(o)?o+"px":o;var o},styleObj(){return""!==this.fontFamily?`color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`:`color: ${this.color}; font-size: ${this.iconSize};`}},methods:{_onClick(){this.$emit("click")}}},[["render",function(a,t,d,f,u,_){const r=i;return o(),s(r,{style:l(_.styleObj),class:e(["uni-icons",["uniui-"+d.type,d.customPrefix,d.customPrefix?d.type:""]]),onClick:_._onClick},{default:n((()=>[c(a.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])}],["__scopeId","data-v-6358c361"]]),z=w(a({__name:"MyNavbar",props:{type:{},title:{}},setup(e){const{safeAreaInsets:a}=t(),w=d(),v=()=>{m({url:"/pages/index/index"})},z=()=>{h()},S=()=>{y({url:"/pages/school/index"})};return(e,t)=>{const d=g(b("uni-icons"),x),m=i,h=k;return o(),s(h,null,{default:n((()=>{var i;return[f(h,{class:"navbar",style:l({paddingTop:(null==(i=r(a))?void 0:i.top)+"px"})},{default:n((()=>["LOCATION"===e.type?(o(),s(h,{key:0,class:"school-location",onClick:S},{default:n((()=>[f(d,{type:"location-filled",size:"25",color:"#717171"}),f(m,null,{default:n((()=>{var o;return[u(_(null==(o=r(w).curSchool)?void 0:o.name),1)]})),_:1})])),_:1})):p("",!0),"TITLE"===e.type?(o(),s(h,{key:1,class:"title-with-operation"},{default:n((()=>[f(h,{class:"left"},{default:n((()=>[f(h,{class:"left-container"},{default:n((()=>[f(d,{onClick:z,type:"left",size:"25",color:"#717171"}),f(m,{class:"splider"},{default:n((()=>[u("|")])),_:1}),f(d,{onClick:v,type:"home",size:"25",color:"#717171"})])),_:1})])),_:1}),f(h,{class:"title"},{default:n((()=>[f(m,null,{default:n((()=>[u(_(e.title),1)])),_:1})])),_:1}),f(h,{class:"right"})])),_:1})):p("",!0)])),_:1},8,["style"]),c(e.$slots,"default",{},void 0,!0)]})),_:3})}}}),[["__scopeId","data-v-b83c1a15"]]);export{z as M,x as _};