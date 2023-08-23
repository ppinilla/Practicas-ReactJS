import {useState} from "react"
/* import React, { useState } from 'react' */
import ComponenteA from './components/ComponenteA'

//App.jsx es el componente padre
//ComponenteA.jsx es el componente hijo

const App = () => {

  //HOOK

  const [nombre, setNombre] = useState("Coder")
  const [carrito, setCarrito] = useState([])
  const [usuario, setUsuario] = useState(null)
  const [contador, setContador] = useState(0)
  console.log(nombre);
  console.log(carrito);
  console.log(usuario);
  console.log(contador);

  /* const curso = "React"
  const comision = 55750

  const coder = () => {
    console.log("Coderhouse");
  }
  const tomarValor = (valor) => {
    console.log(valor);
  }
 */
  return (
    <>
      {/* <div>App</div> */}
      {/* <ComponenteA 
      curso={curso} //nombreProps=valorProps
      comision={comision}
      coder={coder}
      tomarValor={tomarValor}
      /> */}
      <h1>{nombre}</h1>
      <button onClick={() => setNombre ("House")}>Cambiar estado</button>
      <h2>{contador}</h2>
      <button onClick={() => setContador (contador + 1)}>Sumar</button>
    </>
  )
}

export default App