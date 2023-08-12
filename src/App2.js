import React, { useState } from 'react'

export default function App2() {
    const produit=[
        {id:22,nom:"clé usb",prix:70,famille:"informatique"},
        {id:1,nom:"clé us",prix:0,famille:"informatique"},
        {id:3,nom:"clé u",prix:710,famille:"bureau"},
        {id:2,nom:"c usb",prix:560,famille:"bureau"},
        {id:7,nom:"sb",prix:340,famille:"informatique"},
        {id:11,nom:"usb",prix:50,famille:"informatique"},
    ]
    
    const [l,setL]=useState([])
    const [numb,setNb]=useState()
    function ex1() {
       setL( produit.filter(item=>item.famille==='informatique'&& item.prix<100))
    }
    function env() {
        // setNb(produit.reduce((value1,item)=>value1+parseInt(item.prix),0))
        // setNb(produit.map(item=>parseInt(numb)+parseInt(item.prix)))
        let mini=produit[0].prix
        
        produit.map(item=>
            item.prix<mini?mini=item.prix:null
        )
        let nom=produit.find(item=>item.prix===mini)
        alert(mini+nom.nom)
        alert()
    }
  return (
    <div>
        <button onClick={()=>env()}>g</button>
        {/* {l.map(item=><p>{item.nom}</p>)} */}
        {numb}
    </div>
  )
}
