<?php
    $url='https://api.bilibili.com/x/relation/stat?vmid=672328094';
    $html = file_get_contents($url);
    echo $html;
?>