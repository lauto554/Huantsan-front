import { motion } from 'framer-motion';
import Carrousel from '../components/Carrousel';

export default function HomeView() {
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

      <div className="flex w-full h-[500px] p-4 gap-5 bg-slate-500">
        <div className="w-full h-full bg-white overflow-hidden">
          <img src="/carrousel/Main-01.jpg" alt="" className="" />
        </div>
        <div className="w-full h-full bg-white overflow-hidden">
          <img src="/carrousel/juansin.jpg" alt="" className="" />
        </div>
        <div className="w-full h-full bg-white overflow-hidden">
          <img src="/carrousel/partners.jpg" alt="" className="" />
        </div>
      </div>

      <div className="h-screen bg-neutral-300"></div>
    </>
  );
}
