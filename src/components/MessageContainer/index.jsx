import React, { useState } from 'react'
import './MessageContainer.css';

export function MessageContainer() {
   return (
      <div className='messageContainer'>
         <ul>

         </ul>
      </div>
   )
}

export function Hola({
   numero1,
   numero2,
   suma,
   setNumero1,
   setNumero2,
   sumar
}) {



   return (

      <>

         <form>
            <input value={numero1} type="number" name="numero1" id="numero1" onChange={setNumero1}
               style={{ width: '240px', height: '36px' }} placeholder='escribe valor 1' />
            <br />
            <br />
            <input value={numero2} type="number" name="numero2" id="numero2" onChange={setNumero2}
               style={{ width: '240px', height: '36px' }} placeholder='escribe valor 2' />
            <br />
            <br />
            <button type='button' onClick={sumar}>Sumar</button>
         </form>


         <span>Resultado: {suma}</span>



      </>
   )
}
