import React, {useState, useEffect} from 'react';
import './App.css';



export default function Test9(){

    const [intime, setintime]=useState(new Date())
   

    useEffect(()=>{
        const newtime = setInterval(() => {
            setintime(new Date())
        }, 1000);
        return ()=> clearInterval(newtime)
    })


    const [tot, settot]=useState(``)
    const [pc, setpc]=useState('')
    const tools = ['Rock', 'Paper', 'Scissors']



     const therock=()=>{
        pcChoose()
        if (tools[0] === 'Rock' && pc === 'Rock'){
            settot(`TIE! You picked ${tools[0]} and Computer picked ${tools[0]}`)
        } else if (tools[0] === 'Rock'&& pc === 'Scissors'){
            settot(`WIN! You picked ${tools[0]} and Computer picked ${tools[2]}`)
        } else if (tools[0] === 'Rock' && pc === 'Paper'){
            settot(`LOSE! You picked ${tools[0]} and Computer picked ${tools[1]}`)
        }
     }
     const thePaper=()=>{
        pcChoose()
        if (tools[1] === 'Paper' && pc === 'Paper'){
            settot(`TIE! You picked ${tools[1]} and Computer picked ${tools[1]}`)
        } else if (tools[1] === 'Paper' && pc === 'Rock'){
            settot(`WIN! You picked ${tools[1]} and Computer picked ${tools[0]}`)
        } else if (tools[1] === 'Paper' && pc === 'Scissors'){
            settot(`LOSE! You picked ${tools[1]} and Computer picked ${tools[2]}`)
        }
     }
     const theSci=()=>{
        pcChoose()
        if (tools[2] === 'Scissors' && pc === 'Scissors'){
            settot(`TIE! You picked ${tools[2]} and Computer picked ${tools[2]}`)
        } else if (tools[2] === 'Scissors'&& pc === 'Paper'){
            settot(`WIN! You picked ${tools[2]} and Computer picked ${tools[1]}`)
        } else if (tools[2] === 'Scissors' && pc === 'Rock'){
            settot(`LOSE! You picked ${tools[2]} and Computer picked ${tools[0]}`)
        }
     }



    const pcChoose=()=>{
        const randomChoose = Math.floor(Math.random() * tools.length)
        setpc(tools[randomChoose])
    }
    

    return(
        <div>
        <h1>{intime.toLocaleTimeString()}</h1>
        <h1>{intime.toLocaleDateString()}</h1>
        
        <button onClick={therock} value='Rock' >Rock</button>
        <button onClick={thePaper} value='Paper' >Paper</button>
        <button onClick={theSci} value= 'Scissors' >Scissors</button><br></br><br></br>

        <h2>{tot}</h2>


        </div>
    )
}