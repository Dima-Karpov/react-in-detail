import React from 'react';
import { CLockViewPorpsType } from "./Clock";
import  './AnalogClockView.css';

export const AnalogCLockView: React.FC<CLockViewPorpsType> = ({ date }) => {
    return (
       <div className={'clock'}>
           <div className={'analog-clock'}>
                <div className={'dial seconds'}/>
                <div className={'dial minutes'}/>
                <div className={'dial hours'}/>
           </div>
       </div>
    )
};