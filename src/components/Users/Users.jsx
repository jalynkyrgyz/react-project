/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios'
import React from 'react'
import styles from './Users.module.css'
import userDefaultPhoto from '../../assets/images/defaultImage.png'

const Users = (props) => {       
    if (props.users.length === 0) {       
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {        
            props.setUsers(response.data.items)
        })       
    }
    
    
  return (   
  <div className={styles.users}>   
                {
                props.users.map(user => <div key={user.id} className={styles.userItem} >
                    <span className={styles.follow}>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userDefaultPhoto } className={styles.userPhoto} />
                        </div>
                        <div>
                            {user.followed 
                            ? <button className={styles.btn} onClick={()=>{props.unfollow(user.id)}} >Unfollow</button> 
                            : <button className={styles.btn} onClick={()=>{props.follow(user.id)}}>Follow</button>}                        
                        </div>
                    </span>
                    <span className={styles.userDetail}>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>                        
                        </span>
                    </span>
                </div>)
            }
        </div>  
  )
}

export default Users