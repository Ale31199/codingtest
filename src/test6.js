import React, { useState } from 'react';

export default function SendData() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const sendDa = () => {
    setData([...data, { email, user, pass }]);
    setEmail('');
    setUser('');
    setPass('');
  };

  const scrivi=(e)=>{
   setEmail(e.target.value)
  }
  const scrivi2=(e)=>{
    setUser(e.target.value)
   }
   const scrivi3=(e)=>{
    setPass(e.target.value)
   }
   

  return (
    <form onSubmit={sendDa}>
      
        <p>Email:</p>
        <input
          type='email'
          name='email'
          value={email}
          onChange={scrivi}
        />
      

      
        <p>Username:</p>
        <input
          type='text'
          name='user'
          value={user}
          onChange={scrivi2}
        />
      
      
      <p>Password:</p>
        <input
          type='password'
          name='password'
          value={pass}
          onChange={scrivi3}
        />
      

      <button type='submit'>Send Data</button>


{data.map((item, index)=>(
    <div key={index}>
    <p>{item}</p>
    <p >{item}</p>
    <p>{item}</p>
    </div>
    ))}

    </form>
  );
}
