import React from 'react'
import Preloader from '../../../common/Preloader/Preloader'
import styles from './ProfileInfo.module.css'
import ProfileStatusWithHook from './ProfileStatusWithHook'

import userPhoto from '../../../assets/images/defaultImage.png'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader/>
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto (e.target.files[0])
    }
  }
  return (
    <div>
       <div className={styles.descriptionBlock}>          
          <div>
            <img src={profile.photos.large || userPhoto } className={styles.mainPhoto} alt=''/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
          </div>
          <div className={styles.about}>
            <span className={styles.name}> <b>User:</b>  {profile.fullName}</span>
            <span className={styles.aboutUser}> <b>About me:  </b>   {profile.aboutMe}</span>
            <span className={styles.aboutUser}> <b>My ID Number is:  </b>   {profile.userId}</span>
          </div>                     
        </div>
        <div className={styles.status}>
            <ProfileStatusWithHook status={status} updateStatus={updateStatus} />
        </div>  
    </div>
  )
}

export default ProfileInfo