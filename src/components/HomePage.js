import React from 'react';

const HomePage = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black text-white' : 'bg-gradient-to-b from-white to-gray-200 text-black'}`}>
      {/* Header */}
      <header className={`p-6 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
        <h1 className="text-4xl font-bold">Welcome to InsightInk</h1>
        <p className="mt-2">A place to share your thoughts and insights</p>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Featured Blogs Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Blogs</h2>
          {/* Placeholder for featured blogs */}
          <div className={`p-4 rounded shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>No featured blogs yet. Stay tuned!</p>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
          {/* Placeholder for recent posts */}
          <div className={`p-4 rounded shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>No recent posts yet. Start creating!</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
