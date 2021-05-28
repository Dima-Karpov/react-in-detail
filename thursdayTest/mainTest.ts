import { type } from 'node:os';
import React, { } from 'react';

export function sum(a: number, b: number): number {
    return a + b;
};
export function mult(a: number, b: number): number {
    return a * b;
};
export function div(a: number, b: number): number {
    return a / b;
};
export function sub(a: number, b: number): number {
    return a - b;
};

type actionType = { type: 'sum' | 'mult' | 'div' | 'sub' }

export function calculator(a: number, b: number, action: actionType) {
    switch (action.type) {
        case 'sum':
            return a + b;
        case 'mult':
            return a * b;
        case 'div':
            return a / b;
        case 'sub':
            return a - b;
        default:
            return new Error('Unknown action')

    }
}

export function rests(a: string, b: boolean, ...numbers: Array<number>) {
    return (
        numbers.reduce((acc, el) => acc + el, 0)
    )
};

export type StudentType = {
    name: string
    isStudent: boolean
    friends: Array<string>
}

export const addFriends = (students: Array<StudentType>): Array<StudentType> => {

    const studentName = students.map(s => s.name)
    return students.map(st => {
        const nameWithoutSt = studentName.filter(name => name !== st.name)

        return {
            ...st,
            friends: nameWithoutSt
        }
    })
}

