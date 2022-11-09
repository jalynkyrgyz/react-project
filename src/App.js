import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Profile/Content'
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Friends from './components/Friends/Friends';

const  App = (props) => {

  return (
    <Router>
      <div className="app-wrapper">
        <Header/>
        <Sidebar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Content postsState = {props.state.profilesPage} />}/>
            <Route path='/dialogs' element={<Dialogs dialogsState ={props.state.dialogsPage}  />}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/friends' element={<Friends/>}/>
          </Routes>    
         
        </div>    
      </div>
    </Router>
    
  );
}

export default App;




