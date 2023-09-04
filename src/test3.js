import React, { useState, useEffect } from "react";
import './App.css';

export default function Loops() {
const [list, setList]= useState([])
const [write, setWrite]=useState('')

const createList=()=>{
  setList([...list, write])
  setWrite('')
}

const enter=(event)=>{
if ( event.key === 'Enter'){
  createList()
}
}


const aggiungi=(event)=>{
setWrite(event.target.value)
}

const removeItem=(index)=>{
  const lista= list.filter((item, i)=> i !== index)
  setList(lista)
}

  return (
  <div>  
    <h1>To do List</h1>

    <input
    value={write}
    onChange={aggiungi}
    onKeyPress={enter}
    placeholder="Add Something..."
    />


{list.map((item, index)=> (
<div >
  <li key={index}>{item}</li> 
<button onClick={()=>removeItem(index)}>Rimuovi</button>
</div>
))}


    </div>

   
  );
}
