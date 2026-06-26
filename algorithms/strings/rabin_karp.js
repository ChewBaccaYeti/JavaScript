// =====================================================================
// Rabin-Karp — поиск подстроки через хеширование
// ---------------------------------------------------------------------
// Идея: вычисляем хеш pattern и хеш каждого окна text длины m.
//       Сравниваем хеши; при совпадении хешей — проверяем посимвольно.
// Полиномиальный rolling hash:
//   hash(s) = s[0]*b^(m-1) + s[1]*b^(m-2) + ... + s[m-1]   mod p
// Скользящее обновление: удаляем старший символ, добавляем новый — O(1).
//
// Time:  O(n + m) average, O(n*m) worst (много коллизий)
// Space: O(1)
//
// Применение: поиск нескольких паттернов одновременно, плагиат-чекеры.
// =====================================================================

const BASE = 256; // размер алфавита
const MOD = 1_000_000_007; // большое простое для уменьшения коллизий

function rabinKarp(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    if (m > n) return [];
    if (m === 0) return [0];

    // base^(m-1) % MOD — нужно для удаления старшего символа
    let highPow = 1;
    for (let i = 0; i < m - 1; i++) highPow = (highPow * BASE) % MOD;

    let patternHash = 0;
    let windowHash = 0;
    for (let i = 0; i < m; i++) {
        patternHash = (patternHash * BASE + pattern.charCodeAt(i)) % MOD;
        windowHash = (windowHash * BASE + text.charCodeAt(i)) % MOD;
    }

    const matches = [];

    for (let i = 0; i <= n - m; i++) {
        // Хеши совпали — проверяем посимвольно (на случай коллизий)
        if (
            windowHash === patternHash &&
            text.substring(i, i + m) === pattern
        ) {
            matches.push(i);
        }

        // Rolling: убираем text[i], добавляем text[i+m]
        if (i < n - m) {
            windowHash =
                (BASE * (windowHash - text.charCodeAt(i) * highPow) +
                    text.charCodeAt(i + m)) %
                MOD;
            // Защита от отрицательного результата в %
            if (windowHash < 0) windowHash += MOD;
        }
    }

    return matches;
}

console.log(rabinKarp('GEEKS FOR GEEKS', 'GEEK')); // [0, 10]
console.log(rabinKarp('AAAAA', 'AA')); // [0, 1, 2, 3]

module.exports = rabinKarp;
