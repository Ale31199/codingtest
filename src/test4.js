import React, { useState, useEffect } from "react";
import './App.css';

export default function Loops() {
 const [list, setList]= useState([]);
 const [write, setWrite]=useState('');
 const [done, setDone]= useState([]);
 const [currentDate, setCurrentDate]= useState('')

  const enter=(event)=>{
if (event.key === 'Enter'){
    addToList()
}
  }

  const add=(event)=>{
  setWrite(event.target.value)
  }


 const newdate=()=>{
    const date = new Date();
    const theDate = ` Added on ${date.toLocaleDateString()} at  ${date.toLocaleTimeString()}`
    setCurrentDate(theDate)
 } 

  const addToList=()=>{
    if (write === ''){
        removeit()
    } else {
    setList([...list, write])
    setWrite('')
    newdate()
    }
  }

  const removeit=(index)=>{
    const filt = list.filter((item, i)=> i !== index)
    setList(filt)
  }

  const modeToDone=(index)=>{
    const doneit= list[index]
    setDone([...done, doneit])
    setList([list.filter((item, i)=> i !== index )])
    setCurrentDate(list.filter((item, i)=> i !== index))
    
  }


  return (
  <div>  
   <h1>Achievements Lista</h1>


   <input 
   onChange={add}
   value={write}
   onKeyPress={enter}
   placeholder="Add To List..."
   />
 <button  onClick={addToList}>Add Achievement</button>


{list.map((item, index)=> (
    <div>
 <h2 key={index}>{item}</h2>
 <p>{currentDate}</p>
  <button onClick={()=>{removeit(index)}}>Remove from list</button>
  <button onClick={()=>{modeToDone(index)}}>Mark as done</button>
 </div>
))}


    <div>

        <h1>Achievement Unlocked</h1>
        {done.map((item, index)=>(
        <li>{item}</li>
        ))}
    </div>
    </div>

   
  );
}
//.join('\n')

