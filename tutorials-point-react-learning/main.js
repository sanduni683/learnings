import React from 'react';
import ReactDOM from 'react-dom';
import App from './statelessExample.js';
import App2 from './statefullExample.js';
import App3 from './stateandProps.js';
import App4 from './propsValidation.js';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<App2 />, document.getElementById('app2'));
ReactDOM.render(<App3 />, document.getElementById('app3'));
ReactDOM.render(<App4 />, document.getElementById('app4'));