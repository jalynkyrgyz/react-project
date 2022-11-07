import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Profile/Content'
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News/News';

const  App = (props) => {

  return (
    <Router>
      <div className="app-wrapper">
        <Header/>
        <Sidebar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Content posts = {props.posts} />}/>
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
            <Route path='/news' element={<News/>}/>

          </Routes>    
        </div>    
      </div>
    </Router>
    
  );
}

export default App;




