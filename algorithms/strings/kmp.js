// =====================================================================
// KMP / Knuth-Morris-Pratt — поиск подстроки
// ---------------------------------------------------------------------
// Наивный поиск: O(n*m). KMP: O(n + m).
//
// Идея: при несовпадении символа НЕ начинаем заново от следующей позиции,
//       а используем LPS-таблицу (Longest Proper Prefix which is Suffix),
//       чтобы пропустить уже сравнённые символы.
//
// LPS[i] = длина наибольшего собственного префикса pattern[0..i],
//          совпадающего с суффиксом
//
// Time:  O(n + m)
// Space: O(m)
// =====================================================================

/**
 * Строим LPS-таблицу для pattern.
 */
function buildLPS(pattern) {
    const m = pattern.length;
    const lps = new Array(m).fill(0);
    let len = 0; // длина текущего совпадающего префикса
    let i = 1;

    while (i < m) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else if (len !== 0) {
            // Отступаем — пробуем более короткий префикс
            len = lps[len - 1];
        } else {
            lps[i] = 0;
            i++;
        }
    }

    return lps;
}

/**
 * Возвращает все индексы вхождений pattern в text.
 */
function kmpSearch(text, pattern) {
    if (pattern.length === 0) return [0];

    const lps = buildLPS(pattern);
    const matches = [];
    let i = 0; // указатель в text
    let j = 0; // указатель в pattern

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
            if (j === pattern.length) {
                matches.push(i - j);
                j = lps[j - 1]; // продолжаем искать перекрывающиеся
            }
        } else if (j !== 0) {
            j = lps[j - 1]; // используем LPS — главная фишка KMP
        } else {
            i++;
        }
    }

    return matches;
}

console.log(buildLPS('ABABAC')); // [0, 0, 1, 2, 3, 0]
console.log(kmpSearch('ABABDABACDABABCABAB', 'ABABC')); // [10]
console.log(kmpSearch('AAAAAA', 'AA')); // [0, 1, 2, 3, 4]

module.exports = { buildLPS, kmpSearch };
