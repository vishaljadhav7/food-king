import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r bg-slate-300 p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact Me</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-lg text-gray-700 mb-4">Connect with me on:</p>
        <ul className="space-y-4">
          <li>
            <a href="https://www.linkedin.com/in/vishal-jadhav-5a251428b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition">
                My LinkedIn Profie
              </button>
            </a>
          </li>
          <li>
            <a href="https://github.com/vishaljadhav7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <button className="px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition">
                My GitHub Profie
              </button>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <button className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-800 transition">
                My Portfolio
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
