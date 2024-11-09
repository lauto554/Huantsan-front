import { useEffect, useState } from 'react';
import { GiMountains, GiMountaintop } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMountainSubmenuVisible, setIsMountainSubmenuVisible] = useState(false);
  const [isTrekkingSubmenuVisible, setIsTrekkingSubmenuVisible] = useState(false);

  const handleMountainClick = () => {
    setIsMountainSubmenuVisible(!isMountainSubmenuVisible);
  };

  const handleTrekkingClick = () => {
    setIsTrekkingSubmenuVisible(!isTrekkingSubmenuVisible);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 flex flex-col shadow-lg z-30 bg-sky-800 max-w-screen transition-all duration-300 ${
        isScrolled ? 'h-[90px]' : 'h-24'
      }`}
    >
      <div className="flex items-center justify-center w-full h-20 text-sm animate-smooth-gradient cursor-default">
        <span className="mr-2">🚀🌟🎉</span>
        <p className="text-center font-bold italic tracking-wide text-gray-700 bg-clip-text">
          ¡Estamos de estreno! Gracias por tu visita♥
        </p>
        <span className="ml-2">🚀🌟🎉</span>
      </div>

      <div className="flex justify-between items-center">
        <Link to={'/'} className="flex flex-col w-[300px] h-14 items-center justify-end px-4 ml-14">
          <h1 className="flex flex-col items-center justify-center font-bold text-2xl text-white uppercase">
            Huantsan ascents
          </h1>
          <span className="flex flex-col items-center justify-center text-xs text-slate-400 italic">
            Alta Montaña & Andinismo Extremo
          </span>
        </Link>

        <div className="flex flex-col w-[700px] h-14 justify-end items-center md:flex-row gap-8 mt-3 mr-20">
          <Link
            to={'/'}
            className="flex items-center h-full text-white text-xl  font-medium hover:text-amber-400 transition"
          >
            Inicio
          </Link>

          <div className="relative group h-full p-2">
            <span
              className={`flex items-center h-full text-white text-xl font-medium hover:cursor-default hover:text-amber-400 transition ${
                isScrolled ? 'hover:text-sky-400' : ''
              }`}
            >
              Expediciones
            </span>
            <div
              className={`absolute hidden group-hover:block group-hover:w-60 bg-sky-800 transition-all rounded-b-sm shadow-lg left-0 ${
                isScrolled ? 'top-12' : 'top-14 delay-100'
              }`}
            >
              <ul>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-white hover:text-amber-400 transition"
                    onClick={handleMountainClick}
                  >
                    Montañas
                  </Link>
                  {isMountainSubmenuVisible && (
                    <ul className="pl-4">
                      <li>
                        <Link
                          to="/"
                          className="flex items-center px-4 py-2 text-white hover:text-amber-400 transition"
                        >
                          <GiMountaintop className="inline mr-2 w-6 h-6" />
                          Aconcagua
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-white hover:text-amber-400 transition"
                    onClick={handleTrekkingClick}
                  >
                    Trekking
                  </Link>
                  {isTrekkingSubmenuVisible && (
                    <ul className="pl-4">
                      <li>
                        <Link
                          to="/"
                          className="flex items-center  px-4 py-2 text-white hover:text-amber-400 transition"
                        >
                          <GiMountains className="inline mr-2 w-6 h-6" />
                          Cordillera Huayhuash
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="flex items-center  px-4 py-2 text-white hover:text-amber-400 transition"
                        >
                          <GiMountains className="inline mr-2 w-6 h-6" />
                          Cordillera Blanca
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/*  */}

          <Link
            to={'/'}
            className="text-white text-xl  font-medium hover:text-amber-400 transition"
          >
            Blog
          </Link>

          <Link
            to={'/'}
            className="text-white text-xl  font-medium hover:text-amber-400 transition"
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
