import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss'
import { BtnApp } from './components/shared/buttons/BtnApp';
import { InputApp } from './components/shared/InputApp';
import { SelectApp } from './components/shared/SelectApp';

ReactDOM.render(
  <React.StrictMode>
    <BtnApp title={'COTÍZALO'}/>
    <InputApp/>
    <SelectApp/>
  </React.StrictMode>,
  document.getElementById('root')
);
