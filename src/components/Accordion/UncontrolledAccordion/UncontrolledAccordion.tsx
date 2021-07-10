import React, { useReducer, useState } from 'react';
import { reducer, TOGGLE_COLLAPSED } from './reducer';

type AccordionPropsType = {
    titleValue: string
    //   collapsedMenu: boolean
};

export const UncontrolledAccordion = React.memo((props: AccordionPropsType) => {


    // const [collapsedMenu, setCollapsedMenu] = useState<boolean>(false)
    const [state, dispatch] = useReducer(reducer, {collapsedMenu: false})

    return (
        <div>
            {/* <AccordionTitle
                title={props.titleValue}
                setCollapsedMenu={setCollapsedMenu}
                collapsedMenu={collapsedMenu}
            /> */}

            <AccordionTitle
            title ={props.titleValue}
             onClick={() => {dispatch({type: TOGGLE_COLLAPSED}) }}
             />
            {!state.collapsedMenu && <AccordionBody />}
        </div>
    );
});

type AccordionTitlePropsType = {
    title: string
    // setCollapsedMenu: (collapsedMenu: boolean) => void
    // collapsedMenu: any // было boolean
    onClick: () => void

}

export const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    return (
        <h2 onClick={() => { props.onClick() }}>{props.title}</h2>
    );
});

export const AccordionBody = React.memo(() => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
});