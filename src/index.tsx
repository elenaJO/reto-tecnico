import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss'
// import { HomeScreen } from './components/home/HomeScreen';
import { HeaderApp } from './components/shared/HeaderApp';
import { AutoDataScreen } from './components/auto-data/AutoDataScreen';

ReactDOM.render(
  <React.StrictMode>
    <HeaderApp/>
    {/* <HomeScreen/> */}
    <AutoDataScreen/>
  </React.StrictMode>,
  document.getElementById('root')
);
