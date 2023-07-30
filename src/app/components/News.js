import styles from '../page.module.css' 
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';



export default function News({news,shouldShowLikeComment}){

  return (
    <div className={styles.newsMainContainer}>
      <div className={styles.newsImage}>
          <img className={styles.newsImageMain} loading="lazy" src={news?.urls?.full} alt='news_image'/>
      </div>
      <div className={styles.newsText}>
      {news?.alt_description}
      </div>
      {shouldShowLikeComment && 

      <div className={styles.likeAndCommentContainer}>
            <div className={styles.likeContainer}>
               <AiOutlineHeart className={styles.likeIcon} /> 
               <div className={styles.likeText}  >4</div>
            </div>
            <div className={styles.commentContainer}> 
               <BiCommentAdd className={styles.commentIcon}  /> 
               <div className={styles.commentText}  >  5</div>
            </div>
      </div>
      
     }

    </div>
  )
}