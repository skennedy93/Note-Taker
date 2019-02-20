import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers/reducers';

ReactDOM.render(  
    <Provider store={createStore(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

