import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
 import store, {AllAppStateType} from "./Redux/redux-store";
import {Provider} from "react-redux";


  let rerenderEntireTree = (state: AllAppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store} >
                <App />
                {/*//bind(store) говорит о том что если в обьекте есть this то он всегда относится к store. часто функции */}
                {/*// callback может вызватся в другом месте где будет методом другого обьекта(к примеру props.addPost())*/}
                </Provider>
            </ BrowserRouter>,
        </React.StrictMode>, document.getElementById('root'));
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
