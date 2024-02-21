import './App.css'
import { Title} from './components/Title/Title'
import { Subtitle } from './components/Subtitle/Subtitle'
import { Paragraph } from './components/Paragraph/Paragraph'
import { Image } from './components/Image/Image'
const App = () => {
  const text = "Hola que tal"
  const  text2 = "subtitulo"
  const text3 ="esto es un parrafo de prueba"
  
  return (
    <>
    <Title moniqueText = {text} />
    <Subtitle Subtitle = {text2}/>
    <Paragraph Paragraph={text3}/>
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDf-czjEw6TYzfy8fT5WMBkmdNozQhNmjlw&usqp=CAU" />
    </>
  )
}
export default App
//*Home.jsx
//* 
//*const[] ==> useState 
//*useffect
//*podemos hacer un get data , voy a resolver la promesa
//* get data==> set datapage  ==> await llama al modelo data ==> funcion asincrona 
//* tiene que seguir siendo asincrono en el return
//* vamos a hacer un console.log del estado para ver si es sincrono o asincrono
//* si nos da null no estamos resolviendo la promesa
//* tenemos data pero no estamos resolviendo la promesa
//* ¿porque n estamos resolviendo la promesa ? 
//* tenemos que tener en cuenta eldoble render de react
//* vamos a recorrer el data page con el mapeo , y luego vamos a poner los items que es la carta, card
//* que nos hace falta cuando estamos iterando un elemento ??
//* keyitem.id
//* vamos a ir al componente de las cards , ==> inspeccionar y lo vemos por pantalla
//* el estado se lo mandamos al componente , el componente tiene un estado con lo que le han mandado el padre
//*cuando cactualizo el util , realmente no se actualiza el padre si no el hijo
//* los datos pertenecen a home , home es el que tiene los datos 
//* En el utils traemos los datos y los mapeamos
//* mappeoData == > hacemos un mapeo de item en utils
//* img:item.sprites.other =====> que es sprites ???Un sprite SVG consiste en coger todos los SVG que contiene nuestra web y crear un único fichero SVG que los contenga a todos
//* id, img , item
//*data.tostring().includes("Null")
//* react surgio por los estados .... tiene que haber una forma que cambie la forma de renderizar
//* si es un custom hook , el nombre de la funcion arrow va con useDataPokemon
//* Hook ===>
//* [] los corchetes son estados , no props  ==> useState
//* data : Null
//* isLoading :Null
//* hasError : null
//* hacemos un bucle , en lugar de hacer un push , utilizamos el metodo de setdata
//*tenemos que hacer un destruturing
//*setDatapi => destructuring y push
//*gallery data ==
