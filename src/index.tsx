import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss'
import { BtnApp } from './components/shared/buttons/BtnApp';
import { InputApp } from './components/shared/InputApp';
import { SelectApp } from './components/shared/SelectApp';
import { CheckBoxApp } from './components/shared/CheckBoxApp';
import { RadioBtnApp } from './components/shared/RadioBtnApp';

ReactDOM.render(
  <React.StrictMode>
    <BtnApp title={'COTÍZALO'}/>
    <InputApp/>
    <SelectApp/>
    <CheckBoxApp/>
    <RadioBtnApp/>
  </React.StrictMode>,
  document.getElementById('root')
);
