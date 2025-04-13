import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Footer = () => {
  return (
    <footer className="bg-blue-royal border-t border-gray-700 text-white py-3 px-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Let’s Connect</h3>
            <div className="flex items-center space-x-2">
              <FcGoogle className="w-6 h-6 text-white" />
              <a
                href="#calendar-link"
                className="text-white hover:text-gold-1 transition-colors duration-200"
              >
                Schedule a Call
              </a>
            </div>
            <div className="mt-2">
              <p className="text-white/80">Email:</p>
              <a
                href="mailto:Info@shamyraaliceia.co"
                className="text-white hover:text-gold-1 transition-colors duration-200"
              >
                Info@shamyraaliceia.co
              </a>
            </div>
          </div>

         
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {['Wedding Florals', 'Event Design', 'Workshops', 'Consultation'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gold-1 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {['FAQ', 'Blog', 'Gallery', 'Testimonials'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gold-1 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {[{
                href: '#',
                icon: FaInstagram,
                label: 'Instagram',
                hover: 'hover:text-pink-500'
              },{
                href: '#',
                icon: FaLinkedin,
                label: 'LinkedIn',
                hover: 'hover:text-blue-400'
              },{
                href: '#',
                icon: FaFacebook,
                label: 'Facebook',
                hover: 'hover:text-blue-600'
              },{
                href: '#',
                icon: FaYoutube,
                label: 'YouTube',
                hover: 'hover:text-red-500'
              }].map(({ href, icon: Icon, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`text-white transition-transform duration-200 transform ${hover} hover:scale-110`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-700 py-6">
          <p className="text-center text-sm text-white/70">
            © {new Date().getFullYear()} Shamyra Aliceia Floral Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;