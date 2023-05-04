import React, { Component, Suspense } from 'react'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/appReducer';
import { useLocation, useNavigate, useParams} from 'react-router-dom'
import { compose } from 'redux';
import Preloader from './common/Preloader/Preloader';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component {...props} router={{ location, navigate, params }} />
      );
  }
  return ComponentWithRouterProp;
}

class  App extends Component {
  componentDidMount() {    
    this.props.initializeApp()   
  }
  render(){
    if(!this.props.initialized) {
      return <Preloader/>
    }
    

    return (
      // <Router>
        <div className="app-wrapper">
          <HeaderContainer/>
          <Sidebar/>
          <div className='app-wrapper-content'>
            <Suspense fallback={<div><Preloader/></div>}>
                <Routes>            
                  {/* <Route path='/profile/:userId' element={<ProfileContainer />}/> */}
                  <Route path='/profile' element={<ProfileContainer />}>
                    <Route path=':userId' element={<ProfileContainer />}/>
                  </Route>              
                  <Route path='/dialogs' element={<DialogsContainer />}/>       
                  <Route path='/news' element={<News/>}/>
                  <Route path='/users' element={<UsersContainer/>}/>
                  <Route path='/login' element={<Login/>}/>
                </Routes>    
            </Suspense>        
          </div>
          <div className='app-wrapper-friend'>
            <Friends/>
          </div>          
        </div>
      // </Router>    
    );
  }
  
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose ( withRouter, connect(mapStateToProps, {initializeApp})) (App) ;




