import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss'
import { HomeScreen } from './components/home/HomeScreen';
import { HeaderApp } from './components/shared/HeaderApp';

ReactDOM.render(
  <React.StrictMode>
    <HeaderApp/>
    <HomeScreen/>
  </React.StrictMode>,
  document.getElementById('root')
);
