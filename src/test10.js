import React, { useState, useEffect } from "react";
import './App.css';

export default function Sudoku() {
  const [qt, setqt]=useState(0)
  const count = 0

  const qtchange=(event)=>{
  setqt(event.target.value)
  }
  
 
  return (
    <div>
       <select onChange={qtchange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
       </select>



       <p>qt selected: {qt}</p>
    </div>

    
  ); 
}
