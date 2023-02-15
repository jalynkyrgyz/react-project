import React from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import {getUserProfile, getStatus, updateStatus} from '../../redux/profileReducer'
import { useLocation, useNavigate, useParams} from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
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
  componentDidMount(){
    let userId = this.props.router.params.userId
    if (!userId) {
       userId = 27465
    }
    this.props.getUserProfile(userId)    
    this.props.getStatus(userId)   
          
  }

 
  render() {   
    
    return (
      <Content {...this.props}  profile= {this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  } 
}

let mapStateToProps = (state) => ({
  profile: state.profilesPage.profile,
  status: state.profilesPage.status
})

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
) (ProfileContainer)