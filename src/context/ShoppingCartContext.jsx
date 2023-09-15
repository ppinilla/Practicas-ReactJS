import React from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext(null)

const ShoppingCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  //const comision = "React en CoderHouse"

  const clear = () => setCart([])
  const isInCart = (id) => cart.find(prod => prod.id === id) ? true : false
  const removeItem = (itemId) => setCart(cart.filter(prod => prod.id !== id))
  const addItem = (item, quantity) => {
    const { quant = 0 } = cart.find(prod => prod.id === item.id) || {}
    const newCart = cart.filter(prod => prod.id !== item.id)
    setCart([...newCart, { ...item, quant: quant + quantity }])
  }
  console.log(cart);

  //agregar elementos al carrito
  //eliminar
  //etc

  //increment
  //decrement
  //onAdd


  return (
    <CartContext.Provider value={{/* cart, setCart, comision */
      clear,
      isInCart,
      removeItem,
      addItem
    }}>

      {children}

    </CartContext.Provider>
  )
}

export default ShoppingCartProvider