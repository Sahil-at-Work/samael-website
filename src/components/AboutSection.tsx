import Section from './Section';

const AboutSection = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Engineering Student | Astronomy Enthusiast | Cybersecurity Advocate"
    >
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  <div className="relative w-full flex justify-center">
    <div className="w-full max-w-md h-[400px] overflow-hidden border-[5px] border-yellow-500 rounded-[20px] shadow-xl">
      <img
        src="https://github.com/user-attachments/assets/3d798101-7056-45c0-9b79-d008cb092d44"
        alt="Person coding on laptop"
        className="w-full object-cover object-top h-full"
      />
      <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500 rounded-lg opacity-20 z-0">     </div>

    </div>
  </div>


        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I am now persuing M.Tech in Computer Engineering from Veermata Jijabai Technological Institute- VJTI, Mumbai
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I completed my B.Tech in Electronics and Telecommunication at Vishwakarma Institute of Technology, Pune, 
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