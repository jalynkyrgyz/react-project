import React from 'react'
import Preloader from '../../../common/Preloader/Preloader'
import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  debugger
  return (
    <div>
        <div>
            <img src="https://media.istockphoto.com/photos/maldives-tropical-island-picture-id1360554439?b=1&k=20&m=1360554439&s=170667a&w=0&h=-IRAQ28DT0XwLBQ-_gjV3erce0OdvxiWPaa_Ioz95ws=" alt="" />
        </div>        
        <div className={styles.descriptionBlock}>
          <div>
            <img src={props.profile.photos.large} alt="" />
          </div>
          <div className={styles.about}>
            <span className={styles.name}> <b>User:</b>  {props.profile.fullName}</span>
            <span className={styles.aboutUser}> <b>About me:  </b>   {props.profile.aboutMe}</span>
          </div>                     
        </div>
        <div>
            ava+descr
        </div>  
    </div>
  )
}

export default ProfileInfo