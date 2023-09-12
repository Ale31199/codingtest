import React, { useState } from "react";
import './App.css';

export default function Test() { 
  const num = ['1', '2', '3', '4', '5']


//  const inv  = num.reverse()

const count = [];
 for (let i=num.length; i>= 0; i--){
  count.push(num[i])
 }



  return(
 <div>

<h1>{count}</h1>

 </div>



  )
  
}
