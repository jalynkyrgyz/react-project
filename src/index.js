import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { addMessage, addPost, updateNewPostText, updateNewMessage, subscribe } from './redux/state';
import store from './redux/state';

// addPost("Samuraj js")

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state)=> {
    
  root.render(  
    <React.StrictMode>
      <App state = {state} dispatch = {store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);

