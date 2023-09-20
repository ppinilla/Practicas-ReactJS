import React from 'react'
import { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const Document = () => {

    /* const { id } = useParams() */
    const [product, setProduct] = useState([])
    /* console.log(product); */

    useEffect(() => {
        const db = getFirestore()
        const oneItem = doc(db, "tratamientos", "TJ9ajuXBEVyAXyTV2tz6"/* `${id}` */)
        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const docs = snapshot.data()
                setProduct(docs)
            }
        })
    }, [])

    return (
        <div>
            <h1>Producto</h1>
            {
                <div>
                    <h4>Producto : {product.title}</h4>
                    <img src={product.pictureUrl} alt="" />
                </div>
            }

        </div>
    )
}

export default Document