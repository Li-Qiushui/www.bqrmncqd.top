<?php
	$handler=fopen("config.txt","r");
	$i = 0;
	while(!feof($handler))
	{
		$m = fgets($handler);
		$pieces = explode(",", $m);
		$pieces_zu[$i++] = $pieces;
	}
	foreach ($pieces_zu as &$val){  // 遍历数组
		print_r($val[0]);
		echo "<br>";
		if($val[0] == $pieces_zu[count($pieces_zu)-1][0]){
			print_r($pieces_zu[count($pieces_zu)-1][0]);
		}
	}
	//第一个表示一组qq及密码,第二个值为0时表示qq 为1表示密码
	fclose($handler); //关闭文件
?>