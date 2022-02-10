<?php
	$uesr_num = $_GET["uesr_num"];
	$password = $_GET["password"];
	$sql = fopen("../date/date.txt", "r");
	$n = 0;
	while(!feof($sql)){
		$m = fgets($sql);
		$pieces = explode(",", $m);
		$pieces_zu[$n++] = $pieces;
	}
	for ($i = 0; $i != sizeof($pieces_zu); $i++) {
		// print_r($pieces_zu[$i][0]."<br/>");
		if ($pieces_zu[$i][0] == $uesr_num) {
			//判断用户名是否正确
			if ($pieces_zu[$i][1] == $password) {
				//判断密码是否正确
				echo "yes";
				break;
			}
		}
	}
?>