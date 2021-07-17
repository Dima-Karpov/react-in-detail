import React from 'react';
import { CLockViewPorpsType, get2digitsString } from "./Clock";

export const DigitalCLockView: React.FC<CLockViewPorpsType> = ({ date }) => {

    return (
        <> <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </>
    )
};