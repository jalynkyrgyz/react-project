import React from 'react'
import styles from './Users.module.css'
// import userPhoto from '../../assets/images/defaultImage.png'
// import { NavLink } from 'react-router-dom'
import Paginator from '../../common/Paginator/Paginator'
import User from './User'




const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
  return (
    <div >  
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} 
                   totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map(user => <User key ={user.id} user={user}
                                        followingInProgress={props.followingInProgress}
                                        unfollow={props.unfollow}
                                        follow={props.follow} 
                                        className={styles.userItem}      
                                  />)
            }
        </div>

        {/* {           
           users.map(user => <div key={user.id} className={styles.userItem} >
                <span className={styles.follow}>
                    <div>
                        <NavLink to={'/profile/' + user.id}  >
                            <img src={user.photos.small != null ? user.photos.small : userPhoto } className={styles.userPhoto} alt="" />
                        </NavLink>                               
                    </div>
                    <div>
                        {user.followed 
                         ? <button className={styles.btn} disabled={props.followingInProgress.some(id=>id === user.id)} 
                                    onClick={()=>{ props.unfollow(user.id) }} >Unfollow</button> 
                                    : <button className={styles.btn} disabled={props.followingInProgress.some(id=>id === user.id)}
                                      onClick={()=>{props.follow(user.id) }}>Follow</button>
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
            </div>)
        }  */}

    </div>  
  )
}

export default Users