import './App.css'
import { Title} from './components/Title/Title'
import { Subtitle } from './components/Subtitle/Subtitle'
import { Paragraph } from './components/Paragraph/Paragraph'
const App = () => {
  const text = "Hola que tal"
  const  text2 = "subtitulo"
  const text3 ="esto es un parrafo de prueba"
  return (
    <>
    <Title moniqueText = {text} />
    <Subtitle Subtitle = {text2}/>
    <Paragraph Paragraph={text3}/>
    </>
  )
}
export default App
