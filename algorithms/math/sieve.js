// =====================================================================
// Sieve of Eratosthenes / Решето Эратосфена
// ---------------------------------------------------------------------
// Идея: создаём массив [0..n], помечаем составные числа. Для каждого
//       простого p начиная с p*p помечаем p*p, p*p+p, p*p+2p, ...
//       (меньшие кратные уже помечены меньшими простыми).
// Time:  O(n log log n)
// Space: O(n)
// =====================================================================

/**
 * @param {number} n - верхняя граница (включительно)
 * @returns {number[]} - все простые ≤ n
 */
function sieve(n) {
    if (n < 2) return [];

    // isPrime[i] = true если i ещё считается простым
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    // i*i > n значит дальше уже всё помечено
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            // Начинаем с i*i — оптимизация
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Собираем результат
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) primes.push(i);
    }
    return primes;
}

console.log(sieve(30)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

module.exports = sieve;
