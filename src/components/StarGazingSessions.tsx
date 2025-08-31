import React from 'react';

const sessions = [
  {
    place: 'Pashan Lake, Pune',
    date: '10 May 2024',
    image: 'https://images.unsplash.com/photo-1536746810238-d62f4007b817',
  },
  {
    place: 'Lonavala Hill Station',
    date: '02 June 2025',
    image: 'https://images.unsplash.com/photo-1444706915264-a690e87b9264',
  },
];

const StarGazingSessions = () => {
  return (
    <section id="stargazing" className="py-12 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">Star Gazing Sessions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sessions.map((session, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img 
              src={session.image} 
              alt={session.place} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{session.place}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong className="text-gray-800 dark:text-gray-200">Date:</strong> {session.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StarGazingSessions;