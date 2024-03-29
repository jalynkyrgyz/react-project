// eslint-disable-next-line no-unused-vars
import React from 'react'
import {connect} from 'react-redux'
import { follow, setCurrentPage,  unfollow,   toggleFollowingProgress, getUsers} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'
import { compose } from 'redux'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getMyUsers } from '../../redux/userSelectors'


class UsersAPIComponent extends React.Component {
  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize) 
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
                    followingInProgress={this.props.followingInProgress}
            />
          </>  
  }
}


// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress 
//   }
// }

let mapStateToProps = (state) => {
  return {
    users: getMyUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state) 
  }
}

export default compose(
  // withAuthRedirect,
  connect (mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})
)(UsersAPIComponent)