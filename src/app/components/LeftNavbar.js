import styles from '../page.module.css'   
import { LuNewspaper } from 'react-icons/lu';


export default function LeftNavbar({user}){
  
  return(
    <div className={styles.leftContainer}>
        <a className={styles.istaNewsContainer} href='/'> <div className={styles.instagramLogo}> Instagram News</div></a> 
        <a href='/'>
          <div className={styles.profileNameContainer}>
            <div className={styles.newsIcon}>
             <LuNewspaper /> 
            </div>
            <div className={styles.newsText}> News</div>
          </div>
        </a>
        <a href={`/users/${user.username}`}>
          <div className={styles.profileNameContainer}>
            <div className={styles.profileImage}>
             <img className={styles.profileImageMain} src={`${user.profile_image.large}`} alt='profile_image' width='40' height='40' /> 
            </div>
            <div className={styles.profileText}> Profile</div>
          </div>
        </a>

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