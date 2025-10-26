import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaUsers, FaClock, FaGraduationCap } from 'react-icons/fa';

const Teaching = () => {
  const stats = [
    { icon: <FaClock />, value: '1,800+', label: 'Hours Taught' },
    { icon: <FaUsers />, value: '100+', label: 'Students Mentored' },
    { icon: <FaGraduationCap />, value: '19+', label: 'Courses Taught' },
    { icon: <FaChalkboardTeacher />, value: '4+', label: 'Years Experience' },
  ];

  const teachingExperience = [
    {
      title: 'Graduate Student Instructor',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      date: 'Aug. 2024 – Present',
      description: [
        'Led R programming labs and discussion sections for 70+ students in upper-level statistics courses (Intro to Statistics & Concepts of Statistics), teaching statistical modeling and data analysis methods.',
      ],
    },
    {
      title: 'Mathematics and Statistics Instructor',
      institution: 'CalTeach Berkeley',
      location: 'Berkeley, CA',
      date: 'Oct. 2024 – Feb. 2025',
      description: [
        'Led online tutoring classes for 20+ community college students in math and statistics, delivering 5+ hours of weekly lessons and providing mentorship.',
      ],
    },
    {
      title: 'Mathematics Teaching Intern',
      institution: 'Cardinal Hume Catholic School',
      location: 'Gateshead, UK',
      date: 'Jun. 2022 – Aug. 2022',
      description: [
        'Collaborated with senior faculty to develop and implement engaging lesson plans incorporating interactive applications of mathematical concepts, resulting in a 30% increase in student participation.',
        'Organized and led after-school need based tutoring sessions, resulting in a 25% improvement in test scores across all grade levels.',
      ],
    },
    {
      title: 'Mathematics & Statistics Tutor',
      institution: 'Freelance',
      location: 'Remote',
      date: 'Jan. 2021 - Aug. 2024',
      description: [
        'Delivered 1,800+ hours of tutoring in university courses, including Regression and Forecasting (Waterloo, CA), Statistics for Economists (Waterloo, CA), Business Statistics (Mount Royal, CA), Probability (Warwick, UK), and Multivariable Calculus (Laurier, CA).',
      ],
    },
  ];

  const courses = [
    { name: 'STAT 135: Concepts of Statistics', institution: 'UC Berkeley' },
    { name: 'STAT 2: Introduction to Statistics', institution: 'UC Berkeley' },
    { name: 'Community College Curriculum', institution: 'CalTeach Berkeley' },
    { name: 'STAT 321: Regression and Forecasting', institution: 'University of Waterloo' },
    { name: 'ECON 221: Statistics for Economists', institution: 'University of Waterloo' },
    { name: 'STAT 221/231: Statistics', institution: 'University of Waterloo' },
    { name: 'MATH 104: Calculus for Arts & Social Science', institution: 'University of Waterloo' },
    { name: 'MGMT 2262: Business Statistics I', institution: 'Mount Royal University' },
    { name: 'STAT 2050: Statistics I', institution: 'University of Guelph' },
    { name: 'MOS 2242: Statistics', institution: 'Western University' },
    { name: 'MA 103: Introduction to Calculus', institution: 'Wilfrid Laurier University' },
    { name: 'MA 100: Introduction to Calculus', institution: 'Wilfrid Laurier University' },
    { name: 'ST1110: Probability A', institution: 'University of Warwick' },
    { name: 'A Level Mathematics & Economics', institution: 'Pearson Edexcel Board' },
    { name: 'Advanced Higher Statistics', institution: 'Edinburgh College Board' },
    { name: 'Advanced Higher Mathematics', institution: 'Edinburgh College Board' },
    { name: 'Grade 9-12 (A Levels) Mathematics', institution: 'Cardinal Hume Catholic School' },
    { name: 'Grade 11-12 Mathematics/Statistics', institution: 'Various Schools' },
    { name: 'Economics and Mathematics', institution: 'The City School, Pakistan' },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Teaching
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Dedicated to helping students explore mathematics and statistics through engaging, accessible, and innovative teaching methods.
          </p>

          {/* Teaching Philosophy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 dark:from-accent/20 dark:to-blue-500/20 rounded-lg p-8 border-l-4 border-accent">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Teaching Philosophy
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  In an era where AI and online resources make mathematical content increasingly accessible,
                  I believe the real value of in-person instruction lies in creating an environment that
                  combines high academic standards with genuine human connection and teacher-student relationships.
                  My teaching philosophy centers on making statistics both rigorous and relatable while ensuring
                  every student feels supported in their learning journey.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My primary goal is for students to understand not just statistical procedures, but the
                  underlying structure and purpose of what they are learning. Rather than having students
                  simply memorize formulas, I begin with hands-on experiments where they collect real data,
                  helping them grasp why we need statistical tools before introducing formal methods. I emphasize
                  think-aloud techniques and fostering dialogue rather than delivering lectures to facilitate
                  critical thinking and intuition.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I see myself as a role model, an inspiration, and a learning guide for my students who can
                  develop passion in the STEM field. Teaching is the only profession where I get real instant
                  reward by seeing the smiles on students' faces, their participation, their "aha" moments,
                  and appreciation for my way of deliverance.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center"
                >
                  <div className="text-3xl text-accent mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Teaching Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              Teaching Experience
            </h2>
            <div className="space-y-8">
              {teachingExperience.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
                >
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {experience.date}
                    </span>
                  </div>
                  <p className="text-accent font-medium mb-3">
                    {experience.institution} | {experience.location}
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    {experience.description.map((point, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300">
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Courses Taught */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              Courses Tutored
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-accent"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {course.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {course.institution}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gray-900 dark:bg-gray-800 text-white rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Interested in Tutoring or Teaching Opportunities?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to share my passion for mathematics and statistics with students at all levels.
              Whether you're looking for a tutor, instructor, or teaching assistant, feel free to reach out!
            </p>
            <a
              href="mailto:jasmine_khamuani@berkeley.edu"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Get in Touch
            </a>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default Teaching;
