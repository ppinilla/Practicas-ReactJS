import React from 'react'

const ComponenteA = ({curso, comision, coder, tomarValor}) => {
  coder()

  const ValorRandom = Math.random() * 10
  console.log(ValorRandom);

  tomarValor(ValorRandom)

  return (
    <>
    {/* <div>ComponenteA</div> */}
    <h1>{curso}</h1>
    <h2>{comision}</h2></>
  )
}

export default ComponenteA