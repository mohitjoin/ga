"use client";
import React,{useState,useEffect} from 'react'
import { getUsersDetails } from './services'
import styles from './page.module.css'  
import LeftNavbar from './components/LeftNavbar'
import PostContainer from './components/PostsContainer'
import Loader from './profileComponents/Loader';

export default function Home() {
  const [user,setUser]=useState(null)
  const getCurrentUserDetails= async ()=>{
    const result= await getUsersDetails(); 
    setUser((pre)=> result.data)
  }
  useEffect(()=>{
    getCurrentUserDetails();
  },[])
  if(!user){
    return <Loader />
  }
  return (
    <main className={styles.main}>
      <LeftNavbar user={user} /> 
      <PostContainer/>
    </main>
  )
}
