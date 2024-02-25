
import {PersonalData} from '../../PersonalData/PersonalData'
export const Education = () => {
    const {education} = PersonalData
    return(
        <>
    <h2>Education</h2>
    <ul >
    {education.map((item,index) => (
    <li key ={index}>
    <h3>{item.name}</h3>
    <p>{item.location} </p>
    <p>{item.duration} </p>
    </li>
    
    
    ))}
    </ul>
    
        </>
    )
}