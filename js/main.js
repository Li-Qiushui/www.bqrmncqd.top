$(function() {
	/* https://tenapi.cn/bilibili/?uid=1
	https://tenapi.cn/bilibilifo/?uid=1 */
	$(".link").click(function(){
		
	})
	
	$.ajax({
		url:"https://tenapi.cn/bilibilifo/?uid=672328094",
		success:function(json_data){
			var obj_data = JSON.parse(json_data).data;
			var num;
			var value = obj_data.follower;
			if (value > 9999) { //大于9999显示x.xx万
				num = (Math.floor(value / 100) / 100).toFixed(1) + '万';
			}
			$(".bilibili_fan").text(num)
		}
	})
	$.ajax({
		url:"https://tenapi.cn/weibo/?uid=7595006312",
		success:function(json_data){
			var obj_data = JSON.parse(json_data).data;
			$(".weibo_fan").text(obj_data.following)
		}
	})
})