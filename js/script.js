$(document).ready(function () {
	var a = 0
	lode(a)
	var b = 0
	var i = 0
	var j = 1
	var class0 = new Array(7)
	class0 = ["box1","box2","box3","box4","box5","box6","box7"]
	function lode(){
		var len = $('li').length
		for(a;a<len;a++){
			class0 = ["box1","box2","box3","box4","box5","box6","box7"]
			$('li').eq(a).addClass(class0[a])
		}
	}
	$('.btn1').click(function(){
		btnclick1()
	})
	$('.btn2').click(function(){
		btnclick2()
	})
	function btnclick1(){
		var len = $('li').length
		$('li').removeClass()
		class0.push(class0[0])
		class0.shift()
		for(b;b<len;b++){
			$('li').eq(b).addClass(class0[b])
		}
		b = 0
	}
	function btnclick2(){
		var len = $('li').length
		$('li').removeClass()
		class0.unshift(class0[6])
		class0.pop()
		for(b;b<len;b++){
			$('li').eq(b).addClass(class0[b])

		}
		b = 0
	}
	var dingshiqi = setInterval(function(){btnclick2()},1500);
	$(".btn").hover(function(){
		clearInterval(dingshiqi)
		console.log("关闭定时器")
	    
	},function(){
	    dingshiqi = setInterval(function(){btnclick2()},1500);
		console.log("开启定时器")
	});
})