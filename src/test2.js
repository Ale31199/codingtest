import React, { useState } from "react";
import './App.css';

export default function Test() {
  const [nome, setNome] = useState('');
  const [eta, setEta] = useState('');
  const [sesso, setSesso] = useState('');
  const [lavoro, setLavoro] = useState('');
  const [message, setMessage] = useState('');
  const [people, setPeople] = useState([]);

  const check = () => {
    if (nome && eta && sesso && lavoro) {
      setMessage('Dati verificati con successo!');
    } else {
      setMessage('Errore durante la verifica dati.');
    }
  }

  const generateRandomChar = () => {
    const characters = '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

  const show = () => {
    if (!nome || !eta || !sesso || !lavoro) {
      setMessage('errore');
      return;
    }

    const randomChar = generateRandomChar();
    const person = { nome, eta, sesso, lavoro, random: randomChar };
    setPeople([...people, person]);
    setNome('');
    setEta('');
    setSesso('');
    setLavoro('');
  }

  const enter = (event) => {
    if (event.key === 'Enter') {
      show();
    }
  }

  return (
    <div>
      <h1>{nome}</h1>
      <h1>{eta}</h1>
      <h1>{sesso}</h1>
      <h1>{lavoro}</h1>

      <h1>{message}</h1>


      <input
        type="text"
        onChange={(e) => setNome(e.target.value)}
        onKeyPress={enter}
        value={nome}
        placeholder="nome"
      />

      <input
        type="text"
        onChange={(e) => setEta(e.target.value)}
        onKeyPress={enter}
        value={eta}
        placeholder="età"
      />

      <input
        type="text"
        onChange={(e) => setSesso(e.target.value)}
        onKeyPress={enter}
        value={sesso}
        placeholder="sesso"
      />

      <input
        type="text"
        onChange={(e) => setLavoro(e.target.value)}
        onKeyPress={enter}
        value={lavoro}
        placeholder="lavoro"
      />

      <button onClick={show}>mostra dati</button>
      <button onClick={check}>verifica dati</button>

      <div>
        {people.map((person, index) => (
          <div key={index}>
            <p>Nome: {person.nome}</p>
            <p>Età: {person.eta}</p>
            <p>Sesso: {person.sesso}</p>
            <p>Lavoro: {person.lavoro}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
