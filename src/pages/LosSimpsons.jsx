import { CharacterInfo } from '../components/CharacterInfo'
import { Navbar } from "../components/Navbar"

const api = "https://thesimpsonsapi.com/api/characters/"

export const LosSimpsons = () => {
  return (
    <>
        <Navbar/>
        <CharacterInfo/>
     </>
  )
}
