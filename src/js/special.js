
/*
 
 * 网页特效
 * */

define(["jquery","bootstrap", "jquery-mousewheel","jquery-ui","mCustomScrollbar"],function($){

		
		//左侧导航
		$(".tabItem > li").hover(function() {
			$(this).find("ul").show();
		}, function() {
			$(this).find("ul").hide();
			
		})
		
		//游戏设定
		$(".game-option").hover(function() {
			$(this).find("ul").show();
		}, function() {
			$(this).find("ul").hide();
		})
		
		//滚动条美化
		$("#contentWrap").mCustomScrollbar()
		//消息列表美化
		$("#infomation-wrap").mCustomScrollbar()
		
		
	//消息通知特效
	$("#member-badge").hover(function(){
		$("#infomation").show();
	},function(){
		setTimeout(()=>{$("#infomation").hide();},3000)
	})
	
	
	
	
})
