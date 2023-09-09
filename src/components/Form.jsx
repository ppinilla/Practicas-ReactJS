import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [idPurchase, setIdPurchase] = useState('f454sd')


    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === '' ? alert('Campo nombre vacio') : alert(`Bienvenido ${nombre}`)
        email === '' ? alert('Campo email vacio') : alert(`Registrado con el email: ${email}`)
        console.log('Informacion enviada');
    }

    return (
        <>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'>Enviar</button>
            </form>

            <h3>Id de tu compra: {idPurchase}</h3>

        </>
    )
}

export default Form