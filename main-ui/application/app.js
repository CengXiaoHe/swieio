
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/less/font-awesome.less';
import 'jquery/dist/jquery.js';
import 'bootstrap/js/dropdown.js';

import React from 'react';
import ReactDOM from 'react-dom';
import MasterRouter from './core/router';

window.React = React; // export for http://fb.me/react-devtools

var app = document.createElement('div');
document.body.appendChild(app);

// Render master router component, which will handle all navigation concerns
ReactDOM.render((
    <MasterRouter />
), app);
