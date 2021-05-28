import React, { ChangeEvent, ChangeEventHandler, useRef, useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'input',
  // componets: OnOff,
}

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value;
    setValue(actualValue);
  }
  return <><input onChange={onChange} /> - {value} </>;
};

export const GetValueOfUncontrolledInputByButtonPress = () => { // It is preferable to do this.
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  }
  return <><input ref={inputRef} id={'inputId'} /> <button onClick={save}>save</button> - actual value: {value} </>;
};

export const ControlledInputWithFixedValue = () => <input value={'id-incubator.by'} />;


export const ControlledInput = () => {

  const [parentValue, setParentValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };

  return <input value={parentValue} onChange={onChange} />
};

export const ControlledCheckbox = () => {

  const [parentValue, setParentValue] = useState(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  };

  return <input
    type='checkbox'
    onChange={onChange}
    checked={parentValue}
  />
};

export const ControlledSelect = () => {

  const [parentValue, setParentValue] = useState<string | undefined>('2');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };

  return (
    <select
      value={parentValue}
      onChange={onChange}
      >
      <option>none</option>
      <option value={'1'}>Minsk</option>
      <option value={'2'}>Moscow</option>
      <option value={'3'}>Kiev</option>
    </select>
  )
};

