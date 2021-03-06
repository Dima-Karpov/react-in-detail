import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { UncontrolledRating } from './UncontrolledRating';

export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating
}

const callback = action('rating change inside component')

export const EmptyUncontrolledRating = () => <UncontrolledRating defaultValue={0} onChange={callback}/>;
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>;
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>;
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>;
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>;
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>;


 
