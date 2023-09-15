import React, { useState, useContext } from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, Button, ButtonGroup, CardFooter, Flex, Spacer, Center } from "@chakra-ui/react"
import { Link, useParams } from 'react-router-dom';
import './itemCount.css'
import { CartContext } from '../context/ShoppingCartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ items }) => {
    const { id } = useParams()

    const filteredItems = items.filter((items) => items.id == id)

    /* const [cont, setCont] = useState(0)

    const sumar = () => {
        if (cont < 10) {
            setCont(cont + 1)
        }
    }
    const restar = () => {
        if (cont > 0) {
            setCont(cont - 1)
        }
    } */


    const [goToCart, setGoToCart] = useState(false)
    const {addItem} = useContext(CartContext)

    const onAdd = (quant) => {
        setGoToCart(true)
        addItem(items, quant)
    }


    return (
        <div>
            {filteredItems.map((p) => {
                /* (items.map((p) => { */
                return (
                    <div key={p.id}>
                        <Center>
                            < Card maxW='sm' className='card'>
                                <CardBody>
                                    <Image
                                        src={p.image}
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{p.title}</Heading>
                                        <Text>
                                            {p.description}
                                        </Text>
                                        <Text color='blue.600' fontSize='2xl'>
                                            €{p.price}
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Link to={'/'}>
                                            <Button variant='solid' colorScheme='blue'>
                                                Return
                                            </Button>
                                        </Link>

                                        {/* <Button onClick={restar}>-</Button>
                                        <Button>{cont}</Button>
                                        <Button onClick={sumar}>+</Button> */}
                                        {goToCart ? <Button variant='ghost' colorScheme='blue'>
                                            Go to Cart
                                        </Button> : <ItemCount initial={1} stock={10} onAdd={onAdd} /> }
                                    </ButtonGroup>
                                </CardFooter>
                            </Card >
                        </Center>

                    </div>
                )
                /* })) */
            })}

            {/* <div>
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <p>€{producto.price}</p>
            </div> */}
        </div>
    )
}

export default ItemDetail