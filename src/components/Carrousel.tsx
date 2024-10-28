import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/carrousel/Main-03.jpg" alt="Slide 3" />
      </div>
      <div>
        <img src="/carrousel/Main-06.jpg" alt="Slide 6" />
      </div>
      <div>
        <img src="/carrousel/Main-07.jpg" alt="Slide 7" />
      </div>
    </Slider>
  );
}
