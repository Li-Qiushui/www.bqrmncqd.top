<?php
	$uesr_num = $_GET["uesr_num"];
	$password = $_GET["password"];
	$sql = fopen("../date/date.txt", "r");
	$n = 0;
	$bool = true;
	while(!feof($sql))
	{
		$m = fgets($sql);
		$pieces = explode(",", $m);
		$pieces_zu[$n++] = $pieces;
	}
	for ($i = 0; $i != sizeof($pieces_zu); $i++) {
		// print_r($pieces_zu[$i][0]."<br/>");
		if ($pieces_zu[$i][0] == $uesr_num) {
			echo "error";
			$bool = false;
		}
	}
	if($bool){
		$num = "{$uesr_num},{$password}\n";
		file_put_contents("../date/date.txt",$num,FILE_APPEND);
	}
?>