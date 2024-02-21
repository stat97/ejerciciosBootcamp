
import {Image} from './components/Image/Image'
import './App.css'
import { Header } from './components'
import { Footer } from './components/Footer/Footer'
import { Main } from './components/Main/Main'
import { Paragraph } from './components/Paragraph/Paragraph'
import { Title } from './components/Title/Title'
import { Subtitle } from './components/Subtitle/Subtitle'

const App = () => {
  const text= "soy un h1"
  const text2 = "soy un h2"
  const text3 = "soy un parrafo"
return(
  <>
  <Header>
    <Title title = {text}/>
    <Subtitle subtitle = {text2}/>
  </Header>
  <Main>
    <Paragraph  paragraph={text3}/>
  </Main>
  <Footer>
    
    <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDZ5yQYTyVQUh3KqGQmzyITc7q7v4EkPtfA&usqp=CAU"
        alt="image"
      />
  </Footer>
  </>
)
}
export default App
