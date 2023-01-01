// eslint-disable-next-line no-unused-vars
import React from 'react'
import Users from './UsersClass'
import {connect} from 'react-redux'
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, unfollowActionCreator, setUsersTotalCountActionCreator } from '../../redux/usersReducer'

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow:(userId) => {
      dispatch(followActionCreator(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users)=> {
      dispatch(setUsersActionCreator(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountActionCreator(totalCount))
    }
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(Users)

