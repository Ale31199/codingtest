import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

export default function App() {
    const [age, setAge]=useState('')
 

    const require = 25


    const exam=()=>{
        if (age<= require){
            document.getElementById('text').innerHTML='Requisiti non sufficienti'
        } else if(age>= require) {
            document.getElementById('text').innerHTML='Perfetto'
        }
    }

 const enterr=(event)=>{
if ( event.key === 'Enter'){
    exam()
}
 }


 const verifica=(event)=>{
setAge(event.target.value)
 }

  return (
    <div className='app'>
      <h1 id='text'></h1>
      <input id='input' type='text' onChange={verifica} onKeyPress={enterr}value={age} ></input>
      <button onClick={exam}>Verifica</button>
    </div>
  );
}
