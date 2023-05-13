import React from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import {getUserProfile, getStatus, updateStatus, savePhoto} from '../../redux/profileReducer'
import { useLocation, useNavigate, useParams} from 'react-router-dom'
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component {...props} router={{ location, navigate, params }} />
      );
  }
  return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component { 

  refreshProfile() {
    let userId = this.props.router.params.userId
    if (!userId) {
       userId = this.props.authorizedUserId
       if (!userId) {
        this.props.history.push("/login")
       }
    }
    this.props.getUserProfile(userId)    
    this.props.getStatus(userId) 
  }
  componentDidMount(){
            this.refreshProfile()    
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile()
    }    
  }
 
  render() {       
    return (
      <Content {...this.props}
        isOwner ={!this.props.router.params.userId}
        profile= {this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto ={this.props.savePhoto}/>
    )
  } 
}

let mapStateToProps = (state) => {
  return ({
    profile: state.profilesPage.profile,
    status: state.profilesPage.status,
    authorizedUserId: state.auth.userId,
    isAuth:state.auth.isAuth
  })  
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
  withRouter,
  // withAuthRedirect
) (ProfileContainer)