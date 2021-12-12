$(function(){
	$(".nav_r ul li").hover(function(){
		$(".li_bgc").css({
			"left":100*$(this).index()+"px",
			"opacity":"1"
		})
	},function(){
		$(".li_bgc").css({
			"left":100*$(this).index()+"px",
			"opacity":"0"
		})
	})
})