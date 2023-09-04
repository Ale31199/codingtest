import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

export default function App() {
 const [list, setList]=useState([])
 const [input, setInput]=useState('')


const ord=()=>{
    if (input.trim() !== ''){
        setList([...list, {inp: input}])
        setInput('')
    }
}


    const enter=(event)=>{
if ( event.key === 'Enter'){
    ord()
}
    }

    const aggiungi=(event)=>{
        setInput(event.target.value)
    }

  return (
    <div className='app'>

      
      {list.map((item, index)=> (
<h3 key={index}>{item.inp}</h3>
    ))}
<input type='text' value={input} onChange={aggiungi} onKeyPress={enter}></input>
<button onClick={ord}>aggiorna lista</button>
    </div>
  );
}
