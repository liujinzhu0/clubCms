require(["config"], function() {

	require(["jquery", "vue", "toastr"], function($, Vue, toastr) {

		let test = [{
				deskNum: "010001", //桌号
				total: 9, //单桌总人数
				playNum: 8, //单桌实际人数
				player: [ //玩家
					{
						id: "11111",
						name: "王力",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010001-1",
						newSeatNum: null

					},
					{
						id: '11111',
						name: "王帅",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010001-2",
						newSeatNum: null
					},
					{
						id: 11112,
						name: "老马",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010001-3",
						newSeatNum: null
					},
					{
						id: 11113,
						name: "张连芳",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010001-4",
						newSeatNum: null
					},
					{
						id: 11114,
						name: "苗强",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010001-5",
						newSeatNum: null
					},
					{
						id: 11115,
						name: "陈楠",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010001-6",
						newSeatNum: null
					},
					{
						id: 11116,
						name: "刘笑",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010001-7",
						newSeatNum: null
					},
					{
						id: 11117,
						name: "方纯",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010001-8",
						newSeatNum: null
					},
					{
						id: 11118,
						name: "乔凡",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010001-9",
						newSeatNum: null
					}
				]
			}, {
				deskNum: "010002", //桌号
				total: 9, //单桌总人数
				playNum: 8, //单桌实际人数
				player: [ //玩家
					{
						id: "11111",
						name: "王力",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010002-1",
						newSeatNum: null

					},
					{
						id: '11111',
						name: "王帅",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010002-2",
						newSeatNum: null
					},
					{
						id: 11112,
						name: "老马",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010002-3",
						newSeatNum: null
					},
					{
						id: 11113,
						name: "张连芳",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010002-4",
						newSeatNum: null
					},
					{
						id: 11114,
						name: "苗强",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010002-5",
						newSeatNum: null
					},
					{
						id: 11115,
						name: "陈楠",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010002-6",
						newSeatNum: null
					},
					{
						id: 11116,
						name: "刘笑",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010002-7",
						newSeatNum: null
					},
					{
						id: 11117,
						name: "方纯",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010002-8",
						newSeatNum: null
					},
					{
						id: 11118,
						name: "乔凡",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010002-9",
						newSeatNum: null
					}
				]
			},
			{
				deskNum: "010003", //桌号
				total: 9, //单桌总人数
				playNum: 8, //单桌实际人数
				player: [ //玩家
					{
						id: "11111",
						name: "王力",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010003-1",
						newSeatNum: null

					},
					{
						id: '11111',
						name: "王帅",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010003-2",
						newSeatNum: null
					},
					{
						id: 11112,
						name: "老马",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010003-3",
						newSeatNum: null
					},
					{
						id: 11113,
						name: "张连芳",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010003-4",
						newSeatNum: null
					},
					{
						id: 11114,
						name: "苗强",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010003-5",
						newSeatNum: null
					},
					{
						id: 11115,
						name: "陈楠",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010003-6",
						newSeatNum: null
					},
					{
						id: 11116,
						name: "刘笑",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010003-7",
						newSeatNum: null
					},
					{
						id: 11117,
						name: "方纯",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010003-8",
						newSeatNum: null
					},
					{
						id: 11118,
						name: "乔凡",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010003-9",
						newSeatNum: null
					}
				]
			},
			{
				deskNum: "010004", //桌号
				total: 9, //单桌总人数
				playNum: 8, //单桌实际人数
				player: [ //玩家
					{
						id: "11111",
						name: "王力",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010004-1",
						newSeatNum: null

					},
					{
						id: '11111',
						name: "王帅",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010004-2",
						newSeatNum: null
					},
					{
						id: 11112,
						name: "老马",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010004-3",
						newSeatNum: null
					},
					{
						id: 11113,
						name: "张连芳",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010004-4",
						newSeatNum: null
					},
					{
						id: 11114,
						name: "苗强",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010004-5",
						newSeatNum: null
					},
					{
						id: 11115,
						name: "陈楠",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010004-6",
						newSeatNum: null
					},
					{
						id: 11116,
						name: "刘笑",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010004-7",
						newSeatNum: null
					},
					{
						id: 11117,
						name: "方纯",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010004-8",
						newSeatNum: null
					}
					/*,
										{
											id: 11118,
											name: "乔凡",
											imgUrl: "../image/Img_dealer.png",
											seatNum:"010004-9",
											newSeatNum: null
										}*/
				]
			},
			{
				deskNum: "010005", //桌号
				total: 9, //单桌总人数
				playNum: 8, //单桌实际人数
				player: [ //玩家
					{
						id: "11111",
						name: "王力",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010005-1",
						newSeatNum: null

					},
					{
						id: '11111',
						name: "王帅",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010005-2",
						newSeatNum: null
					},
					{
						id: 11112,
						name: "老马",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010005-3",
						newSeatNum: null
					},
					{
						id: 11113,
						name: "张连芳",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010005-4",
						newSeatNum: null
					},
					{
						id: 11114,
						name: "苗强",
						imgUrl: "../image/Img_dealer.png",
						seatNum: "010005-5",
						newSeatNum: null
					}
					/*,
										{
											id: 11115,
											name: "陈楠",
											imgUrl: "../image/Img_dealer.png",
											seatNum: "010005-6",
											newSeatNum: null
										},
										{
											id: 11116,
											name: "刘笑",
											imgUrl: "../image/Img_dealer.png",
											seatNum:"010005-7",
											newSeatNum: null
										},
										{
											id: 11117,
											name: "方纯",
											imgUrl: "../image/Img_dealer.png",
											seatNum: "010005-8",
											newSeatNum: null
										},
										{
											id: 11118,
											name: "乔凡",
											imgUrl: "../image/Img_dealer.png",
											seatNum: "010005-9",
											newSeatNum: null
										}*/
				]
			}

		]

		var vm = new Vue({
			el: "#main",
			data: {
				playerItem: test

			},
			mounted: function() {

			}
		})

		require(["special", "modal"], function() {})
		//设置玩家可以被拖拽
		$(".player li ").attr("draggable", true)
		//设置dealer位置可以被拖放
		$(".dealer-position").attr("draggable", true);
		//设置dealer可以被拖拽
		$(".dealerItem").attr("draggable", true);

		//玩家被拖拽时触发的事件
		$(".player li ").on("dragstart", function(event) {
			var e = window.event || event;
			var id = $(this).find("dl").attr("id")
			e.dataTransfer.setData("id", id)
		})

		/*
		 ondragover 事件规定在何处放置被拖动的数据。
		默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。
		这要通过调用 ondragover 事件的 event.preventDefault() 方法：
		 * */

		$(".player li ").on("dragover", function(e) {
			var e = window.event || event;
			e.preventDefault()
		})
		/*
		 	释放的时候触发的事件
		 * 
		 * */
		//玩家拖拽
		$(".player li ").on("drop", function(e) {
			var e = window.event || event;
			e.preventDefault();
			var isHasDl = $(this).find("dl")
			var id = e.dataTransfer.getData("id");
			var flag = id.split("-")[0];
			var tagName = e.target.nodeName.toLowerCase()
			if(tagName == "li" && id != undefined) {
				if(flag != "dealer") {
					toastr.success("换坐成功");
					e.target.appendChild(document.getElementById(id));
				} else {
					toastr.error("请将dealer放在dealer位");
				}
			} else {
				toastr.error("当前位置已经有玩家入座！");
			}
		})

		//dealer拖拽
		$(".dealerItem").on("dragstart", function(event) {
			let e = window.event || event;
			let id = this.id;

			let flag = $("#" + id).data("flag")

			if(flag == undefined) {
				e.dataTransfer.setData("id", id)
			} else {
				toastr.error("dealer已经在桌子上")
			}

		})
		$(".dealerItem").on("dragover", function(event) {
			var e = window.event || event;
			e.preventDefault();
		})

		$(".dealerItem").on("drop", function(e) {
			var e = window.event || event;
			e.preventDefault();
			var id = e.dataTransfer.getData("id");
		})

		//桌子dealer位置被放下dealer时
		$(".dealer-position").on("dragstart", function(event) {
			let e = window.event || event;
		})
		$(".dealer-position").on("dragover", function(event) {
			var e = window.event || event;
			e.preventDefault();
		})

		$(".dealer-position").on("drop", function(event) {
			var e = window.event || event;
			e.preventDefault();
			let id = e.dataTransfer.getData("id");
			let reg = /dealer/g;
			var html = $("#" + id).html();
			let tag = e.target.id;
			if(id != '') {
				if(reg.test(id)) {
					if(tag != '') {
						let ele = $("#" + tag);
						let str = `<dl>${html}</dl>`;
						ele.html(str)
						toastr.success("delaer放置成功")
						$("#" + id).data("flag", "inSeat") //设置dealer已经在桌子上
					} else {
						toastr.error("已经有delaer")
					}
				} else {
					toastr.error("请将玩家放在玩家位")
				}
			}
		})

		$(".dealer-position").bind("contextmenu", function() {
			return false;
		})

		$(".dealer-position").mousedown("click", function(e) {
			var btnIdx = e.which;
			if(btnIdx == 3) {
				alert("可以做些事情")
			}
		})

		//确认换坐按钮点击
		$("#changSeating").on("click", function() {
			let deskItem = $("#desk-item").find("div.desk-item-list");
			let arr = [];

			deskItem.each(function(idx, item) {
				let seat = $(this).find(".player>li") //获取座位
				let deskNum = $(this).data("desknum") //获取桌号
				let obj = {};
				let playnum = 0;
				obj.total = 9;
				obj.deskNum = deskNum
				obj.playNum = 8
				obj.player = []

				seat.each(function(id, list) {
					let player = $(this).find("dl");
					if(player.length == 1) {
						let seating = player.data("seating");
						let parmas = seating.split("|");
						obj.player.push({
							id: parmas[0],
							name: parmas[1],
							seatNum: parmas[2],
							newSeatNum: deskNum + "-" + id
						})
						playnum += 1;
						obj.playNum = playnum;

					} else {
						obj.player.push({})
					}
				})
				arr.push(obj);
			})

		})

	})
});