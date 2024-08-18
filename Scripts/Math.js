//! Методы вычисления Math

// Math.abs() method returns the absolute value of a number
function abs() {
    let a = Math.abs(7.25);
    let b = Math.abs(-7.25);
    let c = Math.abs(null); // вернет 0 так как 0 это ложь
    let d = Math.abs("Hello");
    let e = Math.abs(2 - 3);
    let f = Math.abs(true); // вернет 1 так как 1 это истина

    console.log('Math.abs():', a, b, c, d, e, f);
};
abs();

/**
 * The Math.acos() method returns the arccosine (in radians) of a number.
The Math.acos() method returns a value value between 0 and PI.
The Math.acos() method expects a parameter in the range -1 to 1.
Math.acos(-1) returns PI.
Math.acos(0) returns PI/2.
Math.acos(1) returns 0.
*/
function acos() {
    let w = Math.acos(-1);
    let x = Math.acos(0);
    let y = Math.acos(1);
    let z = Math.acos(1.1); // это число уже выходит за лимит ожидаемого отрезка чисел, тоесть, от -1 до 1 и поэтому будет NaN

    const ARCCOSINE = [
        `w:${w}`,
        ` x:${x}`,
        ` y:${y}`,
        ` z:${z}`, // NaN
    ];

    // console.log(w, x, y, z);
    console.log(`acos: ${ARCCOSINE}`);
};
acos();

// Math.acosh() method returns the hyperbolic arc-cosine of a number
function acosh() {
    let w = Math.acosh(1);
    let x = Math.acosh(2);
    let y = Math.acosh(3);
    let z = Math.acosh(4);

    const HYPERBOLA = [
        `w=${w}`,
        ` x=${x}`,
        ` y=${y}`,
        ` z=${z}`,
    ];

    // console.log(w, x, y, z);
    console.log(`acosh: ${HYPERBOLA}`);
};
acosh();

/**
 * The Math.asin() method returns the arcsine (in radians) of a number.
 *  The Math.asin() method returns a value between -PI/2 and PI/2.
 *  The Math.asin() method expects a parameter in the range -1 to 1.
 *  Math.asin(-1) returns -PI/2.
 *  Math.asin(0) returns 0.
 *  Math.asin(1) returns PI/2.
*/
function asin() {
    let w = Math.asin(-1);
    let x = Math.asin(0);
    let y = Math.asin(1);
    let z = Math.asin(1.5); // Идентично для acos (для наглядности), также NaN, смотри комментарий выше

    const ARCSINE = [
        `w:${w}`,
        ` x:${x}`,
        ` y:${y}`,
        ` z:${z}`, // NaN
    ];

    // console.log(w, x, y, z);
    console.log(`asin: ${ARCSINE}`);
};
asin();

// Math.asinh() method returns the hyperbolic arc-sine of a number
function asinh() {
    let w = Math.asinh(-1);
    let x = Math.asinh(0);
    let y = Math.asinh(1);
    let z = Math.asinh(2);

    const HYPERBOLA = [
        `w=${w}`,
        ` x=${x}`,
        ` y=${y}`,
        ` z=${z}`,
    ];

    // console.log(w, x, y, z);
    console.log(`asinh: ${HYPERBOLA}`);
};
asinh();

// Math.atan() method returns the arctangent of a number as a value between -PI/2 and PI/2 radians
function atan() {
    let w = Math.atan(-1)
    let x = Math.atan(0);
    let y = Math.atan(1);
    let z = Math.atan(2);

    const ARCTANGENT = [
        `w:${w}`,
        ` x:${x}`,
        ` y:${y}`,
        ` z:${z}`,
    ];

    // console.log(w, x, y, z);
    console.log(`atan: ${ARCTANGENT}`);
};
atan();

/**
 * The Math.atan2() method returns the arctangent of the quotient of its arguments, as a numeric value between PI and -PI radians.
 *  The number returned represents the counterclockwise angle in radians (not degrees) between the positive X axis and the point (x, y).
 *  Note: With atan2(), the y coordinate is passed as the first argument and the x coordinate is passed as the second argument.
*/
function atan2() {
    let w = Math.atan2(1, 9);
    let x = Math.atan2(2, 8);
    let y = Math.atan2(3, 7);
    let z = Math.atan2(4, 6);

    const ARCTANGENT2 = [
        `w=${w}`,
        ` x=${x}`,
        ` y=${y}`,
        ` z=${z}`,
    ];

    // console.log(w, x, y, z);
    console.log(`atan2: ${ARCTANGENT2}`);
};
atan2();

/**
 * The Math.atanh() method returns the hyperbolic arctangent of a number.
 *  The Math.atanh() method expects a number between -1 and 1.
 *  The Math.atanh() method returns Infinity if the number is 1.
 *  The Math.atanh() method returns -Infinity if the number is -1.
*/
function atanh() {
    let w = Math.atanh(0);
    let x = Math.atanh(0.5);
    let y = Math.atanh(1);
    let z = Math.atanh(2);

    const HYPERBOLA = [
        `w=${w}`,
        ` x=${x}`,
        ` y=${y}`, // Infinity
        ` z=${z}`, // NaN
    ];

    // console.log(w, x, y, z);
    console.log(`atanh: ${HYPERBOLA}`);
};
atanh();

// Math.ceil() method rounds a number rounded UP to the nearest integer
function ceil() {
    let a = Math.ceil(0.60);
    let b = Math.ceil(0.40);
    let c = Math.ceil(5);
    let d = Math.ceil(5.1);
    let e = Math.ceil(-5.1);
    let f = Math.ceil(-5.9);

    console.log('Math.ceil():', a, b, c, d, e, f);
};
ceil();

// Math.floor() method rounds a number DOWN to the nearest integer
function floor() {
    let a = Math.floor(0.60);
    let b = Math.floor(0.40);
    let c = Math.floor(5);
    let d = Math.floor(5.1);
    let e = Math.floor(-5.1);
    let f = Math.floor(-5.9);

    console.log('Math.floor():', a, b, c, d, e, f);
    console.log(Math.floor(Math.random() * 10) + 1); // Return a whole number between 1 && 10 (inclusive)
};
floor();

// Math.random() method returns a random floating point number between 0 (inclusive) and 1 (exclusive)
function random() {
    let a = Math.random(); // float between 0 && 1, default
    let b = Math.random() * 10; // float between 0 && 10
    let c = Math.random() * 100; // float between 0 && 100
    let d = Math.random() * 1000; // float between 0 && 1000
    let e = Math.floor((Math.random() * 10) + 1);
    let f = Math.floor((Math.random() * 100) + 1);

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e); // A random whole number between 1 and 10 (inclusive)
    console.log(f); // A random whole number between 1 and 100 (inclusive)
    console.log('Math.random():', a, b, c, d, e, f);
};
random();

// Math.round() method rounds a number to the nearest integer
function round() {
    let a = Math.round(2.60);
    let b = Math.round(2.50);
    let c = Math.round(2.49);
    let d = Math.round(-2.60);
    let e = Math.round(-2.50);
    let f = Math.round(-2.49);

    console.log('Math.round():', a, b, c, d, e, f);
};
round();

// Math.pow() method returns the value of x to the power of y (xy)
function pow() {
    let a = Math.pow(0, 1);
    let b = Math.pow(1, 1);
    let c = Math.pow(1, 10);
    let d = Math.pow(3, 3);
    let e = Math.pow(-3, 3);
    let f = Math.pow(2, 4);

    console.log('Math.pow():', a, b, c, d, e, f);
};
pow();

// Math.cbrt() method returns the cubic root of a number
function cbrt() {
    let x = Math.cbrt(125);

    console.log('Math.cbrt():', x); // 5
};
cbrt();

// Math.fround() method returns the nearest 32-bit single precision float representation of a number
function fround() {
    let a = Math.fround(2.60);
    let b = Math.fround(2.50);
    let c = Math.fround(2.49);
    let d = Math.fround(-2.60);
    let e = Math.fround(-2.50);
    let f = Math.fround(-2.49);

    console.log('Math.fround():', a, b, c, d, e, f);
};
fround();

// Math.exp() method returns the value of Ex, where E is Euler's number (approximately 2.7183) and x is the number passed to it
// Math.E property returns Euler's number
function exp() {
    let a = Math.exp(1);
    let b = Math.exp(-1);
    let c = Math.exp(5);
    let d = Math.exp(10);
    let e = Math.exp(3);
    let f = Math.exp(6);

    const E = () => {
        let x = Math.E;
        console.log('Euler`s number:', x);
    }

    console.log('Math.exp():', a, b, c, d, e, f);
    E();
};
exp();

// Math.log() method returns the natural logarithm (base E) of a number
function log() {
    let a = Math.log(2.7183);
    let b = Math.log(2);
    let c = Math.log(1);
    let d = Math.log(0);
    let e = Math.log(-1);

    console.log('log():', a, b, c, d, e);
};
log();