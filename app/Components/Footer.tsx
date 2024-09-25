import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 py-16 text-white">
      <div className="container mx-auto max-w-[1170px]">
        <div className="flex flex-wrap">
          {/* Company Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-medium capitalize mb-8 relative">
              Company
              <span className="absolute left-0 bottom-[-10px] w-12 h-[2px] bg-white"></span>
            </h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300 transition-all duration-300 ease-in-out block">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300 transition-all duration-300 ease-in-out block">Our Mission</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300 transition-all duration-300 ease-in-out block">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300 transition-all duration-300 ease-in-out block">Contact Us</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-medium capitalize mb-8 relative">
              Services
              <span className="absolute left-0 bottom-[-10px] w-12 h-[2px] bg-white"></span>
            </h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300 transition-all duration-300 ease-in-out block">Property Management</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300 transition-all duration-300 ease-in-out block">Real Estate Consulting</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300 transition-all duration-300 ease-in-out block">Investment Advice</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300 transition-all duration-300 ease-in-out block">Home Valuation</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-medium capitalize mb-8 relative">
              Resources
              <span className="absolute left-0 bottom-[-10px] w-12 h-[2px] bg-white"></span>
            </h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300 transition-all duration-300 ease-in-out block">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300 transition-all duration-300 ease-in-out block">FAQs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300 transition-all duration-300 ease-in-out block">Market Insights</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300 transition-all duration-300 ease-in-out block">Buyer & Seller Guides</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-medium capitalize mb-8 relative">
              Follow Us
              <span className="absolute left-0 bottom-[-10px] w-12 h-[2px] bg-white"></span>
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
