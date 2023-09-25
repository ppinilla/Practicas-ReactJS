import React from 'react'
import { useState, useContext } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/ShoppingCartContext'

//IMPORTAR EL CONTEXT

//CART

const Form = () => {

    const cart = [
        { id: 1, nombre: "Producto A", precio: 1000 },
        { id: 2, nombre: "Producto B", precio: 2000 }
    ]

    /* const { cart, setCart } = useContext(CartContext) */
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    /* const [idPurchase, setIdPurchase] = useState('f454sd') */
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()


    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === '' ? alert('Campo nombre vacio') : alert(`Bienvenido ${nombre}`)
        email === '' ? alert('Campo email vacio') : alert(`Registrado con el email: ${email}`)

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
        //console.log('Informacion enviada');
    }

    const order = {
        buyer: {
            nombre, email
        },
        items: cart.map(({ id, nombre, precio }) => ({
            id, nombre, precio
        }))

    }
    console.log(order);
    const ordersCollection = collection(db, "order")
    return (
        <>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'>Enviar</button>
            </form>

            <h3>Id de tu compra: {orderId}</h3>

        </>
    )
}

export default Form