import Section from './Section';

const AboutSection = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Electronics & Telecommunication Engineering Student | Astronomy Enthusiast | Cybersecurity Advocate"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full flex justify-center">
          <div className="aspect-square w-full max-w-md rounded-full border-8 border-yellow-500 overflow-hidden shadow-xl relative">
            <img
              src="https://media.licdn.com/dms/image/v2/D5622AQFmQnoRRdm2vA/feedshare-shrink_1280/feedshare-shrink_1280/0/1690176262751?e=1759363200&v=beta&t=wPADsRrTktvPdA8hRMRo4uT1CSO0Hqhd3lxGQuLL4G0"
              alt="Person coding on laptop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500 rounded-full opacity-20 z-0"></div>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a B.Tech student in Electronics and Telecommunication at Vishwakarma Institute of Technology, Pune, 
            maintaining a CGPA of 8.4. My passion lies at the intersection of Physics, Communication Engineering, and 
            Data-Driven approaches, demonstrated through award-winning projects and research contributions.
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            As the former President of Antariksh (VI's Astronomy Club) and founder of "Silverback - The Knight," 
            I combine technical expertise with leadership to advance knowledge in astronomy and cybersecurity. 
            Beyond academics, I find joy in writing regional literature, exploring philosophy, and playing classical Indian music.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-400">Technical Blogs</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">4+</h3>
              <p className="text-gray-600 dark:text-gray-400">Research Publications</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;