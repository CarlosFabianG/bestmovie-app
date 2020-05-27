import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import theme from './theme';
import Router from './Router';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CSSReset />
        <Router />
    </ThemeProvider>
  </BrowserRouter>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
