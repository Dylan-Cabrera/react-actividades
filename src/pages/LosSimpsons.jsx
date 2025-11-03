import React from 'react'
import { Navbar } from '../components/Navbar'
import { useCount } from '../hooks/useCount'
import { useURL } from '../hooks/useURL'
import { useFetch } from '../hooks/useFetch'

export const LosSimpsons = () => {
  const {count, handleIncrement, handledecrement} = useCount(1)
  const {handleUrl} = useURL
  handleUrl(count)

  const {fetchData} = useFetch({
            data: null,
            isLoanding: true
        })
  return (
    <>
    <Navbar/>
    <h1>Los simpsons API</h1>
      <h2>Personajes</h2>


      {isLoading ? <h1>Cargando...</h1> : <h3>{data?.name}</h3>}

      <button onClick={() => handleIncrement(1)} disabled={isLoading}>
        Siguiente
      </button>
    </>
  )
}
