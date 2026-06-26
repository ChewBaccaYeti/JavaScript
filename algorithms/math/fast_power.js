// =====================================================================
// Fast Power / Быстрое возведение в степень (binary exponentiation)
// ---------------------------------------------------------------------
// Идея: a^b считаем через двоичное представление b.
//   a^13 = a^(1101 в двоичной) = a^8 * a^4 * a^1
//   Возводим в квадрат и умножаем по битам.
// Time:  O(log b)
// Space: O(1) iterative
// =====================================================================

function fastPow(base, exp) {
    if (exp < 0) return 1 / fastPow(base, -exp);

    let result = 1;
    while (exp > 0) {
        // Если младший бит = 1 — умножаем
        if (exp & 1) result *= base;
        // Возводим в квадрат
        base *= base;
        // Сдвиг — следующий бит
        exp = Math.floor(exp / 2);
    }
    return result;
}

// Модульное возведение — нужно в криптографии
function fastPowMod(base, exp, mod) {
    if (mod === 1) return 0;
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp & 1) result = (result * base) % mod;
        exp = Math.floor(exp / 2);
        base = (base * base) % mod;
    }
    return result;
}

console.log(fastPow(2, 10)); // 1024
console.log(fastPowMod(2, 10, 1000)); // 24

module.exports = { fastPow, fastPowMod };
