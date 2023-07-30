import styles from './profileStyles.module.css'
import { Audio } from 'react-loader-spinner'

export default function Loader(){
  return (
    <div  className={styles.loaderContainer}>
      <div className={styles.loaderComponent}>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
            
          />
        </div>
    </div>
  )
}