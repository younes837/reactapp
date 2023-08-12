import React, { useState } from 'react'
import App from './App'
import Inscrire from './inscrire'

export default function Home() {
    const [test,setTest]=useState(true)
  return (
    <div>
        <button onClick={()=>setTest(true)}>Login</button>
        <button onClick={()=>setTest(false)}>Sign up</button>
        {test?<App test={test}/>:<Inscrire />}
        
        

    </div>
  )
}
