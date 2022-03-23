import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// styles
import './global.reset.css';
import './styles/index.scss';

const app = document.getElementById('app');

ReactDOM.render(<App />, app);

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  console.log('Production mode');
}
