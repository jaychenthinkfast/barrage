<?php     
    if(isset($_POST['msg'])){
        //省略数据过滤，数据插入过程
        exit(json_encode(true));
    }

