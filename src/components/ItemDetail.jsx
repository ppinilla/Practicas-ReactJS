import React, { useState } from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, Button, ButtonGroup, CardFooter, Flex, Spacer, Center } from "@chakra-ui/react"
import { useParams } from 'react-router-dom';
import './itemCount.css'

const ItemDetail = ({ items }) => {
    const { id } = useParams()

    const filterItems = items.filter((items) => items.id == id)

    const [cont, setCont] = useState(0)

    const sumar = () => {
        if (cont < 10) {
            setCont(cont + 1)
        }
    }
    const restar = () => {
        if (cont > 0) {
            setCont(cont - 1)
        }
    }



    return (
        <div>
            {filterItems.map((p) => {
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
                                            <Button variant='solid' colorScheme='blue'>
                                                Buy Now
                                            </Button>
                                            <Button onClick={restar}>-</Button>
                                            <Button>{cont}</Button>
                                            <Button onClick={sumar}>+</Button>
                                            <Button variant='ghost' colorScheme='blue'>
                                                Add to cart
                                            </Button>
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