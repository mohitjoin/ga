"use client";
import React,{useState,useEffect} from 'react';
import styles from '../page.module.css'
import News from './News'
import TrendingNews from './TrendingNews'
import InfiniteScroll from 'react-infinite-scroll-component';
import { get10RandomNews } from '../services';


export default function PostContainer(){
   
  const [news,setNews]=useState([])
  const fetchMoreData=async ()=>{
    const result= await get10RandomNews() 
    setNews((pre)=>{
      return [...pre,...result.data]
    })
  }
  useEffect(()=>{
    fetchMoreData();
  },[])
  if(news.length===0){
      return '';
  }
  return(
    <div className={styles.postContainer}>

      {/* main news container  */}                 {/* adds container  */}
          {/* search bar */}                          {/* adds */}
          {/* all news */}

        <div className={styles.newsAndAddsContainer}>
          <div className={styles.newsContainer} >
              <InfiniteScroll
                dataLength={news.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h5>Loading...</h5>}
              >
                {news.map((newNews,index)=>{
                  return   <News key={index} news={newNews} shouldShowLikeComment={true}/>
                })}
                 
               </InfiniteScroll>
          </div>
          <div className={styles.trendingContainer} >
            <div className={styles.trendingNewsHeading}>Trending News</div>
            <TrendingNews news='Opposition bloc to send MPs to Manipur, parties hit back at PM Modi'/>
            <TrendingNews news='Opposition  parties hit back at PM Modi'/>
            <TrendingNews news='Opposition bloc to send MPs to Manipur, '/>
            <TrendingNews news='PM Modi hits Opposition bloc to send MPs to Manipur, '/>
          </div>

        </div>


       

    </div>
  )
}