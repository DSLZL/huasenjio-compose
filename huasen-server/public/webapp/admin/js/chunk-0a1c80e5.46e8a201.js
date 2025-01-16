(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0a1c80e5"],{"24a3":function(e,t,a){"use strict";a.r(t);a("14d9");var i={name:"ArticleManage",components:{TableList:a("ca7f").a},data:()=>({articles:[],total:0,tableMap:[{label:"索引值",key:"_id"},{label:"文章标题",key:"title"},{label:"发布者",key:"manageId"},{label:"权限码",key:"code"},{label:"标签",key:"tag"},{label:"是否草稿",key:"isDraft"},{label:"封面链接",key:"bannerImg"},{label:"日期",key:"time"}],searchForm:{manageId:"",title:""},searchFormMap:[{label:"文章标题",type:"input",key:"title"},{label:"发布者",type:"input",key:"manageId"}],pageNo:1,pageSize:10}),created(){this.queryArticle()},methods:{queryArticle(){let e=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.article.findArticleByPage(e,{notify:!1}).then(e=>{this.articles=e.data.list,this.total=e.data.total})},updatePagination(e,t){this.pageNo=e,this.pageSize=t},paginationChange(e,t){this.queryArticle()},editArticle(e,t){this.$router.push({name:"Public",query:{_id:t._id}})},removeArticle(e,t,a,i){this.API.article.removeArticle({_id:t._id}).then(e=>{this.queryArticle()})}}},n=(a("c9e1"),a("2877")),l=Object(n.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"article-manage"},[t("TableList",{attrs:{tableData:e.articles,tableMap:e.tableMap,formData:e.searchForm,formMap:e.searchFormMap,total:e.total},on:{"update:formData":function(t){e.searchForm=t},"update:form-data":function(t){e.searchForm=t},paginationChange:e.paginationChange,updatePagination:e.updatePagination,edit:e.editArticle,remove:e.removeArticle,search:e.queryArticle}})],1)}),[],!1,null,"3f993789",null);t.default=l.exports},"308f":function(e,t,a){},"31d2":function(e,t,a){},bf8b:function(e,t,a){"use strict";a("308f")},c9e1:function(e,t,a){"use strict";a("31d2")},ca7f:function(e,t,a){"use strict";var i={name:"TableList",props:{formData:{type:Object,default:()=>({name:"huasen"})},formMap:{type:Array,default:()=>[{span:6,label:"姓名",type:"input",key:"name"}]},tableMap:{type:Array,default:()=>[{label:"日期",key:"data"}]},tableData:{type:Array,default:()=>[{date:"1979-01-01"}]},total:{type:Number,default:0},showAdd:{type:Boolean,default:!1},showAddMany:{type:Boolean,default:!1},showRemove:{type:Boolean,default:!0},showEdit:{type:Boolean,default:!0},showRelation:{type:Boolean,default:!1},showCopy:{type:Boolean,default:!1},showSelection:{type:Boolean,default:!1}},computed:{showContent(){return 0!==this.tableMap.length},showHeader(){return 0!==this.formMap.length}},data:()=>({pagination:{pageNo:1,pageSize:10},showRemoveMany:!1}),watch:{pagination:{handler(e){this.$emit("updatePagination",e.pageNo,e.pageSize)},deep:!0,immediate:!0}},methods:{handleSelectionChange(){this.showRemoveMany=0!==this.$refs.table.selection.length},handlePlaceHolder:e=>"请输入"+e.label,handlePageSizeChange(e){this.pagination.pageSize=e,this.handleEmit("paginationChange",this.pagination.pageNo,e)},handlePageNoChange(e){this.pagination.pageNo=e,this.handleEmit("paginationChange",e,this.pagination.pageSize)},add(){this.$emit("add")},addMany(){this.$emit("addMany")},remove(e,t){this.handleEmit("remove",e,t,this.pagination.pageNo,this.pagination.pageSize)},removeMany(){let e=this.$refs.table.selection||[];this.handleEmit("removeMany",e)},edit(e,t){this.$emit("edit",e,t)},relation(e,t){this.$emit("relation",e,t)},copy(e,t){this.$emit("copy",e,t)},search(){this.pagination={pageNo:1,pageSize:10},this.handleEmit("search",this.pagination.pageNo,this.pagination.pageSize)},handleEmit(e){this.$nextTick(()=>{let t=[...Array.from(arguments)];t.shift(),this.$emit(e,...t)})},handleCopy(e,t,a,i){this.TOOL.copyTextToClip(a.innerText,"已拷贝单元格内容")}}},n=(a("bf8b"),a("2877")),l=Object(n.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"table-list"},[e.showHeader?t("header",[t("el-form",{ref:"searchForm",attrs:{inline:!0,model:e.formData}},[t("el-row",{attrs:{gutter:10}},[e._l(e.formMap,(function(a,i){return t("el-col",{key:i,attrs:{span:a.span||5}},[t("el-form-item",["input"==a.type?t("el-input",{attrs:{placeholder:e.handlePlaceHolder(a),clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)}},model:{value:e.formData[a.key],callback:function(t){e.$set(e.formData,a.key,t)},expression:"formData[formItem.key]"}}):e._e(),"select"==a.type?t("el-select",{attrs:{placeholder:e.handlePlaceHolder(a)},on:{change:e.search},model:{value:e.formData[a.key],callback:function(t){e.$set(e.formData,a.key,t)},expression:"formData[formItem.key]"}},[t("el-option",{attrs:{label:"全部",value:""}}),e._l(a.selectOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],2):e._e()],1)],1)})),t("el-col",{attrs:{span:8}},[t("el-form-item",[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.search}},[e._v("查询")]),e.showAdd?t("el-button",{attrs:{size:"small",type:"success"},on:{click:e.add}},[e._v("添加")]):e._e(),e.showAddMany?t("el-button",{attrs:{size:"small",type:"info"},on:{click:e.addMany}},[e._v("导入/出")]):e._e(),e.showRemoveMany?t("el-popconfirm",{staticClass:"ml-px-10",attrs:{"popper-class":"delete-popcomfirm",title:"确定删除吗？"},on:{confirm:e.removeMany}},[t("el-button",{attrs:{slot:"reference",size:"small",type:"danger"},slot:"reference"},[e._v("批量删除")])],1):e._e()],1)],1)],2)],1)],1):e._e(),e.showContent?t("main",[t("el-table",{ref:"table",attrs:{data:e.tableData,stripe:!0,border:!0,"highlight-current-row":"",height:"100%"},on:{"selection-change":e.handleSelectionChange,"cell-dblclick":e.handleCopy}},[e.showSelection?t("el-table-column",{attrs:{type:"selection",width:"48"}}):e._e(),t("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),e._l(e.tableMap,(function(a,i){return t("el-table-column",{key:i,attrs:{label:a.label,width:a.width,"show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(i){return["icon"===a.key?[t("div",{staticClass:"w-full h-px-30 flex items-center"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"max-w-full max-h-full",attrs:{src:i.row[a.key]}})])]:t("div",{staticClass:"text"},[e._v(e._s(e._f("emptyTip")(i.row[a.key])))])]}}],null,!0)})})),t("el-table-column",{attrs:{label:"操作",width:240},scopedSlots:e._u([{key:"default",fn:function(a){return[e.showRemove?t("el-popconfirm",{staticClass:"mr-px-10",attrs:{"popper-class":"delete-popcomfirm",title:"确定删除吗？"},on:{confirm:function(t){return e.remove(a.$index,a.row)}}},[t("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1):e._e(),e.showCopy?t("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(t){return e.copy(a.$index,a.row)}}},[e._v("复制")]):e._e(),e.showEdit?t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.edit(a.$index,a.row)}}},[e._v("编辑")]):e._e(),e.showRelation?t("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(t){return e.relation(a.$index,a.row)}}},[e._v("关联")]):e._e()]}}],null,!1,2504982882)})],2)],1):e._e(),e.showContent?t("footer",[t("el-pagination",{staticClass:"flex mt-px-28",attrs:{"current-page":e.pagination.pageNo,background:"","page-sizes":[10,20,50,100],pageSize:e.pagination.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,"popper-class":"page-size-popper"},on:{"size-change":e.handlePageSizeChange,"current-change":e.handlePageNoChange}})],1):e._e()])}),[],!1,null,"0fea8ec7",null);t.a=l.exports}}]);
//# sourceMappingURL=chunk-0a1c80e5.46e8a201.js.map