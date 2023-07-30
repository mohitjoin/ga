import styles from './profileStyles.module.css'
import { Audio } from 'react-loader-spinner'

export default function Loader(){
  return (
    <div  className={styles.loaderContainer}>
      <div className={styles.loaderComponent}>
          <Audio
            height="50"
            width="50"
            radius="9"
            color="black"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
            
          />
        </div>
    </div>
  )
}