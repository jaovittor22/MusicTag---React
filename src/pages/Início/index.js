import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/index.jsx'
import Titulo from '../../components/Titulo/index.jsx'
import Card from '../../components/Card/index.jsx'
import styles from './Inicio.module.css'

export default function Inicio() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/jaovittor22/musictag-api/videos')
    .then(resposta => resposta.json()).then(dados => {
      setVideos(dados)
    })
  },[])
  return (
    <>
      
      <Banner imagem="roxo" />
      <Titulo>
        <h1>Um lugar para guardar seus clipes musicais favoritos!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key = {video.id} />

        })}
      </section>
      
    </>
  )
}
