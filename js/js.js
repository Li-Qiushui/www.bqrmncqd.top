$(document).ready(function(){
	var i = 0;
	var j = 0;
	$('.btn-right').click(function(){
		right();
	})
	$('.btn-left').click(function(){
		left();
	})
	function right(){
		i = i+1;
		if(i == 3) i = 0;
		$('ul').css('left',i*-100+'%');
		/* $('ul').css('transition','.5s'); */
		j = i
	}
	function left(){
		j = j-1;
		if(j == -1) j = 2;
		$('ul').css('left',j*-100+'%');
		$('ul').css('transition','.5s');
		i = j;
	}
});