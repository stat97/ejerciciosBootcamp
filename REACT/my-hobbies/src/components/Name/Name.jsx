import {PersonalData} from '../../PersonalData/PersonalData'

export const Name = () => {
    const {read}= PersonalData
  return (
    <>
    <div>
      <h2>{read.authorName}</h2>
        <h2>{read.title}</h2>
        
        
        
        <p>{read.place}</p>
        <p>{read.description}</p>
        <h2>Skills</h2>
 
    </div>
    <ul className="list">
    {read.mySkills.map((mySkills, index)=>(
        <li  key={index}>{mySkills.info}</li>
    ))}
    </ul>

    </>
  )
    }