import React from 'react'
import styles from './Content.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Content = (props) => {  
  return (    
    <main className={styles.main}>
      <ProfileInfo savePhoto={props.savePhoto} 
                   isOwner={props.isOwner}
                   profile={props.profile}
                   status={props.status}
                   updateStatus = {props.updateStatus} /> 
      <MyPostsContainer />
    </main>
  )
}

export default Content