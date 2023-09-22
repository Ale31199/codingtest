import React, {useState} from 'react';


export default function Post(){
    const [uurl, seturl]= useState('./form.php')

const reg=()=>{
if (uurl){
seturl('./form.php')
}
}




    return(
        <div>
        <button onClick={reg} >MHANZ</button>
        </div>
    )
}