// =====================================================================
// Factorial / Факториал
// ---------------------------------------------------------------------
// n! = 1 * 2 * 3 * ... * n;   0! = 1 (по определению)
// Time:  O(n)
// Space: O(1) iterative, O(n) recursive (стек)
// Внимание: n! растёт стремительно. 21! уже не помещается в Number.MAX_SAFE_INTEGER.
//   Для больших n используй BigInt.
// =====================================================================

function factorialIterative(n) {
    if (n < 0) throw new Error('Factorial undefined for negative numbers');
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(n) {
    if (n < 0) throw new Error('Factorial undefined for negative numbers');
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}

// Версия для очень больших n
function factorialBigInt(n) {
    let result = 1n;
    for (let i = 2n; i <= BigInt(n); i++) {
        result *= i;
    }
    return result;
}

console.log(factorialIterative(5)); // 120
console.log(factorialRecursive(10)); // 3628800
console.log(factorialBigInt(25).toString()); // 15511210043330985984000000

module.exports = { factorialIterative, factorialRecursive, factorialBigInt };
