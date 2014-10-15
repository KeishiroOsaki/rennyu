(function() {
  var bot, dbase, rangeRnd;

  bot = function() {
    var str;
    str = dbase();
    document.write(str);
    return console.log(str);
  };

  dbase = function() {
    var arr, elm, i, key, res, _i, _len;
    arr = ["進捗どうですか", "つらい", "とてもつらい", "ゆるして", "ゲムー", "(◞‸◟)", "くコ:彡", "もうねよう", "MGTたのしそう", "rennyu.coffee", "すやすや", "( ˘ω˘ ) ｽﾔｧ…", "ｺﾗｺﾗｺﾗｺﾗ～ｯ！(`o´)", "σ(o'v'o)まとも", "なんでや", "キムチムチムチ~w", "キレそう", "キレッキレ", "もうよじか", "明日はにちようび!", "ブログ更新すっか", "せやで", "せやろか", "そろいき"];
    console.log("dbase");
    for (elm = _i = 0, _len = arr.length; _i < _len; elm = ++_i) {
      key = arr[elm];
      i = i + 1;
    }
    i = i - 1;
    console.log(elm);
    i = 10;
    res = arr[rangeRnd(0, elm)];
    console.log(res);
    return res;
  };

  rangeRnd = function(min, max) {
    var rnd;
    rnd = Math.floor(Math.random() * max);
    rnd = rnd;
    console.log(rnd);
    return rnd;
  };

  bot();

}).call(this);
