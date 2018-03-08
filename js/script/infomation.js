"use strict";

require(["config"], function () {

	require(["vue", "jquery", "bootstrap", "jquery-mousewheel", "jquery-ui", "mCustomScrollbar", "special", "modal"], function (Vue) {
		var vm = new Vue({
			el: "#contentWrap"
		});

		$("#infomation-list").on("click", "li", function () {
			$(this).animate({ "height": "auto" }, 3000);
			$(this).find("p").toggle("show");
		});
	});
});