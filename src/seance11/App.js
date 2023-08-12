import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './seance.css'
import { livres } from './App2'
export default function App() {
  const [users,setUsers]=useState([])
  const [posts,setPosts]=useState([])
  const [userPosts,setUserPosts]=useState([])
  const [uid,setUid]=useState([])
  // useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{setUsers(res.data)},[])})  
  useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{setPosts(res.data)},[])})
 useEffect(()=> {fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(res=>setUsers(res))},[]) 
  const afficher=(id)=>{
    console.log(id)      
    setUserPosts(posts.filter((item=>item.userId===id)))
  }
  return (
    <div>
      {users.map((item,index)=>
      <div className='child' key={index}>
        <p>ID : {item.id}</p>
        <p>Nom : {item.name} {item.username}</p>
        <p>Email : {item.email}</p>
        <p>City : {item.address.city}</p>
        <button onClick={()=>{afficher(item.id)}}>afficher</button>
        <hr/>
        {
        userPosts.map((elem,index)=>item.id===elem.userId?       
        <div key={index}>
        {/* <p>{elem.userId}</p> */}
        <p>{elem.id}  {elem.title}</p>
        </div>:null
        )
        }
        

      </div>
    )}
      
    </div>
  )
}
