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
      <App state = {state}
           addPost = {store.addPost.bind(store)}        
           updateNewPostText = {store.updateNewPostText.bind(store)} 

           addMessage = {store.addMessage.bind(store)}
           updateNewMessage = {store.updateNewMessage.bind(store)}
      />
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);

