import React from 'react';
import { useState, useEffect } from 'react';
import { AnalogCLockView } from './AnalogClockView';
import { DigitalCLockView } from './DigitalClockView';

type PropsType = {
    mode?: 'digital' | 'analog'
}



export const Clock: React.FC<PropsType> = React.memo((props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
       const intervalID =  setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }
    }, []);

    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogCLockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalCLockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    )
});

export type CLockViewPorpsType = {
    date: Date
}


