// =====================================================================
// Fibonacci / Числа Фибоначчи
// ---------------------------------------------------------------------
// F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
//
// Показываем 4 реализации — это классический вопрос на собеседовании
// именно для демонстрации понимания trade-offs (время/память/стек).
// =====================================================================

// 1) Наивная рекурсия — O(2^n) время, O(n) стек. ПЛОХО, экспонента.
function fibNaive(n) {
    if (n < 2) return n;
    return fibNaive(n - 1) + fibNaive(n - 2);
}

// 2) Мемоизация (top-down DP) — O(n) время, O(n) память
function fibMemo(n, memo = new Map()) {
    if (n < 2) return n;
    if (memo.has(n)) return memo.get(n);

    const value = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    memo.set(n, value);
    return value;
}

// 3) Итеративная (bottom-up) — O(n) время, O(1) память
//    Лучший практичный вариант
function fibIterative(n) {
    if (n < 2) return n;

    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    return curr;
}

// 4) Матричное возведение в степень — O(log n) (для очень больших n)
//    [[F(n+1), F(n)], [F(n), F(n-1)]] = [[1,1],[1,0]]^n
function fibMatrix(n) {
    if (n < 2) return n;
    const result = matrixPow(
        [
            [1, 1],
            [1, 0],
        ],
        n,
    );
    return result[0][1];
}

function matrixMul(a, b) {
    return [
        [
            a[0][0] * b[0][0] + a[0][1] * b[1][0],
            a[0][0] * b[0][1] + a[0][1] * b[1][1],
        ],
        [
            a[1][0] * b[0][0] + a[1][1] * b[1][0],
            a[1][0] * b[0][1] + a[1][1] * b[1][1],
        ],
    ];
}

function matrixPow(m, p) {
    let result = [
        [1, 0],
        [0, 1],
    ]; // identity
    let base = m;
    while (p > 0) {
        if (p & 1) result = matrixMul(result, base);
        base = matrixMul(base, base);
        p >>= 1;
    }
    return result;
}

console.log(fibIterative(10)); // 55
console.log(fibMemo(50)); // 12586269025
console.log(fibMatrix(10)); // 55

module.exports = { fibNaive, fibMemo, fibIterative, fibMatrix };
