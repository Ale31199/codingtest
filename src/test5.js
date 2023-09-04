import React, { useState, useEffect } from "react";
import './App.css';

export default function Loops() {
  const [text, setText] = useState('');

 

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
