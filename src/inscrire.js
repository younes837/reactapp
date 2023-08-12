import React, { useState } from 'react'
import './App.css';
export default function Inscrire() {
    const [username,setUsername]=useState('')
    const [pw,setPw]=useState('')
    const [d,setDate]=useState('')
    const [ville,setVille]=useState('')
    const [genre,setGenre]=useState('')
    const [loisirs,setLoisirs]=useState([])
    const [logedIn,setLogedIN]=useState(false)
    const villes=[{id:"1",nom:"Agadir"},{id:"2",nom:"Casablanca"},{id:"3",nom:"Rabat"},]
    const check=(e)=>{
        if(e.target.checked){
        // alert(e.target.value)
        setLoisirs([...loisirs,e.target.value])
    }else{
        setLoisirs(loisirs.filter(item=>item!==e.target.value))
    }
    }
    const submit=()=>{ 
        setLogedIN(true)
        
    }
  return (
    <div>
        {
        logedIn===false?<div id="login-form-wrap">
        <form id="login-form" onSubmit={submit}>
     <h2>Inscription</h2>
     <p>
     <input type="text" id="username" name="username" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />       </p>
     <p>
     <input type="password" id="email" name="email" placeholder="Password" onChange={(e)=>setPw(e.target.value)}   required/>
     
     </p>
     <input type="date" name="date" id="date" onChange={(e)=>setDate(e.target.value)} required  />
     <p>
         
         <select onChange={(e)=>setVille(e.target.value)}>
         <option ></option>
            {villes.map(item=><option value={item.nom}>{item.nom}</option>)}
         </select>
     </p>
 <p>
     Genre <input type="radio" name="genre" value="Mr" onChange={e=>setGenre(e.target.value)} /> Homme
      <input type="radio" name="genre" value="Mme" onChange={e=>setGenre(e.target.value)}/>Femme
 
    </p>
    <p>Loisirs
     <input type="checkbox" value="Sport" onClick={(e)=>check(e)}/>Sport
     <input type="checkbox" value="Lecture" onClick={(e)=>check(e)}/>Lecture
     <input type="checkbox" value="Musique" onClick={(e)=>check(e)}/>Musique
    </p>

    <p>
     <input type="file"/>
    </p>
 
     <p>
     <input type="submit" id="login" value="Login"   />
     </p>
     
   </form>
   </div>:<div>Bonjour {genre} {username} né le {d} à {ville} et mes loisirs sont : {loisirs.map(it=>it+", ")}</div>

             
}
  </div>

  )
}
