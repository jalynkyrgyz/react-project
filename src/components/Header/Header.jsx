import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
      <header className={styles.header}> 
        <div className={styles.header_setting}>
          <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt="" />
          
            <h3>I am header</h3>
        </div>
          
      </header>
    
  )
}

export default Header