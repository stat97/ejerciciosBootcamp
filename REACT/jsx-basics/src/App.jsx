import On from './components/On'
import Title from '../../component-basics/vite-project/src/components/Header/Header'
import Subtitle from '../../component-basics/vite-project/src/components/Header/Subtitle'
import './App.css'
const App = () => {
const tiempo = (hour) => {

if(hour > 6 && hour <12){
  return <h1>Buenos dias</h1>

}else if(hour > 13 && hour < 19){
  return <h1>Buenas tardes</h1>

}else{
  return <h1>Buenas noches</h1>
}

}
//* no se puede hcer un for each dentro del return
//*const array1 = ["comida","gato","perro"];
//*array.forEach(array1=>{
  

const array = ["Juliana", "Nacho", "Natalia", "Ines", "Clara", "Monique"];

const recorreArray = () => {
  return array.map((name, index) => <p key={index}>Hola: {name}</p>);

};
  return (
    <>
     <h1>Hola : {tiempo(12)}</h1>
   {recorreArray()}
   <On/>
   <Title/>
   <Subtitle/>
   </>
   )
  }

export default App
