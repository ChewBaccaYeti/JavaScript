// =====================================================================
// Jump Search / Прыжковый поиск
// ---------------------------------------------------------------------
// Идея: прыгаем по блокам √n, пока не перепрыгнули target.
//       Потом линейный поиск назад в последнем блоке.
// Time:  O(√n) — оптимальный размер прыжка именно √n
// Space: O(1)
// Условие: отсортированный массив
// Применение: когда сравнения дороже jumping (редко на практике)
// =====================================================================

function jumpSearch(arr, target) {
    const n = arr.length;
    if (n === 0) return -1;

    const step = Math.floor(Math.sqrt(n));
    let prev = 0;
    let curr = step;

    // Прыгаем, пока конец блока меньше target
    while (curr < n && arr[curr - 1] < target) {
        prev = curr;
        curr += step;
    }

    // Линейный поиск в блоке [prev, min(curr, n))
    for (let i = prev; i < Math.min(curr, n); i++) {
        if (arr[i] === target) return i;
    }

    return -1;
}

console.log(jumpSearch([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55], 13)); // 7

module.exports = jumpSearch;
