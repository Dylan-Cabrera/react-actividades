import React, { useEffect, useState } from 'react'
import { useCount } from '../hooks/useCount'
import { NavBar } from '../components/NavBar'

const api = "https://thesimpsonsapi.com/api/characters/"

export const LosSimpsons = () => {
    const [state, setState] = useState({
        data: null,
        isLoading: true
    })

    const {data, isLoading} = state

    const [count,handleIncrement, handleDecrement, handleReset] = useCount(1)

    const getFetch = async () => {

        try {
            setState({
                ...state,
                isLoading: true}
            )

            const response = await fetch(`${api}${count}`)
            console.log(count)
            const data = await response.json()

            setState({
                data: data,
                isLoading: false
                })
        } catch (error) {
            console.log("Error en el fetch" +error)
        }
    }

    useEffect(() => {
        getFetch()
    }, [count])
    

    const frases = data?.phrases.map((phrase) => <li> {phrase} </li>)
  return (
    <>
    <NavBar/>
    <h1>Los simpsons api</h1>
        <h2>Personajes:</h2>

        {isLoading ? <h1> Cargando...</h1> : (
            <>
            <img src={`https://cdn.thesimpsonsapi.com/500${data.portrait_path}`}/>
            <h3> {data.name} </h3>
            <ul> {frases} </ul>
            </>
        )}

    <button onClick={() => handleDecrement(1)} disabled={isLoading}>Anterior</button>
    <button onClick={() => handleIncrement(1)} disabled={isLoading} >Siguiente</button>
     </>
  )
}
