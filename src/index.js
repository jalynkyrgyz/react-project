import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { addMessage, addPost, updateNewPostText, updateNewMessage, subscribe } from './redux/state';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

// addPost("Samuraj js")

const root = ReactDOM.createRoot(document.getElementById('root'));
// let rerenderEntireTree = (state)=> {    
  root.render(  
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>        
      </BrowserRouter>      
    </React.StrictMode>
  );


