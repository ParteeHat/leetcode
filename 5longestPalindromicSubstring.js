var longestPalindrome = function (s) {
  var split = s.split('');
  var bestPal = [];
  var combs = [];
  var max = 0;
  for (let i = 0; i < split.length; i++) {
    for (let j = split.length; j > 0; j--) {
      if (s.slice(i, j) == '') {
        break;
      }
      combs.push(s.slice(i, j));
    }
  }
  for (let i of combs) {
    if (confirmPalindrome(i) == true) {
      if (i.length > max) {
        max = i.length;
        bestPal = i;
      }
    }
  }
  return bestPal;
};

var confirmPalindrome = function (a) {
  var spl = a.split('');
  var mid;
  if (a.length % 2 == 1) {
    mid = a.length / 2 - 0.5;
  } else {
    mid = a.length / 2;
  }

  while (mid > 0) {
    if (spl.shift() != spl.pop()) {
      return false;
    } else {
      mid--;
    }
  }
  return true;
};
