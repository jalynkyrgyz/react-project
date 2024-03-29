import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import {  Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { login } from '../../redux/authReducer';
import { Navigate } from "react-router-dom";
import styles from "../../common/FormsControls/FormsControls.module.css"

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if(props.isAuth) {
    return <Navigate to="/profile" />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit} >
        <div>
          <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
        </div>
        <div>
          <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]} />
        </div>
        <div>
          <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]} /> remember me
        </div>

        {/* {props.captchaUrl && <img src={props.captchaUrl} />} */}

        {props.error && <div className={styles.formSummaryError}> {props.error} </div>}
        <div>
          <button>Login</button>
        </div>
      </form>  
  )
}

// const LoginForm = ({handleSubmit, error, captchaUrl}) => {
//   return (
//       <form onSubmit={handleSubmit} >       
//           {createField ("Email", "email", [required], Input)}        
//           {createField ("Password", "password", [required], Input, {type: "password"})}
//           {createField ("rememberMe", [], Input, {type: "checkbox"}, "remember me")}        
        

//         {captchaUrl && <img src={captchaUrl} />}

//         {error && <div className={styles.formSummaryError}> {error} </div>}
//         <div>
//           <button>Login</button>
//         </div>
//       </form>  
//   )
// }

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state)=> ({
  captchaUrl:state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})
 
export default connect(mapStateToProps, {login}) (Login)