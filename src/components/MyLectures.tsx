import React from 'react';

interface Lecture {
  institute: string;
  topic: string;
  date: string;
  description?: string;
  image: string;
}

const lectures: Lecture[] = [
  {
    institute: 'Vishwakarma Institute of Technology (VIT-Pune)',
    topic: 'Evolution of Astronomy from Implications to Implementations',
    date: '11 August 2023',
    description: 'An introductory lecture for students on the basics of radio astronomy, its history, and its significance in modern science.',
    image: 'https://picsum.photos/id/237/400/300',
  },
  {
    institute: 'Symbiosis Institute of Technology (SIT-Pune)',
    topic: 'Engineering Challenges and Opportunities in Astronomy',
    date: '01 August 2024',
    description: 'An introductory lecture for students on the basics of radio astronomy, its history, and its significance in modern science.',
    image: 'https://picsum.photos/id/237/400/300',
  },
  {
    institute: 'Vishwakarma Institute of Information Technology (VIIT-Pune)',
    topic: 'Signals to Stars',
    date: '11 January 2025',
    description: 'An introductory lecture for students on the basics of radio astronomy, its history, and its significance in modern science.',
    image: 'https://picsum.photos/id/237/400/300',
  },
  {
    institute: 'Indrayani-Pune',
    topic: 'Education in Astronomy',
    date: '23 August 2025',
    description: 'A talk focused on the importance of making astronomy education accessible and engaging for all age groups.',
    image: 'https://d4.alternativeto.net/Ty3JiOw0J4K3JE88cjAdZLYH3b10Y0t8Kp3wgbwcqJM/rs:fit:2400:2400:0/g:ce:0:0/YWJzOi8vZGlzdC9zLzhjNzljYjExLWZkOTctZTMxMS04OWNlLTAwMjU5MGEwNWY1Zl8yX2Z1bGwuanBn.jpg',
  },
];

const MyLectures: React.FC = () => {
  return (
    <section id="lectures" className="py-12 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">My Lectures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lectures.map((lecture, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={lecture.image}
              alt={lecture.topic}
              className="w-full object-cover"
              style={{ minHeight: '300px', maxHeight: '400px' }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{lecture.topic}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                <strong className="text-gray-800 dark:text-gray-200">Institute:</strong> {lecture.institute}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong className="text-gray-800 dark:text-gray-200">Date:</strong> {lecture.date}
              </p>
              {lecture.description && (
                <p className="text-gray-700 dark:text-gray-300 mt-4">{lecture.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyLectures;