import React from 'react'
import styles from './../Dialogs.module.css'

const Messages = (props) => {
  return (
    <div className={styles.dialog}>{props.message}</div>
    )      
}

export default Messages