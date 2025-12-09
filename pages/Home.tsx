import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { tools } from '../data/tools';
import { AdUnit } from '../components/AdUnit';

export const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  
  const filteredTools = tools.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) || 
    t.description.toLowerCase().includes(search.toLowerCase()) ||
    t.keywords.some(k => k.toLowerCase().includes(search.toLowerCase()))
  );

  const categories = Array.from(new Set(tools.map(t => t.category)));

  // Define Popular Tools for the Featured Section
  const popularToolIds = ['ai-summarizer', 'password-gen', 'qr-generator', 'bmi-calculator', 'word-counter', 'json-formatter'];
  const popularTools = tools.filter(t => popularToolIds.includes(t.id));

  return (
    <div className="space-y-16">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 pt-16 pb-12 lg:pt-24 lg:pb-20 rounded-b-3xl shadow-sm border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e0f2fe_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            100% Free & Secure
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Your Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-500 dark:from-brand-400 dark:to-indigo-300">Swiss Army Knife</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
            Boost your productivity with our suite of professional web utilities. 
            From AI text analysis to secure code generation—everything runs instantly in your browser.
          </p>
          
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-indigo-400 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-200 blur"></div>
            <div className="relative flex items-center bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 p-2">
              <i className="fas fa-search text-gray-400 dark:text-gray-500 text-xl ml-4"></i>
              <input
                type="text"
                className="block w-full px-4 py-3 text-lg bg-transparent border-none focus:ring-0 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white"
                placeholder="Search tools (e.g. 'PDF', 'Color', 'BMI')..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="bg-slate-900 dark:bg-brand-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-brand-700 transition-colors hidden sm:block">
                Find Tool
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> No Login Required</span>
            <span className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> Mobile Friendly</span>
            <span className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> Client-Side Privacy</span>
          </div>
        </div>
      </section>

      {/* --- AD UNIT TOP --- */}
      <div className="max-w-7xl mx-auto px-4">
         <AdUnit slotId="home-top" label="Sponsored" />
      </div>

      {/* --- POPULAR TOOLS SECTION --- */}
      {!search && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <i className="fas fa-fire text-orange-500 mr-3"></i> Most Popular Tools
            </h2>
            <Link to="/tools" className="text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 font-medium text-sm">View All Features &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool) => (
              <Link to={tool.path} key={tool.id} className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md hover:border-brand-200 dark:hover:border-brand-700 transition-all duration-300">
                 <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-brand-50 dark:bg-slate-700 text-brand-600 dark:text-brand-400 flex items-center justify-center text-xl mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                       <i className={`fas ${tool.icon}`}></i>
                    </div>
                    <span className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full">Free</span>
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400">{tool.name}</h3>
                 <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">{tool.description}</p>
                 <div className="flex items-center text-brand-600 dark:text-brand-400 font-semibold text-sm group-hover:underline">
                    Try Now <i className="fas fa-arrow-right ml-2 text-xs"></i>
                 </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* --- MAIN TOOLS DIRECTORY --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((cat, idx) => {
          const catTools = filteredTools.filter(t => t.category === cat);
          if (catTools.length === 0) return null;

          return (
            <div key={cat} className="mb-16">
              <div className="flex items-center mb-6 border-b border-gray-200 dark:border-slate-800 pb-4">
                 <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">{cat}</h2>
                 <span className="ml-3 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded-full font-medium">{catTools.length} Tools</span>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {catTools.map((tool) => (
                  <Link to={tool.path} key={tool.id} className="group flex flex-col bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:shadow-lg hover:border-brand-100 dark:hover:border-brand-900 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded bg-gray-50 dark:bg-slate-700 text-gray-500 dark:text-gray-400 flex items-center justify-center group-hover:bg-brand-50 dark:group-hover:bg-brand-900/50 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        <i className={`fas ${tool.icon} text-sm`}></i>
                      </div>
                      <h3 className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3 flex-grow">
                      {tool.description}
                    </p>
                  </Link>
                ))}
              </div>
              
              {/* Strategic Ad Placement between Categories */}
              {idx === 1 && <AdUnit slotId="home-middle" format="rectangle" className="mt-12" />}
            </div>
          );
        })}

        {filteredTools.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-gray-300 dark:border-slate-700">
            <div className="w-16 h-16 bg-gray-100 dark:bg-slate-700 text-gray-400 dark:text-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-search text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">No tools found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search terms or browse the categories above.</p>
          </div>
        )}
      </section>

      {/* --- WHY CHOOSE US (TRUST SIGNALS) --- */}
      <section className="bg-slate-900 dark:bg-slate-950 py-16 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <div className="p-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                     <i className="fas fa-bolt text-2xl text-yellow-400"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                  <p className="text-gray-400 leading-relaxed">Optimized for speed. Our tools load instantly and perform calculations in milliseconds.</p>
               </div>
               <div className="p-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                     <i className="fas fa-shield-alt text-2xl text-green-400"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Privacy First</h3>
                  <p className="text-gray-400 leading-relaxed">Secure by design. Data is processed in your browser and never sent to our servers.</p>
               </div>
               <div className="p-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                     <i className="fas fa-infinity text-2xl text-indigo-400"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Always Free</h3>
                  <p className="text-gray-400 leading-relaxed">No hidden fees, no subscriptions, and no limits. Just helpful tools available 24/7.</p>
               </div>
            </div>
         </div>
      </section>

      {/* --- EXTENSIVE SEO CONTENT SECTION --- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none prose-slate bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 border-b dark:border-slate-700 pb-4">Empowering Your Workflow with Professional Web Utilities</h2>
          
          <p>
            Welcome to <strong>OmniTools Pro</strong>, the internet's premier destination for high-performance, completely free online utilities. In today's fast-paced digital ecosystem, efficiency is everything. Whether you are a full-stack developer needing to debug complex JSON structures, a digital marketer looking to generate trackable QR codes, or a student calculating health metrics, OmniTools provides a centralized suite of solutions designed to streamline your daily tasks.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-4">Why the World Trusts OmniTools</h3>
          <p>
            The internet is filled with single-purpose utility sites, but many are plagued by slow load times, excessive pop-up advertisements, and intrusive data collection practices. OmniTools was built to challenge this status quo. We believe that professional-grade tools should be accessible to everyone—frictionless, fast, and free.
          </p>
          <p>
            Our platform stands out because of our unwavering commitment to <strong>User Experience (UX)</strong> and <strong>Data Privacy</strong>. Unlike server-side tools that require you to upload your files or data to a remote cloud, the vast majority of OmniTools utilities function entirely <strong>client-side</strong>. This means that when you use our <Link to="/tool/password-gen">Password Generator</Link> or <Link to="/tool/ai-summarizer">AI Text Summarizer</Link>, the processing happens locally on your device. Your sensitive information never leaves your browser, ensuring maximum security and peace of mind.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-4">A Comprehensive Suite for Every User</h3>
          <p>
            Our library is meticulously organized to serve a wide array of professionals:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>For Developers:</strong> We offer essential debugging and formatting tools. Clean up messy code with our <Link to="/tool/json-formatter">JSON Formatter</Link>, encode data with Base64 tools, or generate secure SHA-256 hashes for data integrity checks.
            </li>
            <li>
              <strong>For Writers & SEOs:</strong> Content creation is made easier with our <Link to="/tool/word-counter">Word Counter</Link>, Case Converter, and Meta Tag Generators. Our advanced AI integration helps summarize long research papers in seconds.
            </li>
            <li>
              <strong>For Designers:</strong> Visualize color palettes with our RGB/Hex converters and generate placeholder content instantly with the Lorem Ipsum Generator.
            </li>
            <li>
              <strong>For Everyday Life:</strong> Manage your health with our BMI Calculator, plan savings with the Discount Calculator, or handle unit conversions for travel and cooking.
            </li>
          </ul>

          <p className="mt-8 text-slate-600 dark:text-slate-300 italic border-l-4 border-brand-500 pl-4 bg-gray-50 dark:bg-slate-900/50 py-2">
            "OmniTools Pro is more than just a website; it is a reliable digital companion committed to saving you time and effort. Bookmark us today and experience the power of instant, secure productivity."
          </p>
        </article>
      </section>

    </div>
  );
};