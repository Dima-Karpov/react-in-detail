import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { UncontrolledAccordion } from './components/Accordion/UncontrolledAccordion/UncontrolledAccordion';
import { OnOff } from './components/OnOff/OnOff';
import { UncontrolledOnOff } from './components/OnOff/UncontrolledOnOff/UncontrolledOnOff';
import { Rating, RatingValueType } from './components/Rating/Rating';
import { UncontrolledRating } from './components/Rating/UncontrolledRating/UncontrolledRating';

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

  let [collapsedMenu, setCollapsedMenu] = useState<boolean>(false);

  const [switchOn, setSwitchOn] = useState<boolean>(true);




  return (
    <div className='App'>
      {/* <PageTitle title={'This is APP component'}/>
      <PageTitle title={'My friends'}/>
      <Rating value={2}/> */}

      {/* <Accordion
        titleValue={'Menu'}
        onChange={() => setCollapsedMenu(!collapsedMenu)}
        collapsedMenu={collapsedMenu}
      /> */}

      {/* <Accordion
        titleValue={'Users'}
        onChange={() => setCollapsedMenu(!collapsedMenu)}
        collapsedMenu={collapsedMenu}
      /> */}

      <UncontrolledAccordion titleValue={'UncontrolledMenu'} />

      {/* <UncontrolledRating /> */}

      {/* <PageTitle title={'This is Rating'} /> */}

      {/* <Rating value={ratingValue} onClick={setRatingValue} /> */}

      {/* <OnOff on={switchOn} onChange={setSwitchOn} /> */}

      {/* <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()} */}


    </div>
  );
};

type PageTitlePropsType = {
  title: string
};

function PageTitle(props: PageTitlePropsType) {
  return (
    <h1>
      {props.title}
    </h1>
  );
};





export default App;
