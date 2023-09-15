import { Divider, Flex, Box } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext';

const CartWidget = () => {

  const { cart, setCart } = useContext(CartContext)

  return (
    <div>
      <Flex>
        <Box>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </Box>
        <Divider />
        <Box>
          <p>{"contador"}</p>
        </Box>

      </Flex>
    </div>
  )
}

export default CartWidget