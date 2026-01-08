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
    institute: 'Inter University Centre for Astronomy and Astrophysics',
    topic: 'Horn Antenna Workshop',
    date: '11-13 April 2023',
    description: 'Guided and volunteered for Faculty Development session in construction of Horn Antenna by IUCAA, Pune.',
    image: 'https://github.com/Auriel3003/samael/assets/103866475/8286f032-b21d-455b-94e4-e53d981c73e3',
  },{
    institute: 'Vishwakarma Institute of Technology (VIT-Pune)',
    topic: 'Evolution of Astronomy from Implications to Implementations',
    date: '11 August 2023',
    description: 'An pilot internal session for students on the basics of astronomy, its advancements, and its significance in modern sciences.',
    image: 'https://github.com/Auriel3003/samael/assets/103866475/50e41c09-dfad-4546-8759-26f3b11ced6e',
  },
  {
    institute: 'Symbiosis Institute of Technology (SIT-Pune)',
    topic: 'Engineering Challenges and Opportunities in Astronomy',
    date: '01 August 2024',
    description: 'An invited Guest Sessin for students on the evolution of Astronomy and its applications in Engineering and Sciences.',
    image: 'https://github.com/user-attachments/assets/4d0432c0-604a-4f3c-9575-13b221ca8ccf',
  },
  {
    institute: 'Vishwakarma Institute of Information Technology (VIIT-Pune)',
    topic: 'Signals to Stars',
    date: '11 January 2025',
    description: 'An introductory lecture for students on the basics of radio astronomy, its history, and its significance in modern science.',
    image: 'https://github.com/user-attachments/assets/4c96a6e4-c9f2-4259-bb7f-9a76bcc4bd0a',
  },
  {
    institute: 'Indrayani-Pune',
    topic: 'Introductory Astronomy and Carreer Opportunities',
    date: '23 August 2025',
    description: 'A talk focused on the importance of making astronomy education accessible and engaging for all age groups.',
    image: 'https://github.com/user-attachments/assets/b7ab1363-3c1c-4d11-9e9f-16bb25196938',
  },
  {
    institute: 'Veermata Jijabai Technological Institute (VJTI-Mumbai)',
    topic: 'ORION- Data Science in Asronomy',
    date: '04 November 2025',
    description: 'A Python Guided Workshop focusing on Data Science in Astronomy. Students were taught to use Python from basics and implement it on SDSS dataset.',
    image: 'https://github.com/user-attachments/assets/af07b2e7-a0f8-477f-a20c-5d0ed154dd61',
  },
  {
    institute: 'Vishwakarma Institute of Technology (VIT-Pune)',
    topic: 'Predictive AI Models for Disaster Management',
    date: '02 December 2025',
    description: 'A Faculty Development Program organised by VIT (AI) dept. focusing on Advancements of AI in different sectors.',
    image: 'https://github.com/user-attachments/assets/10a95ef8-d1c4-440f-8bbe-8b5ddd848e51',
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

