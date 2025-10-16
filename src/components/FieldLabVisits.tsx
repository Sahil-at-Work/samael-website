import React from 'react';

const visits = [
  {
    place: 'Inter University Centre for Astronomy and Astrophysics (IUCAA), Pune',
    date: '26 Feb 2023',
    description: 'Science Day',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQFuVa3fop_27w/profile-treasury-image-shrink_480_480/profile-treasury-image-shrink_480_480/0/1733295644497?e=1761228000&v=beta&t=8f9b_ZM3Jth3wj9Bctm6f7hhqaxG5vmi4CMnt6pHYXE',
  },
  {
    place: 'Giant Meterwave Radio Telescope (GMRT), Pune',
    date: '23 Feb 2024',
    description: 'Science Day',
    image: 'https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cm2wo0tyc0000wmkkl4nb6r97/74144542-26c4-4557-a5f1-191155784b29.png/public',
  },
  {
    place: 'Inter University Centre for Astronomy and Astrophysics (IUCAA), Pune',
    date: '28 Feb 2024',
    description: 'Science Day',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQH8IgJVACZ8ag/feedshare-shrink_1280/feedshare-shrink_1280/0/1709885782709?e=1759968000&v=beta&t=kVk-Wzr5EZnN9aK-teiGIujUV6gyGGg7PC9i-2BmdLY',
  },
  {
    place: 'Instrumentation Labs (IUCAA), Pune',
    date: '30 May 2024',
    description: 'Science Day',
    image: 'https://github.com/Auriel3003/samael/assets/103866475/ad438e14-63fd-4ca7-b364-7f1a7018a0cf',
  },
  {
    place: 'Precission and Quantum Measurements Lab (IUCAA), Pune',
    date: '31 May 2024',
    description: 'Science Day',
    image: 'https://github.com/Auriel3003/samael/assets/103866475/89383a2d-4c28-4f7b-98d3-27b79f9958ed',
  },
  {
    place: 'Giant Meterwave Radio Telescope (GMRT), Pune',
    date: '17 Jan 2025',
    description: 'Science Day',
    image: 'https://images.unsplash.com/photo-1542170327-e81816e81014',
  },
  {
    place: 'Inter University Centre for Astronomy and Astrophysics (IUCAA), Pune',
    date: '28 Feb 2025',
    description: 'Science Day',
    image: 'https://images.unsplash.com/photo-1542170327-e81816e81014',
  },
  {
    place: 'Nehru Planetarium, Mumbai',
    date: '27 July 2025',
    description: 'Science Day',
    image: 'https://images.unsplash.com/photo-1542170327-e81816e81014',
  }
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