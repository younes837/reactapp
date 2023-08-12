import React, { useState } from 'react'
import ChercheBar from './ChercheBar'
import Resultat from './Resultat'

export default function App() {
    const list=[
        {nom:"banane",type:"fruit"},
        {nom:"orange",type:"fruit"},
        {nom:"pomme",type:"fruit"},
        {nom:"raisins",type:"fruit"},
        {nom:"kiwi",type:"fruit"},
        {nom:"tomate",type:"legume"},
        {nom:"carotte",type:"legume"},
        {nom:"pomme de terre",type:"legume"},
        {nom:"navet",type:"legume"},
        {nom:"poivron",type:"legume"}
        ]
    
    const [listR,setListR]=useState([])
    const [t,setT]=useState("")
    const envoiT=(x)=>{
        setT(x)
        
        setListR(list.filter(item=>item.type===x))
        
    }
  return (
    <div>
        <h1>Composant APP</h1>
        <ChercheBar f={envoiT}/>
        {t}

        <Resultat list={listR}/>
    </div>
  )
}
