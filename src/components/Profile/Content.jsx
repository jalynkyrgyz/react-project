import React from 'react'
import styles from './Content.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Content = (props) => { 
  
  return (
    <main className={styles.main}>
      <ProfileInfo /> 
      <MyPosts posts = {props.profilePage.posts}
               newPostText = {props.profilePage.newPostText}
               updateNewPostText = {props.updateNewPostText}
               addPost = {props.addPost} />             
    </main>
  )
}

export default Content