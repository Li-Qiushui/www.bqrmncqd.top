$(function(){
	var i = 0;
	function time(){
		i++;
		var img_left = $(".img img").width()*i;
		var line_left =120*i;
		$(".rot .img").css("left",-img_left);
		$(".rot_tab .li_line").css("left",line_left);
		if(i>1){
			i=-1;
		}
	}
	setInterval(function(){
		time();
	},3000)
	$(window).scroll(function(){
		var s_top = $(window).scrollTop();
		console.log(s_top)
		if(s_top>150){
			$(".head").css({
				"width": "1400px",
				"position": "fixed",
				"left":"50%",
				"transform": "translate(-50%)",
				"opacity":".5",
				"height":"60px",
				"padding": "10px 10px",
			})
		}else{
			$(".head").css({
				"width": "100%",
				"position": "static",
				"transform": "translate(0)",
				"opacity":"1",
				"height":"100px",
				"padding": "33px 10px"
			})
		}
	})
	$(".rot_tab li").click(function(){
		var img_left = $(".img img").width()*$(this).index();
		var line_left =120*$(this).index();
		i = $(this).index();
		if(i>1){
			i=-1;
		}
		$(".rot .img").css("left",-img_left);
		$(".rot_tab .li_line").css("left",line_left);
	})
})