import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/defaultImage.png'

class Users extends React.Component {
   

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {        
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }) 
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {        
                this.props.setUsers(response.data.items)
            })
    }
      
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        let curP = this.props.currentPage
        let curPF = ((curP - 5) ? 0 : curP - 5)
        let curPL = curP + 5
        let slicedPages = pages.slice(curPF, curPL)

        return (   
            <div className={styles.users}>  
                <div className={styles.pages}>
                    {slicedPages.map( page => {
                        return <span className={this.props.currentPage === page ? styles.selectedPage : ""}  key={page} onClick={(e)=> {this.onPageChanged(page)}} >{page}</span>
                    })}                
                </div>
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