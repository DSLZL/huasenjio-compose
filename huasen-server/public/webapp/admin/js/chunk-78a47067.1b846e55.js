(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-78a47067"],{"490c":function(a,t,i){"use strict";i("514a")},"514a":function(a,t,i){},afc1:function(a,t,i){"use strict";i.r(t);var e=i("ca7f"),o=i("102f"),s=i("dc92"),l={name:"AccountBlacklist",components:{TableList:e.a,DialogForm:o.a},data:()=>({blacklist:[],tableMap:[{label:"IP地址",key:"ip"}],total:0,searchForm:{ip:""},searchFormMap:[{label:"IP地址",type:"input",key:"ip"}],show:!1,mode:"add",formMap:[{label:"IP地址",key:"ip",type:"input",editDisabled:!0}],rule:{ip:[{validator:Object(s.b)(["isNoEmpty::必填项","isIp::请输入正确IP地址"]),trigger:"blur"}]},form:{ip:""},pageNo:1,pageSize:10}),mounted(){this.queryBlacklist()},methods:{queryBlacklist(){let a=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.findBlacklistByPage(a,{notify:!1}).then(a=>{this.blacklist=a.data.list,this.total=a.data.total,this.cancel()})},updatePagination(a,t){this.pageNo=a,this.pageSize=t},removeBlacklist(a,t,i,e){this.API.removeBlacklist({ip:t.ip}).then(a=>{this.queryBlacklist()})},addBlacklist(){this.show=!0,this.mode="add"},editBlacklist(a,t){this.show=!0,this.mode="edit",this.$nextTick(()=>{this.form=Object.assign(this.form,t)})},paginationChange(a,t){this.queryBlacklist()},save(){"edit"===this.mode||"add"===this.mode&&this.API.addBlacklist(this.form).then(a=>{this.queryBlacklist()})},cancel(){this.$refs.dialogForm&&this.$refs.dialogForm.close(),this.show=!1}}},c=(i("490c"),i("2877")),r=Object(c.a)(l,(function(){var a=this,t=a._self._c;return t("div",{staticClass:"account-blacklist"},[t("TableList",{attrs:{tableData:a.blacklist,tableMap:a.tableMap,formData:a.searchForm,formMap:a.searchFormMap,showAdd:!0,showEdit:!1,total:a.total},on:{"update:formData":function(t){a.searchForm=t},"update:form-data":function(t){a.searchForm=t},edit:a.editBlacklist,add:a.addBlacklist,remove:a.removeBlacklist,search:a.queryBlacklist,paginationChange:a.paginationChange,updatePagination:a.updatePagination}}),a.show?t("DialogForm",{ref:"dialogForm",attrs:{width:"460",title:"add"==a.mode?"添加黑名单":"编辑黑名单",visible:a.show,mode:a.mode,"close-on-click-modal":!1,buttons:{comfirm:"确 认",cancel:"取 消"},formMap:a.formMap,formData:a.form,formRule:a.rule},on:{"update:visible":function(t){a.show=t},"update:formData":function(t){a.form=t},"update:form-data":function(t){a.form=t},comfirmForm:a.save,cancelForm:a.cancel}}):a._e()],1)}),[],!1,null,null,null);t.default=r.exports}}]);