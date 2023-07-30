import styles from './profileStyles.module.css'


export default function Profile({user}){ 

  return(
    <div className={styles.profileDiv}>
         <div className={styles.profilepicContainer}>
         <img className={styles.profilepicMain} src={`${user.profile_image.large}`} alt='profile_image'  /> 
         </div>

         <div className={styles.profileNameConatiner}>
          {user.first_name} {user.last_name}
         </div>

         {/* followers and following */}
         <div className={styles.followingOrFollowContainer}>
            <div className={styles.followingOrFollowText}>
              {user.following_count!==0?user.following_count:1} Following
            </div>
            <div className={styles.followingOrFollowText}>
              {user.followers_count!==0?user.followers_count:1} Followers
            </div>
          </div>

    </div>
  )
}