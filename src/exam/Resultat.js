 import React, { useState } from 'react'
 
 export default function Resultat(props) {
  const [listR,setListR]=useState()
   return (
     <div>
        <h1>Composant Resultat</h1>
        <ul>
    {
    props.list.map((item,index)=><li key={index}>{item.nom}</li>)}
    
</ul>
     </div>
   )
 }
 