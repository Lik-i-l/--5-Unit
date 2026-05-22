const b: number = 2.5;

const taskA: number[] = [1.28, 3.28, 0.4, 1.1];
const taskB: number[] = [2.4, 3.6, 1.7, 3.9];

export function f(x: number, b: number): number {
    const inner: number = b ** 3 + x ** 3;
    const numerator: number = 1 + Math.sin(inner) ** 2;
    const denominator: number = Math.cbrt(inner);
    return numerator / denominator;
}

console.log("Задача A");
for (let i = 0; i < taskA.length; i++) {
    const y = f(taskA[i], b);
    console.log(`x${i + 1} = ${taskA[i]}, y = ${y.toFixed(4)}`);
}

console.log("Задача B");
for (let i = 0; i < taskB.length; i++) {
    const y = f(taskB[i], b);
    console.log(`x${i + 1} = ${taskB[i]}, y = ${y.toFixed(4)}`);
}
