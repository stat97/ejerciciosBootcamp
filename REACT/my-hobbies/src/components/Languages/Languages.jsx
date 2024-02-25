import {PersonalData} from '../../PersonalData/PersonalData'

export const Languages = () => {
    const {languages}= PersonalData
  return (
    <>
    <div>
        <h2>{languages.language}</h2>
        <p>Writing lvl : {languages.wrlevel}</p>
        <p> Speaking lvl: {languages.splevel}</p>
        <h2>{languages.language1}</h2>
        <p>Writing lvl : {languages.wrlevel1}</p>
        <p> Speaking lvl: {languages.splevel1}</p>
        
    </div>

    </>
  )
    }