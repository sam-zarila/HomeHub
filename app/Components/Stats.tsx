import React from 'react';

const StatsSection = () => {
  const stats = [
    { id: 1, value: '10K+', label: 'Happy Clients' },
    { id: 2, value: '500+', label: 'Projects Completed' },
    { id: 3, value: '15', label: 'Years of Experience' },
    { id: 4, value: '24/7', label: 'Customer Support' },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 ">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-8 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center"
            >
              <span className="text-5xl font-extrabold text-teal-600 mb-6">
                {stat.value}
              </span>
              <span className="text-xl font-semibold text-gray-700">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
