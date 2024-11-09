import { motion } from 'framer-motion';
import Carrousel from '../components/Carrousel';
import CarrouselLogos from '../components/CarrouselLogos';
import { Link } from 'react-router-dom';

export default function HomeView() {
  const images = [
    { src: 'partners.jpg', epilogue: 'Alpamayo, Perú' },
    { src: 'TOL-1.jpg', epilogue: 'Cordillera de Los Andes, Argentina' },
    { src: 'ANT-1.jpg', epilogue: 'Queen Maud, Antarctica' },
  ];

  return (
    <>
      <div className="w-full">
        <Carrousel />
      </div>

      {/* Sección "¿Quiénes Somos?" */}
      <div className="h-screen bg-topography flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center max-w-4xl mx-auto px-6 py-12 bg-slate-900 bg-opacity-70 rounded-lg shadow-xl"
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 tracking-wide">¿Quiénes Somos?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            En <span className="font-semibold text-indigo-400">Huantsan Ascents</span> somos más que
            una agencia de montañismo y trekking. Somos tu guía hacia aventuras inolvidables en los
            paisajes más impresionantes del mundo, desde las cumbres nevadas de la
            <span className="font-semibold text-indigo-400"> Cordillera Blanca</span> hasta las
            alturas del Himalaya y las majestuosas
            <span className="font-semibold text-indigo-400"> Siete Cumbres</span>. Con sede en{' '}
            <span className="font-semibold text-indigo-400">Huaraz, Perú</span>, ofrecemos
            expediciones personalizadas, soporte logístico completo, alquiler de equipo de alta
            calidad y cursos de montaña para todos los niveles.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-6">
            Nuestro equipo de expertos, apasionados por la montaña, te acompañará en cada paso,
            asegurando que vivas una experiencia segura, emocionante y profundamente conectada con
            la naturaleza. Aquí, tu sueño de conquistar cumbres y descubrir nuevos horizontes se
            hace realidad.
          </p>
          <p className="mt-6 text-2xl font-semibold text-indigo-400">
            Tu aventura comienza con nosotros.
          </p>
        </motion.div>
      </div>

      {/* Sección "Imagenes" */}
      <div className="flex w-full h-[600px] p-4 gap-5 bg-slate-500">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col items-center group hover:-translate-y-2 duration-150"
          >
            <div className="w-full h-full bg-white overflow-hidden">
              <img src={`/img/${image.src}`} alt="" className="w-full h-full object-cover" />
            </div>
            <p className="text-white italic text-sm opacity-0 group-hover:opacity-100 duration-150 mt-0.5">
              {image.epilogue}
            </p>
          </div>
        ))}
      </div>

      {/* Sección "Que ofrecemos" */}
      <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-700">
        <div className="flex gap-2">
          <span className="text-3xl">⛰</span>
          <h2 className="text-3xl font-semibold text-white mb-4">
            <span className="underline underline-offset-4">Servicio Integral de Montañismo</span>
          </h2>
          <span className="text-3xl">⛰</span>
        </div>
        <p className="text-lg text-center mt-4 mb-8 max-w-3xl text-white">
          En Huantsan Ascents, ofrecemos un servicio integral que cubre todas tus necesidades. Nos
          enfocamos en brindarte una experiencia única, personalizada y segura, con un equipo
          profesional que te guiará en cada paso hacia la cima.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-screen-xl">
          <div className="flex flex-col items-center justify-around bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:-translate-y-2 duration-150 h-[250px]">
            <div className="text-4xl mb-4 text-slate-600">🧑‍🏫</div>
            <h3 className="font-semibold text-lg text-slate-700 mb-4">
              Compromiso y Profesionalismo
            </h3>
            <p className="text-sm text-gray-600 mt-2 text-justify">
              Nos dedicamos a brindarte un servicio excepcional, con un equipo profesional que te
              guiará en todo momento.
            </p>
          </div>
          <div className="flex flex-col items-center justify-around bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:-translate-y-2 duration-150 h-[250px]">
            <div className="text-4xl mb-4 text-slate-600">📅</div>
            <h3 className="font-semibold text-lg text-slate-700 mb-4">
              Planificación Personalizada
            </h3>
            <p className="text-sm text-gray-600 mt-2 text-justify">
              Cada expedición es cuidadosamente planificada para adaptarse a tus necesidades y
              objetivos.
            </p>
          </div>
          <div className="flex flex-col items-center justify-around bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:-translate-y-2 duration-150 h-[250px]">
            <div className="text-4xl mb-4 text-slate-600">🔒</div>
            <h3 className="font-semibold text-lg text-slate-700 mb-4">Seguridad de Alto Nivel</h3>
            <p className="text-sm text-gray-600 mt-2 text-justify">
              Nos aseguramos que tu experiencia sea segura, con un equipo experimentado que te guía
              en cada desafío. Tu seguridad es nuestra prioridad.
            </p>
          </div>
          <div className="flex flex-col items-center justify-around bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:-translate-y-2 duration-150 h-[250px]">
            <div className="text-4xl mb-4 text-slate-600">🌍</div>
            <h3 className="font-semibold text-lg text-slate-700 mb-4">Montañismo Sostenible</h3>
            <p className="text-sm text-gray-600 mt-2 text-justify">
              Nos comprometemos con la preservación del medio ambiente, realizando expediciones de
              manera responsable y sostenible.
            </p>
          </div>
        </div>
      </div>

      {/* Sección "Link a Expediciones" */}
      <div className="flex w-full h-[300px] items-center justify-center">
        <p className="text-5xl font-light italic text-gray-600">
          "Tu próxima aventura comienza con nosotros"
        </p>
      </div>

      <div className="w-full h-full bg-slate-800">
        <div className="flex w-full h-[400px] p-8 mx-auto text-white">
          <Link to={'/expeditions'} className="w-3/5 h-full mr-8 relative overflow-hidden">
            <img
              src="/img/aconcagua.jpg"
              alt="Aconcagua"
              className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-gray-200 text-opacity-70 text-base font-semibold p-1 rounded-lg bg-black bg-opacity-50 border border-gray-200 border-opacity-70">
                Más info
              </span>
            </div>
          </Link>

          <div className="w-2/3 flex flex-col justify-between">
            <h3 className="text-3xl font-semibold text-gray-200">
              Aconcagua (6961 msnm) - Ruta Normal{' '}
            </h3>
            <span className="italic text-sm text-blue-400">
              Cordillera de Los Andes, Mendoza, Argentina
            </span>
            <p className=" text-gray-300">
              El pico más alto de América. Ha sido un símbolo de conexión espiritual para las
              culturas originarias, quienes lo veneraban como un lugar sagrado. Hoy, más allá de su
              imponente altura, representa un desafío personal y cultural que une a quienes buscan
              conquistar su cumbre y honrar su historia.
            </p>
            <p className=" text-gray-300 mt-2">
              En esta expedición, te invitamos no solo a subir una montaña, sino a recorrer un
              sendero lleno de historia y respeto hacia esta majestuosa cumbre.
            </p>
            <div className="flex flex-col space-y-4 text-gray-300">
              <span className="text-base">Duración: 17 días</span>
              <span className="text-base">Dificultad: Media</span>
            </div>
          </div>
        </div>

        <div className="w-1/3 h-0.5 bg-gray-400 rounded-lg my-4 mx-auto"></div>

        <div className="flex w-full h-[400px] p-8 mx-auto text-white">
          <Link to={'/expeditions'} className="w-3/5 h-full mr-8 relative overflow-hidden">
            <img
              src="/img/example.jpg"
              alt="Aconcagua"
              className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-gray-200 text-opacity-70 text-base font-semibold p-1 rounded-lg bg-black bg-opacity-50 border border-gray-200 border-opacity-70">
                Más info
              </span>
            </div>
          </Link>

          <div className="w-2/3 flex flex-col justify-between">
            <h3 className="text-3xl font-semibold text-gray-200">Title (height)</h3>
            <span className="italic text-sm text-blue-400">Location, Province, Country</span>
            <p className=" text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat repudiandae numquam
              quibusdam corrupti, sunt recusandae laborum voluptate amet quas officia soluta commodi
              et asperiores sed quia saepe. Ex consectetur dolore illum autem? Repellat, doloribus
              molestiae. Placeat quis facilis sit repellat?
            </p>
            <p className=" text-gray-300 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima corporis itaque eum
              id necessitatibus culpa possimus mollitia. Dolore, et harum.
            </p>
            <div className="flex flex-col space-y-4 text-gray-300">
              <span className="text-base">Duración: -- días</span>
              <span className="text-base">Dificultad: --</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sección "Logos" */}
      <div className="w-full my-10">
        <p className="text-3xl font-semibold mx-10 mb-10">Nos acompaña:</p>
        <CarrouselLogos />
      </div>

            <div className="w-full h-screen flex items-center justify-center bg-neutral-300">

<p className="text-6xl"> Formulario de Contacto</p>

            </div>
    </>
  );
}
