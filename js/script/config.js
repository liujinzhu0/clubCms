/*
 
 * js配置文件
 * */
define(function() {
	var baseURL = "http://127.0.0.1:8080/"; //本地地址
	require.config({
		baseUrl: baseURL + "js/",
		paths: {
			"jquery":"lib/jquery-2.1.0.min",
			"bootstrap":"lib/bootstrap/js/bootstrap.min",
			"daterangepicker":"lib/bootstrap/js/daterangepicker",
			"moment":"lib/bootstrap/js/moment.min",
			"desc":"script/desc",
			"mCustomScrollbar":"plugin/mCustomScrollbar",
			"vue":"lib/vue",
			"modal":"script/modal",
			"jquery-mousewheel":"plugin/jquery.mousewheel.min",
			"jquery-ui":"plugin/jquery-ui.min",
			"special":"script/special",
			"toastr":["https://cdn.bootcss.com/toastr.js/2.1.4/toastr.min"],
			"test":"script/test"
		}
		
	});
})