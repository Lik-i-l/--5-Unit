const b: number = 2.5;
const xValues: number[] = [1.28, 3.28, 0.4, 1.1, 2.4, 3.6, 1.7, 3.9];

function f(x: number, b: number): number {
    const inner: number = b ** 3 + x ** 3;
    const numerator: number = 1 + Math.sin(inner) ** 2;
    const denominator: number = Math.cbrt(inner);
    return numerator / denominator;
}

console.log("Задание 2: функция f с массивом xValues");
for (let i = 0; i < xValues.length; i++) {
    const y = f(xValues[i], b);
    console.log(`x${i + 1} = ${xValues[i]}, y = ${y.toFixed(4)}`);
}
