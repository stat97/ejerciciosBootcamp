import { useState } from "react";
const On = () => {
const [text,setText] = useState (true)
 
 const Cambio =() => {
    setText(!text)
}
return (
    <div>
    <h1>{text? 'True' : 'False'}</h1>
    <button onClick ={(Cambio)}> Click </button>
    </div>
)
}
export default On

