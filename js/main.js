window.onload = function(){
	resize();
	window.addEventListener('resize',resize);
	function resize(){
		var dpr = window.devicePixelRatio
		var w = window.innerWidth;
		console.log(w);
		document.documentElement.style.fontSize = (w/3.75) +"px";
	}
}