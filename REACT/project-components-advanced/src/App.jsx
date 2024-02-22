//*import { useState } from 'react'

import './App.css'
import { CharacterList } from './components/CharacterList/CharacterList'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { SubTitle } from './components/SubTitle/SubTitle'
import { Title } from './components/Title/Title'

const App = () => {
  const text = "Este es mi titulo"
  const text2 = "Este es mi subtitulo"

  
  return (
    <>
  <Header>
	<Title>title = {text} </Title>
  </Header>
  <Main>
	<SubTitle> subtitle = {text2} </SubTitle>
	<ul>
		<li>
    <CharacterList></CharacterList>
		</li>
	</ul>
</Main>
<Footer>
	<p>Created by Adrian</p>
	<p>Copyright 2024 React</p>
</Footer>
</>
)
}
export default App

