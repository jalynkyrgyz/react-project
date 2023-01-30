import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const  App = (props) => {

  return (
    // <Router>
      <div className="app-wrapper">
        <HeaderContainer/>
        <Sidebar/>
        <div className='app-wrapper-content'>
          <Routes>            
            <Route path='/profile/:userId' element={<ProfileContainer />}/>
            {/* <Route path='/profile' element={<ProfileContainer />}>
              <Route path=':userId' element={<ProfileContainer />}/>
            </Route> */}
            <Route path='/dialogs' element={<DialogsContainer />}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/users' element={<UsersContainer/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>            
        </div>
        <div className='app-wrapper-friend'>
          <Friends/>
        </div>          
      </div>
    // </Router>    
  );
}

export default App;




