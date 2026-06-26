// =====================================================================
// Prime Check / Проверка на простоту
// ---------------------------------------------------------------------
// Простое — число > 1, делящееся только на 1 и на себя.
// Trial division — проверяем делители до √n.
// Time:  O(√n)
// Space: O(1)
//
// Для больших n используют вероятностные тесты (Miller-Rabin).
// =====================================================================

function isPrime(n) {
    if (n < 2) return false;
    if (n < 4) return true; // 2, 3 — простые
    if (n % 2 === 0) return false; // чётные кроме 2
    if (n % 3 === 0) return false;

    // Все простые > 3 имеют вид 6k ± 1
    // Проверяем 5, 7, 11, 13, 17, 19, ...
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// Простая Miller-Rabin для образования (детерминированная для n < 3,317,044,064,679,887,385,961,981)
function millerRabin(
    n,
    witnesses = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37],
) {
    if (n < 2) return false;
    for (const w of witnesses) {
        if (n === w) return true;
        if (n % w === 0) return false;
    }

    // n - 1 = 2^r * d, где d нечётное
    let d = n - 1;
    let r = 0;
    while (d % 2 === 0) {
        d /= 2;
        r++;
    }

    witnessLoop: for (const a of witnesses) {
        if (a >= n) continue;
        let x = Number(fastPowMod(BigInt(a), BigInt(d), BigInt(n)));
        if (x === 1 || x === n - 1) continue;

        for (let i = 0; i < r - 1; i++) {
            x = Number((BigInt(x) * BigInt(x)) % BigInt(n));
            if (x === n - 1) continue witnessLoop;
        }
        return false;
    }
    return true;
}

function fastPowMod(base, exp, mod) {
    let result = 1n;
    base = base % mod;
    while (exp > 0n) {
        if (exp & 1n) result = (result * base) % mod;
        exp >>= 1n;
        base = (base * base) % mod;
    }
    return result;
}

console.log(isPrime(2)); // true
console.log(isPrime(17)); // true
console.log(isPrime(100)); // false
console.log(millerRabin(982451653)); // true

module.exports = { isPrime, millerRabin };
