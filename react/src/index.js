import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './eventbus'
import App from './App'
import './index.less'
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios'
import api from './api'
Component.prototype.$api = api;
Component.prototype.$axios = axios;
ReactDOM.render(
    (<BrowserRouter>
      <App />
    </BrowserRouter>),
  document.getElementById('root')
);

