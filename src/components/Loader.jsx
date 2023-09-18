import React from 'react'
import { Spinner } from '@chakra-ui/react'
import Loading from './Loading'

const Loader = () => {
    const loading = false
    return (
        loading ? <Loading/> : null
    )
}

export default Loader