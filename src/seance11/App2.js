import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './seance.css'


export default function App() {

    // const [users,setUsers]=useState([])
    const [user,setUser]=useState({})
    const [id,setId]=useState(1)
    const [address,setAddress]=useState([])
  useEffect(()=>{axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{setUser(res.data);setAddress(res.data.address)})},[id])
  return (
    <div>
      
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
        <div className='child' >
        <p>ID : {user.id} </p>
        <p>Nom : {user.name} {user.username}  </p>
        <p>Email : {user.email} </p>
       

    </div>
    </div>
  )
}
