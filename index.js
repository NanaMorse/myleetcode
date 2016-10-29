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
   * 78.26%
   */
  const computeArea = function(A, B, C, D, E, F, G, H) {
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
   * 93.75%
   */
  const integerBreak = function(n) {
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
   * 72.65%
   */
  const climbStairs = function(n) {
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
   * todo 37.50%
   */
  const multiply = function(num1, num2) {
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
   * 82.16%
   */
  const addTwoNumbers = function(l1, l2) {
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
   * 97.50%
   */
  const topKFrequent = function(nums, k) {
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

{
  /**
   * 73. Set Matrix Zeroes
   * @param {number[][]} matrix
   * @return {void} Do not return anything, modify matrix in-place instead.
   * 83.87%
   */
  const setZeroes = function(matrix) {
    const zeroRow = [];
    const zeroCol = [];
    matrix.forEach((row, m) => {
      row.forEach((col, n) => {
        if (col === 0) {
          zeroRow.push(m);
          zeroCol.push(n)
        }
      })
    });

    zeroRow.forEach((rowNum) => {
      matrix[rowNum].forEach((t, i) => matrix[rowNum][i] = 0);
    });

    zeroCol.forEach((colNum) => {
      matrix.forEach((row) => row[colNum] = 0);
    });

  };

  // setZeroes([[2,1,0], [1,0,1], [2,1,1]]);
}

{
  /**
   * 34. Search for a Range
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   * 67.96%
   */
  const searchRange = function(nums, target) {

    let loPos = -1, hiPos = -1;

    searchPos(0, nums.length - 1);

    function searchPos(lo, hi) {
      if (lo > hi) return;

      const mid = parseInt((lo + hi) / 2);

      if (nums[mid] === target) {
        if (loPos === -1 || loPos > mid) loPos = mid;
        if (hiPos === -1 || hiPos < mid) hiPos = mid;
        searchPos(lo, mid - 1);
        searchPos(mid + 1, hi);
      }

      if (nums[mid] > target) {
        searchPos(lo, mid - 1);
      }

      if (nums[mid] < target) {
        searchPos(mid + 1, hi);
      }
    }

    return [loPos, hiPos];
  };

  // searchRange([5, 7, 7, 8, 8, 10], 8)
}


{
  /**
   * 227. Basic Calculator II
   * @param {string} s
   * @return {number}
   * todo 37.6%
   */
  const calculate = function(s) {
    const sArray = s.split('');

    const valueStack = [];
    const operatorStack = ['+'];

    for (let i = 0, len = sArray.length; i < len; i++) {

      // get next operator or value
      let subs = sArray[i];
      let isSubsNumber;
      if (isNumberString(subs)) {
        while (isNumberString(sArray[i + 1])) {
          subs += sArray[i + 1];
          i++;
        }
        isSubsNumber = true;
      }

      if (subs === ' ') continue;

      if (isSubsNumber) {
        let subValue = parseInt(subs);
        const leftOperator = operatorStack.pop();
        if (leftOperator === '-') subValue = - subValue;
        valueStack.push(subValue);
      }

      else if (isHighPriorityOperator(subs)) {
        let leftValue = valueStack.pop();

        let rightValue = '';
        do {
          i++;
          rightValue += sArray[i];
        } while (isNumberString(sArray[i + 1]));
        rightValue = parseInt(rightValue);

        if (subs === '*') valueStack.push(leftValue * rightValue);
        else if (subs === '/') valueStack.push(parseInt(leftValue / rightValue));
      }

      else {
        operatorStack.push(subs);
      }
    }

    return valueStack.reduce((a, b) => a + b);

    function isNumberString(s) {
      return !isNaN(parseInt(s));
    }

    function isHighPriorityOperator(opStr) {
      return opStr === '*' || opStr === '/';
    }
  };

}













