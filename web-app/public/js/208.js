"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[208],{2449:(t,e,s)=>{s.d(e,{Z:()=>i});var a=s(3645),n=s.n(a)()((function(t){return t[1]}));n.push([t.id,".buttons-group[data-v-2addb9dc]{border:solid #ced4da;border-width:0 0 1px;margin-bottom:15px;padding:7px 7px 15px}.buttons-group button[data-v-2addb9dc]{margin-right:10px}.cursor-pointer[data-v-2addb9dc]{cursor:pointer}.box-padding[data-v-2addb9dc]{padding-left:7px}.wrapper-box[data-v-2addb9dc]{display:flex;flex-wrap:wrap}.element-separate[data-v-2addb9dc],.tag[data-v-2addb9dc]{padding-right:10px}.center[data-v-2addb9dc]{text-align:center}",""]);const i=n},8460:(t,e,s)=>{s.d(e,{Z:()=>i});var a=s(3645),n=s.n(a)()((function(t){return t[1]}));n.push([t.id,".badge[data-v-5f8cb67d]{margin-right:10px}",""]);const i=n},8585:(t,e,s)=>{s.d(e,{Z:()=>i});var a=s(3645),n=s.n(a)()((function(t){return t[1]}));n.push([t.id,".card[data-v-0999438a]{border:2px solid #b7b7b7;border-width:2px 0;margin-bottom:15px}.bottom-underline[data-v-0999438a]{border-bottom:1px solid rgba(0,0,0,.125);font-weight:700;padding-bottom:10px}h4 a[data-v-0999438a]{color:#5f5f60;text-decoration:none}",""]);const i=n},907:(t,e,s)=>{s.d(e,{Z:()=>i});var a=s(3645),n=s.n(a)()((function(t){return t[1]}));n.push([t.id,".tinymce-container[data-v-46492584]{line-height:normal;position:relative}.tinymce-container[data-v-46492584] .mce-fullscreen{z-index:10000}.tinymce-textarea[data-v-46492584]{visibility:hidden;z-index:-1}.editor-custom-btn-container[data-v-46492584]{position:absolute;right:4px;top:4px}.fullscreen .editor-custom-btn-container[data-v-46492584]{position:fixed;z-index:10000}.editor-upload-btn[data-v-46492584]{display:inline-block}",""]);const i=n},7869:(t,e,s)=>{s.d(e,{Z:()=>l});const a={name:"Badges",props:{tags:{type:Array,require:!0,default:[]},path:{type:String,default:"#"}}};var n=s(3379),i=s.n(n),o=s(8460),r={insert:"head",singleton:!1};i()(o.Z,r);o.Z.locals;const l=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",t._l(t.tags,(function(e){return s("router-link",{key:e.id,attrs:{to:t.path+e.link}},[s("span",{staticClass:"badge bg-info text-dark"},[t._v("#"+t._s(e.name))])])})),1)}),[],!1,null,"5f8cb67d",null).exports},2782:(t,e,s)=>{s.d(e,{Z:()=>l});const a={name:"Card",components:{Badges:s(7869).Z},props:{path:{type:String,default:"/post/"},post:{type:Object,require:!0,default:{}},hideLink:{type:Boolean,default:!0}}};var n=s(3379),i=s.n(n),o=s(8585),r={insert:"head",singleton:!1};i()(o.Z,r);o.Z.locals;const l=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title bottom-underline"},[s("router-link",{attrs:{to:t.path+t.post.link}},[t._v(t._s(t.post.title||t.post.name))])],1),t._v(" "),t.post.hashtag?s("badges",{attrs:{tags:t.post.hashtag,path:"post/hashtag/"}}):t._e(),t._v(" "),t.post.text?s("p",{staticClass:"card-text",domProps:{innerHTML:t._s(t.post.text.substr(0,255))}},[t._t("default")],2):t._e(),t._v(" "),t.hideLink?s("p",{staticStyle:{"text-align":"right"}},[s("router-link",{staticClass:"btn-link",attrs:{to:t.path+t.post.link}},[t._v("Читать новость")])],1):t._e(),t._v(" "),s("div",[t._t("buttons")],2)],1)])}),[],!1,null,"0999438a",null).exports},6208:(t,e,s)=>{s.r(e),s.d(e,{default:()=>x});var a=s(2782);const n={name:"Alert",props:{type:{type:String,require:!0,default:"primary"}}};var i=s(1900);const o=(0,i.Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{class:"alert alert-"+t.type,attrs:{role:"alert"}},[t._t("default")],2)])}),[],!1,null,"54bd6ba8",null).exports;const r=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"];const l=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],c={name:"Tinymce",props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:Number,required:!1,default:360}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN"}}},computed:{language:function(){return this.languageTypeList[this.$store.getters.language]}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(e.tinymceId).setContent(t||"")}))},language:function(){var t=this;this.destroyTinymce(),this.$nextTick((function(){return t.initTinymce()}))}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{initTinymce:function(){var t=this,e=this;window.tinymce.init({language:this.language,selector:"#".concat(this.tinymceId),height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:l,menubar:this.menubar,plugins:r,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(s){e.value&&s.setContent(e.value),e.hasInit=!0,s.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",s.getContent())}))},setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach((function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))}))}}};var d=s(3379),h=s.n(d),u=s(907),g={insert:"head",singleton:!1};h()(u.Z,g);u.Z.locals;const v=(0,i.Z)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tinymce-container editor-container",class:{fullscreen:t.fullscreen}},[s("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),s("div",{staticClass:"editor-custom-btn-container"})])}),[],!1,null,"46492584",null).exports;var p=s(5333),m=new p.Z("news"),f=new p.Z("hashtag"),b=new p.Z("news-link/"),_=new p.Z("hashtag-link/");const w={name:"index",components:{Tinymce:v,Alert:o,Card:a.Z},data:function(){return{langs:[{label:"Укр.",lang:"ua"},{label:"Рус.",lang:"ru"}],selectedLang:"ru",hashtags:[],lists:[],selectedHashtags:[],forms:{active:!1,news:!1,hashtag:!1,allNews:!1,allHashtags:!1},query:{limit:20,page:1},news:{id:void 0,title:"",text:"",link:"",id_hashtag:[],lang:""},hashteg:{id:void 0,name:"",link:""},response:{news:{success:!1,error:!1},hashtag:{success:!1,error:!1}},linkNews:!1,linkHashtag:!1}},created:function(){this.getHashtags(),this.getList()},methods:{getList:function(){var t=this;m.list(this.query).then((function(e){200===e.status&&(t.lists=e.data.data.data)})).catch((function(t){}))},getHashtags:function(){var t=this;f.list(this.query).then((function(e){200===e.status&&(t.hashtags=e.data.data.data)})).catch((function(t){console.log(t)}))},deletePost:function(t){var e=this;m.destroy(t).then((function(t){200===t&&e.getList()})).catch((function(t){console.log(t)}))},saveNews:function(){var t=this;void 0===this.news.id?(this.news.lang=this.selectedLang,this.news.id_hashtag=this.selectedHashtags,m.store(this.news).then((function(e){200===e.status&&(t.showStatus("news","success",2e3),t.clearNews(),t.getList())})).catch((function(e){console.log(e),t.showStatus("news","error",2e3)}))):(this.news.lang=this.selectedLang,this.news.id_hashtag=this.selectedHashtags,m.update(this.news.id,this.news).then((function(e){200===e.status&&(t.showStatus("news","success",2e3),t.clearNews(),t.getList())})).catch((function(e){console.log(e),t.showStatus("news","error",2e3)})))},saveHashtag:function(){var t=this;void 0===this.hashteg.id?f.store(this.hashteg).then((function(e){200===e.status&&(t.showStatus("hashtag","success",2e3),t.clearHashtag(),t.getHashtags())})).catch((function(e){console.log(e),t.showStatus("hashtag","error",2e3)})):f.update(this.hashteg.id,this.hashteg).then((function(e){200===e.status&&(t.showStatus("hashtag","success",2e3),t.clearHashtag(),t.getHashtags())})).catch((function(e){console.log(e),t.showStatus("hashtag","error",2e3)}))},hideShow:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.forms.active?this.forms[t]&&(this.forms.active=!1,this.forms[t]=!this.forms[t],e()):(this.forms.active=!0,this.forms[t]=!this.forms[t],e())},clearHashtag:function(){this.hashteg={id:void 0,name:"",link:""}},clearNews:function(){this.news={id:void 0,title:"",text:"",link:"",id_hashtag:[],lang:""}},disabledHashtag:function(t){var e=this.selectedHashtags.includes(t),s=this.selectedHashtags.length;return s>=3&&!e||s<=0&&e},showStatus:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:success,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1700;this.response[t][s]=!0,setTimeout((function(){e.response[t][s]=!1}),a)},editPost:function(t){this.news=t,this.forms.allNews=!1,this.forms.news=!0},editHashtag:function(t){this.hashteg=t,this.forms.allHashtags=!1,this.forms.hashtag=!0},deleteHashtag:function(t){var e=this;f.destroy(t).then((function(t){200===t.status&&e.getHashtags()})).catch((function(t){console.log(t)}))},createNewsLink:function(){this.news.link=this.news.title},uniqueLink:function(t){var e=this;"news"===t&&b.list({link:this.news.link,lang:this.news.lang}).then((function(t){200===t.status&&(e.news.link=t.data.data,e.linkNews=!1)})).catch((function(t){e.linkNews=!0,console.log(t)})),"hashtag"===t&&_.list({link:this.hashteg.link,lang:"ru"}).then((function(t){200===t.status&&(e.hashteg.link=t.data.data,e.linkHashtag=!1)})).catch((function(t){e.linkHashtag=!0,console.log(t)}))}}};var y=s(2449),k={insert:"head",singleton:!1};h()(y.Z,k);y.Z.locals;const C={name:"Dashboard",components:{defaultDashboard:(0,i.Z)(w,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"buttons-group"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.hideShow("news",t.clearNews)}}},[t.forms.news?s("span",[t._v("Закрыть форму")]):s("span",[t._v("Добавить Новость")])]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.hideShow("hashtag",t.clearHashtag)}}},[t.forms.hashtag?s("span",[t._v("Закрыть форму")]):s("span",[t._v("Добавить Хештег")])]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.hideShow("allNews")}}},[t.forms.allNews?s("span",[t._v("Спрятать все Новости")]):s("span",[t._v("Показать все Новости")])]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.hideShow("allHashtags")}}},[t.forms.allHashtags?s("span",[t._v("Спрятать все Хештеги")]):s("span",[t._v("Все Хештеги")])])]),t._v(" "),t.forms.allNews?s("div",[s("br"),t._v(" "),0===t.lists.length?s("div",[s("h5",{staticClass:"center"},[t._v("Новостей нету")])]):s("div",t._l(t.lists,(function(e){return s("card",{key:e.id,attrs:{post:e},scopedSlots:t._u([{key:"buttons",fn:function(){return[s("div",{staticClass:"text-end"},[s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(s){return t.editPost(e)}}},[t._v("Редактировать")]),t._v("  \n                        "),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(s){return t.deletePost(e.id)}}},[t._v("Удалить")])])]},proxy:!0}],null,!0)})})),1)]):t._e(),t._v(" "),t.forms.allHashtags?s("div",[s("br"),t._v(" "),0===t.hashtags.length?s("div",[s("h5",{staticClass:"center"},[t._v("Хештегов нету")])]):s("div",t._l(t.hashtags,(function(e){return s("card",{key:e.id,attrs:{post:e,"hide-link":!1,path:"post/hashtag/"},scopedSlots:t._u([{key:"buttons",fn:function(){return[s("div",{staticClass:"text-end"},[s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(s){return t.editHashtag(e)}}},[t._v("Редактировать")]),t._v("  \n                        "),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(s){return t.deleteHashtag(e.id)}}},[t._v("Удалить")])])]},proxy:!0}],null,!0)})})),1)]):t._e(),t._v(" "),t.forms.news?s("div",[t.response.news.success?s("alert",{attrs:{type:"success"}},[t._v("\n            Хештег был успешно добавлен!\n        ")]):t._e(),t._v(" "),t.response.news.error?s("alert",{attrs:{type:"danger"}},[t._v("\n            Ошибка добавления хештега\n        ")]):t._e(),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"title"}},[t._v("Названия новости:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.news.title,expression:"news.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Названия новости"},domProps:{value:t.news.title},on:{input:[function(e){e.target.composing||t.$set(t.news,"title",e.target.value)},t.createNewsLink],blur:function(e){return t.uniqueLink("news")}}})]),t._v(" "),s("div",{staticClass:"wrapper-box box-padding"},[s("div",{staticClass:"element-separate"},[t._v("Язык:")]),t._v(" "),t._l(t.langs,(function(e){return s("div",{key:e.lang,staticClass:"form-check element-separate"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedLang,expression:"selectedLang"}],staticClass:"form-check-input cursor-pointer",attrs:{type:"radio",name:"lang",id:"lang-"+e.lang},domProps:{value:e.lang,checked:t._q(t.selectedLang,e.lang)},on:{change:function(s){t.selectedLang=e.lang}}}),t._v(" "),s("label",{staticClass:"form-check-label cursor-pointer",attrs:{for:"lang-"+e.lang}},[t._v("\n                    "+t._s(e.label)+"\n                ")])])}))],2),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"text"}},[t._v("Текст новости:")]),t._v(" "),s("tinymce",{attrs:{height:300},model:{value:t.news.text,callback:function(e){t.$set(t.news,"text",e)},expression:"news.text"}})],1),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"link"}},[t._v("Уникальная ссылка:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.news.link,expression:"news.link"}],staticClass:"form-control",attrs:{disabled:"",type:"text",id:"link",placeholder:"Уникальная ссылка на новость"},domProps:{value:t.news.link},on:{input:function(e){e.target.composing||t.$set(t.news,"link",e.target.value)}}}),t._v(" "),this.linkNews?s("span",[s("b",{staticStyle:{color:"red"}},[t._v("Эта ссылка используется замените названия для новости.")])]):t._e()]),t._v(" "),s("div",{staticClass:"mb-3 box-padding"},[s("label",{staticClass:"form-label",attrs:{for:"hashtag"}},[t._v("Выберите хештег:")]),t._v(" "),s("div",{ref:"listHashtags",staticClass:"wrapper-box"},t._l(t.hashtags,(function(e){return s("div",{key:e.id,staticClass:"form-check tag"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedHashtags,expression:"selectedHashtags"}],staticClass:"form-check-input",attrs:{id:e.link,disabled:t.disabledHashtag(e.id),type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.selectedHashtags)?t._i(t.selectedHashtags,e.id)>-1:t.selectedHashtags},on:{change:function(s){var a=t.selectedHashtags,n=s.target,i=!!n.checked;if(Array.isArray(a)){var o=e.id,r=t._i(a,o);n.checked?r<0&&(t.selectedHashtags=a.concat([o])):r>-1&&(t.selectedHashtags=a.slice(0,r).concat(a.slice(r+1)))}else t.selectedHashtags=i}}}),t._v(" "),s("label",{staticClass:"form-check-label cursor-pointer",attrs:{for:e.link}},[t._v("\n                        #"+t._s(e.name)+"\n                    ")])])})),0)]),t._v(" "),s("div",{staticClass:"center"},[s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.saveNews}},[t._v("Сохранить")]),t._v("  \n            "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.hideShow("news")}}},[t._v("Закрыть")])])],1):t._e(),t._v(" "),t.forms.hashtag?s("div",[t.response.hashtag.success?s("alert",{attrs:{type:"success"}},[t._v("\n            Хештег был успешно добавлен!\n        ")]):t._e(),t._v(" "),t.response.hashtag.error?s("alert",{attrs:{type:"danger"}},[t._v("\n            Ошибка добавления хештега\n        ")]):t._e(),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"hashtag-name"}},[t._v("Названия хештега:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.hashteg.name,expression:"hashteg.name"}],ref:"hname",staticClass:"form-control",attrs:{type:"text",id:"hashtag-name",placeholder:"Названия хештега"},domProps:{value:t.hashteg.name},on:{input:function(e){e.target.composing||t.$set(t.hashteg,"name",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback"},[t._v("\n                Please enter a message in the textarea.\n            ")])]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"hashtag-link"}},[t._v("Ссылка хештега:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.hashteg.link,expression:"hashteg.link"}],ref:"hlink",staticClass:"form-control",attrs:{type:"text",id:"hashtag-link",placeholder:"Уникальная ссылка хештега"},domProps:{value:t.hashteg.link},on:{blur:function(e){return t.uniqueLink("hashtag")},input:function(e){e.target.composing||t.$set(t.hashteg,"link",e.target.value)}}}),t._v(" "),this.linkHashtag?s("span",[s("b",{staticStyle:{color:"red"}},[t._v("Эта ссылка используется замените названия для хештега.")])]):t._e()]),t._v(" "),s("div",{staticClass:"center"},[s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.saveHashtag}},[t._v("Сохранить")]),t._v("  \n            "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.hideShow("hashtag",t.clearHashtag)}}},[t._v("Закрыть")])])],1):t._e()])}),[],!1,null,"2addb9dc",null).exports},data:function(){return{currentView:"defaultDashboard"}}};const x=(0,i.Z)(C,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-container"},[s(t.currentView,{tag:"component"})],1)}),[],!1,null,"cd90cd6a",null).exports}}]);