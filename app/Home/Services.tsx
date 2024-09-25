
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[700px]" style={{ backgroundImage: "url('https://your-image-url-here')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-600 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Side - Text */}
        <div className="text-white max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Smart Real Estate Dreams Come True</h1>
          <p className="text-lg mb-8">
            Residence hub & services to manage your property on a new destination.
          </p>
          
          {/* Get Started Button */}
          <a href="#!" className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition duration-300">
            Get Started
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block">
          <img
            src="https://i.pinimg.com/564x/64/eb/6c/64eb6c4642150c59adf4f2f2dc95dfc0.jpg"
            alt="Real Estate"
            className="w-full h-[500px] rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Search Box */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Property Type */}
            <div>
              <label htmlFor="property-type" className="block text-sm font-medium text-gray-700">Property Type</label>
              <select
                id="property-type"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              >
                <option>Buy</option>
                <option>Sell</option>
                <option>Rent</option>
              </select>
            </div>
            
            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                id="city"
                placeholder="E.g. Blantyre "
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            {/* Price Range */}
            <div>
              <label htmlFor="price-range" className="block text-sm font-medium text-gray-700">Price Range</label>
              <input
                type="text"
                id="price-range"
                placeholder="mwk100000 - mwk300000"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition duration-300"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
