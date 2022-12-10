import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { addMessage, addPost, updateNewPostText, updateNewMessage, subscribe } from './redux/state';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';

// addPost("Samuraj js")

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state)=> {    
  root.render(  
    <React.StrictMode>
      <BrowserRouter>
        <App state = {state} dispatch = {store.dispatch.bind(store)} store = {store} />
      </BrowserRouter>
      
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState())

store.subscribe(()=> {
  let state = store.getState()
  rerenderEntireTree(state)
}) ;

