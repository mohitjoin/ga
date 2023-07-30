"use client";
import React,{useState,useEffect} from 'react';
import {getUsersDetails,getUserPhotos} from '../../services'
import styles from './userProfile.module.css'   
import Profile from '../../profileComponents/Profile'
import ImagesContainer from '@/app/profileComponents/ImagesContainer';
import Loader from '@/app/profileComponents/Loader';


const UserProfile = ({params}) => {  
  const {userid}=params;
  const [userDetails,setUserDetails]= useState(null)
  const [userPhotos,setUserPhotos]= useState(null)
  const [isGridView,setIsGridView]= useState(true)


  
  const fetchUserDetails = async () => {
     const result= await getUsersDetails(userid);
     setUserDetails((pre)=>{
      return result.data;
     })
  }
  const fetchUserPhotos = async () => {
    const result= await getUserPhotos(userid);
    setUserPhotos((pre)=>{
     return result.data;
    })
 }
 const handleListMode=(e)=>{
  setIsGridView((pre)=>{
    return !pre;
  })
 }
  useEffect(()=>{
    fetchUserDetails()
    fetchUserPhotos()
  },[])

  if(!userDetails && !userPhotos){
    return <Loader />
  }

  return (
      <div className={styles.mainUserProfileContainer}> 
        <div className={styles.profileNavbar} >
          <a href='/'>
            <div className={styles.backToNews} >Back to Instagram News</div>
          </a>
          <div className={styles.gridOrListViewContainer }>
            {isGridView ? "Grid View": "List View"}
          </div>
          <div className={styles.toogleButtonContainer}>
              <label className={styles.switch}>
                  <input type="checkbox" onChange={handleListMode} />
                  <span className={styles.slider}></span>
              </label>
          </div>
        </div>
         

        <div className={styles.profileDetailsContainer}>
           <Profile user={userDetails} />
           <ImagesContainer photos={userPhotos} isGridView={isGridView} />
        </div>
     </div>
  );
};

export default UserProfile;
