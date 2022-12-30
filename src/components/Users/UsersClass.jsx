import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/defaultImage.png'

class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {       
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {        
                this.props.setUsers(response.data.items)
            })       
        }
    }   

    render() {
        return (   
            <div className={styles.users}>  
              <button onClick={this.getUsers} >Get Users</button> 
                          {
                          this.props.users.map(user => <div key={user.id} className={styles.userItem} >
                              <span className={styles.follow}>
                                  <div>
                                      <img src={user.photos.small != null ? user.photos.small : userPhoto } className={styles.userPhoto} alt="" />
                                  </div>
                                  <div>
                                      {user.followed 
                                      ? <button className={styles.btn} onClick={()=>{this.props.unfollow(user.id)}} >Unfollow</button> 
                                      : <button className={styles.btn} onClick={()=>{this.props.follow(user.id)}}>Follow</button>}                        
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
}

export default Users