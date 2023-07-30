import styles from '../page.module.css'   

export default function TrendingNews({news}){
  return (
    <div className={styles.trendingNewsMainContainer}>
     
      <div className={styles.trendingNewsText}>
        {news}
      </div>

    </div>
  )
}