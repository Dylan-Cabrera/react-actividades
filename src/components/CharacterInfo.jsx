import { useFetch } from '../hooks/useFetch'
import { useCount } from '../hooks/useCount'
import { Loading } from './Loading'

export const CharacterInfo = () => {
    const [count,handleIncrement, handleDecrement, handleReset] = useCount(1)

        const {fetchData} = useFetch(`${count}`)
        const {data, isLoading} = fetchData
        const frases = data?.phrases.map((phrase) => <li> {phrase} </li>)
  return (
    <div id='personajes'> 
            <h1>Los Simpsons api</h1>
        {isLoading ? (<Loading/>) : (
            <>
                <h2>Personajes:</h2>
                <img src={`https://cdn.thesimpsonsapi.com/500/character/${count}.webp`}/>
                <h3> {data?.name} </h3>
                <h3> Descripción: </h3>
                <p>{data?.description}</p>
                <h3> Frases: </h3>
                <ul> {frases} </ul>
      </>
            
        )}
        <button onClick={() => handleDecrement(1)} disabled={isLoading|| count===1}>Anterior</button>
        <button onClick={() => handleIncrement(1)} disabled={isLoading} >Siguiente</button>
    </div>
  )
}
