'use client'

import { useState } from 'react';

const Posts = () => {
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/explore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image,
          location,
          price,
          type,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to post property');
      }

      setSuccess('Property posted successfully!');
      setImage('');
      setLocation('');
      setPrice('');
      setType('');
      setDescription('');
    } catch (error) {
      setError('');
    }
  };

  return (
    <div className="h-full w-full bg-gray-200 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Post a New Property</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">Image URL</label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">Price</label>
          <input
            id="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700">Type</label>
          <input
            id="type"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post Property
        </button>
      </form>
    </div>
  );
};

export default Posts;
