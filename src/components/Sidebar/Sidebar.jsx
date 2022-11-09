import React from 'react'
import classes from './Sidebar.module.css'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className={classes.nav}>   
    <h3>I am sidebar</h3>     
          <div className={classes.item}>
            <NavLink to='profile' style={({ isActive }) => ({ 
                            color: isActive ? 'gold' : 'white' })}>Profile</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='dialogs' style={({ isActive }) => ({ 
                            color: isActive ? 'gold' : 'white' })}>Messages</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='news' style={({ isActive }) => ({ 
                            color: isActive ? 'gold' : 'white' })}>News</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='music' style={({ isActive }) => ({ 
                            color: isActive ? 'gold' : 'white' })}>Music</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='settings' style={({ isActive }) => ({ 
                            color: isActive ? 'gold' : 'white' })}>Settings</NavLink>
          </div>  
          {/* <div className={classes.item}>
            <NavLink to='friends' style={({ isActive }) => ({ 
                            color: isActive ? 'gold' : 'white' })}>Friends</NavLink>
          </div> */}


    </nav>
  )
}

export default Sidebar