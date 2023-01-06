import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/defaultImage.png'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }
        let curP = props.currentPage
        let curPF = ((curP - 5) ? 0 : curP - 5)
        let curPL = curP + 5
        let slicedPages = pages.slice(curPF, curPL)
        
  return (
    <div className={styles.users}>  
                <div className={styles.pages}>
                    {slicedPages.map( page => {
                        return <span className={props.currentPage === page ? styles.selectedPage : ""}  key={page} onClick={(e)=> {props.onPageChanged(page)}} >{page}</span>
                    })}                
                </div>
                {
                    props.users.map(user => <div key={user.id} className={styles.userItem} >
                        <span className={styles.follow}>
                            <div>
                                <NavLink to='/profile'  >
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto } className={styles.userPhoto} alt="" />
                                </NavLink>                               
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