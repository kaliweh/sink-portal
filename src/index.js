import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxLogger from 'redux-logger';
import AppRootComponent from './comp/AppRootComponent'
import thunk from 'redux-thunk';
import accessReducer from './reducers/accessReducer';
import searchReducer from './reducers/searchReducer';

require('./assets/images/favicon.ico');


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_IMAGE':
      return { ...state, somePayload: action.payload }
    case 'FETCH_IMAGE_FULFILLED':
      return { ...state, imageData: action.payload }

    default:
      return { ...state };
  }
};

const rootReducer = combineReducers({access: accessReducer, images: reducer, search: searchReducer});

const store = createStore(rootReducer, {access:{}, images:{}, search:{results:[]}}, applyMiddleware(thunk, ReduxLogger));

// imageUrl: 'https://assets.wordpress.envato-static.com/uploads/2017/08/tropical-PS53BSA.jpg'

//store.dispatch({ type: 'FETCH_IMAGE', payload: { someAttribure: 'some val' } });


const rootElement = document.getElementById('root');

ReactDOM.render((
  <Provider store={store}>
    <AppRootComponent />
  </Provider>
), rootElement);