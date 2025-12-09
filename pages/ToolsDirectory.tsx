import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { tools } from '../data/tools';
import { AdUnit } from '../components/AdUnit';

export const ToolsDirectory: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | 'All'>('All');

  useEffect(() => {
    document.title = "All Tools - OmniTools Pro";
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', ...Array.from(new Set(tools.map(t => t.category)))];

  const filteredTools = tools.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                          t.description.toLowerCase().includes(search.toLowerCase()) ||
                          t.keywords.some(k => k.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 pb-12">
      {/* Header Section */}
      <section className="text-center space-y-6 pt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Explore Our <span className="text-brand-600 dark:text-brand-500">Tools Directory</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Browse our complete collection of free online utilities. Filter by category or search to find exactly what you need.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-indigo-400 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-200 blur"></div>
          <div className="relative flex items-center bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 p-2">
            <i className="fas fa-search text-gray-400 dark:text-gray-500 text-xl ml-4"></i>
            <input
              type="text"
              className="block w-full px-4 py-3 text-lg bg-transparent border-none focus:ring-0 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Ad Unit */}
      <div className="max-w-7xl mx-auto px-4">
        <AdUnit slotId="directory-top" label="Sponsored" />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto px-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/30 transform scale-105'
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[400px]">
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool) => (
              <Link to={tool.path} key={tool.id} className="group flex flex-col bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-slate-700 text-brand-600 dark:text-brand-400 flex items-center justify-center text-xl group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    <i className={`fas ${tool.icon}`}></i>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-slate-900 px-2 py-1 rounded-md border border-gray-100 dark:border-slate-800">
                    {tool.category.split(' ')[0]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-grow line-clamp-2">
                  {tool.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-700 flex items-center text-brand-600 dark:text-brand-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Launch Tool <i className="fas fa-arrow-right ml-2 text-xs"></i>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-gray-300 dark:border-slate-700">
            <div className="w-20 h-20 bg-gray-50 dark:bg-slate-700 text-gray-300 dark:text-slate-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-search text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">No tools found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              We couldn't find any tools matching "{search}" in {selectedCategory}.
            </p>
            <button 
              onClick={() => {setSearch(''); setSelectedCategory('All');}}
              className="mt-6 text-brand-600 dark:text-brand-400 font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* SEO Footer Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-gray-200 dark:border-slate-800">
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <h2>Why Use Our Free Online Tools?</h2>
          <p>
            OmniTools Pro offers a curated selection of utilities designed to make your digital life easier. 
            Whether you need to manipulate text, calculate finances, or debug code, our platform provides 
            reliable, client-side solutions that respect your privacy.
          </p>
          <ul>
            <li><strong>Instant Access:</strong> No downloads or installations required.</li>
            <li><strong>Privacy Focused:</strong> Data processing happens in your browser.</li>
            <li><strong>Always Free:</strong> Professional features without the price tag.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};