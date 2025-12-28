import { useState, useMemo } from 'react';
import Section from './Section';
import { ProjectFilters } from '../types';
import { Radio, GitBranch, Code, Database, ExternalLink, Github, Linkedin, Filter, X, ChevronDown } from 'lucide-react';
import Button from './Button';

// Projects data
const PROJECTS = [
  {
    title: 'Automation of Optical Telescope',
    description:
      'Developed a 4-inch aperture Newtonian telescope with an automated stellar tracking system, achieving 0.1° rotation precision and 87% imaging accuracy. Received the Best Project Award for Engineering Design and Innovation.',
    type: 'Hardware' as const,
    skillset: ['Arduino', 'Stepper Motors', 'Optics', 'C++', 'Mechanical Design'],
    from: 'Jan 2024',
    to: 'Jun 2024',
    affiliation: 'Inter-University Centre for Astronomy and Astrophysics (IUCAA), Pune',
    link: 'https://www.linkedin.com/in/sahil-at-work/details/projects/',
    featured: false
  },
  {
    title: 'Affordable Small Radio Telescope (ASRT) — Solar Observation',
    description:
      'Built a low-cost radio telescope using a DTH setup for Ku-Band observations. Implemented a super-heterodyne receiver, acquired satellite and solar radio signals, and generated frequency–time plots for solar activity analysis.',
    type: 'Hardware' as const,
    skillset: ['Radio Astronomy', 'RF Engineering', 'Signal Processing', 'Python', 'Electronics'],
    from: 'Jan 2024',
    to: 'Jun 2024',
    affiliation: 'Inter-University Centre for Astronomy and Astrophysics (IUCAA), Pune',
    link: 'https://github.com/Sahil-at-Work',
    featured: true
  },
  {
    title: 'Cepheid Period–Magnitude Analysis',
    description:
      'Explored the Period–Luminosity relationship of Cepheid variable stars using Bayesian inference and MCMC sampling (emcee). Implemented probabilistic modeling with custom priors and likelihoods, estimated posteriors, and validated results using corner plots and model-overlay visualizations.',
    type: 'Research' as const,
    skillset: ['Python', 'Bayesian Inference', 'MCMC', 'Data Analysis', 'Astrophysics'],
    from: 'May 2024',
    to: 'Jun 2024',
    affiliation: 'Inter-University Centre for Astronomy and Astrophysics (IUCAA), Pune',
    link: 'https://docs.google.com/document/d/18MbodOn5EVy_vQAdyKEAiq4ERzTif24LhUi2fjePu7k/edit?usp=sharing',
    featured: false
  },
  {
    title: 'Computational Astrophysics with MESA',
    description:
      'Simulated stellar evolution using MESA, including blue-loop evolution in Cepheid stars. Configured inlists for mass and reaction parameters, generated PGSTAR outputs, and analyzed stellar structure using py_mesa_reader to produce Hertzsprung–Russell diagrams.',
    type: 'Research' as const,
    skillset: ['Python', 'MESA', 'Computational Physics', 'Astrophysics', 'Data Visualization'],
    from: 'May 2024',
    to: 'Jun 2024',
    affiliation: 'Inter-University Centre for Astronomy and Astrophysics (IUCAA), Pune',
    link: '',
    featured: false
  },
  {
    title: 'Frequentist vs Bayesian Inferential Statistics',
    description:
      'Implemented source-flux estimation using Frequentist Maximum Likelihood Estimation and Bayesian MCMC sampling, comparing uncertainty modeling, posterior distributions, and parameter confidence intervals across both frameworks.',
    type: 'Research' as const,
    skillset: ['Python', 'Statistics', 'MLE', 'Bayesian Inference', 'Astrophysics'],
    from: 'May 2024',
    to: 'Jun 2024',
    affiliation: 'Inter-University Centre for Astronomy and Astrophysics (IUCAA), Pune',
    link: 'https://docs.google.com/document/d/1h_cXEQraeeoJ1l51Ze3NXyDrIks79u5CpnP6hjCXf0k/edit?usp=sharing',
    featured: false
  },
  {
    title: 'Radio Astronomy Data Handling',
    description:
      'Processed radio-interferometry visibility data including calibration, flagging, imaging, and deconvolution. Analyzed spectra for PKS 1830-211, converted frequency to velocity frames, and studied OH absorption using Python-based workflows.',
    type: 'Research' as const,
    skillset: ['Python', 'Radio Astronomy', 'Interferometry', 'Data Processing', 'Signal Analysis'],
    from: 'May 2024',
    to: 'Jun 2024',
    affiliation: 'Inter-University Centre for Astronomy and Astrophysics (IUCAA), Pune',
    link: '',
    featured: false
  },
  {
    title: 'Synchrotron Radiation Modeling',
    description:
      'Modeled synchrotron emissivity from relativistic electrons, implementing emissivity kernels and spectral-aging models for power-law and cut-off spectra, and validating numerical outputs against analytical solutions.',
    type: 'Research' as const,
    skillset: ['Python', 'Astrophysics', 'Numerical Modeling', 'Radiative Processes', 'Data Analysis'],
    from: 'May 2024',
    to: 'Jun 2024',
    affiliation: 'Inter-University Centre for Astronomy and Astrophysics (IUCAA), Pune',
    link: '',
    featured: true
  },
  {
    title: 'Design and Analysis of Floating-Point Comparators (IEEE-754)',
    description:
      'Analyzed comparator architectures for IEEE-754 floating-point formats (FP16, FP32, FP64), evaluating precision, latency, and resource trade-offs to support optimized arithmetic-unit design.',
    type: 'Research' as const,
    skillset: ['Digital Design', 'IEEE-754', 'Computer Architecture', 'VLSI', 'Mathematical Modeling'],
    from: 'Mar 2024',
    to: 'May 2024',
    affiliation: 'Vishwakarma Institute of Technology',
    link: '',
    featured: false
  },
  {
    title: 'Butterfly Species Identification — Sahyadri Region',
    description:
      'Developed a ResNet50-based deep-learning system with transfer learning for automated butterfly species identification in the Sahyadri ecosystem, achieving high-accuracy classification to support biodiversity conservation.',
    type: 'Data Science' as const,
    skillset: ['Deep Learning', 'Computer Vision', 'Python', 'ResNet50', 'Transfer Learning'],
    from: 'Mar 2024',
    to: 'May 2024',
    affiliation: 'Vishwakarma Institute of Technology',
    link: 'https://github.com/Sahil-at-Work',
    featured: true
  },
  {
    title: 'Temporal & Spectral Signal Analysis of H1 Emission',
    description:
      'Applied Fourier, wavelet, and spectrogram-based methods to extract dominant frequencies and spectral features from H1-emission signals captured using a horn antenna for scientific signal characterization.',
    type: 'Research' as const,
    skillset: ['Signal Processing', 'Fourier Analysis', 'Wavelets', 'Spectral Analysis', 'Python'],
    from: 'Mar 2024',
    to: 'May 2024',
    affiliation: 'Vishwakarma Institute of Technology',
    link: '',
    featured: false
  },
  {
    title: 'RF Up/Down-Converter Design',
    description:
      'Designed and implemented RF up/down-conversion chains using GNU Radio and SDRs, integrating end-to-end signal-processing pipelines on Linux.',
    type: 'Software Ops' as const,
    skillset: ['GNU Radio', 'SDR', 'Python', 'Signal Processing', 'Linux'],
    from: 'Jan 2024',
    to: 'Jun 2024',
    affiliation: 'Independent',
    link: 'https://github.com/Sahil-at-Work',
    featured: false
  },
  {
    title: 'BMC Helix Integration Platform',
    description:
      'Contributed to Docker-based deployment and database administration for the BMC Helix Intelligent Integrations platform, supporting system reliability and integration workflows.',
    type: 'Software Ops' as const,
    skillset: ['Docker', 'Linux', 'Database Administration', 'DevOps', 'System Integration'],
    from: 'Jan 2024',
    to: 'Jun 2024',
    affiliation: 'BMC Software Inc',
    link: 'https://www.linkedin.com/in/sahil-sawant-its-31aug',
    featured: true
  },
  {
    title: 'Blink-Controlled Wheelchair',
    description:
      'Developed an assistive mobility solution using eye-blink detection and embedded control for hands-free wheelchair navigation.',
    type: 'Hardware' as const,
    skillset: ['Computer Vision', 'Arduino', 'Python', 'OpenCV', 'Embedded Systems'],
    from: 'Sep 2022',
    to: 'Dec 2022',
    affiliation: 'Defence Institute of Advanced Technology (DIAT), Pune',
    link: 'https://github.com/Sahil-at-Work'
  },
  {
    title: 'Smart SOS Device',
    description:
      'Built an IoT-based personal safety device with GPS tracking and GSM-enabled emergency alerts, deployed as a portable field-ready prototype.',
    type: 'Hardware' as const,
    skillset: ['IoT', 'GPS', 'Arduino', 'GSM', 'Mobile App Development'],
    from: 'Mar 2023',
    to: 'Aug 2023',
    affiliation: 'Pimpri Chinchwad College of Engineering (PCCOE), Pune',
    link: 'https://doi.org/10.1109/ICCUBEA58933.2023.10392200'
  },
  {
    title: 'Portfolio Website',
    description:
      'Developed a responsive personal portfolio using React, TypeScript, and Three.js with dark/light mode support and modular UI components.',
    type: 'Software Dev' as const,
    skillset: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Responsive Design'],
    from: 'Dec 2024',
    to: 'Present',
    affiliation: 'Independent',
    link: 'https://samael.vercel.app'
  },
  {
    title: 'Astronomical Data Analysis',
    description:
      'Analyzed radio-telescope datasets to study solar-activity trends using Python-based statistical modeling and visualization workflows.',
    type: 'Data Science' as const,
    skillset: ['Python', 'Data Analysis', 'Statistics', 'Matplotlib', 'NumPy'],
    from: 'Jul 2024',
    to: 'Oct 2024',
    affiliation: 'Inter-University Centre for Astronomy and Astrophysics (IUCAA), Pune',
    link: 'Antariksh Club of VI'
  },
  {
    title: 'OSProbeKit — Operating System Exploration Toolkit',
    description:
      'Developed a collection of shell-based utilities for system exploration and diagnostics, providing insights into connections, processes, and resource usage to simplify OS understanding for beginners and power-users.',
    type: 'Software Ops' as const,
    skillset: ['Shell Scripting', 'Linux', 'System Monitoring', 'Process Analysis', 'DevOps'],
    from: 'Aug 2024',
    to: 'Present',
    affiliation: 'Personal Project',
    link: ''
  },
  {
    title: 'Antariksh — Astronomy Club Website',
    description:
      'Built a responsive web platform for the Antariksh astronomy club using React, Vite, and Tailwind CSS, featuring dynamic content loading, dark/light theme switching, and accessibility-focused UI design.',
    type: 'Software Dev' as const,
    skillset: ['React', 'Vite', 'Tailwind CSS', 'Frontend Development', 'UI/UX'],
    from: 'Nov 2024',
    to: 'Present',
    affiliation: 'Antariksh Club of VI',
    link: ''
  },
  {
    title: 'W-Boson Decay and Charge Asymmetry Analysis',
    description:
      'Analyzed high-energy physics datasets to study W-boson decay into muons and neutrinos, reconstructed transverse mass distributions, and investigated charge asymmetry to infer quark-level structure of the proton.',
    type: 'Data Science' as const,
    skillset: ['Python', 'Data Analysis', 'Particle Physics', 'Statistics', 'Scientific Computing'],
    from: 'Jun 2024',
    to: 'Sep 2024',
    affiliation: 'Independent',
    link: ''
  },
  {
    title: 'SDSS Quasar–Galaxy Classification using Machine Learning',
    description:
      'Applied machine learning techniques on SDSS survey data to classify quasars and galaxies using neural network models, exploring feature selection and performance evaluation across astrophysical object classes.',
    type: 'Data Science' as const,
    skillset: ['Machine Learning', 'Neural Networks', 'Python', 'Astrophysics', 'Data Processing'],
    from: 'Jul 2024',
    to: 'Oct 2024',
    affiliation: 'Independent',
    link: ''
  }
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [filters, setFilters] = useState<ProjectFilters>({
    skills: [],
    affiliation: [],
    type: []
  });
  const [skillInput, setSkillInput] = useState('');
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [affiliationDropdownOpen, setAffiliationDropdownOpen] = useState(false);

  // Get unique values for filter options
  const filterOptions = useMemo(() => {
    const skills = [...new Set(PROJECTS.flatMap(p => p.skillset))].sort();
    const affiliations = [...new Set(PROJECTS.map(p => p.affiliation))].sort();
    const types = [...new Set(PROJECTS.map(p => p.type))].sort();
    
    return { skills, affiliations, types };
  }, []);

  // Filter projects based on active filters
  const filteredProjects = useMemo(() => {
    let projects = PROJECTS;
    
    // If no filters are active, show featured projects or all based on showAll state
    const hasActiveFilters = filters.skills.length > 0 || filters.affiliation.length > 0 || filters.type.length > 0;
    
    if (!hasActiveFilters && !showAll) {
      projects = PROJECTS.filter(p => p.featured);
    }
    
    // Apply filters
    if (filters.skills.length > 0) {
      projects = projects.filter(p => 
        filters.skills.some(filterSkill => 
          p.skillset.some(projectSkill => 
            projectSkill.toLowerCase().includes(filterSkill.toLowerCase())
          )
        )
      );
    }
    
    if (filters.affiliation.length > 0) {
      projects = projects.filter(p => 
        filters.affiliation.includes(p.affiliation)
      );
    }
    
    if (filters.type.length > 0) {
      projects = projects.filter(p => 
        filters.type.includes(p.type)
      );
    }
    
    return projects;
  }, [filters, showAll]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Hardware':
        return <Radio className="w-5 h-5" />;
      case 'Software Ops':
        return <GitBranch className="w-5 h-5" />;
      case 'Software Dev':
        return <Code className="w-5 h-5" />;
      case 'Data Science':
        return <Database className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const addSkillFilter = () => {
    const normalizedSkill = skillInput.trim().toLowerCase();
    const existingSkill = filters.skills.find(skill => skill.toLowerCase() === normalizedSkill);
    
    if (normalizedSkill && !existingSkill) {
      setFilters(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput('');
    }
  };

  const removeSkillFilter = (skill: string) => {
    setFilters(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const toggleDropdownFilter = (category: 'type' | 'affiliation', value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const clearAllFilters = () => {
    setFilters({ skills: [], affiliation: [], type: [] });
    setSkillInput('');
    setShowAll(false);
  };

  const hasActiveFilters = filters.skills.length > 0 || filters.affiliation.length > 0 || filters.type.length > 0;

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Innovative solutions across hardware and software domains"
      dark
    >
      {/* Filter Controls */}
      <div className="mb-8 space-y-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">Filters:</span>
          </div>
          
          {!hasActiveFilters && !showAll && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAll(true)}
              className="text-white border-white hover:bg-white/10"
            >
              Show All Projects
            </Button>
          )}
          
          {(hasActiveFilters || showAll) && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllFilters}
              className="text-white border-white hover:bg-white/10 flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Clear All
            </Button>
          )}
        </div>

        {/* Filter Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Skills Filter - Keypad Input */}
          <div>
            <h4 className="text-sm font-medium text-blue-400 mb-2">Skills</h4>
            <div className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSkillFilter()}
                  placeholder="Type skill and press Enter"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-400 focus:outline-none text-sm"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addSkillFilter}
                  className="text-white border-white hover:bg-white/10"
                >
                  Add
                </Button>
              </div>
              {filters.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {filters.skills.map(skill => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500 text-white text-sm rounded"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkillFilter(skill)}
                        className="hover:bg-blue-600 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Project Type Filter - Dropdown */}
          <div className="relative">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Project Type</h4>
            <button
              onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-400 focus:outline-none text-sm flex items-center justify-between"
            >
              <span>
                {filters.type.length > 0 ? `${filters.type.length} selected` : 'Select types'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${typeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {typeDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 border border-gray-600 rounded shadow-lg z-10">
                {filterOptions.types.map(type => (
                  <label
                    key={type}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-600 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.type.includes(type)}
                      onChange={() => toggleDropdownFilter('type', type)}
                      className="rounded"
                    />
                    <span className="text-white text-sm">{type}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Affiliation Filter - Dropdown */}
          <div className="relative">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Affiliation</h4>
            <button
              onClick={() => setAffiliationDropdownOpen(!affiliationDropdownOpen)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-400 focus:outline-none text-sm flex items-center justify-between"
            >
              <span>
                {filters.affiliation.length > 0 ? `${filters.affiliation.length} selected` : 'Select affiliations'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${affiliationDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {affiliationDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 border border-gray-600 rounded shadow-lg z-10 max-h-48 overflow-y-auto">
                {filterOptions.affiliations.map(affiliation => (
                  <label
                    key={affiliation}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-600 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.affiliation.includes(affiliation)}
                      onChange={() => toggleDropdownFilter('affiliation', affiliation)}
                      className="rounded"
                    />
                    <span className="text-white text-sm">{affiliation}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Projects Grid - 2 per row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-400">
                  {getIcon(project.type)}
                </span>
                <span className="text-sm font-medium text-blue-400">{project.type}</span>
              </div>
              {project.featured && (
                <span className="px-2 py-1 bg-yellow-500 text-black text-xs rounded-full font-medium">
                  Featured
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-blue-400 mb-2">{project.from} - {project.to}</p>
            <p className="text-sm text-gray-400 mb-3">{project.affiliation}</p>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
            
            {/* Skills */}
            {/* Skills */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {project.skillset.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>


            {/* Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
              >
                {project.link.includes('github') ? (
                  <Github className="w-4 h-4" />
                ) : project.link.includes('linkedin') ? (
                  <Linkedin className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                View Project
              </a>
            )}
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No projects found matching the selected filters.</p>
          <Button
            variant="outline"
            size="sm"
            onClick={clearAllFilters}
            className="mt-4 text-white border-white hover:bg-white/10"
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Results Count */}
      <div className="mt-8 text-center">
        <p className="text-gray-400">
          Showing {filteredProjects.length} of {PROJECTS.length} projects
        </p>
      </div>
    </Section>
  );
};

export default ProjectsSection;