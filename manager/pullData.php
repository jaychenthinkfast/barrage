<?php 
    if(isset($_POST['flag'])){
        $newArr=array();
        //省略实际数据获取过程
        $newArr = array('chenjie.info','chenjie.info','chenjie.info');
        exit(json_encode($newArr));
    }
