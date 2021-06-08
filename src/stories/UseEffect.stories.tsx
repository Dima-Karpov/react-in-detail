import React, { useEffect, useState } from "react"

export default {
    title: 'useEffect demo'
}



export const SimpleExample = () => {
    const [fake, setFake] = useState(1); //[0, function(newValue){}]
    const [counter, setCounter] = useState(1); 

    console.log('SimpleExample');

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = 'User ';
    }, [])
    
    const changer = (state: number) => state +1;

    return(
        <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(changer)}>fake</button>
        <button onClick={() => setCounter(changer)}>counter</button>
        
        </>
    )
    
} 
export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1); //[0, function(newValue){}]
    const [counter, setCounter] = useState(1); 

    console.log('SetTimeoutExample');

    useEffect(() => {
       setInterval(() => {
         setCounter(changer);
         setFake(changer);
       }, 1000);

    }, []);
    
    const changer = (state: number) => state +1;

    return(
        <>
        Hello, counter: {counter} - fake: {fake}
       
        
        </>
    )
    
} 