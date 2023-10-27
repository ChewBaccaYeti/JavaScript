function parseIntFunc(string) {
    return parseInt(string);
}
console.log(parseIntFunc('0047')); // 47

function parseIntBinary(string) {
    return parseInt(string, 2);
}
console.log(parseIntBinary('10011011001011')); // 9931

function findGreater(a, b) {
    if (a > b) {
        return 'a is greater';
    } else {
        return 'b is greater or equal';
    }
}

function findGreaterByOneString(a, b) {
    return a > b ? 'a is greater' : 'b is greater or equal';
}

function checkEqual(a, b) {
    return a === b ? 'Equal' : 'Not Equal';
}
console.log(checkEqual(1, 2));

function findGreaterOrEqual(a, b) {
    if (a === b) {
        return 'a and b are equal';
    } else if (a > b) {
        return 'a is greater';
    } else {
        return 'b is greater';
    }
}

function findGreaterOrEqualByString(a, b) {
    return a === b
        ? 'a and b are equal'
        : a > b
        ? 'a is greater'
        : 'b is greater';
}

function checkSign(num) {
    return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}

console.log(checkSign(10));
console.log(checkSign(-12));

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));

function countdown(n) {
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}
console.log(countdown(10)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

/* 
В данном случае рекурсии происходит следующее - функция countdown принимает 10 в качестве аргумента, 
    в тернарном операторе возвращает массив, если параметр меньше 1, 
    а в противном случае возвращает массив с двумя параметрами, 
    который начинаетс с n=10, тоесть с 10 и распыляет функцию countdown которая в этот момент получает в качесте аргумента 10 - 1 
    и так до тех пор пока n не будет равно 1.
Из этого я получаю массив чисел который отсчитывает себя от начального 10 до желаемого 1
*/

function rangeOfNumbers(startNum, endNum) {
    return endNum < startNum
        ? []
        : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}
console.log(rangeOfNumbers(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* 
Если endNum меньше startNum, функция возвращает пустой массив, останавливая рекурсию.
В противном случае функция рекурсивно вызывает саму себя, уменьшая endNum на 1 на каждом шаге, 
    пока endNum не станет меньше startNum.
Когда endNum становится меньше или равно startNum, функция возвращает массив, 
    состоящий из всех чисел в диапазоне от startNum до endNum, включая и endNum.
*/
