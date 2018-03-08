require(["config"], function() {

	require(["jquery","special","modal","bootstrap"], function($, Vue) {
		
		
		//日期插件
			let dataRange=$("#dataRange");
				dataRange.daterangepicker({
					 singleDatePicker: true,
                showDropdowns: true,
                autoUpdateInput: true,
                timePicker24Hour : true,
                timePicker : true,
                "locale": {
                    format: 'MM-DD HH:mm',
                    applyLabel: "应用",
                    cancelLabel: "取消",
                    resetLabel: "重置",
                }
            })
				
			
				
				
				
				
				
	})

});