import React from 'react'
import {createField, Input, Textarea} from '../../../common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form'

import styles from './ProfileInfo.module.css'
// import { profileAPI } from '../../../api/Api'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return ( 
     <form onSubmit={handleSubmit}>
        <div div className={styles.profileData}>
            <div><button>save</button></div> 
            {error&& <div className={styles.formSummaryError}> {error} </div>}
            <div className={styles.about}>
                <h3>About Me</h3>
                <span className={styles.name}> <b>Full name:</b>  {createField("Full name", "fullName", [], Input)}</span>
                <span className={styles.aboutUser}> <b>About me:  </b>   {createField("About me", "aboutMe", [], Input)}</span>           
            </div> 
            <div className={styles.jobStatus}>
                <h3>Job Status</h3>
                <div>  <b>Looking for a job</b> : {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}       </div>
                <div>  <b>My Proffession</b> : {createField("My skills", "lookingForAJobDescription", [], Textarea)} </div>      
            </div>  
            <div className={styles.contacts}>
                <h3>Contacts</h3>
                    {Object.keys(profile.contacts).map(key => {
                         return <div key={key} className={styles.contactItem}>
                                    <b>{key} : {createField(key, "contacts." + key, [], Input)}</b>
                                </div>
                    })}
            </div>       
        </div>
    </form>
  )


 



        /* <div className={styles.contacts}>
        <h3>Contacts</h3>
        {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div> */



  
}

const ProfileDataFormReduxForm =  reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm