import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

const rootView = document.getElementById('root');

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    rootView
  );
}
