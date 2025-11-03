import { CharacterInfo } from '../components/CharacterInfo'
import { NavBar } from "../components/NavBar"

const api = "https://thesimpsonsapi.com/api/characters/"

export const LosSimpsons = () => {
  return (
    <>
        <NavBar/>
        <CharacterInfo/>
     </>
  )
}
