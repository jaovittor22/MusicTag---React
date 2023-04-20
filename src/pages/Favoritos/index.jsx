import Titulo from '../../components/Titulo/index.jsx'
import Banner from '../../components/Banner/index.jsx'
import styles from './Favoritos.module.css'

import React from 'react'
import Card from '../../components/Card/index.jsx'
import { useFavoritoContext } from 'contextos/Favoritos.js'

export default function Favoritos() {

  const {favorito} = useFavoritoContext()

  return (
    <>
    <Banner imagem="roxo2" />
    <Titulo>
        <h1>Meus Favoritos</h1>
    </Titulo>
    <section className={styles.container}>
      {favorito.map((fav) => {
        return <Card {...fav} key={fav.id} />
      })}
    </section>
    </>
  )
}
