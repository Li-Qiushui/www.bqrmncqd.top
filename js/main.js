$(function(){
	var cookie = document.cookie;
	if(document.cookie == ''){
		window.location.href = "http://10.158.58.235/login.html";
	}//判断用户是否在登陆过
	
	var btn_num = 0;
	$(".input_btn").click(function(){
		btn_num++;
		if(btn_num%2 == 1){
			$("#input_box").css("transform","translate(0,0)");
		}else{
			$("#input_box").css("transform","translate(0,100%)");
		}
	})
})	