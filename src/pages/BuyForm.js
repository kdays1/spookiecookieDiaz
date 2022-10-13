import React, { useState } from 'react'
import './styles.css'

function BuyForm ({sendOrder}) {

    const [user, setUser] = useState('');
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');

    return(
        <>
        <form>
            <p>
                <label className="text text-medium">Ingresa tu nombre: 
                <input type='text' value={user} onChange={(e) => setUser(e.target.value)}></input>
                </label>
                </p>

            <p>
                <label className="text text-medium">Ingresa tu número: 
                <input type='text' value={number} onChange={(d) => setNumber(d.target.value)}></input>
                </label>
            </p>

            <p>
                <label className="text text-medium">Ingresa tu correo: 
                <input type='text' value={mail} onChange={(h) => setMail(h.target.value)}></input>
                </label>
            </p>

        </form>
        <button onClick={() => sendOrder(user, number, mail)}>Enviar Orden</button>
        </>
    )
}

export default BuyForm