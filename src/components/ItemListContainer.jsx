import { useEffect, useState } from 'react'
import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const {category} = useParams()
    const [products, setProducts] = useState([])
    console.log(products);

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = /* query( */collection(db, "tratamientos")/* , where("category", "==", "facial")) */ ;
        getDocs(itemsCollection).then((snapshot) => {
            if(snapshot.size === 0) {
                console.log("No results");
            }
            setProducts (snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
    }, [])
    
   

    /* const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        //console.log(data);

        return data
    }

    const [product, setProduct] = useState([])
    //console.log(product);

    useEffect(() => {
        getProducts().then((product) => setProduct((product)))
    }, [])

    getProducts() */
    
    /* const [productos, setProductos] = useState([])

    productos == []
    
    productos.length === 0 ? <Loader/> : <ItemList/> */

    /* let productos = [
        { id: '1', name: 'Producto A', description: 'descripcion producto 1', price: 1000, stock: 10 },
        { id: '2', name: 'Producto B', description: 'descripcion producto 2', price: 1500, stock: 5 },
        { id: '3', name: 'Producto C', description: 'descripcion producto 3', price:2000, stock: 15 }
    ];

    const mostrarProductos = new Promise((resolve, reject) => {
        if(productos.length > 0){
            setTimeout(() => {
                resolve(productos)
            }, 5000);
        }else{
            reject("No hay productos para mostrar")
        }
    })

    mostrarProductos
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    }) */

    /* const products = [
        { id: '1', name: 'Producto A', description: 'descripcion producto 1', stock: 10 },
        { id: '2', name: 'Producto B', description: 'descripcion producto 2', stock: 5 },
        { id: '3', name: 'Producto C', description: 'descripcion producto 3', stock: 15 }
    ];

    const getProd = () => {
        return new Promise((resolve, reject) => {
            if (products.length === 0) {
                reject(new Error("No hay datos"))
            }
            setTimeout(() => {
                resolve(products);
            }, 5000);
        });
    }; */

    /* getProd().then((products) => console.log(products)); */

    //funcion asincronica
    /* async function fetchingData() {
        try{
            const datosFetched = await getProd();
            console.log(datosFetched);
        } catch (error) {
            console.log(error);
        }
    }

    fetchingData(); */

    /* const aplicarDescuento = new Promise((resolve, reject) => {
        const descuento = true
    
        if(descuento) {
            resolve('Descuento aplicado')
        }else {
            reject('No se pudo aplicar el descuento')
        }
    })
    
    aplicarDescuento
    .then((resultado) => {
        console.log(resultado) // resolve
    })
    .catch((error) => {
        console.log(error) //reject
    })
    
    console.log(aplicarDescuento); */

    /* const { id } = useParams()

    const filteredProducts = product.filter((product) => product.category === id) */

    return (
        <>
            {/* <div>ItemListContainer</div>
            <ItemCount /> */}

            {/* {
            productos.map((p) => {
                return(
                    <div key={p.id}>
                        <h1>Nombre: {p.name}</h1>
                        <h3>{p.description}</h3>
                        <p>${p.price}</p>
                    </div>
                )
            })
        } */}

            {/* {id ? <ItemList product={filteredProducts} /> : <ItemList product={product} />} */}
            <ItemList product = {products}/>
        </>
    )

}

export default ItemListContainer