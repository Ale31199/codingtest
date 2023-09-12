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
        const url = 'http://localhost:3000/src/test5.php';
       let data = new FormData();
       data.append('email', email);
       data.append('user', user);
       data.append('pass', pass);
       axios.post(url, data) .then(response=> alert(response.data)) .catch(error=>alert(error));
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
<input type='email' name='email' onChange={(e)=>{setEmail(e.target.value)}}></input>

<label>*Username:</label>
<input type='text' name='username' onChange={(e)=>{setUser(e.target.value)}}></input>

    <label>*Password:</label>
<input type='password' name='password' onChange={(e)=>{setPass(e.target.value)}}></input>

<button onClick={register} onKeyPress={ent}>Register</button>

</div>
)
}