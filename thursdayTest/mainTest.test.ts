import React, {} from 'react';
import { calculator, rests, sum } from "./mainTest";


test.skip('add 1 + 2 to equal', () => {
    // 1. Тестовые данные

    const a: number = 10;
    const b: number = 8;

    //2. Выполенение тестируемого кола с тестовыми данными
    const result = sum(a, b);

    //3. Проверка ожидаемого результата
    expect(result).toBe(18);

});

test.skip('sum of two number', () => {
    expect(sum(10, 8)).toBe(18);
});


test.skip('sum of several number', () => {
    expect(rests('', false, 10, 8)).toBe(18);
    expect(rests('', false, 10, 8, 12)).toBe(30);
    expect(rests('', false, 10, 8, 6, 10, 7, 8)).toBe(18);
});

test.skip('calculator', () => {
    expect(calculator(2, 3, {type: 'sum'})).toBe(5)
    expect(calculator(2, 3, {type: 'mult'})).toBe(6)
    expect(calculator(3, 2, {type: 'div'})).toBe(1.5)
    expect(calculator(2, 3, {type: 'sub'})).toBe(-1)
})