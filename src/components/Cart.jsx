import React from 'react'
import Form from './Form'
import { LightMode } from '@chakra-ui/react'

const Cart = () => {

  const cart = [1]
  console.log(cart);

  return (
    <div>Mi carrito

      {(cart.length > 0) ?
        <Form />
        :
        <button>Regresa a la pantalla principal</button>
      }

    </div>
  )
}

export default Cart