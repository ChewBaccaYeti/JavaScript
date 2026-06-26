// =====================================================================
// Z-algorithm
// ---------------------------------------------------------------------
// Z-массив: Z[i] = длина наибольшего префикса s, совпадающего с
//                  s[i..], т.е. s[0..Z[i]-1] === s[i..i+Z[i]-1]
//
// Применение: поиск подстроки за O(n+m).
//   Конкатенируем pattern + "$" + text. Если Z[i] === m → нашли вхождение.
//
// Time:  O(n)
// Space: O(n)
// =====================================================================

function zFunction(s) {
    const n = s.length;
    const z = new Array(n).fill(0);
    let l = 0;
    let r = 0; // [l, r] — текущий Z-блок

    for (let i = 1; i < n; i++) {
        // Внутри блока — используем уже посчитанное
        if (i < r) {
            z[i] = Math.min(r - i, z[i - l]);
        }
        // Расширяем
        while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
            z[i]++;
        }
        // Обновляем блок если расширили правее
        if (i + z[i] > r) {
            l = i;
            r = i + z[i];
        }
    }

    return z;
}

function zSearch(text, pattern) {
    const combined = pattern + '$' + text;
    const z = zFunction(combined);
    const matches = [];
    const m = pattern.length;

    for (let i = m + 1; i < combined.length; i++) {
        if (z[i] === m) {
            matches.push(i - m - 1);
        }
    }
    return matches;
}

console.log(zFunction('aabcaab')); // [0, 1, 0, 0, 3, 1, 0]
console.log(zSearch('aabaacaabaa', 'aab')); // [0, 5]

module.exports = { zFunction, zSearch };
