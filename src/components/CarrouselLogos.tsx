import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarrouselLogos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Ajusta la velocidad de la transición
    slidesToShow: 6, // Muestra 4 logos a la vez (ajústalo según el diseño que prefieras)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Tiempo que cada logo permanece antes de cambiar
    arrows: true, // Opcional, muestra flechas de navegación
  };

  // Array con los nombres de los archivos de los logos
  const logos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo8.png',
    'logo4.png',
    'logo5.png',
    'logo6.png',
    'logo7.png',
    // Agrega todos los nombres de archivos de logos aquí
  ];

  return (
    <div className="">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[150px] h-[150px]"
          >
            <img
              src={`/logos/${logo}`}
              alt={`Logo ${index + 1}`}
              className="h-full w-full object-contain mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
