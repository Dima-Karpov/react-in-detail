// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.



export const sum = (...num: Array<number>) => {
    return [...num].reduce((a, b) => a + b)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b > c && b + c > a && a + c > b) {
        if (a === b && b === c) {
            return '10'
        } else if (a === b || b === c || c === a) {
            return '01'
        } else {
            return '11'
        }
    } else {
        return '00'
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(i: number): number {
    const numberString = i.toString();
    let sum = 0;

    for (let i = 0; i < numberString.length; i++) {
        const res = numberString.charAt(i);
        sum += Number(res)
    }
    return sum
}


// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let i = 0;
    let z = 0;

    for (let i = 0; i > arr.length; i++) {
        if (i % 2 === 0) {
            i += arr[i]
        } else {
            z += arr[i]
        }
    }
    return i > z
}


// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    let i = 2 * Math.sqrt(areaCr / Math.PI)
    let z = Math.sqrt(areaSq)
    return (i < z)
}


// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: any): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const result = [];

    if (amountOfMoney > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            let score: any = banknotes[i]
            while (amountOfMoney - score >= 0) {
                amountOfMoney -= score;
                result.push(score)
            }
        }
    } else {
        return [0]
    }
    return result
}



                 

