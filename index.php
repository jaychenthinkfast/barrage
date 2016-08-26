<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>简单弹幕程序 by 陈捷 chenjie.info</title>
    <link href="css/style.css" type="text/css" rel="stylesheet">
    <link href="css/base.css" type="text/css" rel="stylesheet">
    <link href="css/common.css" type="text/css" rel="stylesheet">
    <script src="js/jquery-1.8.3.min.js"></script>
    <script src="plugin/layer/layer.min.js"></script>
    <script src="js/worker.js"></script>
    <script src="js/barrage.js"></script>
</head>
<body>
<div class="main">
<div id="test">
    <a href="#danbox"><img class="open" src="images/dan1.png"></a>  
</div>
<div class="bottom">
    <div class="cover1">
        <div class="rule">
            <a class="close"><img src="images/close.png"></a>
        </div>
    </div>
</div>
</div>
<div id="layout">
    <div class="close2"></div>
    <div class="bar" id="comment-bar">
        <div class="enter2">
            <input  class="input2" id="comment-content" type="text" placeholder="请发表你的看法"/>
            <input id="comment-button" class="sendto2" type="button" value="发表评论"/>
        </div>
    </div>
</div>
</body>
</html>