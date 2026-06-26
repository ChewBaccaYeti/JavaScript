// =====================================================================
// Heap Sort / Пирамидальная сортировка
// ---------------------------------------------------------------------
// Идея:
//   1. Строим max-heap из массива (heapify)
//   2. Меняем корень (max) с последним элементом, уменьшаем размер кучи
//   3. Просеиваем новый корень вниз (sift down), повторяем
// Time:  O(n log n) во всех случаях
// Space: O(1)
// Stable: no
// In-place: yes
// Куча — это бинарное дерево в массиве. Для индекса i:
//   parent  = (i - 1) / 2
//   left    = 2*i + 1
//   right   = 2*i + 2
// =====================================================================

function heapSort(arr) {
    const n = arr.length;

    // 1. Build max-heap. Начинаем со среднего (последний non-leaf узел)
    //    O(n) — несмотря на цикл и siftDown внутри, доказывается анализом
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        siftDown(arr, n, i);
    }

    // 2. Извлекаем максимум по одному
    for (let end = n - 1; end > 0; end--) {
        // Меняем корень (max) с последним элементом кучи
        [arr[0], arr[end]] = [arr[end], arr[0]];

        // Восстанавливаем свойство кучи на оставшейся [0..end-1]
        siftDown(arr, end, 0);
    }

    return arr;
}

/**
 * Просеивание вниз: восстанавливает свойство max-heap для поддерева с корнем i.
 * heapSize — текущий "видимый" размер кучи в массиве.
 */
function siftDown(arr, heapSize, i) {
    while (true) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let largest = i;

        if (left < heapSize && arr[left] > arr[largest]) largest = left;
        if (right < heapSize && arr[right] > arr[largest]) largest = right;

        if (largest === i) break; // свойство кучи восстановлено

        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        i = largest;
    }
}

console.log(heapSort([12, 11, 13, 5, 6, 7])); // [5, 6, 7, 11, 12, 13]

module.exports = heapSort;
