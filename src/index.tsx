import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss'
// import { HomeScreen } from './components/home/HomeScreen';
import { HeaderApp } from './components/shared/HeaderApp';
// import { AutoDataScreen } from './components/auto-data/AutoDataScreen';
import { ArmPlanScreen } from './components/arm-plan/ArmPlanScreen';

ReactDOM.render(
  <React.StrictMode>
    <HeaderApp/>
    {/* <HomeScreen/> */}
    {/* <AutoDataScreen/> */}
    <ArmPlanScreen/>
  </React.StrictMode>,
  document.getElementById('root')
);
