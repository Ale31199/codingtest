import React, { useState, useEffect } from "react";
import './App.css';

export default function Sudoku() {
  const [qt, setqt]=useState(0)
  const [pr, setpr]=useState(134)

  const qtchange=(event)=>{
    const takeqt= parseInt(event.target.value)
  setqt(takeqt)
  if(takeqt === 1){
  setpr(134 * 1)
  }else if (takeqt === 2){
    setpr(134 * 2)
  }
  }
  
 
  return (
    <div onChange={qtchange}>
       <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
       </select>



       <p>qt selected: {qt}</p>
       <p>price: {pr}</p>
    </div>

    
  ); 
}
