import React, { useState } from 'react'
import './styles.css'

function BuyForm ({sendOrder}) {

    const [user, setUser] = useState('');
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');

    return(
        <>
        <form>
            <label>Enter your name:
            <input type='text' value={user} onChange={(e) => setUser(e.target.value)}></input>
            </label>

            <label>Enter your number:
            <input type='text' value={number} onChange={(d) => setNumber(d.target.value)}></input>
            </label>

            <label>Enter your e-mail:
            <input type='text' value={mail} onChange={(h) => setMail(h.target.value)}></input>
            </label>
        </form>
        <button onClick={() => sendOrder(user, number, mail)}>Enviar Orden</button>
        </>
    )
}

export default BuyForm