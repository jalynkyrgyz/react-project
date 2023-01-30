import React from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import {getUserProfile} from '../../redux/profileReducer'
import {Navigate, useLocation, useNavigate, useParams} from 'react-router-dom'




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
      userId = 2
    }
    this.props.getUserProfile(userId)       
  }

 
  render() {   
    if(!this.props.isAuth) return <Navigate to={"/login"} />
    return (
      <Content {...this.props}  profile= {this.props.profile} />
    )
  } 
}

let mapStateToProps = (state) => ({
  profile: state.profilesPage.profile,
  isAuth: state.auth.isAuth
})





export default connect (mapStateToProps, {getUserProfile}) (withRouter(ProfileContainer))