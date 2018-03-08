"use strict";

define(["jquery", "vue", "daterangepicker", "moment"], function ($, Vue) {
	/*
  
  *params: create是新建基础信息的标识，可以通过他控制新建信息的切换
  * fn:back 用来返回新建模板的上一步；
  * 参数：tag tag接收的参数是要显示模板步骤的模块
  * fn: publicGame 新建模板创建比赛按钮
  * fn: saveAndPublic 新建模板创建并保存模板
  * fn: close 关闭模态框
  * fn:createTmpl 新建系统模板点击下一步
  * fn:basicInfo  新建系统模板基础信息点击下一步
  * fn:selectTmpl 选择系统模板还是本地模板
  * fn:regulations 查看赛事详情
  * fn:mrjlMethod 默认奖励添加删除
  * fn:addRanking 添加名次
  * 
  * 
  * 
  * 
  * 
  * */

	Vue.filter("formatNum", function () {});

	var vm = new Vue({
		el: "#app",
		data: {
			create: "award-info", //新建比赛模态框选项切换
			baseInfo: {
				peopleNum: null,
				type: 0,
				competition: 0,
				agenda: 0
			},
			tmplType: "sysTmpl", //新建比赛系统模板和本地模板切换
			rt: "tmpl", //赛事详情模态框信息切换
			awardType: 0, //奖励信息默认下拉选项
			awardTmpl: 0, //奖励模板
			mrjl: [{ idx: 1, type: 0, num: null }, { idx: 2, type: 0, num: null }, { idx: 3, type: 0, num: null }] //初始默认奖励数组
		},
		methods: {
			back: function back(tag) {
				this.create = tag;
			},
			publicGame: function publicGame() {
				console.log("发布比赛");
			},
			saveAndPublic: function saveAndPublic() {
				console.log("保存并发布比赛");
			},
			close: function close(tag) {
				$("#" + tag).modal("hide");
			},
			createTmpl: function createTmpl(tag) {
				var peopleNum = this.baseInfo.peopleNum;

				if (peopleNum >= 9) {
					this.create = tag;
				} else {
					this.create = tag;
				}
			},
			basicInfo: function basicInfo(tag) {
				this.create = tag;
			},
			selectTmpl: function selectTmpl(tag) {
				this.tmplType = tag;
			},
			regulations: function regulations() {

				$("#regulations").modal("show");
			},
			rTab: function rTab(tag) {
				$("#rs-blinds").mCustomScrollbar();
				this.rt = tag;
			},
			mrjlMethod: function mrjlMethod(key, type) {
				console.log(key);
				console.log(type);
			},
			addRanking: function addRanking(type) {
				//添加名次

				if (type == 'mrjl') {
					this.mrjl.push({ idx: this.mrjl.length + 1, type: 0, num: null });
				}
			},
			removeRanking: function removeRanking(type) {
				if (type == 'mrjl') {
					this.mrjl.pop();
				}
			}

		},
		mounted: function mounted() {},
		watch: {
			awardType: function awardType(newVal, oldVal) {
				this.awardTmpl = newVal;
			}

		}
	});
	$(document).ready(function () {

		//$('#create-modal').modal("show")

		$('#create-modal').on('shown.bs.modal', function (e) {
			$("#blinds-table").mCustomScrollbar();
		});

		$('#regulations').on('shown.bs.modal', function (e) {
			$("#rs-blinds").mCustomScrollbar();
		});
	});
});