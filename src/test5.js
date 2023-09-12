import React, { useState, useEffect, useTransition } from "react";
import './App.css';

export default function Loops() {

  const [cose, setCose] = useState(['mela', 'ombrello',  'coltello',  'pistola',  'brunello di montalcino']);
  const [items, setItems]=useState([])
  const [ite, setIte]=useState('')


  const pulotto = () => {
    const oggettiVietati = ['coltello', 'pistola'];
    const nuoveCose = cose.filter(item => !oggettiVietati.includes(item));
    setCose(nuoveCose);
  }

   
  const enter =(event)=>{
   if (event.key === 'Enter'){
addItem()
   }
  }

  const add=(event)=>{
  setIte(event.target.value)
  }

 
  const addItem=()=>{
    setItems([...items, ite])
    setIte('')
  }

  const parolescurrili=()=>{
    const parole = ['kiwi', 'arancia', 'banana', 'mela']
    const filtrato = items.filter(item => !parole.includes(item))
    setItems(filtrato)
    alert('parola filtrata')
    
  }

  return (
    <div>
      <p>{cose.join(', ')}</p>
      <button onClick={pulotto}>Fatti perquisire</button>

{items.map((item, index)=> (
      <p key={index}>{item}</p>
      ))}

      <input 
      value={ite}
      onChange={add}
      onKeyUp={enter}
      placeholder="insert your items"></input>
      <button onClick={addItem}>add items</button>
      <button  onClick={parolescurrili}>elimina parole scurrili</button>
    </div>
  );


}
