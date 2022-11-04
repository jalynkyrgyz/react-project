import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
        <div>
            <img src="https://media.istockphoto.com/photos/maldives-tropical-island-picture-id1360554439?b=1&k=20&m=1360554439&s=170667a&w=0&h=-IRAQ28DT0XwLBQ-_gjV3erce0OdvxiWPaa_Ioz95ws=" alt="" />
        </div>        
        <div className={styles.descriptionBlock}>
            ava+descr
        </div>
    </div>
  )
}

export default ProfileInfo