import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SearchBar = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="max-w-xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex items-center bg-white rounded-full shadow-lg p-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., 'a spicy vegetarian pasta'"
          className="w-full bg-transparent p-3 text-gray-700 focus:outline-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:bg-indigo-300 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Generate'}
        </button>
      </div>
    </motion.form>
  );
};

export default SearchBar;