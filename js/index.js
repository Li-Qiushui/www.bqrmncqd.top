$(document).ready(function(){
	var classname = ['btn1','btn2','btn3'];
	var y=0;
	var hei = -240;
	if($(this).innerWidth()>600){
		outweigh600();
	}else{
		lowerthan600();
	}
	$(window).resize(function(){
		if($(this).innerWidth()>600){
			outweigh600();
			$('.nav').css('right','0px');
		}else{
			lowerthan600();
			$('.nav').css('right','-100px');
		}
	})
	console.log(window.devicePixelRatio)
	$('.btns').click(function(){
		y++;
		if(y%2==1){
			for(i=0;i<$('.btns div').length;i++){
				$('.btns div').eq(i).addClass(classname[i]);
			}
			$(".nav").css("right","0");
		}else{
			$('.btns div').removeClass();
			$('.nav').css('right','-100px');
		}
	})
	function outweigh600(){
		$('.tab').hover(function(){
			var i = 100;
			$(this).css('color','#333')
			$('.bgc').css({
				'top':'0px',
				'left':i*$(this).index(),
				'opacity':'1'
			})
		},function(){
			$(this).css('color','#FFF')
			$('.bgc').css('opacity','0')
			$('.nav').css('right','0')
		})
	}
	function lowerthan600(){
		$('.tab').hover(function(){
			$(this).css('color','#333')
			var i = 50;
			$('.bgc').css({
				'left':"0px",
				'top':$(this).index()*i,
				'opacity':'1'
			})
		},function(){
			$(this).css('color','#FFF')
			$('.bgc').css('opacity','0')
		})
	}
})