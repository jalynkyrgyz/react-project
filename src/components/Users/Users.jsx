import React from 'react'
import styles from './Users.module.css'
import Paginator from '../../common/Paginator/Paginator'
import User from './User'

const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
  return (
    <div >  
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
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

    </div>  
  )
}

export default Users