import React from 'react'
import styles from './Content.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Content = (props) => { 
  
  return (
    <main className={styles.main}>
      <ProfileInfo /> 
      <MyPostsContainer store={props.store}/>

      {/* <MyPosts posts = {props.profilePage.posts} newPostText = {props.profilePage.newPostText}  dispatch = {props.dispatch} />   */}

    </main>
  )
}

export default Content