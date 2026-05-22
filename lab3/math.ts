const b: number = 2.5;
const xValues: number[] = [1.28, 3.28, 0.4, 1.1, 2.4, 3.6, 1.7, 3.9];

export function f(x: number, b: number): number {
    const inner: number = b ** 3 + x ** 3;
    const numerator: number = 1 + Math.sin(inner) ** 2;
    const denominator: number = Math.cbrt(inner);
    return numerator / denominator;
}

for (const x of xValues) {
    const y: number = f(x, b);
    console.log(`x = ${x}, y = ${y.toFixed(2)}`);
}
