import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './hello/Hello';
// import Register from './register/Register';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Hello />, document.getElementById('hello'));
// ReactDOM.render(<Register />, document.getElementById('hello'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
