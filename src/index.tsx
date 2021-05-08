import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss'
import { BtnApp } from './components/shared/buttons/BtnApp';

ReactDOM.render(
  <React.StrictMode>
    <BtnApp title={'COTÍZALO'}/>
  </React.StrictMode>,
  document.getElementById('root')
);
