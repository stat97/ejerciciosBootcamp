
import {PersonalData} from '../../PersonalData/PersonalData'
export const Education = () => {
    const {education} = PersonalData
    return(
        <>
    <h2>My education</h2>
    <ul>
    {education.map((item,index) => (
    <li key ={index}>
    Name : {item.name}  
    Location : {item.location} 
    Duration : {item.duration} 
    </li>
    
    
    ))}
    </ul>
    
        </>
    )
}