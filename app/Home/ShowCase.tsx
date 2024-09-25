// import React from "react";
// import Image from "next/image";
// import Logo from '../Images/Logo.jpg'
// import Cars from '../Images/Cars.jpg'
// import Nyumba from '../Images/Nyumba.jpg'
// import Farm from '../Images/Farm.jpg'

// const Show =()=>{
//     return(
//       <div className="bg-gray-100 h-[500px]">
//      <h1 className="text-center text-3xl text-gray-700 font-bold pt-5">Explore Our Services</h1>
//        <div className="flex flex-grow ml-16 mr-16 pt-16">      
//        <a href="/House"
//   className="relative border border-gray-400  bg-gray-200 bg-cover bg-center bg-no-repeat hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:transform hover:scale-105 transition-transform duration-300"
//   style={{
//     width: '310px',
//     height: '230px',
//     borderRadius: '10px',
//     backgroundImage: "url('https://i.pinimg.com/564x/f7/d0/1e/f7d01e82f78b1f753321514e0e02ff8b.jpg')"
//   }}
// >
//   <span className="absolute inset-0 bg-black opacity-30 rounded-lg"></span>
//    <h1 className="relative z-10 text-white text-3xl font-bold p-4">Houses </h1>
//    <p className="relative z-10 text-white text-lg font-semibold p-2">
//       Find your ideal home with our expert renting and selling services. →
//    </p>
// </a>

// <a href=""
//   className="relative border border-gray-400  bg-gray-200 ml-10 bg-cover bg-center bg-no-repeat hover:bg-gray-300 hover:transform hover:scale-105 transition-transform duration-300"
//   style={{
//     width: '310px',
//     height: '230px',
//     borderRadius: '10px',
//     backgroundImage: "url('https://i.pinimg.com/564x/5b/78/e0/5b78e033387715813ebdedd1a4c0792b.jpg')"
//   }}
// >
//   <span className="absolute inset-0 bg-black opacity-50 rounded-lg"></span>
//   <span className="absolute inset-0 bg-black opacity-50 rounded-lg"></span>
//   <h1 className="relative z-10 text-white text-3xl font-bold p-4">Hotels </h1>
//    <p className="relative z-10 text-white text-lg font-semibold p-2">
//    Discover your ideal stay with our expert hotel booking and selling services →
//    </p>
// </a>

// <a href=""
//   className="relative border border-gray-400  bg-gray-200 ml-10 bg-cover bg-center bg-no-repeat hover:bg-gray-300 hover:transform hover:scale-105 transition-transform duration-300"
//   style={{
//     width: '310px',
//     height: '230px',
//     borderRadius: '10px',
//     backgroundImage: "url('https://i.pinimg.com/564x/3e/bb/1e/3ebb1e7c7bf8dcc98e43fa089e34dcfd.jpg')"
//   }}
// >
//   <span className="absolute inset-0 bg-black opacity-50 rounded-lg"></span>
//   <h1 className="relative z-10 text-white text-3xl font-bold p-4">Cars </h1>
//    <p className="relative z-10 text-white text-lg font-semibold p-2">
//       Find your perfect ride with our expert car renting and selling services →
//    </p>
// </a>

// <a href=""
//   className="relative border border-gray-400  bg-gray-200 ml-10 bg-cover bg-center bg-no-repeat hover:bg-gray-300 hover:transform hover:scale-105 transition-transform duration-300"
//   style={{
//     width: '310px',
//     height: '230px',
//     borderRadius: '10px',
//     backgroundImage: "url('https://i.pinimg.com/564x/ce/44/b1/ce44b12fd02c9d179454844b494c06dc.jpg')"
//   }}
// >
//   <span className="absolute inset-0 bg-black opacity-50 rounded-lg"></span>
//   <span className="absolute inset-0 bg-black opacity-50 rounded-lg"></span>
//   <h1 className="relative z-10 text-white text-3xl font-bold p-4">Land & Farms </h1>
//    <p className="relative z-10 text-white text-lg font-semibold p-2">
//    Secure your dream property with our expert land and farm buying and selling services →
//    </p>
    
// </a>


//        </div>
//       </div>
//     )
// }
// export default Show;
// components/Show.js
import React from "react";

const Show = () => {
  return (
    <div className="bg-gray-100 py-16">
      {/* Title */}
      <h1 className="text-center text-4xl text-gray-800 font-bold mb-10">
        Explore Our Services
      </h1>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-8 px-6 lg:px-16">
        {/* House Card */}
        <a
          href="/House"
          className="relative w-full max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-cover bg-center hover:transform hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: "url('https://i.pinimg.com/564x/f7/d0/1e/f7d01e82f78b1f753321514e0e02ff8b.jpg')"
          }}
        >
          <span className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></span>
          <div className="relative z-10 p-6">
            <h1 className="text-white text-3xl font-bold">Houses</h1>
            <p className="text-white text-lg mt-2">
              Find your ideal home with our expert renting and selling services →
            </p>
          </div>
        </a>

        {/* Hotel Card */}
        <a
          href=""
          className="relative w-full max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-cover bg-center hover:transform hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: "url('https://i.pinimg.com/564x/5b/78/e0/5b78e033387715813ebdedd1a4c0792b.jpg')"
          }}
        >
          <span className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></span>
          <div className="relative z-10 p-6">
            <h1 className="text-white text-3xl font-bold">Hotels</h1>
            <p className="text-white text-lg mt-2">
              Discover your ideal stay with our expert hotel booking and selling services →
            </p>
          </div>
        </a>

        {/* Cars Card */}
        <a
          href=""
          className="relative w-full max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-cover bg-center hover:transform hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: "url('https://i.pinimg.com/564x/3e/bb/1e/3ebb1e7c7bf8dcc98e43fa089e34dcfd.jpg')"
          }}
        >
          <span className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></span>
          <div className="relative z-10 p-6">
            <h1 className="text-white text-3xl font-bold">Cars</h1>
            <p className="text-white text-lg mt-2">
              Find your perfect ride with our expert car renting and selling services →
            </p>
          </div>
        </a>

        {/* Land & Farms Card */}
        <a
          href=""
          className="relative w-full max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-cover bg-center hover:transform hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: "url('https://i.pinimg.com/564x/ce/44/b1/ce44b12fd02c9d179454844b494c06dc.jpg')"
          }}
        >
          <span className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></span>
          <div className="relative z-10 p-6">
            <h1 className="text-white text-3xl font-bold">Land & Farms</h1>
            <p className="text-white text-lg mt-2">
              Secure your dream property with our expert land and farm buying and selling services →
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Show;
