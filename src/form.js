import React,  {useState} from 'react';
import './App.css';
import axios from 'axios';


export default function Form(){
const [email, setEmail]=useState('');
const [user, setUser]=useState('');
const [pass, setPass]=useState('');


const register=()=>{
    if(email.length === 0){
        alert('Email required')
    } else if(user.length === 0){
        alert('Username required')
    } else if(pass.length === 0){
        alert('Password required')
    } else {
        const url = 'http://localhost/src/test5.php';
       let fdata = new FormData();
       fdata.append('email', email);
       fdata.append('user', user);
       fdata.append('pass', pass);
       axios.post(url, fdata) .then(response=> alert(response.data)) .catch(error=>alert(error));
    }
}

const ent=(event)=>{
if (event.key === 'Enter'){
    register()
}
}

    return(
<div>
<h1>Registration Page</h1>


    <label>*Email:</label>
<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>

<label>*Username:</label>
<input type='text' value={user} onChange={(e)=>setUser(e.target.value)}></input>

    <label>*Password:</label>
<input type='password' value={pass} onChange={(e)=>setPass(e.target.value)}></input>

<button onClick={register} onKeyPress={ent}>Register</button>

</div>
)
}