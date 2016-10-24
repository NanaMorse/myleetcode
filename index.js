{
  /**
   * 223. Rectangle Area
   * @param {number} A
   * @param {number} B
   * @param {number} C
   * @param {number} D
   * @param {number} E
   * @param {number} F
   * @param {number} G
   * @param {number} H
   * @return {number}
   */
  var computeArea = function(A, B, C, D, E, F, G, H) {
    var areaA = (C - A) * (D - B);
    var areaB = (G - E) * (H - F);

    if (A >= G || B >= H || C <= E || D <=F) {
      return areaA + areaB;
    }

    var overlapWidth = Math.min(C, G) - Math.max(A, E);
    var overlapHeight = Math.min(H, D) - Math.max(B, F);

    return areaA + areaB - overlapWidth * overlapHeight;
  };
}

{
  /**
   * 343. Integer Break
   * @param {number} n
   * @return {number}
   */
  var integerBreak = function(n) {
    if (n === 2) return 1;
    if (n === 3) return 2;
    if (n === 4) return 4;

    var result = 1;
    while (n > 4) {
      result = result * 3;
      n = n - 3;
    }
    return result * n;
  };
}

{
  /**
   * 70. Climbing Stairs
   * @param {number} n
   * @return {number}
   */
  var climbStairs = function(n) {
    const resultMap = {
      '0': 0,
      '1': 1,
      '2': 2
    };

    return fibonacci(n);

    function fibonacci(n) {
      if (n in resultMap) return resultMap[n];
      resultMap[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return resultMap[n];
    }
  };

}