// barrage.js
// ==========

// > (c) 2014-2015 dongchao 
// > barrage may be freely distributed under the MIT license.
// > For all details and documentation:

// Initial Setup
// -------------

(function() {
  // a reference to the global object. 'window' in the browser
  // or 'global' on the server

  console.log("wow chenjie.info!");
  var root = this;

  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // The top-level namespace.
  var Barrage;
  if ( typeof exports !== 'undefined') {
    Barrage = exports;
  } else {
    Barrage = root.Barrage = {};
  }

  // Current Version of Barrage
  Barrage.VERSION = '0.0.1';

  // extends the jquery
  Barrage.$ = root.jQuery;

  Barrage.config = {

    'color' : ['cyan', 'greenyellow', 'hotpink', 'orange', 'white','yellow','deepskyblue','slateblue'],
    'font_family' : ['Monaco','微软雅黑'],
    'font_size' : ['18px', '20px', '24px', '28px'],
    'speed' : [10000,9000,8000,7000,6000,5000,4000 ]
    //'speed' : [54000,52000,50000,48000,46000,44000,42000,40000,38000,36000,34000,32000,30000,28000,26000,24000,22000,20000,18000,16000,14000,10000,8000]
    
  };

  Barrage.random = function(len) {
    return Math.random() * len;
  };
  var bullet = Barrage.bullet = (function() {

    var _font_family;
    var _font_size;
    var _color;
    var _speed;
    var _x_pos;
    var _y_pos;
    
    var random_render = function(config_item) {

      return config_item[Math.floor(Barrage.random(config_item.length))];
    };
    
    var launch = function(objects, pose) {

      _font_size = objects.font_size || random_render(Barrage.config.font_size);
      _font_family = objects.font_family || random_render(Barrage.config.font_family);
      _color = objects.color || random_render(Barrage.config.color);
      _speed = objects.speed || random_render(Barrage.config.speed);
      _y_pos = objects.y_pos || Math.random() * window.innerHeight;

      // console.log(_font_size);
      // console.log(_font_family);
      // console.log(_color);
      // console.log(_speed);
      // console.log(_y_pos);
      // console.log("=============");
    
      if (!objects.content) return;

      var words = Barrage.$("<b>" + objects.content + "</b>");
      words.css("font-size", _font_size);
      words.css("font-family", _font_family);
      words.css("color", _color);
      words.css("right", -100);
      words.css("position", "absolute");
      words.css("top", _y_pos);
      words.attr("zoom", 1000);
      $("#layout").append(words);
      Barrage.$(words).animate({
        "right" : window.innerWidth
        }, _speed, function() {
          //console.log("finished!");
      });
    };

    return {
      launch : launch
    };
  })();

  var Action = Barrage.Action = {

  };
}).call(this);















