import { Hobbies } from "../../Hobbies/Hobbies"

export const SongsHeard = () => {
    const {songsHeard }=Hobbies;
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

    
  
    