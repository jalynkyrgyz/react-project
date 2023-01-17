// eslint-disable-next-line no-unused-vars
import React from 'react'
import {connect} from 'react-redux'
import { follow, setCurrentPage, setUsers, unfollow, setUsersTotalCount, setIsFetching, toggleFollowingProgress} from '../../redux/usersReducer'
import Users from './Users'

import Preloader from '../../common/Preloader/Preloader'
import { usersAPI } from '../../api/Api'


class UsersAPIComponent extends React.Component {
  componentDidMount(){
    this.props.toogleIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {   
          this.props.toogleIsFetching(false)    
          this.props.setUsers(data.items)
          this.props.setTotalUsersCount(data.totalCount)
      }) 
}

onPageChanged = (pageNumber) => {
  this.props.toogleIsFetching(true)
  this.props.setCurrentPage(pageNumber)
  usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {   
        this.props.toogleIsFetching(false)     
          this.props.setUsers(data.items)
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
                  toggleFollowingProgress={this.props.toggleFollowingProgress}
                  followingInProgress={this.props.followingInProgress}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress 
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
  toogleIsFetching:setIsFetching,
  toggleFollowingProgress:toggleFollowingProgress
  })(UsersAPIComponent)

