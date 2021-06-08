import React, { useMemo, useState } from "react"

export default {
    title: 'useState demo'
};

function generateData(){
    return 0
};

export const Example1 = () => {
    console.log('Example1');
    const [counter, setCounter] = useState<number>(generateData); //[0, function(newValue){}]
 
    const changer = (state: number) => state +1;

    return(
        <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
        </>
    )
} 