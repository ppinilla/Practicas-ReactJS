import React from 'react'
import Item from './Item';
import {Flex} from '@chakra-ui/react';

//React.memo
  /* 

  Almacena informacion de props que ya ha sido mostrada en otra oportunidad
  
  */

const ItemList = ({product}) => {

    //console.log(product);


  return (

    <Flex justifyContent="center" alignItems="center" gap={10} p="4" flexWrap="wrap">
    {product.map((p) => {

        return (
            <Item producto={p} key={p.id}/>
        )
    })}
    </Flex>
  )
}

export default React.memo(ItemList)