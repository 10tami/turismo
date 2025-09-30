import Loader from './componentes/Button.jsx';
import TextType from './componentes/TextType.jsx';
import Ballpit from './componentes/Ballpit.jsx';
import Button from './componentes/Holis3.jsx';
import Card from './componentes/Cronograma.jsx';


function App() {

  return (
    <> 
    <div className='bg-no-repeat bg-cover bg-bottom bg-fixed bg-[url(https://inym.org.ar/imagenes/archivos/noticias/80133_imagen.jpg)]'> 
  <div>
   
      <TextType 
className="text-black bg-black text-9xl"
  text={["BIENVENIDOS A ESTA HERMOSA CIUDAD", " FELIZ DIA DEL TURISMO", " ESQUEL- CHUBUT!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"

/>
 




<Loader></Loader>


<Button></Button>

<Card></Card>



<Ballpit className="h-100 ml-120 mb-10"
  
  firstContent={
    <img
      className='w-full h-full object-cover '
      src="https://tse1.mm.bing.net/th/id/OIP.cyEKhbgiomKNfcMlmv8d_wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3 "
      alt="default pixel transition content, a cat!"
     
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    > 
      <p className='p-4 text-xs text-green-500 font-bold' >  CASA LOS VASCOS
El último almacén de ramos generales, continua firme desde 1926.
en manos de los hermanos Valbuena con la atención personalizada como marca registrada.
 Cuenta con articulos de, almacén, talabartería, perfumería, productos de limpieza, telas, ferretería y bazar.</p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
/>


<Ballpit className="h-100 ml-120 mb-10"
  
  firstContent={
    <img
      className='w-full h-full object-cover '
      src="https://www.patagoniaandina.com/wp-content/uploads/2020/08/Laguna-Willimanco-Esquel-833x474.jpg "
      alt="default pixel transition content, a cat!"
     
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p className='p-4 text-xs text-green-500 font-bold' >  LAGUNA WILLMANCO
Es Un lugar prístino, al pie del cerro 21, donde la naturaleza moldeó un paisaje de ensueño.
De aguas transparentes, sus colores varían entre tonalidades verdosas y azuladas
Se fusiona con las aguas espejadas para transformarse en una postal única.</p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
/>


<Ballpit className="h-100 ml-120 mb-10"
  
  firstContent={
    <img
      className='w-full h-full object-cover '
      src="  https://tse2.mm.bing.net/th/id/OIP.v7DaWEhrMQweEJB8so5yYgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3   "
      alt="default pixel transition content, a cat!"
     
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p className='p-4 text-xs text-green-500 font-bold' >  
MUSEO HISTORICO MUNICIPAL ESQUEL
Esta ubicado en la calle San Martín 602-700
Es un espacio dedicado a la preservación y difusión del patrimonio cultural.
Ademas ha recibido una calificación promedio de 4.5 sobre 5 de 302 reseñas
      </p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
/>




<Ballpit className="h-100 ml-120 mb-10"
  
  firstContent={
    <img
      className='w-full h-full object-cover '
      src=" https://entreargentina.com/wp-content/uploads/2023/02/que-hacer-en-esquel-cultura-esquel-1-2.jpg "
      alt="default pixel transition content, a cat!"
     
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p className='p-4 text-xs text-green-500 font-bold' >  
EL CENTRO CULTURAL ESQUEL
Es un importante espacio cultural ubicado en Esquel, actualmente es un punto de encuentro donde se exhiben 
obras de diversos artistas y se realizan actividades culturales como conciertos, charlas y talleres.
La entrada suele ser gratuita, pero muchos de los eventos tratan de recaudar dinero o alimentos.
      </p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
/>




<Ballpit className="h-100 ml-120 mb-10"
  
  firstContent={
    <img
      className='w-full h-full object-cover '
      src="   https://entreargentina.com/wp-content/uploads/2023/02/que-hacer-en-esquel-don-chiquino-1.jpg  "
      alt="default pixel transition content, a cat!"
     
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p className='p-4 text-xs text-green-500 font-bold' >  

DON CHIQUINO
El restaurante más popular de la ciudad, se encuentra en un pequeño y encantador edificio 
lleno de antigüedades, matrículas, herramientas y camisetas de fútbol firmadas. 
Ofrecen una variedad de platos frescos y de alta calidad, en un ambiente acogedor.
      </p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
/>




<Ballpit className="h-100 ml-120 mb-10"
  
  firstContent={
    <img
      className='w-full h-full object-cover '
      src="   https://patagoniaexpress.com/images/pesca/slider/pesca_slider.jpg  "
      alt="default pixel transition content, a cat!"
     
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p className='p-4 text-xs text-green-500 font-bold' >  
LAGUNA LA ZETA
Se puede llegar a pie a esta laguna desde la ciudad por un camino bien señalizado.
Hay pesca, senderismo, kitesurf, windsurf y ciclismo de montaña.
Hay socorristas, baños y plazas de aparcamiento en la laguna.
      </p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
/>




<Ballpit className="h-100 ml-120 mb-10"
  
  firstContent={
    <img
      className='w-full h-full object-cover '
      src="  https://tse3.mm.bing.net/th/id/OIP.1v2mgxf-WrVrLnKjHKTDwgHaEc?rs=1&pid=ImgDetMain&o=7&rm=3   "
      alt="default pixel transition content, a cat!"
     
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p className='p-4 text-xs text-green-500 font-bold' >  
R EN KAYAK
Acérquese a esas aguas turquesas y conozca mejor sus paisajes reservando una excursión para remar por los lagos del parque nacional.
Deslícese por el Lago Verde, el Lago Futalaufquen o el Río Arrayanes, o personalice su itinerario con Kayak Soul o Frontera Sur.
Te llevarán el equipo, los bocadillos y el almuerzo, y te darán una charla de seguridad antes de empezar.
      </p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
/>




<Ballpit className="h-100 ml-120 mb-10"
  
  firstContent={
    <img
      className='w-full h-full object-cover '
      src="  https://www.patagoniaexpress.com/images/ap-smart-layerslider/homepage3/slider-homepage-2.jpg  "
      alt="default pixel transition content, a cat!"
     
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p className='p-4 text-xs text-green-500 font-bold' >  
PARQUE NACIONAL LOS ALERCES 
Este parque nacional alberga el lago Futalaufquen, el río Los Arrayanes y otras masas de agua de color azul claro,por lo que no faltan actividades de navegación, senderismo, acampada y pesca.
Reserve un crucero por los lagos para disfrutar de unas magníficas vistas del glaciar de Torrecillas y, a continuación,
salga a caminar hacia una de las especies vivas de árboles más antiguas del mundo, el alerce, para cuya protección se creó este parque.
Puede visitar «El Abuelo», un alerce que tiene al menos 2.600 años.
      </p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
/>




<Ballpit className="h-100 ml-120 mb-10"
  
  firstContent={
    <img
      className='w-full h-full object-cover '
      src="  https://www.powderhounds.com/site/DefaultSite/filesystem/images/SouthAmerica/Argentina/LaHoya/Overview/07.jpg  "
      alt="default pixel transition content, a cat!"
     
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p className='p-4 text-xs text-green-500 font-bold' >  
ESQUI EN LA HOYA 
A poca distancia de la ciudad, es una opción popular para esquiar y hacer snowboard de junio a septiembre.
Hay alquileres e instructores de esquí, por lo que es un lugar barato para que los principiantes aprendan, además de ser un lugar familiar y las montañas son muy pintorescas.

      </p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
/>




<Ballpit className="h-100 ml-120 mb-10"
  
  firstContent={
    <img
      className='w-full h-full object-cover '
      src="  https://entreargentina.com/wp-content/uploads/2023/02/que-hacer-en-esquel-la-trochita-2.jpg  "
      alt="default pixel transition content, a cat!"
     
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p className='p-4 text-xs text-green-500 font-bold' >  
PASEO POR LA TROCHITA 
Suba a esta locomotora de la vieja escuela que une Esquel con el pueblo de El Maitén.
El viaje de ida y vuelta dura unas dos horas y media, y tendrá acceso a un vagón comedor con cafetería y panadería.

      </p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
/>







    <TextType 
className="text-black bg-black text-9xl"
  text={["FELIZ DIA DEL TURISMO!!!", " ESQUEL- CHUBUT", "PATAGONIA ARGENTINA!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"

/>





</div>

 </div>
    </>
  )
}

export default App
