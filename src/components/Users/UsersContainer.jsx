// eslint-disable-next-line no-unused-vars
import React from 'react'
import {connect} from 'react-redux'
import { follow, setCurrentPage, setUsers, unfollow, setUsersTotalCount, setIsFetching} from '../../redux/usersReducer'
import axios from 'axios'
import Users from './Users'

import Preloader from '../../common/Preloader/Preloader'

class UsersAPIComponent extends React.Component {
  componentDidMount(){
    this.props.toogleIsFetching(true)
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
    withCredentials: true
  })
      .then(response => {    
          this.props.toogleIsFetching(false)    
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
      }) 
}

onPageChanged = (pageNumber) => {
  this.props.toogleIsFetching(true)
  this.props.setCurrentPage(pageNumber)
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
    withCredentials: true
  })
      .then(response => {   
        this.props.toogleIsFetching(false)     
          this.props.setUsers(response.data.items)
      })
}

render() {
  return <>
    {this.props.isFetching ? <Preloader/> :null}
          <Users totalUsersCount = {this.props.totalUsersCount}
                        pageSize={this.props.pageSize} 
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow} 
                        unfollow={this.props.unfollow} 
          />
        </>
  
}
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow:(userId) => {
//       dispatch(followActionCreator(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowActionCreator(userId))
//     },
//     setUsers: (users)=> {
//       dispatch(setUsersActionCreator(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageActionCreator(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountActionCreator(totalCount))
//     },
//     toogleIsFetching: (isFetching) => {
//       dispatch(setIsFetchingActionCreator(isFetching))
//     }
//   }
// }


export default connect (mapStateToProps, {
  follow:follow,
  unfollow:unfollow,
  setUsers: setUsers,
  setCurrentPage: setCurrentPage,
  setTotalUsersCount:setUsersTotalCount,
  toogleIsFetching:setIsFetching
  })(UsersAPIComponent)

