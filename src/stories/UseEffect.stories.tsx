import React, { useEffect, useState } from "react"
import { clearTimeout } from "timers";

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

    const changer = (state: number) => state + 1;

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(changer)}>fake</button>
            <button onClick={() => setCounter(changer)}>counter</button>
        </>
    )

}


export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1); //[0, function(newValue){}]
    const [counter, setCounter] = useState(1);

    console.log('SetTimeoutExample');

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCounter(changer);
            setFake(changer);
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }

    }, []);

    const changer = (state: number) => state + 1;

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
        </>
    )
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log('SetTimeoutExample');

    useEffect(() => {
        console.log('Effect occurred')

        return () => {
            console.log('Reset Effect : ' + counter)
        }

    }, [counter]);

    const increase = () => { setCounter(counter + 1) };

    return (
        <>
            Hello, counter: {counter} <button onClick={increase}>+</button>
        </>
    )
};


export const KeysTrackerExample = () => {
    const [text, setText] = useState('');

    console.log('Component render with' + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)

            window.addEventListener('keypress', handler)
            return () => {
                window.removeEventListener('keypress', handler)
            }
        }
    }, [text]);

    return (
        <>
            Type text: {text}
        </>
    )
}
export const SetTimeoutExample = () => {
    const [text, setText] = useState('');

    console.log('Component render with' + text);

   useEffect(() => {
    const timeoutID = setTimeout(() => {
           setText('3 seconds passed')
       }, 3000)
       return () => {
           clearTimeout(timeoutID)
       }
   }, [text])
    return (
        <>
            Type text: {text}
        </>
    )
}