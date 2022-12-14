import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const  App = (props) => {

  return (
    // <Router>
      <div className="app-wrapper">
        <Header/>
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




