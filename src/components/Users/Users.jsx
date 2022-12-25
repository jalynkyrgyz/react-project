/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from './Users.module.css'

const Users = (props) => { 
     
    if (props.users.length === 0) {
        props.setUsers( 
            [
                {   
                    id:1, 
                    photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg',
                    followed: true, 
                    fullName: 'Dmitry K ', 
                    status: 'I am a boss', 
                    location: {
                        city: 'Minsk', 
                        country: 'Belarus'
                    }
                },
                {
                    id:2, 
                    photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', 
                    followed: false, 
                    fullName: 'Anrew B ', 
                    status: 'I am a boss, too', 
                    location: {
                        city: 'Moscow', 
                        country: 'Russia'
                    }
                },
                {
                    id:3, 
                    photoUrl: 'https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg', 
                    followed: true, 
                    fullName: 'Sasha G ', 
                    status: 'I am a boss, three', 
                    location: {
                        city: 'Kyev', 
                        country: 'Ukraine'
                    }
                }
            ]
        )
    }
    
    
  return (

    
  <div className={styles.users}>
                {
                props.users.map(user => <div key={user.id} className={styles.userItem} >
                    <span className={styles.follow}>
                        <div>
                            <img src={user.photoUrl} className={styles.userPhoto} />
                        </div>
                        <div>
                            {user.followed 
                            ? <button className={styles.btn} onClick={()=>{props.unfollow(user.id)}} >Unfollow</button> 
                            : <button className={styles.btn} onClick={()=>{props.follow(user.id)}}>Follow</button>}                        
                        </div>
                    </span>
                    <span className={styles.userDetail}>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>                        
                        </span>
                    </span>
                </div>)
            }
        </div>  
  )
}

export default Users