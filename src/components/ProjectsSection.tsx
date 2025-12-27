import { useState, useMemo } from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { Project, ProjectFilters } from '../types';
import { Radio, GitBranch, Code, Database, ExternalLink, Github, Linkedin, Filter, X, ChevronDown } from 'lucide-react';
import Button from './Button';

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
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {project.skillset.slice(0, 4).map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                  >
                    {skill}
                  </span>
                ))}
                {project.skillset.length > 4 && (
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                    +{project.skillset.length - 4} more
                  </span>
                )}
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