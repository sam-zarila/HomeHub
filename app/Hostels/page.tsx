import React from 'react';

const HostelLandingPage = () => {
  const universities = [
    {
      name: 'UNIMA',
      image: 'https://unima.ac.mw/consultax/images/eco.png', // Replace with your image path
      link: '/book/unima',
    },
    {
      name: 'MUBAS',
      image: 'https://www.mubas.ac.mw/images/mobile-home.jpg', // Replace with your image path
      link: '/book/mubas',
    },
    {
      name: 'LUNAR',
      image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8d4fddda-997a-4ba6-857b-e79031d95465_960x640.jpeg', // Replace with your image path
      link: '/book/lunar',
    },
    {
      name: 'CU',
      image: 'https://smapse.com/storage/2020/01/b1-7.jpg', // Replace with your image path
      link: '/book/cu',
    },
    {
        name: 'KUHES',
        image: 'https://www.kuhes.ac.mw/wp-content/uploads/2022/01/cm1.jpg.png.jpg', // Replace with your image path
        link: '/book/cu',
      },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-8">Find Your Perfect Hostel</h1>
      <p className="text-center text-lg mb-12 text-gray-700">
        Choose your university below and explore available hostels for booking.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {universities.map((uni, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <img src={uni.image} alt={`${uni.name} Hostel`} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-2">{uni.name}</h2>
              <p className="text-gray-600 mb-4">Explore hostels near {uni.name}</p>
              <a 
                href={uni.link} 
                className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostelLandingPage;
