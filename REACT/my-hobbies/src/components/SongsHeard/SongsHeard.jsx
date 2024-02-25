import { PersonalData } from "../../PersonalData/PersonalData"

export const SongsHeard = () => {
    const {songsHeard }=PersonalData;
  return (
    <div>
        <h2>My songs listened</h2>
        <ul>
            {songsHeard.map((song, index)=>(
                <li key={index}>
                  
                {song}
                </li>
            ))}
        </ul>
        
        </div>
  )
}

    
  
    