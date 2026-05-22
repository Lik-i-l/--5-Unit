import { f } from './math';

const b = 2.5;

test('проверка 3.9', () => {
    const result = f(3.9, b);
    console.log(`Результат f(3.9, 2.5) = ${result}`);
    expect(result).toBeCloseTo(0.14, 2);
});
