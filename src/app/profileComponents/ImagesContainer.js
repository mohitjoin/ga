import styles from './profileStyles.module.css'
import News from '../components/News'


export default function ImagesContainer({photos,isGridView}){
     return (
      <div  className={styles.mainImageContainer}>

        {
          isGridView ?
          <div lassName={styles.imagesGridContainer} >
            
            {
                photos.map((photo,index)=>{
                  return <span key={index} className={styles.gridImage}>
                    <img className={styles.gridImageImage} src={photo.urls.small} alt='user_photos'  />
                  </span>
                })
            }

          </div> 
          :
          <div className={styles.imagesListContainer} >
            {
                photos.map((photo,index)=>{
                  return  <div > <News key={index} news={photo} shouldShowLikeComment={false}/> </div>

                })
            }
          </div>
        }

      </div>
    )
}

