import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer';

const myStore = createStore(reducer);


myStore.subscribe(() => ReactDOM.render(<App {...myStore.getState()}/>, document.getElementById('root')));

myStore.dispatch({ type: null });

export { myStore }