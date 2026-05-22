import { f } from './math';

const b = 2.5;

test('x = 1.28', () => {
    expect(f(1.28, b)).toBeCloseTo(0.26, 2);
});

test('x = 3.28', () => {
    expect(f(3.28, b)).toBeCloseTo(0.16, 2);
});

test('x = 0.4', () => {
    expect(f(0.4, b)).toBeCloseTo(0.87, 2);
});

test('x = 1.1', () => {
    expect(f(1.1, b)).toBeCloseTo(0.37, 2);
});

test('x = 2.4', () => {
    expect(f(2.4, b)).toBeCloseTo(0.20, 2);
});

test('x = 3.6', () => {
    expect(f(3.6, b)).toBeCloseTo(0.15, 2);
});

test('x = 1.7', () => {
    expect(f(1.7, b)).toBeCloseTo(0.29, 2);
});

test('x = 3.9', () => {
    expect(f(3.9, b)).toBeCloseTo(0.14, 2);
});
