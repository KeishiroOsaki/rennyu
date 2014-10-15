(function() {
  var main, rangeRnd;

  rangeRnd = function(min, max) {
    var rnd;
    rnd = Math.floor(Math.random() * max);
    rnd = rnd;
    return rnd;
  };

  main = function() {
    var arr, i, sw, _i, _j, _k, _results;
    arr = [0];
    for (i = _i = 0; _i <= 16; i = ++_i) {
      arr.push(0);
    }
    for (i = _j = 0; _j <= 1000; i = ++_j) {
      sw = rangeRnd(0, 16);
      arr[sw] += 1;
    }
    _results = [];
    for (i = _k = 0; _k <= 16; i = ++_k) {
      _results.push(console.log(i + ":" + arr[i]));
    }
    return _results;
  };

  main();

}).call(this);
