import {Hobbies} from '../../Hobbies/Hobbies'

export const Sports = () => {
    const {sports}= Hobbies
  return (
    <>
    <div>
        <h2>{sports.name}</h2>
        <p>{sports.indoor}</p>
        <p> {sports.favoriteTeam}</p>
        
    </div>

    </>
  )
    }