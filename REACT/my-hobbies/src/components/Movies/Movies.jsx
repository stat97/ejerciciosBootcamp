
import {Hobbies} from '../../Hobbies/Hobbies'
export const Movies = () => {
    const {movies} = Hobbies
    return(
        <>
    <h2>My favorite Movies</h2>
    <ul>
    {movies.map((item,index) => (
    <li key ={index}>
    Name : {item.name} 
    Vote : {item.vote} 
    Genre : {item.genre} 
    Type : {item.type}
    </li>
    
    
    ))}
    </ul>
    
        </>
    )
}