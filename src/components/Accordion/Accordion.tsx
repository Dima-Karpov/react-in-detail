import React from 'react';

type ItemType = {
  title: string
  value: any
}

type AccordionPropsType = {
  titleValue: string
  collapsedMenu: boolean
  onChange: () => void
  items: ItemType[]
  onClick: (value: any) => void
};


export const Accordion = React.memo((props: AccordionPropsType) => {

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onChange={props.onChange}
        collapsedMenu={props.collapsedMenu}
      />
      {!props.collapsedMenu && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
  );
});

type AccordionTitlePropsType = {
  onChange: () => void
  collapsedMenu: boolean
  title: string
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
  return (
    <h2 onClick={(e) => props.onChange()}>{props.title}</h2>
  );
});

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

const AccordionBody = React.memo((props: AccordionBodyPropsType) => {
  return (
    <ul>
      {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
  );
});
