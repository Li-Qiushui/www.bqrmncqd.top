$(function(){
	$("body").css("opacity","1");
	$(".Clients_btn .btn").click(function(){
		$(".Clients_btn .btn").removeClass("btn_bgc");
		$(this).addClass("btn_bgc");
		$(".Clients_list").css("left",$(this).index()*-425+"px");
	})
	$(".Bar_l").css('animation','transform .7s ease forwards');
	$(window).scroll(function(){
		var i = $(this).scrollTop()
		$(".Map_list").eq(0).css('animation','transform .7s 0s ease forwards');
		$(".Map_list").eq(1).css('animation','transform .7s .2s ease forwards');
		$(".Map_list").eq(2).css('animation','transform .7s .5s ease forwards');
		if(i > 900){
			$(".Room_title").css('animation','transform .7s ease forwards');
		}
		if(i > 1800){
			$(".Clients_title").css('animation','transform .7s ease forwards');
		}
		if(i > 2400){
			$(".offer_r").css('animation','transform .7s ease forwards');
		}
		if(i > 3300){
			$(".started_w").css('animation','transform .7s ease forwards');
		}
		if(i > 3600){
			$(".blog_title").css('animation','transform .7s ease forwards');
		}
		if(i > 3600){
			$(".blog_title").css('animation','transform .7s ease forwards');
		}
		if(i > 3600){
			$(".blog_list .list").eq(0).css('animation','transform .7s 0s ease forwards');
			$(".blog_list .list").eq(1).css('animation','transform .7s .2s ease forwards');
			$(".blog_list .list").eq(2).css('animation','transform .7s .5s ease forwards');
		}
	})
})