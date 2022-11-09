import React from 'react'
import styles from './Friends.module.css'

const Friends = () => {
  return (
    <div className={styles.friends}>
       Friends 
      <div className={styles.friend}>
        <a href="#">Dimych</a>
        <a href="#">Sveta</a>
        <a href="#">Valera</a>
      </div>
    </div>
  )
}

export default Friends