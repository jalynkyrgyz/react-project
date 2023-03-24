import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
      <header className={styles.header}> 
        <div className={styles.header_setting}>
          <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt="" />
          
            <div className={styles.login_block}>
              {props.isAuth 
              ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>   
              : <NavLink to = '/login'>login</NavLink>}              
            </div>
        </div>
          
      </header>
    
  )
}

export default Header