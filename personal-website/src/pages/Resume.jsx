import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            Resume
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Download or preview my resume below
          </p>

          {/* Download Button */}
          <div className="flex justify-center mb-12">
            <a
              href="/resume.pdf"
              download="Jasmine_Khamuani_Resume.pdf"
              className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
            >
              <FaDownload />
              <span>Download Resume (PDF)</span>
            </a>
          </div>

          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 rounded-lg p-8 border border-gray-200"
          >
            <div className="flex items-center justify-center mb-6">
              <FaFileAlt className="text-4xl text-gray-400 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Resume Preview</h2>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-[8.5/11] bg-gray-100 flex items-center justify-center">
                {/* Replace with actual PDF embed */}
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full"
                  title="Resume Preview"
                  style={{ minHeight: '800px' }}
                >
                  <p className="text-gray-600">
                    Your browser does not support PDF viewing. Please download the resume to view it.
                  </p>
                </iframe>

                {/* Placeholder for when resume.pdf doesn't exist yet */}
                {/* Uncomment this and remove iframe when testing without a PDF:
                <div className="text-center p-8">
                  <FaFileAlt className="text-6xl text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Resume preview will appear here</p>
                  <p className="text-sm text-gray-500">
                    Place your resume.pdf file in the public folder
                  </p>
                </div>
                */}
              </div>
            </div>

            {/* Alternative: Google Docs Embed */}
            {/* If you prefer to use Google Docs viewer, replace the iframe above with:
            <iframe
              src="https://docs.google.com/viewer?url=YOUR_RESUME_URL&embedded=true"
              className="w-full"
              style={{ minHeight: '800px' }}
              title="Resume Preview"
            ></iframe>
            */}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center text-gray-600"
          >
            <p>
              For any inquiries or opportunities, feel free to{' '}
              <a
                href="mailto:your.email@berkeley.edu"
                className="text-accent hover:text-blue-600 font-medium transition-colors"
              >
                reach out via email
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
