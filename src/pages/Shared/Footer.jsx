import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">🍽️ DineFine Restaurant</h2>
          <p className="text-sm">
            Committed to taste and quality. We’re here to make your restaurant experience easier, smarter, and more delicious.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/all-foods" className="hover:text-yellow-400">All Foods</a></li>
            <li><a href="/gallery" className="hover:text-yellow-400">Gallery</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm mt-10 text-gray-400">
        © {new Date().getFullYear()} DineFine Restaurant. All rights reserved.
      </div>
    </footer>
    );
};

export default Footer;