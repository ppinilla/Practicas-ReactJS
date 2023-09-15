import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import ComponenteA from './components/ComponenteA'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CounterComponent from "./CounterComponent"
import ChildrenComponent from "./components/ChildrenComponent"
import TaskFilter from "./components/TaskFilter"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Cart from "./components/Cart"
import ProductDetail from "./components/ProductDetail"
import Form from "./components/Form"
import ShoppingCartContext from "./context/ShoppingCartContext"

//App.jsx es el componente padre
//ComponenteA.jsx es el componente hijo

const App = () => {

  /* const handleClick = (e) => {
    console.log(e.target.innerWidth);
  }
  window.addEventListener("resize", handleClick) */

  //En HTML
  /* 
  <button onClick="descargarInfo()">Descargar</button>

  <form onsubmit="agregarInfo()" method="post">
  <button type:"submit">Enviar</button>
  </form>

  //En JSX
 <button onClick={descargarInfo}>Descargar</button>

 <form onsubmit= {agregarInfo}>
  <button type:"submit">Enviar</button>
  </form>

  */

  /* const sinVocales = (e) => {
    if (
      e.key === 'a' ||
      e.key === 'e' ||
      e.key === 'i' ||
      e.key === 'o' ||
      e.key === 'u') {
      e.preventDefault()
    } else {
      console.log(e.key);
    }
  } */


  //<HOOK

  /* const [nombre, setNombre] = useState("Coder")
  const [carrito, setCarrito] = useState([])
  const [usuario, setUsuario] = useState(null)
  const [contador, setContador] = useState(0)
  const [mensaje, setMensaje] = useState("Mensaje inicial")
  const [contador, setContador] = useState(0) */

  //HOOK>
  /* console.log(nombre);
  console.log(carrito);
  console.log(usuario);
  console.log(contador);

  const restar = () => {
    setContador(contador - 1)
  } 
  const curso = "React"
  const comision = 55750

  const coder = () => {
    console.log("Coderhouse");
  }
  const tomarValor = (valor) => {
    console.log(valor);
  }


  useEffect(() => {
    console.log("UseEffect...");
  }, [mensaje, contador]) */

  return (
    <>

      {/* <ShoppingCartContext>
        <ComponenteA />
      </ShoppingCartContext> */}
      {/* <div>App</div> */}
      {/* <ComponenteA 
      curso={curso} //nombreProps=valorProps
      comision={comision}
      coder={coder}
      tomarValor={tomarValor}
      /> */}
      {/* <h1>{nombre}</h1>
      <button onClick={() => setNombre ("House")}>Cambiar estado</button>
      <h2>{contador}</h2>
      <button onClick={() => setContador (contador + 1)}>Sumar</button>
      <button onClick={(restar)}>Restar</button>
      <button onClick={() => setContador(0)}>Reiniciar</button> */}

      {/* <h2>{mensaje}</h2>
      <button onClick={() => setMensaje("Mensaje Modificado")}>Cambiar Mensaje</button>

      <div className="contador">
        <p>{contador}</p>
        <button onClick={() => setContador(contador + 1)}>Sumar</button>
        <ItemListContainer />
      </div> */}

      {/* <CounterComponent/> */}
      {/* <ChildrenComponent title='Titulo del componente'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, corrupti?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, repellendus saepe aliquam sapiente amet maxime consectetur obcaecati suscipit iusto mollitia.</p>
      </ChildrenComponent> */}
      {/* <TaskFilter/> */}

      <BrowserRouter>

        <ShoppingCartContext>
          <NavBar />
          <Routes>
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />

          </Routes>
        </ShoppingCartContext>



        {/* <ItemDetailContainer />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/' element={<Home />} /> */}

        {/*  */}


      </BrowserRouter>

      {/* <input type="text" onKeyDown={sinVocales} placeholder="Sin vocales"/> */}

      {/* <Form /> */}
    </>
  )
}

export default App