import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import State from "./stupidState";

const initialState = new State();

ReactDOM.render(
  <App stateHandler={initialState} />,
  document.getElementById('root')
);
