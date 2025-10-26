import { motion } from 'framer-motion';

const About = () => {
  // const funFacts = [
  //   { label: 'Favorite Music', value: 'Indie Rock & Jazz' },
  //   { label: 'Hobbies', value: 'Hiking, Reading, Cooking' },
  //   { label: 'Based In', value: 'Berkeley, CA' },
  //   { label: 'Fun Fact', value: 'I can solve a Rubik\'s cube in under 2 minutes!' },
  // ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About Me
          </h1>

          {/* Professional Summary */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 dark:from-accent/20 dark:to-blue-500/20 rounded-lg p-8 border-l-4 border-accent">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am an ambitious professional with a deep passion for mathematics and statistics,
                currently pursuing MA Statistics at UC Berkeley. As a First-Class Honours graduate
                in Actuarial Science from Heriot-Watt University, I bring a robust blend of
                analytical skills and a strong academic foundation. My journey in actuarial science
                has been marked by notable achievements, including multiple academic awards and
                scholarships, reflecting my commitment to excellence.
              </p>
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              Education
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Master of Arts in Statistics
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Expected Dec. 2025</span>
                </div>
                <p className="text-accent font-medium mb-2">University of California, Berkeley</p>
                <p className="text-gray-600 dark:text-gray-400">CGPA: 3.8/4.0</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Bachelor of Science in Actuarial Science
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">May 2022</span>
                </div>
                <p className="text-accent font-medium mb-2">Heriot-Watt University, UK</p>
                <p className="text-gray-600 dark:text-gray-400">First Class Honours (CGPA: 3.8/4.0)</p>
                <p className="text-gray-600 dark:text-gray-400">Deputy Principal and Bronze Award</p>
              </div>
            </div>
          </motion.section>

          {/* Work Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              Work Experience
            </h2>
            <div className="space-y-6">
              {/* UC Berkeley GSI */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Graduate Student Instructor
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Aug. 2024 – Present</span>
                </div>
                <p className="text-accent font-medium mb-3">University of California, Berkeley | Berkeley, CA</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Led R programming labs and discussion sections for 70+ students in upper-level statistics courses (Intro to Statistics & Concepts of Statistics), teaching statistical modeling and data analysis methods.</li>
                </ul>
              </div>

              {/* Delta Dental */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Actuarial Analyst Intern
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Jun. 2025 – Sept. 2025</span>
                </div>
                <p className="text-accent font-medium mb-3">Delta Dental of California | Oakland, CA</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Migrated 60% of actuarial reports from SQL Server to Snowflake, designing ETL workflows that preserved business logic, optimized DAX parameter handling for large datasets and enabled drill-through navigation.</li>
                  <li>Built a Medicare benefit abuse detection framework by analyzing 2M+ claims records in SQL, identifying data patterns to flag plan-switching behavior and producing actionable risk summaries for fraud investigations.</li>
                  <li>Developed 15+ Power BI dashboards covering competitor networks and capitation rates, using complex DAX measures and interactive filters to support sales and network decisions.</li>
                </ul>
              </div>

              {/* Monarda Commodities */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Risk and Finance Intern
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Sept. 2022 – Jul. 2023</span>
                </div>
                <p className="text-accent font-medium mb-3">Monarda Commodities | Karachi, Pakistan</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Analyzed Excel databases during internal audits to identify data discrepancies, collaborating with senior management to implement corrective actions that strengthened risk management framework.</li>
                  <li>Conducted risk-based audits across business units to identify and quantify process redundancies, achieving a 15% reduction in operational inefficiencies and supporting innovative product design initiatives.</li>
                </ul>
              </div>

              {/* Aegon UK */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Finance Actuarial Intern
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Jul. 2021 – Sep. 2021</span>
                </div>
                <p className="text-accent font-medium mb-3">Aegon, UK | Edinburgh, UK</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Managed fund pricing, rebate handling, and mandate reconciliations, using VBA macros to automate pricing workflows and ensure accuracy in the fund database.</li>
                  <li>Conducted fund reviews for 30+ investment funds over a three-week period, analyzing asset allocation, underlying holdings, and performance trends against customer expectations.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Actuarial Exam Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              Actuarial Exam Certifications
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-accent/20">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Society of Actuaries — Completed Exams
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {['Exam P', 'Exam FM', 'Exam FAM', 'Exam STAM', 'Exam LTAM'].map((exam) => (
                  <div key={exam} className="bg-white rounded-md px-4 py-2 text-center font-medium text-accent border border-accent/30">
                    {exam}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Technical Skills & Expertise */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Python, R, SQL, Power BI, SPSS, Stata, Excel, VBA, Word, PowerPoint
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Public Speaking, Teamwork, Leadership, Stakeholder Management, Problem-solving
                </p>
              </div>
            </div>
          </motion.section>

          {/* More About Me */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              More About Me
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="border-b border-gray-200 last:border-b-0 md:last:border-b md:odd:last:border-b-0 pb-4 last:pb-0 md:last:pb-4 md:odd:last:pb-0"
                  >
                    <p className="text-sm font-medium text-accent mb-1">{fact.label}</p>
                    <p className="text-gray-700">{fact.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Career Goals */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gray-900 text-white rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Career Goals</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              My goal is to further enhance my expertise in statistics and mathematics,
              contributing to the field through research and education. I aim to utilize my
              knowledge and skills to provide insights and solutions in diverse sectors, particularly
              at the intersection of actuarial science, statistics, and data science.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
