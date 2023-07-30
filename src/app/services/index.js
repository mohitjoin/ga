import axios from "axios";


const HOST_URL='https://api.unsplash.com'
const clientId=process.env.NEXT_PUBLIC_CLIENT_ID
const username=process.env.NEXT_PUBLIC_USER_NAME

// https://api.unsplash.com/users/mohitk30/photos?client_id=HIiM88x0FXj-lQdtbT2J25VmSh7ILiuN3nZZLgc0KKo


export const getUsersDetails=(userName=username)=>{ 
  return axios.get(`${HOST_URL}/users/${userName}?client_id=${clientId}`)
}

export const get10RandomNews=(count=10)=>{ 
  return axios.get(`${HOST_URL}/photos/random?count=${count}&client_id=${clientId}`)
}

export const getUserPhotos=(userName=username)=>{ 
  return axios.get(`${HOST_URL}/users/${userName}/photos?client_id=${clientId}`)
}