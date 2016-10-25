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

{
  /**
   * 43. Multiply Strings
   * @param {string} num1
   * @param {string} num2
   * @return {string}
   */
  var multiply = function(num1, num2) {
    var len1 = num1.length;
    var len2 = num2.length;

    var result = new Array(len1 + len2);
    for (var a = 0, len = len1 + len2; a < len; a++) result[a] = 0;

    for (var i = len1 - 1; i >= 0; i--) {
      for (var j = len2 - 1; j >= 0; j--) {
        var multiUnit = num1[i] * num2[j];

        var p1 = i + j, p2 = p1 + 1;
        var sum = result[p2] + multiUnit;

        result[p1] += parseInt(sum / 10);
        result[p2] = sum % 10;
      }
    }

    while (result[0] === 0 && result.length > 1) result.shift();

    return result.join('');
  };
}

{
  /**
   * Definition for singly-linked list.
   * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
   */
  /**
   * 2. Add Two Numbers
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  var addTwoNumbers = function(l1, l2) {
    var resultHead = new ListNode(0);
    var node = resultHead;

    var carry = 0;

    while (l1 || l2) {
      var val1 = l1 ? l1.val : 0;
      var val2 = l2 ? l2.val : 0;

      var sum = val1 + val2 + carry;
      node.next = new ListNode(sum % 10);
      node = node.next;

      carry = parseInt(sum / 10);

      l1 = l1 && l1.next;
      l2 = l2 && l2.next;
    }

    if (carry) {
      node.next = new ListNode(carry);
    }

    return resultHead.next;
  };

  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  var node1_1 = new ListNode(1);

  var node2_1 = new ListNode(9);
  node2_1.next = new ListNode(9);

  // addTwoNumbers(node1_1, node2_1);
}

{
  /**
   * 347. Top K Frequent Elements
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  var topKFrequent = function(nums, k) {
    var map = {};
    for (var i = 0, len = nums.length; i < len; i++) {
      var cNum = nums[i];
      if (!map[cNum])  map[cNum] = 0;
      map[cNum] ++;
    }

    return Object.keys(map)
      .sort((a, b) => map[b] - map[a])
      .slice(0, k).map(item => parseInt(item));
  };
}