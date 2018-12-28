import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import AppRootComponent from './comp/AppRootComponent'


const reducer = (state={}, action)=>{
    switch (action.type) {
        default:
          return {...state};
      }
};

const store = createStore(reducer,{});

const rootElement = document.getElementById('root');

ReactDOM.render((
    <Provider store={store}>
      <AppRootComponent />
    </Provider>
  ), rootElement);