import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(rootReducer);
console.log(store.getState());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
