import { f } from './index';

const b = 2.5;

// Задача А
test('A: x1 = 1.28', () => expect(f(1.28, b)).toBeCloseTo(0.6965, 2));
test('A: x2 = 3.28', () => expect(f(3.28, b)).toBeCloseTo(0.3679, 2));
test('A: x3 = 0.4', () => expect(f(0.4, b)).toBeCloseTo(0.3996, 2));
test('A: x4 = 1.1', () => expect(f(1.1, b)).toBeCloseTo(0.7393, 2));

// Задача Б
test('Б: x1 = 2.4', () => expect(f(2.4, b)).toBeCloseTo(0.5994, 2));
test('Б: x2 = 3.6', () => expect(f(3.6, b)).toBeCloseTo(0.3214, 2));
test('Б: x3 = 1.7', () => expect(f(1.7, b)).toBeCloseTo(0.7253, 2));
test('Б: x4 = 3.9', () => expect(f(3.9, b)).toBeCloseTo(0.2828, 2));
