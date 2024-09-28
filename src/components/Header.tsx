import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`sticky top-0 flex justify-between items-center shadow-lg z-10 bg-slate-800 max-w-screen transition-all duration-300 ${
        isScrolled ? 'h-16' : 'h-20'
      }`}
    >
      <Link to={'/'} className="flex flex-col w-[300px] h-14 items-center justify-end px-4 ml-14">
        <h1 className="flex flex-col items-center justify-center font-bold text-2xl text-white uppercase">
          Huantsan ascents
        </h1>
        <span className="flex flex-col items-center justify-center text-xs text-slate-400 italic">
          High Mountains & Expeditions
        </span>
      </Link>

      <div className="flex flex-col w-[700px] h-14 justify-end items-center md:flex-row gap-8 mt-6 mr-20">
        <Link
          to={'/'}
          className="flex items-center h-full text-white text-xl  font-medium hover:text-sky-300 transition"
        >
          Home
        </Link>

        <div className="relative group h-full">
          <Link
            to={'/'}
            className={`flex items-center h-full text-white text-xl font-medium hover:text-sky-300 transition ${
              isScrolled ? 'hover:text-sky-400' : ''
            }`}
          >
            Expeditions
          </Link>
          <div
            className={`absolute hidden group-hover:block group-hover:w-48 bg-slate-800 transition-all rounded-b-sm  shadow-lg left-0 ${
              isScrolled ? 'top-12' : 'top-14 delay-100'
            }`}
          >
            <ul>
              <li>
                <Link to="/" className="block px-4 py-2 text-white hover:text-sky-300 transition">
                  Mountain Ascents
                </Link>
              </li>
              <li>
                <Link to="/" className="block px-4 py-2 text-white hover:text-sky-300 transition">
                  Trekking
                </Link>
              </li>
              <li>
                <Link to="/" className="block px-4 py-2 text-white hover:text-sky-300 transition">
                  Rock Climbing
                </Link>
              </li>
              <li>
                <Link to="/" className="block px-4 py-2 text-white hover:text-sky-300 transition">
                  Daily trekkings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative group h-full">
          <Link
            to={'/'}
            className={`flex items-center h-full text-white text-xl  font-medium hover:text-sky-300 transition ${
              isScrolled ? 'hover:text-sky-400' : ''
            }`}
          >
            Services
          </Link>
          <div
            className={`absolute hidden group-hover:block group-hover:w-48 bg-slate-800 transition-all rounded-b-sm  shadow-lg left-0 ${
              isScrolled ? 'top-12' : 'top-14 delay-100'
            }`}
          >
            <ul>
              <li>
                <Link to="/" className="block px-4 py-2 text-white hover:text-sky-300 transition">
                  Mountain Guides
                </Link>
              </li>
              <li>
                <Link to="/" className="block px-4 py-2 text-white hover:text-sky-300 transition ">
                  Equipment
                </Link>
              </li>
              <li>
                <Link to="/" className="block px-4 py-2 text-white hover:text-sky-300 transition">
                  Permits / Ensurances
                </Link>
              </li>
              <li>
                <Link to="/" className="block px-4 py-2 text-white hover:text-sky-300 transition">
                  Porters / Chef
                </Link>
              </li>
              <li>
                <Link to="/" className="block px-4 py-2 text-white hover:text-sky-300 transition">
                  Private transfers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link to={'/'} className="text-white text-xl  font-medium hover:text-sky-300 transition">
          Blog
        </Link>

        <Link to={'/'} className="text-white text-xl  font-medium hover:text-sky-300 transition">
          Contact
        </Link>
      </div>
    </header>
  );
}
