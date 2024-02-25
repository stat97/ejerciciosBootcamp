
import './App.css'
import { Languages } from './components/Languages/Languages'
import { Education} from './components/Education/Education'

import { Name } from './components/Name/Name'
//*import { SongsHeard } from './components/SongsHeard/SongsHeard'
import { Experience} from './components/Experience/Experience'
import { SocialMedia } from './components/SocialMedia/SocialMedia'


export const App = () => {

  return (
    <>
    
    <Name/>
    <Experience/>
    <Education/>
    <Languages/>
    <SocialMedia/>
   
      

    </>
  )
  
}

export default App
  