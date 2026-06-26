// =====================================================================
// GCD (НОД) / LCM (НОК) — Euclidean algorithm
// ---------------------------------------------------------------------
// GCD(a, b) — greatest common divisor / наибольший общий делитель.
// LCM(a, b) — least common multiple / наименьшее общее кратное.
//
// Теорема: GCD(a, b) = GCD(b, a % b);   GCD(a, 0) = a
// Связь:   LCM(a, b) = |a * b| / GCD(a, b)
//
// Time:  O(log(min(a, b)))
// Space: O(1) iterative
// =====================================================================

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function gcdRecursive(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    return b === 0 ? a : gcdRecursive(b, a % b);
}

function lcm(a, b) {
    if (a === 0 || b === 0) return 0;
    // Сначала делим — защита от переполнения
    return Math.abs(a / gcd(a, b)) * Math.abs(b);
}

// Extended Euclidean: находит x, y такие что a*x + b*y = gcd(a, b)
function gcdExtended(a, b) {
    if (b === 0) return { gcd: a, x: 1, y: 0 };
    const { gcd: g, x: x1, y: y1 } = gcdExtended(b, a % b);
    return { gcd: g, x: y1, y: x1 - Math.floor(a / b) * y1 };
}

console.log(gcd(48, 18)); // 6
console.log(lcm(4, 6)); // 12
console.log(gcdExtended(30, 12)); // { gcd: 6, x: 1, y: -2 }

module.exports = { gcd, gcdRecursive, lcm, gcdExtended };
