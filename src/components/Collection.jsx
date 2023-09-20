import React from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const Collection = () => {
   /*  const {category} = useParams() */
    const [products, setProducts] = useState([])
    console.log(products);

    useEffect(() => {
        const db = getFirestore()

        const itemsCollection = collection(db, "tratamientos"/* `${category}` */)
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setProducts(docs)
        })
    }, [])

    return (
        <div>
            <h1>Collection</h1>
            {
                products.map((p) => (
                    <div key={p.title}>
                        <h4>producto: {p.title}</h4>
                        <h5>descripcion: {p.description}</h5>
                        <h6>€{p.price}</h6>
                    </div>
                ))
            }
        </div>
        
    )
}

export default Collection