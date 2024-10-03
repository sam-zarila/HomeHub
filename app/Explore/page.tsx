'use client';

import React, { useEffect, useState } from "react";
import { getExplore } from "../utils/Explore.api";

import { SearchIcon } from '@heroicons/react/outline';

interface Property {
  id: string;
  image: string;
  location: string;
  price: string;
  type: string;
  description: string;
}

const Explore = () => {
  const [exploreProps, setExploreProps] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    image: '',
    location: '',
    price: '',
    type: '',
    description: '',
  });

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getExplore(filters);
        setExploreProps(data);
      } catch (error) {
        setError('Error fetching properties.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterSubmit = () => {
    // Trigger a fetch with current filters
    setFilters({ ...filters }); // This will trigger useEffect
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="h-full w-full bg-gray-200">
    
      <div className="p-8">
        <p className="text-2xl text-center mb-6">
          Explore Various Properties Available for Rent and Sale
        </p>
      
        <div className="mt-16">
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-grow ml-4">
                <input
                  type="text"
                  name="location"
                  placeholder="Search by location..."
                  value={filters.location}
                  onChange={handleFilterChange}
                  className="w-[300px] p-2 border rounded"
                />
                <SearchIcon className="absolute pl-8 top-2 h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            {exploreProps.length > 0 ? (
              exploreProps.map((explore) => (
                <div key={explore.id} className="w-[320px] h-[500px] m-4 p-4 border rounded shadow-lg">
                  <img
                    src={explore.image}
                    alt={`Property ${explore.id}`}
                    className="w-full h-[200px] object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold">{explore.location}</h3>
                  <p>{explore.price}</p>
                  <p>{explore.type}</p>
                  <p>{explore.description}</p>
                  <div className='flex justify-center items-center'>
                    <a
                      href="/Chat"
                      className="mt-4 ml-20 block w-32 rounded-md bg-green-600 px-3 py-2 text-center text-sm text-white shadow-sm hover:bg-green-500 transition-all"
                    >
                      View More
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No properties found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
