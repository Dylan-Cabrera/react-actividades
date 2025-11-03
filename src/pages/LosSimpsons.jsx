import React, { useEffect, useState } from 'react'
import { useCount } from '../hooks/useCount'
import { Navbar } from "../components/Navbar"
import { useFetch } from '../hooks/useFetch'
import { Loading } from '../components/Loading'

const api = "https://thesimpsonsapi.com/api/characters/"

export const LosSimpsons = () => {
    // const [state, setState] = useState({
    //     data: null,
    //     isLoading: true
    // })

    // const {data, isLoading} = state

    const [count,handleIncrement, handleDecrement, handleReset] = useCount(1)

    // const getFetch = async () => {

    //     try {
    //         setState({
    //             ...state,
    //             isLoading: true}
    //         )

    //         const response = await fetch(`${api}${count}`)
    //         console.log(count)
    //         const data = await response.json()

    //         setState({
    //             data: data,
    //             isLoading: false
    //             })
    //     } catch (error) {
    //         console.log("Error en el fetch" +error)
    //     }
    // }

    // useEffect(() => {
    //     getFetch()
    // }, [count])
    

    
    const {fetchData} = useFetch(`https://thesimpsonsapi.com/api/characters/${count}`)
    
    const {data, isLoading} = fetchData
    const frases = data?.phrases.map((phrase) => <li> {phrase} </li>)

  return (
    <>
        {isLoading ? (<Loading/>) : (
            <>
            <Navbar/>
             <h1>Los simpsons api</h1>
            <h2>Personajes:</h2>
            <img src={`https://cdn.thesimpsonsapi.com/500/character/${count}.webp`}/>
             <h3> {data?.name} </h3>
            <ul> {frases} </ul>
            
                <button onClick={() => handleDecrement(1)} disabled={isLoading}>Anterior</button>
                <button onClick={() => handleIncrement(1)} disabled={isLoading} >Siguiente</button>
            </>
        )}
     </>
  )
}
