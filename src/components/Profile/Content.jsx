import React from 'react'
import styles from './Content.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Content = () => {
 
  return (
    <main className={styles.main}>
      <ProfileInfo/> 
      <MyPosts />             
    </main>
  )
}

export default Content