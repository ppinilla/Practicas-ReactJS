import React, { useState } from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, Button, ButtonGroup, CardFooter, Flex, Spacer, Center } from "@chakra-ui/react"

const ItemDetail = ({ items }) => {
    console.log(items);

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
        <>
            <Flex>
                < Card maxW='sm' >
                    <CardBody>
                        <Image
                            src={items.image}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{items.title}</Heading>
                            <Text>
                                {items.description}
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                €{items.price}
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
            </Flex>
            <Spacer/>


            {/* <div>
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <p>€{producto.price}</p>
            </div> */}
        </>
    )
}

export default ItemDetail