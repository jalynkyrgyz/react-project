import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
    
  return (
    <div className={styles.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpAXlwU5GVNw-WrWDoZfltd-2hoO8-Npj8g&usqp=CAU" alt="" />
        {props.message}
        <div>
            <span>like {props.counter}</span>
        </div>

        {/* <input type="text" value='5' />
        <input type="text" value='6' /> */}
    </div>
  )
}

export default Post