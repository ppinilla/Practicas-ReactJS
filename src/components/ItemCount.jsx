import React, { useEffect, useState } from 'react'
import './itemCount.css'
import {
    NumberInput,
} from '@chakra-ui/react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [contador, setContador] = useState(parseInt(initial));

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

    useEffect(() => {
        setContador(parseInt(initial));
    }, [initial])

    /* const onAdd = () => {
        alert(contador)
    } */
    return (
        <>
            <div className='counter'>
                <button onClick={Restar}>-</button>
                <span>{contador}</span>
                <button onClick={Sumar} /* disabled={contador >= 10} */>+</button>
                <button onClick={() => onAdd(contador)}>Agregar al Carrito</button>
            </div>
        </>

    )
}



export default ItemCount