'use client'
import { motion } from 'framer-motion';

const ServicesGrid = () => {
  const floralServices = [
    {
      title: 'FLORAL SERVICES',
      subtitle: 'Floral By Shamyra',
      image: 'img/wedding-reception-1284245_1920.jpg'
    },
    {
      title: 'PRIVATE EVENTS',
      subtitle: 'Intimate Dinner',
      image: '/img/pexels-curtis-adams-1694007-8583978.jpg'
    },
    {
      title: 'EVENT PRODUCTION',
      subtitle: 'Corporation',
      image: '/img/shelly-pence-GcW93Uuljgo-unsplash.jpg'
    },
    {
      title: 'WEDDING DESIGN',
      subtitle: 'Aliccia Collection',
      image: '/img/pexels-juriadi-paddo-1757013033-31045373.jpg'
    },
    {
      title: 'WORKSHOPS',
      subtitle: 'Learn Floral Art',
      image: '/img/pexels-amar-12954016.jpg'
    },
    {
      title: 'SEASONAL DESIGNS',
      subtitle: 'Special Occasions',
      image: '/img/pexels-soulseeker-14703685.jpg'
    }
  ];

  return (
    <section className='bg-slate-50 w-full'>
      <div className="px-4 py-12 sm:px-6 lg:px-8 ">
        <h2 className='text-center font-bold text-2xl md:text-4xl text-gold-2'>About Our Floral Services</h2>
        <div className='flex justify-center gap-0 mt-4 mb-10'>
            <div className='w-6 h-1 bg-gold-1 opacity-50'></div>
            <div className='w-6 h-1 bg-gold-3'></div>
            <div className='w-6 h-1 bg-gold-1 opacity-50'></div>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {floralServices.map((service, index) => (
            <motion.div 
              key={index}
              className="group relative h-96 overflow-hidden rounded-lg shadow-lg"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              
              <motion.div 
                className="absolute inset-0 bg-black/60 flex flex-col justify-center p-6 text-white"
                variants={{
                  rest: { opacity: 0, y: 100 },
                  hover: { opacity: 1, y: 0 }
                }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                <p className="text-lg italic text-gold-1">{service.subtitle}</p>
                <button className="mt-4 self-start border-b border-transparent hover:border-green-300 transition-all">
                  Learn More
                </button>
              </motion.div>
              
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-lg font-medium">{service.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;