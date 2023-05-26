import React, {useState} from 'react'
import Preloader from '../../../common/Preloader/Preloader'
import styles from './ProfileInfo.module.css'
import ProfileStatusWithHook from './ProfileStatusWithHook'

import userPhoto from '../../../assets/images/defaultImage.png'

import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader/>
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto (e.target.files[0])
    }
  }

  const onSubmit =  (formData) => {
    saveProfile(formData).then(()=>{
      setEditMode(false)
    })
    
  }

  return (
    <div>
       <div className={styles.descriptionBlock}>          
          <div className={styles.photoBlock}>
            <img src={profile.photos.large || userPhoto } className={styles.mainPhoto} alt=''/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
          </div>
          {editMode 
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
          : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>}         

        </div>
        <div className={styles.status}>
            <ProfileStatusWithHook status={status} updateStatus={updateStatus} />
        </div>  
    </div>
  )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return < div className={styles.profileData}>
    {isOwner && <div><button onClick={goToEditMode} >edit</button></div>}
    
      <div className={styles.about}>
        <h3>About Me</h3>
        <span className={styles.name}> <b>User:</b>  {profile.fullName}</span>
        <span className={styles.aboutUser}> <b>About me:  </b>   {profile.aboutMe}</span>
        <span className={styles.aboutUser}> <b>My ID Number is:  </b>   {profile.userId}</span>
      </div>  

      <div className={styles.jobStatus}>
        <h3>Job Status</h3>
        <div>  <b>Looking for a job</b> : {profile.lookingForAJob ? "yes" : "no"}        </div>
              {profile.lookingForAJob && <div>  <b>My Proffession</b> : {profile.lookingForAJobDescription} </div>}       
      </div> 

      <div className={styles.contacts}>
        <h3>Contacts</h3>
        {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
      </div>
    
  </div>
}



const Contact = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}</b> : {contactValue}</div>
}

export default ProfileInfo