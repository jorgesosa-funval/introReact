import { useState, Fragment } from 'react'

import { ListUsuarios } from './components/ListUsuarios'
import { MessageContainer, Hola } from './components/MessageContainer'


function App() {

  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [suma, setSuma] = useState();

  function sumar() {
    setSuma(numero1 + numero2)
    setNumero1('');
    setNumero2('');
  }

  return (

    <div className='mainConatainer'>
      <ListUsuarios />
      {/* <MessageContainer /> */}


      <Hola
        numero1={numero1}
        numero2={numero2}
        suma={suma}

        setNumero1={(e)=>setNumero1(e.target.value)}
        setNumero2={(e)=>setNumero2(e.target.value)}
        sumar = {()=>sumar}
      />



    </div>
  )
}

export default App
