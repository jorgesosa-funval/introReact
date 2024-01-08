import React from 'react'
import { UsuarioItem } from '../UsuarioItem'
import './ListUsuario.css';

export function ListUsuarios() {
  return (
    <ul className='userList'>
      <UsuarioItem
        img={'https://robohash.org/138.36.78.12.png'}
        title={'Jorge Sosa'}
        alt={'Robot'}
      />
        <UsuarioItem
        img={'https://robohash.org/138.36.78.12.png'}
        title={'Jorge Sosa'}
        alt={'Robot'}
      />
        <UsuarioItem
        img={'https://robohash.org/138.36.78.12.png'}
        title={'Jorge Sosa'}
        alt={'Robot'}
      />
        <UsuarioItem
        img={'https://robohash.org/138.36.78.12.png'}
        title={'Jorge Sosa'}
        alt={'Robot'}
      />
    </ul>
  )
}
