import React from 'react'
import {
    NumberInput,
} from '@chakra-ui/react'

const ItemCount = () => {

        const contador = 3
        const onAdd = () => {
            alert(contador)
        }
        return (
            <>
                <div>ItemCount</div>
                <button onClick={onAdd}>Mostrar cantidad</button>
            </>

        )
    }



export default ItemCount