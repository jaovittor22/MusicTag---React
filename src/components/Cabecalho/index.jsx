import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import CabecalhoLink from '../CabecalhoLink/index.jsx'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <h1>MusicTag</h1>
      </Link>
      <nav>
        <CabecalhoLink url="./">
          Home
        </CabecalhoLink>
        <CabecalhoLink url="./Favoritos">
          Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  )
}
