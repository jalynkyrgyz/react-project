import React from 'react'
import styles from './Content.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Content = (props) => { 
  


  return (
    <main className={styles.main}>
      <ProfileInfo /> 
      <MyPosts posts = {props.postsState.posts} />             
    </main>
  )
}

export default Content