import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Divider } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box p='4'>
                    <Link to={'/'}>
                        <h3>NombreProyecto</h3>
                    </Link>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <Link to={'/category/corporal'}>
                                <MenuItem>Corporal</MenuItem>
                            </Link>
                            <Link to={`/category/facial`}>
                                <MenuItem>Facial</MenuItem>
                            </Link>
                            <Link to={'/category/capilar'}>
                                <MenuItem>Capilar</MenuItem>
                            </Link>

                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Link to={'/cart'}>
                        <CartWidget />
                    </Link>
                </Box>

            </Flex>
            <Divider />
        </div>
    )
}

export default NavBar