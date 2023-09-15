import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const ComponenteA = () => {
  const { cart, setCart, comision } = useContext(CartContext)
  return (
    <>
      <h1>{comision}</h1>
    </>
  )
}


/* const ComponenteA = ({curso, comision, coder, tomarValor}) => {
  coder()

  const ValorRandom = Math.random() * 10
  console.log(ValorRandom);

  tomarValor(ValorRandom)

  return (
    <>
     <div>ComponenteA</div> 
    <h1>{curso}</h1>
    <h2>{comision}</h2>
    </>
  )

} */

export default ComponenteA