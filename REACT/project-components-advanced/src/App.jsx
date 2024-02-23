//*import { useState } from 'react'

import './App.css'
import { CharacterList, Header, Paragraph } from './components'

//*import { CharacterList } from './components/CharacterList/CharacterList'
import { Footer } from './components/Footer/Footer'

import { ItemList } from './components/ItemList/ItemList'
import { SubTitle } from './components/SubTitle/SubTitle'
import { Title } from './components/Title/Title'


const App = () => {
  const text = "Welcome To My App"
  const text2 = "Trustability & Confidence"
  const array = ["JS", "React" , "NodeJS" , "HTML5","CSS3"]
  const p1 = "Created By Adrian"
  const p2 = "Copyright 2024 All Rights Reserved Powered By React"
  
  return (
    <>
   <Header> 
    <Title title = {text}/>
    <SubTitle SubTitle = {text2}/>
  </Header>
  <main>
    <CharacterList>
	{array.map((item)=> (
  <ItemList lista = {item} key = {item}/>
  ) )}
    </CharacterList>
  </main>
<Footer>
	<Paragraph paragraph= {p1}/>
  <Paragraph paragraph= {p2}/>
</Footer>
</>
)
}
export default App

