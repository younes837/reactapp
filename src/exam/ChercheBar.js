import React, { useState } from 'react'

export default function ChercheBar(props) {
    const [type,setType]=useState("")
    function envoiType(){
        props.f(type)
    }
  return (
    <div >
        <h1>Composant Cherche Bar</h1>
        <p>Entrer le mot clé chercher</p>
        <input type="text" value={type} onChange={(e)=>setType(e.target.value)} />
        
        <button onClick={()=>envoiType()}>Envoyer</button>
    </div>
  )
}
