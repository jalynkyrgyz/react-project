import React from 'react'
import styles from './Content.module.css'

const Content = () => {
  return (
    <main className={styles.content}>
        <img src="https://media.istockphoto.com/photos/maldives-tropical-island-picture-id1360554439?b=1&k=20&m=1360554439&s=170667a&w=0&h=-IRAQ28DT0XwLBQ-_gjV3erce0OdvxiWPaa_Ioz95ws=" alt="" />
        <div>ava+descr</div>
        <div>
          <div>My posts</div>
          <div>New post</div>
        </div>
        <div className={styles.posts}>
          <div className={styles.item}>post 1</div>
          <div className={styles.item}>post 2</div>
        </div>      
    </main>
  )
}

export default Content