import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ImAirplane } from "react-icons/im";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import Holis from './holis';
import Holis2 from './Holis2';
import Holis3 from './Holis3';


function App() {

  return (
    <>
    <ImAirplane />
 <div className='bg-blue-200'>
      <h1>Bienvenido a la hermosa ciudad de Esquel  </h1></div>
   <div1 className="bg-green-200">
    <ImAirplane />
 <a href="https://www.esquel.tur.ar/"> tambien puedes ver esta pagina de turismo</a> </div1>
 <div2 className="bg-cyan-300"> 
<button className='border-3 border-yellow-300' type="reset"><h1> TELEFONOS </h1></button>
<button className='border-3 border-yellow-300' type="reset"><h1> REDES SOCIALES </h1></button>
<button className='border-3 border-yellow-300' type="reset"><h1> DIRECCION </h1></button>



<BsEmojiSunglassesFill />
<Holis />
<Holis2 />
<Holis3 />
 </div2>




    </>
  )
}

export default App
