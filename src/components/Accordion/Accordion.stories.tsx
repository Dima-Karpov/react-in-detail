import React, { useState } from 'react';
import {action} from '@storybook/addon-actions'
import { Accordion } from './Accordion';

export default {
 title: 'Accordion',
 component: Accordion
};

const callback = action('on or off clicked');   
const onClickCallback = action('some item was clicked');

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsedMenu={true} onChange={callback} items={[]} onClick={onClickCallback}/>;
export const UserCollapsedMode = () => <Accordion
                                            titleValue={'Users'}
                                            collapsedMenu={false}
                                            onChange={callback}
                                            items={[
                                                { title: 'Dimych', value: 1 },
                                                { title: 'Natasha', value: 2 },
                                                { title: 'Any', value: 3 },
                                                { title: 'Artem', value: 4 }
                                            ]}
                                            onClick={onClickCallback}
                                        />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        titleValue={'Users'}
        collapsedMenu={value}
        onChange={() => setValue(!value)}
        items={[
            { title: 'Dimych', value: 1 },
            { title: 'Natasha', value: 2 },
            { title: 'Any', value: 3 },
            { title: 'Artem', value: 4 }
        ]}
        onClick={(value) => {alert(`user with ID ${value} should be happy`)}}
    />; 
};

