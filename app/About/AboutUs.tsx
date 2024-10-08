'use client'

import { useState } from "react";
import Footer from "../Components/Footer";

// components/AboutUs.js
export default function AboutUs() {
    
    return (
        <>
        <section className="bg-white py-16">
        
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex justify-center items-center">
            <img 
              src="https://i.pinimg.com/564x/47/5f/3e/475f3ea56aa59d357a17472de6331f4c.jpg" 
              alt="Modern living space in Malawi" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900">
              About HomeHub Malawi
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              HomeHub Malawi is a comprehensive platform dedicated to revolutionizing the real estate market in Malawi. 
              Our goal is to bridge the gap between property seekers and sellers, offering a seamless experience for 
              renting, buying, and selling properties. We focus on transparency, user-friendliness, and innovation, 
              providing a reliable solution for all your housing needs.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              We empower communities by simplifying the process of finding the perfect home or investment opportunity. 
              Whether you are a first-time homebuyer, a property investor, or simply looking for a place to rent, our 
              platform offers a diverse range of listings to suit every need and budget.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              Join us as we transform the way Malawians connect with real estate, making property transactions more 
              accessible, efficient, and secure.
            </p>
          </div>
        </div>
        
      </section>
     
      </>
      
    );
  }
  