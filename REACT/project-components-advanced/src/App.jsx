//*import { useState } from 'react'

import './App.css'
import { CharacterList } from './components/CharacterList/CharacterList'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemList } from './components/ItemList/ItemList'
import { SubTitle } from './components/SubTitle/SubTitle'
import { Title } from './components/Title/Title'

const App = () => {
  const text = "Este es mi titulo"
  const text2 = "Este es mi subtitulo"
const array = ["Nacho", "Monique" , "Natalia" , "Juliana"]
  
  return (
    <>
  <Header>
	<Title title = {text}  />
  </Header>
  <main>
	<SubTitle subtitle = {text2} />
  <CharacterList/>
	
      <ItemList lista = {array} />
    

</main>
<Footer>
	<p>Created by Adrian</p>
	<p>Copyright 2024 React</p>
</Footer>
</>
)
}
export default App

