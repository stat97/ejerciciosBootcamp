import {Hobbies} from '../../Hobbies/Hobbies'

export const Languages = () => {
    const {languages}= Hobbies
  return (
    <>
    <div>
        <h2>{languages.language}</h2>
        <p>Writing lvl : {languages.wrlevel}</p>
        <p> Speaking lvl: {languages.splevel}</p>
        
    </div>

    </>
  )
    }