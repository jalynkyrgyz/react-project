import React from 'react'
import classes from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <nav className={classes.nav}>        
          <div className={`${classes.item} ${classes.active}`}><a>Profile</a></div>
          <div className={classes.item}><a>Messages</a></div>
          <div className={classes.item}><a>News</a></div>
          <div className={classes.item}><a>Music</a></div>
          <div className={classes.item}><a>Settings</a></div>        
    </nav>
  )
}

export default Sidebar