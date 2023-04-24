let relativosPrimos = function (num1, num2) {
  function mcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return mcd(b, a % b);
    }
  }

  return mcd(num1, num2) === 1;
};

module.exports = relativosPrimos;