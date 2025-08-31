import React from 'react';

const visits = [
  {
    place: 'IUCAA, Pune',
    date: '15 March 2024',
    description: 'A visit to the Inter-University Centre for Astronomy and Astrophysics to observe research facilities and discuss ongoing projects.',
    image: 'https://images.unsplash.com/photo-1542170327-e81816e81014',
  },
  {
    place: 'NCRA-TIFR, Pune',
    date: '12 June 2025',
    description: 'A detailed tour of the Giant Metrewave Radio Telescope (GMRT) and a discussion on its role in advancing radio astronomy.',
    image: 'https://images.unsplash.com/photo-1517976075199-f47ff78e12f6',
  },
];

const FieldLabVisits = () => {
  return (
    <section id="visits" className="py-12 px-4 md:px-8 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">Field & Lab Visits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visits.map((visit, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img 
              src={visit.image} 
              alt={visit.place} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{visit.place}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong className="text-gray-800 dark:text-gray-200">Date:</strong> {visit.date}
              </p>
              {visit.description && (
                <p className="text-gray-700 dark:text-gray-300 mt-4">{visit.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FieldLabVisits;