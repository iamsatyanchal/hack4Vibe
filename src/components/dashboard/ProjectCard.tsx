
import React from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  matchPercentage: number;
  domain: string;
  onGenerateVibe: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  techStack,
  difficulty,
  matchPercentage,
  domain,
  onGenerateVibe
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
        </div>
        <span className={`text-lg font-bold ${getMatchColor(matchPercentage)}`}>
          {matchPercentage}%
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Domain</span>
          <p className="text-sm text-gray-900 mt-1">{domain}</p>
        </div>

        <div>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Tech Stack</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
          <button
            onClick={onGenerateVibe}
            className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Generate Vibe Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
