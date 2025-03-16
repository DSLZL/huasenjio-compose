(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-60c67cd7","chunk-578655fd"],{"1d82":function(e,t,a){},"4d67":function(e,t,a){"use strict";a.r(t);var s=a("ca7f"),l=a("102f"),n=a("aaac");const i=new(a("dabc").a),o=i.getElementFormValidator.bind(i);var r={name:"JournalManage",components:{TableList:s.a,DialogForm:l.a,ColumnSelector:n.default},data(){return{total:0,tableData:[],tableMap:[{label:"订阅源名称",key:"name"},{label:"栏目",key:"columnStore"},{label:"拓展字段",key:"expand"},{label:"权限码",key:"code"},{label:"是否可用",key:"enabled"}],searchForm:{name:"",code:""},searchFormMap:[{label:"名称",type:"input",key:"name"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code}],show:!1,showColumnSelector:!1,currentJournal:{},mode:"add",formMap:[{label:"订阅源名称",key:"name",type:"input"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code},{label:"是否可用",key:"enabled",type:"switch"}],rule:{name:[{validator:o(["isNonEmpty::必填项","minLength:2::长度不能小于2","maxLength:20::长度不能大于20"])}],url:[{validator:o(["isNonEmpty::必填项","isUrl::请输入正确的网址"])}],columnStore:[{validator:o(["isJSONArray::请输入JSON数组"])}],expand:[{validator:o(["isJSONObject::请输入JSON对象"])}]},form:{name:"",columnStore:"[]",expand:"{}",enabled:!0,code:0},pageNo:1,pageSize:10}},mounted(){this.queryData()},methods:{queryData(){let e=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.journal.findJournalByPage(e,{notify:!1}).then(e=>{this.tableData=e.data.list,this.total=e.data.total,this.cancel()})},updatePagination(e,t){this.pageNo=e,this.pageSize=t},handleRemove(e,t,a,s){this.API.journal.removeJournal({_id:t._id}).then(e=>{this.queryData()})},handleAdd(){this.show=!0,this.mode="add"},handleEdit(e,t){this.show=!0,this.mode="edit",this.$nextTick(()=>{this.form=Object.assign(this.form,t)})},handleRelation(e,t){this.showColumnSelector=!0,this.currentJournal={...t}},paginationChange(e,t){this.queryData()},save(){"edit"===this.mode?this.API.journal.updateJournal(this.form).then(e=>{this.queryData()}):"add"===this.mode&&(delete this.form._id,delete this.form._v,this.API.journal.addJournal(this.form).then(e=>{this.queryData()}))},cancel(){this.$refs.dialogForm&&this.$refs.dialogForm.close(),this.show=!1},handleJournalSave(){this.showColumnSelector=!1,this.queryData()}}},c=(a("bdf9"),a("2877")),d=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"journal-manage"},[t("TableList",{attrs:{tableData:e.tableData,tableMap:e.tableMap,formData:e.searchForm,formMap:e.searchFormMap,total:e.total,showAdd:!0,showRelation:!0},on:{"update:formData":function(t){e.searchForm=t},"update:form-data":function(t){e.searchForm=t},relation:e.handleRelation,edit:e.handleEdit,add:e.handleAdd,remove:e.handleRemove,search:e.queryData,paginationChange:e.paginationChange,updatePagination:e.updatePagination}}),e.show?t("DialogForm",{ref:"dialogForm",attrs:{width:"460",title:"add"==e.mode?"添加订阅源":"编辑订阅源",visible:e.show,formMap:e.formMap,formData:e.form,formRule:e.rule,mode:e.mode,"close-on-click-modal":!1,buttons:{comfirm:"确 认",cancel:"取 消"}},on:{"update:visible":function(t){e.show=t},"update:formData":function(t){e.form=t},"update:form-data":function(t){e.form=t},comfirmForm:e.save,cancelForm:e.cancel}}):e._e(),e.showColumnSelector?t("ColumnSelector",{attrs:{title:"配置订阅源",size:"500",visible:e.showColumnSelector,wrapperClosable:!1,currentJournal:e.currentJournal},on:{"update:visible":function(t){e.showColumnSelector=t},save:e.handleJournalSave}}):e._e()],1)}),[],!1,null,"3350df51",null);t.default=d.exports},a46f:function(e,t,a){e.exports=a.p+"img/1.df76218f.gif"},aaac:function(e,t,a){"use strict";a.r(t);a("14d9"),a("e9f5"),a("910d"),a("7d54"),a("ab43"),a("a732");var s=a("b76a"),l=a.n(s),n={name:"ColumnSelector",components:{HsDrawer:a("1feb").a,Draggable:l.a},props:{currentJournal:{type:Object,default:()=>{}}},data:()=>({searchText:"",selectColumns:[],selectColumnIndex:[],columns:[],activeCollapseName:""}),computed:{displayColumns(){return this.columns.filter(e=>e.name.toUpperCase().includes(this.searchText.toUpperCase()))}},watch:{selectColumnIndex(){this.handleSelectSite()},columns(){this.handleSelectSite()},currentJournal:{handler(e,t){try{this.selectColumnIndex=Array.isArray(JSON.parse(e.columnStore))?[...JSON.parse(e.columnStore)]:[]}catch(e){this.selectColumnIndex=[]}},deep:!0,immediate:!0}},mounted(){this.queryColumn()},methods:{queryColumn(){this.API.column.findColumnByList({},{notify:!1}).then(e=>{this.columns=e.data})},handleSelectSite(){let e=[];this.selectColumnIndex.forEach(t=>{this.columns.some(a=>{if(a._id===t)return e.push(a),!0})}),this.selectColumns=e},getSelectStatus(e){return this.selectColumnIndex.includes(e._id)},imgUrl:e=>e.icon?e.icon:a("a46f"),selectSite(e){let{_id:t}=e,a=this.selectColumnIndex.indexOf(t);-1===a?this.selectColumnIndex.push(t):this.selectColumnIndex.splice(a,1)},save(){let e=this.selectColumns.map(e=>e._id);this.API.journal.updateJournal({_id:this.currentJournal._id,columnStore:JSON.stringify(e)}).then(e=>{this.$emit("save")})},cancel(){this.$emit("cancel"),this.$emit("update:visible",!1)},remove(e,t){let a=this.selectColumnIndex.indexOf(e._id);-1!==a&&this.selectColumnIndex.splice(a,1)}}},i=(a("dbd7"),a("2877")),o=Object(i.a)(n,(function(){var e=this,t=e._self._c;return t("HsDrawer",e._g(e._b({},"HsDrawer",e.$attrs,!1),e.$listeners),[t("div",{staticClass:"column-selector"},[t("div",{staticClass:"column-selector-main"},[t("div",{staticClass:"selected"},[t("div",{staticClass:"header"},[t("div",{staticClass:"title"},[e._v("已选择")])]),t("ul",{staticClass:"column-list"},[t("Draggable",{attrs:{filter:".no-drap",animation:"400"},model:{value:e.selectColumns,callback:function(t){e.selectColumns=t},expression:"selectColumns"}},[t("transition-group",e._l(e.selectColumns,(function(a,s){return t("li",{key:a._id,staticClass:"column-item drag-item"},[t("i",{staticClass:"el-icon-rank pointer"}),t("div",{staticClass:"name text no-drap"},[e._v(e._s(e._f("emptyTip")(a.name)))]),t("div",{staticClass:"description text no-drap"},[e._v(e._s(e._f("emptyTip")(a.description)))]),t("i",{staticClass:"el-icon-delete pointer remove no-drap",on:{click:function(t){return e.remove(a,s)}}})])})),0)],1)],1)]),t("div",{staticClass:"selecting"},[t("div",{staticClass:"header"},[t("div",{staticClass:"title"},[e._v("待选择")]),t("el-input",{attrs:{placeholder:"请输入栏目名称","suffix-icon":"el-icon-search"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1),t("ul",{staticClass:"column-group"},e._l(e.displayColumns,(function(a){return t("li",{key:a._id,staticClass:"column",on:{click:function(t){return e.selectSite(a)}}},[t("div",{staticClass:"name text",attrs:{title:a.name}},[e._v(e._s(e._f("emptyTip")(a.name)))]),e.getSelectStatus(a)?t("i",{staticClass:"el-icon-success"}):e._e()])})),0)])]),t("div",{staticClass:"column-selector-footer"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.save}},[e._v("确定配置")]),t("el-button",{attrs:{type:"warning",plain:""},on:{click:e.cancel}},[e._v("取消修改")])],1)])])}),[],!1,null,"511fe4ad",null);t.default=o.exports},bdf9:function(e,t,a){"use strict";a("e3a3")},dbd7:function(e,t,a){"use strict";a("1d82")},e3a3:function(e,t,a){}}]);
//# sourceMappingURL=chunk-60c67cd7.1351f12f.js.map