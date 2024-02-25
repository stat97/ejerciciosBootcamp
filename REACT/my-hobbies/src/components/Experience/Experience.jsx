import {PersonalData} from '../../PersonalData/PersonalData'

export const Experience = () => {
    const {experience}= PersonalData
  return (
    <>
    <div>
        <h2>{experience.name}</h2>
        <p>{experience.duration}</p>        
    </div>

    </>
  )
    }