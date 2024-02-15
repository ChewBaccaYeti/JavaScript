const arr = [];
function numbers() {
    for (let i = 0; i < 60; i++) {
        arr.push(i);
    }
}
console.log(numbers());
console.log(Array.isArray(arr)); // true

const str = 'hello';
const strArray = Array.from(str);
console.log(strArray);

const obj = {
    first: "word",
    second: "term",
    third: "deal",
    [Symbol.iterator]: function () {
        const keys = Object.keys(this);
        let index = 0;
        return {
            next: () => {
                return index < keys.length ?
                    { value: this[keys[index++]], done: false } :
                    { done: true };
            }
        };
    }
};

for (const value of obj) {
    console.log(value);
}

console.log(arr.indexOf(11)); // 10
console.log(arr.indexOf(25, 13)); // 25
console.log(arr.lastIndexOf(12)); // 11
console.log(arr.lastIndexOf(46, 59)); // 46
console.log(arr.fill('Wazowski'));
console.log(arr.toString());

const result = arr.join(' - ');
console.log(result);
const reverse = arr.reverse();
console.log(reverse);