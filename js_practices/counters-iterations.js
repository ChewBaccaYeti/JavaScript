/*
 * СЧЁТЧИКИ И ИТЕРАЦИИ
 * =====================================================================
 * Три вопроса перед выбором инструмента:
 *   1. Нужен ли мне индекс (i)?     → for(;;)
 *   2. Нужно ли прервать цикл?      → for(;;) или while
 *   3. Просто пройтись по значениям → for...of / forEach / map
 */

// ─── 1. КЛАССИЧЕСКИЙ FOR — счётчик явный ─────────────────────────────────────

const fruits = ['apple', 'banana', 'cherry', 'date'];

/*
for (value definition; condition; accumulator) {
    _action_
}
 */
for (let index = 0; index < fruits.length; index++) {
    console.log(index, fruits[index]); // i = счётчик итераций
};

// Счётчик вверх ++
/*
for (count value, counter condition; accumulator) {
    __action__-counting up++
}
 */
for (let count = 0; count <= 5; count++) {
    console.log('count up:', count);
};

// Счётчик вниз
for (let count = 5; count >= 0; count--) {
    console.log('count down:', count);
};

for (let i = 0; i <= 10; i += 2) { // double accumulating
    console.log('even:', i); // 0,2,4,6,8,10
};

// ─── 2. FOR...OF — счётчик не нужен ──────────────────────────────────────────

for (const fruit of fruits) {
    console.log(fruit); // значение, без индекса
};

// Нужен и индекс и значение? entries() Похоже на обычный for
for (const [index, fruit_item] of fruits.entries()) {
    console.log(index, fruit_item);
};

// ─── 3. WHILE — счётчик с условием ───────────────────────────────────────────

let i = 0;
while (i < fruits.length) {
    console.log('while:', fruits[i]);
    i++; // ОБЯЗАТЕЛЬНО — иначе бесконечный цикл
};

// do...while — выполняется минимум 1 раз
let attempt = 0;
do {
    console.log('attempt:', attempt);
    attempt++;
} while (attempt < 3);

// ─── 4. СЧЁТЧИК ВНУТРИ REDUCE ────────────────────────────────────────────────

const scores = [7, 3, 9, 5, 8, 2, 9, 7, 8];

// Считаем количество элементов > 6
const highScoresCount = scores.reduce((count, score) => {
    return score > 6 ? count + 1 : count;
}, 0);
console.log('high scores:', highScoresCount); // 5

// Считаем вхождения каждого значения
const tally = scores.reduce((acc, score) => {
    acc[score] = (acc[score] || 0) + 1; // счётчик для каждого ключа
    return acc;
}, {});
console.log('tally:', tally); // { '2': 1, '3': 1, '5': 1, '7': 2, '8': 2, '9': 2 }

// ─── 5. ВЛОЖЕННЫЕ ЦИКЛЫ ──────────────────────────────────────────────────────

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        process.stdout.write(matrix[row][col] + ' ');
    }
    console.log(); // перенос строки
};

// ─── УПРАЖНЕНИЯ ───────────────────────────────────────────────────────────────

const players = [
    { name: 'Mango', points: 54, online: false },
    { name: 'Poly', points: 92, online: true },
    { name: 'Kiwi', points: 48, online: true },
    { name: 'Ajax', points: 71, online: false },
    { name: 'Chelsy', points: 48, online: true },
];

// ЗАДАЧА 1: for(;;)
// Выведи имена игроков с индексом: "0: Mango", "1: Poly" ...
// Используй классический for

function printPlayersWithIndex(players) {
    for (let i = 0; i < players.length; i++) {
        console.log(`Players names with index: ${i}: ${players[i].name}`);
    }
};
printPlayersWithIndex(players);

// ЗАДАЧА 2: for...of
// Посчитай количество онлайн-игроков (online: true)
// Верни число

function countOnline(players) {
    let count = 0;
    for (const player of players) {
        if (player.online) {
            count++;
        }
    }
    return count;
};
console.log('online count:', countOnline(players)); // 3

// ЗАДАЧА 3: while
// Найди первого игрока с points > 70
// Верни его имя, используй while + счётчик i

function findTopPlayer(players) {
    let i = 0;
    while (i < players.length) {
        if (players[i].points > 70) return players[i].name
        i++;
    }
};
console.log('top player:', findTopPlayer(players)); // Poly

// ЗАДАЧА 4: reduce как счётчик
// Посчитай суммарные очки только онлайн-игроков

function totalOnlinePoints(players) {
    return players.reduce((total, player) => {
        return total + (player.online ? player.points : 0)
    }, {});
}
console.log('online points:', totalOnlinePoints(players)); // 92+48+48 = 188

// ЗАДАЧА 5: вложенные итерации
// Из массива тегов [['js','node'],['css'],['js','react','css']]
// Посчитай сколько раз встречается каждый тег (как в tally выше)

const tagGroups = [['js', 'node'], ['css'], ['js', 'react', 'css']];

function countTagsReduce(tagGroups) {
    const tallyReduce = tagGroups.reduce((accumulator, tag) => {
        accumulator[tag] = (accumulator[tag] || 0) + 1;
        return accumulator
    }, 0);
    return tallyReduce;
}
console.log('tags.reduce:', countTagsReduce(tagGroups));

function countTagsFor(tagGroups) {
    const tallyFor = {}
    for (const tags of tagGroups) {
        for (const tag of tags) {
            tallyFor[tag] = (tallyFor[tag] || 0) + 1;
        }
    }
    return tallyFor;
}
console.log('tags for:', countTagsFor(tagGroups)); // { js: 2, node: 1, css: 2, react: 1 }

// =============================================================================
// REDUCE — УПРАЖНЕНИЯ ПО УРОВНЯМ
// =============================================================================

// ─── УРОВЕНЬ 1: ЧИСЛА ────────────────────────────────────────────────────────

const nums = [3, 7, 1, 9, 4, 6, 2, 8, 5];
const initValue = 0;

// R1: Найди сумму всех чисел
// ожидание: 45
function sumAll(nums) {
    return nums.reduce((accumulator, currentInt) => {
        return accumulator + currentInt
    }, initValue);
}
console.log('R1 sum:', sumAll(nums));

// R2: Найди максимальное число
// ожидание: 9
// подсказка: Math.max(acc, n) возвращает большее из двух
function findMax(nums) {
    return nums.reduce((accumulator, currentInt) => {
        return Math.max(accumulator, currentInt)
    }, initValue);
}
console.log('R2 max:', findMax(nums));

// R3: Посчитай количество чётных чисел
// ожидание: 4  (4,6,2,8)
function countEvens(nums) {
    return nums.reduce((accumulator, currentInt) => {
        return accumulator + currentInt * !(currentInt & 1)
    }, initValue);
}
console.log('R3 evens:', countEvens(nums));

// ─── УРОВЕНЬ 2: МАССИВЫ ──────────────────────────────────────────────────────

const words = ['hello', 'world', 'foo', 'bar', 'javascript'];

// R4: Собери только слова длиннее 3 букв в новый массив
// ожидание: ['hello', 'world', 'javascript']
// подсказка: accumulator — массив [], добавляй через [...acc, item]
function longWords(words) {
    return words.reduce((accumulator, currentWord) => {
        if (currentWord.length > 3) {
            accumulator.push(currentWord)
        }
        return accumulator
    }, []);
}
console.log('R4 long:', longWords(words));

// R5: Переверни массив через reduce (без .reverse())
// ожидание: ['javascript', 'bar', 'foo', 'world', 'hello']
// подсказка: каждый новый элемент ставь В НАЧАЛО: [item, ...acc]
function reverseArr(words) {
    return words.reduce((accumulator, currentWord) => {
        accumulator.unshift(currentWord)
        return accumulator
    }, []);
}
console.log('R5 reversed:', reverseArr(words));

// ─── УРОВЕНЬ 3: ОБЪЕКТЫ ──────────────────────────────────────────────────────

const orders = [
    { id: 1, product: 'apple', price: 30, qty: 3 },
    { id: 2, product: 'banana', price: 20, qty: 5 },
    { id: 3, product: 'apple', price: 30, qty: 2 },
    { id: 4, product: 'cherry', price: 80, qty: 1 },
    { id: 5, product: 'banana', price: 20, qty: 4 },
];

// R6: Посчитай итоговую сумму всех заказов (price * qty)
// ожидание: 30*3 + 20*5 + 30*2 + 80*1 + 20*4 = 410
function totalRevenue(orders) {
    return orders.reduce((accumulator, currentSum, index, array) => {
        return accumulator + (currentSum.price * currentSum.qty)
    }, initValue);
}
console.log('R6 revenue:', totalRevenue(orders));

// R7: Сгруппируй заказы по продукту
// ожидание: { apple: [...], banana: [...], cherry: [...] }
// подсказка: acc — объект {}, acc[order.product] — массив заказов этого продукта
function groupByProduct(orders) {
    return orders.reduce((acc, order, index, array) => {
        // если ключа ещё нет — создай пустой массив
        if (!acc[order.product]) {
            acc[order.product] = []
        }   // потом добавь order в этот массив
        acc[order.product].push(order)
        // верни acc
        return acc;
    }, {});
}
console.log('R7 grouped:', groupByProduct(orders));

// ─── УРОВЕНЬ 4: КОМБО ────────────────────────────────────────────────────────

const students = [
    { name: 'Anna', grades: [90, 85, 92] },
    { name: 'Boris', grades: [70, 60, 75] },
    { name: 'Clara', grades: [95, 98, 100] },
    { name: 'Denis', grades: [50, 55, 60] },
];

// R8: Для каждого студента посчитай средний балл,
// верни массив объектов { name, avg }
// ожидание: [{ name: 'Anna', avg: 89 }, ...]
// подсказка: внутри reduce — считай сумму grades через grades.reduce(...)
function calcAverages(students) {
    return students.reduce((acc, student) => {
        const sum = student.grades.reduce((total, avgGrade) => {
            return total + avgGrade
        }, initValue);
        const avg = Math.round(sum) / student.grades.length
        return [...acc, { name: student.name, avgGrade: avg }];
    }, []);
}
console.log('R8 averages:', calcAverages(students));

// R9: Найди студента с наивысшим средним баллом, верни его имя
// ожидание: 'Clara'
// подсказка: accumulator — первый студент, сравнивай средние на каждом шаге
function topStudent(students) {
    const avgRound = (grades) =>
        Math.round(grades.reduce((sum, grade) => sum + grade, 0) / grades.length);

    return students.reduce((maxStudent, currentStudent) => {
        const currentAvg = avgRound(currentStudent.grades);
        const maxAvg = avgRound(maxStudent.grades);
        return currentAvg > maxAvg ? currentStudent : maxStudent;
    }).name;
}
console.log('R9 top student:', topStudent(students));

/*
 * РЕШЕНИЯ REDUCE — раскомментируй когда решишь сам
 *
 * R1: (acc, n) => acc + n
 *
 * R2: (acc, n) => Math.max(acc, n)
 *
 * R3: (acc, n) => n % 2 === 0 ? acc + 1 : acc
 *
 * R4: (acc, w) => w.length > 3 ? [...acc, w] : acc
 *
 * R5: (acc, w) => [w, ...acc]
 *
 * R6: (acc, o) => acc + o.price * o.qty
 *
 * R7:
 * if (!acc[order.product]) acc[order.product] = [];
 * acc[order.product].push(order);
 * return acc;
 *
 * R8:
 * const avg = student.grades.reduce((s, g) => s + g, 0) / student.grades.length;
 *
 * R9:
 * return avg(student.grades) > avg(best.grades) ? student : best;
 */

// =============================================================================

/*
 * РЕШЕНИЯ — раскомментируй когда решишь сам
 *
 * Задача 1:
 * for (let i = 0; i < players.length; i++) {
 *     console.log(`${i}: ${players[i].name}`);
 * }
 *
 * Задача 2:
 * for (const player of players) {
 *     if (player.online) count++;
 * }
 *
 * Задача 3:
 * while (i < players.length) {
 *     if (players[i].points > 70) return players[i].name;
 *     i++;
 * }
 *
 * Задача 4:
 * return total + (player.online ? player.points : 0);
 *
 * Задача 5:
 * for (const tags of tagGroups) {
 *     for (const tag of tags) {
 *         tally[tag] = (tally[tag] || 0) + 1;
 *     }
 * }
 */

const engineeringTeam = [
    { name: "Jacob Taylor", rank: 4, status: "OFF-BOARD", role: "Security Officer" },
    { name: "Miranda Lowson", rank: 3, status: "ON-DECK", role: "Security Chief" },
    { name: "Isaac Clarke", rank: 1, status: "ON-DECK", role: "Chief Engineer" },
    { name: "Amanda Madnight", rank: 5, status: "OFF-BOARD", role: "Decontamination Processor" },
    { name: "Geth Legions", rank: 2, status: "SHIFT", role: "Software Assets" },
    { name: "Allan Honzales", rank: 5, status: "ON-DECK", role: "Fire Safety" },
    { name: "Yuriy Gagarin", rank: 1, status: "SHIFT", role: "Chief Engineer/Deputy" },
    { name: "Otari Maximashvili", rank: 2, status: "SHIFT", role: "Observation Control" },
    { name: "Ashley Quinix", rank: 6, status: "OFF-BOARD", role: "Engine Assistant" },
    { name: "Samara Kasumi", rank: 4, status: "MEDICAL-OFF", role: "Engine Control" },
    { name: "Tain Krios", rank: 2, status: "BAY-CHECK", role: "Stasis Control" },
    { name: "Garrus Vakarian", rank: 4, status: "BAY-CHECK", role: "Relays Control" },
];

function teamStatus() {
    let off_Board = []
    let on_Deck = []
    let on_Shift = []
    let rest = []

    for (const key in engineeringTeam) {
        const name = engineeringTeam[key].name
        const status = engineeringTeam[key].status
        console.log(`Mate: ${name}, REASON: ${status}`)

        for (const { name, status } of engineeringTeam) {
            if (status === "OFF-BOARD") {
                off_Board.push(name)
                console.log("-----------------------OFF-BOARD-------------------------")
                console.log(`Mate out of the deck: ${name}, REASON: ${status}`)
            } else if (status === "ON-DECK") {
                on_Deck.push(name)
                console.log("---------------------ON-DECK-----------------------")
                console.log(`Mate on the deck: ${name}, REASON: ${status}`)
            } else if (status === "SHIFT") {
                on_Shift.push(name)
                console.log("-------------------ON-SHIFT---------------------")
                console.log(`Mate at duty: ${name}, REASON: ${status}`)
            } else {
                rest.push(name)
                console.log("---------------REST-----------------")
                console.log(`Rest: ${name}, REASON: ${status}`)
            }
        }
    }
    console.table("OFF-BOARD: " + off_Board)
    console.table("ON-DECK: " + on_Deck)
    console.table("SHIFT: " + on_Shift)
    console.table("REST: " + rest)
};
teamStatus();
/*
    Mate out of the deck: Jacob Taylor, REASON: OFF-BOARD
    Mate out of the deck: Amanda Madnight, REASON: OFF-BOARD
    Mate out of the deck: Ashley Quinix, REASON: OFF-BOARD
 */
