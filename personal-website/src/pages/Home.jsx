import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/jasmine-khamuani',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:jasmine_khamuani@berkeley.edu',
      color: 'hover:text-accent',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-accent to-blue-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="/public.png" alt="Jasmine Khamuani" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Jasmine Khamuani
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6"
          >
            MA Statistics Student at UC Berkeley
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            First-Class Honours in Actuarial Science | Graduate Student in Statistics at UC Berkeley
            | Seeking opportunities in Statistics, Data Science, and Actuarial Science
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-4xl text-gray-700 dark:text-gray-300 transition-colors ${link.color}`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
