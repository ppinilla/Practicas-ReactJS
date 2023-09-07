import React, { useState } from 'react'
import './itemCount.css'
import {
    NumberInput,
} from '@chakra-ui/react'

const ItemCount = () => {
    const [contador, setContador] = useState(0);

    const Restar = () => {
        if (contador > 0){
           setContador(contador - 1); 
        }
    }

    const Sumar = () => {
        if (contador < 10) {
            setContador(contador + 1);
        }
    }

    const onAdd = () => {
        alert(contador)
    }
    return (
        <>
            <div className='counter'>
                <button onClick={Restar}>-</button>
                <span>{contador}</span>
                <button onClick={Sumar} /* disabled={contador >= 10} */>+</button>
                <button onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </>

    )
}



export default ItemCount