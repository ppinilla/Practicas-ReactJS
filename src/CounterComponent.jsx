import React from 'react'
import useCounter from './useCounter'

const CounterComponent = () => {

    const {count, increment, decrement} = useCounter(0, 2)

  return (
    <div>
        <h2>Contador: {count}</h2>
        <button onClick={increment}>Sumar</button>
        <button onClick={decrement}>Restar</button>
    </div>
  )
}

export default CounterComponent