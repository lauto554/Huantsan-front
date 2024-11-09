import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export default function Carrousel() {
  const settings = {
    dots: true, // Muestra los puntos de navegación inferiores
    infinite: true, // Habilita el efecto de bucle
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Activar reproducción automática
    autoplaySpeed: 5000, // Cada 3 segundos
    arrows: true, // Flechas de navegación
    fade: true,
  };

  return (
    <div className="relative">
      <div className="absolute top-2/4 left-28 text-white z-20 max-w-[80%]">
        <p className="flex flex-col items-start">
          <span className="text-3xl font-semibold italic mb-2">Tu sueño, nuestra misión</span>
          {/* <span className="text-base">Sube más alto, sueña más grande</span> */}
          <br />
          <span className="text-lg mb-2">Te ayudamos a conquistar las cumbres más desafiantes</span>
          <span className="text-lg">Prepárate para la aventura de tu vida</span>
        </p>

        <div className="mt-10">
          <Link
            to={'/expeditions'}
            className="py-4 px-6 uppercase font-bold bg-indigo-700 hover:bg-indigo-800 transition"
          >
            Ir a Expediciones
          </Link>
        </div>
      </div>
      <div className="z-10">
        <Slider {...settings}>
          <div>
            <img src="/carrousel/aconcagua.jpg" alt="Slide 2" />
          </div>
          <div>
            <img src="/carrousel/Main-06.jpg" alt="Slide 6" />
          </div>
          <div>
            <img src="/carrousel/Main-07.jpg" alt="Slide 7" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
