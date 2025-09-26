import Holis from './holis';
import Holis2 from './Holis2';
import Holis3 from './Holis3';
import Loader from './Button.jsx';
import TextType from './TextType.jsx';
import Ballpit from './Ballpit.jsx';




function App() {

  return (
    <> 
    <div className='bg-emerald-800'>
  <div>
    <TextType 
className="text-black bg-black text-9xl"
  text={["BIENVENIDOS A ESTA HERMOSA CIUDAD", " ESQUEL- CHUBUT", "PATAGONIA ARGENTINA!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"

/>
<Holis></Holis>
<Loader></Loader>
<Holis3></Holis3>
<Holis2></Holis2>
  










 </div>
 </div>
    </>
  )
}

export default App

