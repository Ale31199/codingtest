import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';


export default function Test(){
const [dom, setdom] = useState('Benvenuto al gioco del Signor Cervo, questa sarà un avventura a cui richiederà molta attenzione alle regole. Se rompi le regole, il Sig. Cervo ti ucciderà. Sei pronto ad affrontarlo?')
const [sce, setsce] = useState('Si sono pronto ad affrontare il mio destino!')
const [sce2, setsce2] = useState('No, non voglio essere sdunzato dal Sig.Cervo, quindi addio...')


const trivia = {

d0: 'Benvenuto al gioco del Signor Cervo, questa sarà un avventura a cui richiederà molta attenzione alle regole. Se rompi le regole, il Sig. Cervo ti ucciderà. Sei pronto ad affrontarlo?',

r0:['Si sono pronto ad affrontare il mio destino!',
'No, non voglio essere sdunzato dal Sig.Cervo, quindi addio...'],

d1:'Bene sei entrato nella casa del Sig. Cervo. Davanti a te, ce il libro delle regole, assicurati di leggerlo molto attentamente e quando ti riterrai pronto, prosegui verso la porta rossa.',

r1:['Ok, leggo le regole e ci sono!',
'Le regole già le so, procediamo'],

d2: 'Pessima scelta, il Sig.Cervo non permette a nessuno di scappare al suo gioco, quindi sarai sacrificato in piazza.',

r2:['Ti prego risparmiami Sig.Cervo, giocherò al tuo gioco mi hai convinto',
'va bene sdunzami...']


}



const ver=(scelte)=>{
    if (dom === trivia.d0 && scelte === trivia.r0[0]){
        setdom(trivia.d1)
        setsce(trivia.r1[0])
        setsce2(trivia.r1[1])
      
    } else if (dom === trivia.d0 && scelte === trivia.r0[1]){
        setdom(trivia.d2)
        setsce(trivia.r2[0])
        setsce2(trivia.r2[1])
    }
}

const backk =()=>{
setdom(trivia.d0)
setsce(trivia.r0[0])
setsce2(trivia.r0[1])
}



    return(

        <div>
<h2>{dom}</h2>
<button onClick={()=>ver(sce)} >{sce}</button>
<button onClick={()=>ver(sce2)} >{sce2}</button>

<button onClick={backk} >Go back</button>


</div>

    )
}




