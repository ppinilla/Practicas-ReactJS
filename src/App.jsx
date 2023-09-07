import { useState, useEffect } from "react"
import ComponenteA from './components/ComponenteA'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CounterComponent from "./CounterComponent"
import ChildrenComponent from "./components/ChildrenComponent"
import TaskFilter from "./components/TaskFilter"


//App.jsx es el componente padre
//ComponenteA.jsx es el componente hijo

const App = () => {

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

      {/* <ItemListContainer/>
      <CounterComponent/> */}
      {/* <ChildrenComponent title='Titulo del componente'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, corrupti?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, repellendus saepe aliquam sapiente amet maxime consectetur obcaecati suscipit iusto mollitia.</p>
      </ChildrenComponent> */}
      <TaskFilter/>
      {/* <ItemDetailContainer/> */}

    </>
  )
}

export default App