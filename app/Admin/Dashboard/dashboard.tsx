'use client';

import React from "react";
import HomeIcon from '@heroicons/react/solid/HomeIcon';
import TrashIcon from '@heroicons/react/solid/TrashIcon';
import ClipboardListIcon from '@heroicons/react/solid/ClipboardListIcon';
import NewspaperIcon from '@heroicons/react/solid/NewspaperIcon';


export default function AdminActions() {

  return (
    <div className="bg-gray-300 py-10 min-h-screen flex flex-col items-center">
      <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-5xl px-4">
        
        {/* Post Property Card */}
        <div className="mt-20 bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 text-center">
          <div className="flex justify-center mb-4">
            <HomeIcon className="h-16 w-16 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Post Property</h3>
          <p className="text-gray-700 mb-6">
            Easily add new properties to your listing by filling out a simple form.
          </p>
          <a href="/Admin/Posts">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Post Property
            </button>
          </a>
        </div>

        {/* Delete Property Card */}
        <div className="mt-20 bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 text-center">
          <div className="flex justify-center mb-4">
            <TrashIcon className="h-16 w-16 text-red-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Delete Property</h3>
          <p className="text-gray-700 mb-6">
            Remove properties from your listing quickly and efficiently.
          </p>
          <a href="/Admin/Delete">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
              Delete Property
            </button>
          </a>
        </div>

        {/* Manage Applications Card */}
        <div className="mt-20 bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 text-center">
          <div className="flex justify-center mb-4">
            <ClipboardListIcon className="h-16 w-16 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Manage Applications</h3>
          <p className="text-gray-700 mb-6">
            Review and manage agent applications submitted by potential partners.
          </p>
          <a href="/Admin/Applications">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              View Applications
            </button>
          </a>
        </div>

        {/* Post News Card */}
        <div className="mt-20 bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 text-center">
          <div className="flex justify-center mb-4">
            <NewspaperIcon className="h-16 w-16 text-indigo-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Post News</h3>
          <p className="text-gray-700 mb-6">
            Share the latest news and updates with your audience.
          </p>
          <a href="/Admin/News">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
              Post News
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}
