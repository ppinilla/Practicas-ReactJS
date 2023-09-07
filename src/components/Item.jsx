import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, Button, ButtonGroup, CardFooter} from "@chakra-ui/react"

const Item = ({ producto }) => {
    //console.log(producto);
    return (
        <>
            < Card maxW='sm' >
                <CardBody>
                    <Image
                        src={producto.image}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{producto.title}</Heading>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Detalle
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card >

            {/* <div>
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <p>€{producto.price}</p>
            </div> */}
        </>
    )
}

export default Item