import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Satellite Image Classification & Predictive Modeling',
      date: 'March 2025',
      description:
        'Analyzed 207K labeled pixels from NASA satellite imagery across 5 camera angles using correlation analysis and statistical testing to identify key patterns, then engineered spatial aggregation features from surrounding pixel neighborhoods and trained ensemble models (LightGBM, Random Forest, KNN), achieving 98.7% accuracy in correctly identifying clouds from white surfaces across 82K test pixels.',
      link: '#',
      tags: ['Python', 'Machine Learning', 'LightGBM', 'Random Forest', 'Statistical Testing'],
    },
    {
      title: 'Adaptive Rejection Sampling',
      date: 'November 2024',
      description:
        'Developed Python package for adaptive rejection sampling using JAX automatic differentiation, implementing vectorized sampling from log-concave distributions with numerical validation.',
      link: '#',
      tags: ['Python', 'JAX', 'Statistical Computing', 'Numerical Methods'],
    },
    {
      title: 'Pension Scheme Design & Actuarial Analysis',
      date: 'May 2022',
      description:
        'Developed comprehensive analysis of DC and CDC pension plan designs for a 6,000-employee manufacturer, modeling cost implications to reduce employer contributions from 23% to 18% while maintaining benefits. Recommended CDC scheme as it provides fixed contributions for employers, reliable income for members, and allows collective risk-bearing. Analyzed investment strategies, mortality assumptions, and benefit structures to ensure cost certainty and better member outcomes than individual DC schemes.',
      link: '#',
      tags: ['Actuarial Science', 'Pension Analysis', 'Risk Management', 'Financial Modeling'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here are the actuarial and machine learning projects I have worked on
          </p>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-blue-600 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  )}
                </div>

                {/* Date */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.date}</p>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
