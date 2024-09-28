import { Link } from 'react-router-dom';
import { AiFillTikTok } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { TfiYoutube } from 'react-icons/tfi';

export default function Footer() {
  return (
    <footer className="h-screen w-full bg-slate-600">
      <div className="flex justify-center items-center pt-14 pb-7">
        <div className="flex space-x-14">
          <Link to="/facebook" className="text-white text-3xl hover:scale-110 transition">
            <FaFacebook />
          </Link>
          <Link to="/twitter" className="text-white text-3xl hover:scale-110 transition">
            <FaSquareXTwitter />
          </Link>
          <Link to="/youtube" className="text-white text-3xl hover:scale-110 transition">
            <TfiYoutube />
          </Link>
          <Link to="/instagram" className="text-white text-3xl hover:scale-110 transition">
            <FaSquareInstagram />
          </Link>
          <Link to="/tiktok" className="text-white text-3xl hover:scale-110 transition">
            <AiFillTikTok />
          </Link>
        </div>
      </div>

      <div className="w-2/3 h-0.5 mx-auto my-5 bg-gray-400"></div>

      <div className="flex justify-center mt-14">
        <div className="flex flex-col justify-center items-center h-[400px] w-[400px] mx-10 rounded-full bg-gray-300">
          <p className="text-3xl text-slate-600 font-bold uppercase">HUANTSAN ASCENTS</p>
          <span className="italic text-slate-600">Always your best experience!</span>
        </div>
      </div>

      <div className="flex justify-center py-2 items-center pt-12">
        <p className="text-white text-center">
          All rights reserved | Developed by
          <Link
            to={'https://www.linkedin.com/in/lautaro-martinez-79a3632a9'}
            className="text-gray-400 font-bold"
          >
            {' '}
            Lautaro Martinez
          </Link>
        </p>
      </div>
    </footer>
  );
}
