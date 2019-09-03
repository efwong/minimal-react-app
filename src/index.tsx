import './styles/styles.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app/app';


const appElement = document.getElementById('app');
ReactDOM.render(<App compiler="TypeScript" framework="React" />, appElement);
