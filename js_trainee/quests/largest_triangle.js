// Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points.
// Answers within 10-5 of the actual answer will be accepted.

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let maxArea = 0; // Переменная для хранения максимальной площади

    // Перебираем все возможные тройки точек
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                let [x1, y1] = points[i]
                let [x2, y2] = points[j]
                let [x3, y3] = points[k]

                let area = Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2
                maxArea = Math.max(maxArea, area)
            }
        }
    }
    console.log(this)
};
console.log(largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]));