import Loader from './componentes/Button.jsx';
import TextType from './componentes/TextType.jsx';
import Ballpit from './componentes/Ballpit.jsx';
import Button from './componentes/Holis3.jsx';
import Card from './componentes/Cronograma.jsx';
import Fondodecolores from './componentes/Fondodecolores.js';



function App() {

  let listaImagenes=[{
    imagen:"https://tse1.mm.bing.net/th/id/OIP.cyEKhbgiomKNfcMlmv8d_wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    texto:" CASA LOS VASCOS El último almacén de ramos generales, continua firme desde 1926. en manos de los hermanos Valbuena con la atención personalizada como marca registrada. Cuenta con articulos de, almacén, talabartería, perfumería, productos de limpieza, telas, ferretería y bazar."
  },
  {
    imagen:"https://www.patagoniaandina.com/wp-content/uploads/2020/08/Laguna-Willimanco-Esquel-833x474.jpg",
    texto:" LAGUNA WILLMANCO Es Un lugar prístino, al pie del cerro 21, donde la naturaleza moldeó un paisaje de ensueño. De aguas transparentes, sus colores varían entre tonalidades verdosas y azuladas Se fusiona con las aguas espejadas para transformarse en una postal única."
  },
  {
    imagen:" https://tse2.mm.bing.net/th/id/OIP.v7DaWEhrMQweEJB8so5yYgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3  ",
    texto:" MUSEO HISTORICO MUNICIPAL ESQUELEsta ubicado en la calle San Martín 602-700Es un espacio dedicado a la preservación y difusión del patrimonio cultural.Ademas ha recibido una calificación promedio de 4.5 sobre 5 de 302 reseñas"
  },
  {
    imagen:" https://entreargentina.com/wp-content/uploads/2023/02/que-hacer-en-esquel-cultura-esquel-1-2.jpg",
    texto:" EL CENTRO CULTURAL ESQUELEs un importante espacio cultural ubicado en Esquel, actualmente es un punto de encuentro donde se exhiben obras de diversos artistas y se realizan actividades culturales como conciertos, charlas y talleres.La entrada suele ser gratuita, pero muchos de los eventos tratan de recaudar dinero o alimentos."
  },
  {
    imagen:" https://entreargentina.com/wp-content/uploads/2023/02/que-hacer-en-esquel-don-chiquino-1.jpg ",
    texto:" DON CHIQUINO El restaurante más popular de la ciudad, se encuentra en un pequeño y encantador edificio lleno de antigüedades, matrículas, herramientas y camisetas de fútbol firmadas. Ofrecen una variedad de platos frescos y de alta calidad, en un ambiente acogedor."
  },
  {
    imagen:"  https://patagoniaexpress.com/images/pesca/slider/pesca_slider.jpg ",
    texto:" LAGUNA LA ZETA Se puede llegar a pie a esta laguna desde la ciudad por un camino bien señalizado. Hay pesca, senderismo, kitesurf, windsurf y ciclismo de montaña. Hay socorristas, baños y plazas de aparcamiento en la laguna."
  },
   {
    imagen:" https://tse3.mm.bing.net/th/id/OIP.1v2mgxf-WrVrLnKjHKTDwgHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
    texto:" KAYAK Acérquese a esas aguas turquesas y conozca mejor sus paisajes reservando una excursión para remar por los lagos del parque nacional. Deslícese por el Lago Verde, el Lago Futalaufquen o el Río Arrayanes, o personalice su itinerario con Kayak Soul o Frontera Sur. Te llevarán el equipo, los bocadillos y el almuerzo, y te darán una charla de seguridad antes de empezar."
  },
  {
    imagen:"  https://www.patagoniaexpress.com/images/ap-smart-layerslider/homepage3/slider-homepage-2.jpg ",
    texto:" PARQUE NACIONAL LOS ALERCES  Este parque nacional alberga el lago Futalaufquen, el río Los Arrayanes y otras masas de agua de color azul claro,por lo que no faltan actividades de navegación, senderismo, acampada y pescaReserve un crucero por los lagos para disfrutar de unas magníficas vistas del glaciar de Torrecillas y, a continuación,salga a caminar hacia una de las especies vivas de árboles más antiguas del mundo, el alerce, para cuya protección se creó este parque.Puede visitar «El Abuelo», un alerce que tiene al menos 2.600 años."
  },
  {
    imagen:"  https://www.powderhounds.com/site/DefaultSite/filesystem/images/SouthAmerica/Argentina/LaHoya/Overview/07.jpg",
    texto:" ESQUI EN LA HOYA A poca distancia de la ciudad, es una opción popular para esquiar y hacer snowboard de junio a septiembre.Hay alquileres e instructores de esquí, por lo que es un lugar barato para que los principiantes aprendan, además de ser un lugar familiar y las montañas son muy pintorescas."
  },
  {
    imagen:"  https://entreargentina.com/wp-content/uploads/2023/02/que-hacer-en-esquel-la-trochita-2.jpg  ",
    texto:" PASEO POR LA TROCHITA Suba a esta locomotora de la vieja escuela que une Esquel con el pueblo de El Maitén.El viaje de ida y vuelta dura unas dos horas y media, y tendrá acceso a un vagón comedor con cafetería y panadería."
  },

]
let imagenesMap = listaImagenes.map((item)=> 
<Ballpit className="h-110 "
  firstContent={
    <img
      className='w-full h-full object-cover '
      src={item.imagen}
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
      <p className='p-4 text-xs text-green-500 flex flex-wrap' > 
        {item.texto}
        </p>
         </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
/>

)


  return (
    <> 
    <div className='bg-no-repeat bg-cover bg-bottom bg-fixed bg-[url(https://inym.org.ar/imagenes/archivos/noticias/80133_imagen.jpg)]'> 
  <div>
   

<div className='flex justify-center'>


      <TextType 
className="text-emerald-200 bg-emerald-700 text-1xl sm:text-4xl mt-10 sm:mt-0 "
  text={["BIENVENIDOS A ESTA HERMOSA CIUDAD FELIZ DIA DEL TURISMO!!!", " DESDE EL SABADO 20 DE SEPTIEMBRE HASTA EL MARTES 07 DE OCTUBRE", " SE ESTARA REALIZANDO DIVERSAS ACTIVIDADES RECREATIVAS TE ESPERAMOS  ESQUEL- CHUBUT!!!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"

/>


</div>


<div className='mt-11 '> <Loader></Loader>  </div>

<div className='mt-90 sm:mt-0' > <Card></Card>   </div>
<Button></Button> 



<div className='flex flex-wrap justify-center gap-5'>
{imagenesMap}
</div>


    <TextType 
className="text-green-500 bg-green-950 text-4xl ml-1 "
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
