import React, { useState } from 'react';


type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
};



export function OnOff(props: PropsType) {



    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
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
        backgroundColor: props.on ? 'white' : 'red',
        cursor: 'pointer',
    };
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    };



    return (
        <div>
            <div style={onStyle} onClick={() => { props.onChange(true) }}>On</div>
            <div style={OffStyle} onClick={() => { props.onChange(false) }}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};