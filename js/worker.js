
function getMsg() {
    var defer = $.Deferred();
    $.post("./manager/pullData.php", {"flag": 'getMsg'}, function (data) {
        defer.resolve(data);
    }, "json");
    return defer.promise();
}


function getMsgFunc(){
    $.when(getMsg()).done(function(data){
        $.each(data, function (n,value) {
          var heitan = {};
          var number=Math.random();
          if(number<0.07){
            number=number+0.07;
          }
          if(number>0.88){
            number=number-0.12;
          }
          heitan.y_pos = Math.floor(number * $("#layout").height());
          heitan.content=value;
          Barrage.bullet.launch(heitan, "");
        });
    });
}

function firstMsg(){
    var heitan = {};
    heitan.y_pos = Math.floor(Math.random() * ($("#layout").height()-$("#comment-bar").height()));
    heitan.content="弹幕加载中，请稍后。。。。。";
    heitan.color="white";
    heitan.font_size="28px";
    heitan.speed=3000;
    Barrage.bullet.launch(heitan, "");
}

function putMsg() {
    var msg = $("#comment-content").val();
    $.post("./manager/pushData.php", {"msg": msg}, function (data) {
        if (data) {
            layer.alert('发送消息成功',9,'提醒');
            $("#comment-content").val('');
        } 
    }, "json");
}

$(document).ready(function(){

    $(".open").click(function(){
        $("#layout").show();
        firstMsg();
        _interval=setInterval(getMsgFunc, 3000);
    });
    $(".close2").click(function(){
        $("#layout").hide();
         clearInterval(_interval);
    });
    //弹幕发表评论
    $("#comment-button").click(function(){
        putMsg();
    });    
});


