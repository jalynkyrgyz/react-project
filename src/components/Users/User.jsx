import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/defaultImage.png'
import { NavLink } from 'react-router-dom'


const User = ({ user, followingInProgress, unfollow, follow}) => {       
  return (
    <div className={styles.userItem} >         
        <span className={styles.follow}>
            <div>
                <NavLink to={'/profile/' + user.id}  >
                    <img src={user.photos.small != null ? user.photos.small : userPhoto } className={styles.userPhoto} alt="" />
                </NavLink>                               
            </div>
            <div>
                {user.followed 
                    ? <button className={styles.btn} disabled={followingInProgress.some(id=>id === user.id)} 
                                        onClick={()=>{ unfollow(user.id) }} >Unfollow</button> 
                    : <button className={styles.btn} disabled={followingInProgress.some(id=>id === user.id)}
                                        onClick={()=>{follow(user.id) }}>Follow</button>
                }                        
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
    </div> 
  )
}

export default User