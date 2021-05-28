import React, { useState } from 'react';


type PropsType = {
    // on: boolean
    onChange: (on: boolean) => void
    defaultOn?: boolean
};



export function UncontrolledOnOff(props: PropsType) {

    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer',
        marginTop: '50px',
    };
    const OffStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
        cursor: 'pointer',
    };
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    };


    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    };

    const OffClicked = () => {
        setOn(false)
        props.onChange(false)
    };


    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={OffStyle} onClick={OffClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};