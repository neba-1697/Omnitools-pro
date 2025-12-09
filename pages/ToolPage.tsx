import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tools } from '../data/tools';
import { AdUnit } from '../components/AdUnit';

export const ToolPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tool = tools.find(t => t.path === `/tool/${id}`);

  useEffect(() => {
    if (tool) {
      document.title = `${tool.name} - Free Online Tool | OmniTools Pro`;
      window.scrollTo(0, 0);
    }
  }, [tool]);

  if (!tool) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold dark:text-white">Tool not found</h2>
        <Link to="/" className="text-brand-600 dark:text-brand-400 underline mt-4 block">Back Home</Link>
      </div>
    );
  }

  const RelatedTools = tools
    .filter(t => t.category === tool.category && t.id !== tool.id)
    .slice(0, 5);

  const ToolComponent = tool.component;

  return (
    <div className="lg:flex lg:gap-8">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="mb-6">
          <nav className="text-sm text-gray-500 dark:text-gray-400 mb-2">
             <Link to="/" className="hover:text-brand-600 dark:hover:text-brand-400">Home</Link> &gt; <Link to="/tools" className="hover:text-brand-600 dark:hover:text-brand-400">Tools</Link> &gt; <span>{tool.category}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
             <i className={`fas ${tool.icon} text-brand-600 dark:text-brand-500`}></i>
             {tool.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">{tool.content.intro}</p>
        </div>

        {/* The Interactive Tool */}
        <div className="mb-10 shadow-lg dark:shadow-none rounded-xl overflow-hidden transition-all duration-300">
          <ToolComponent />
        </div>

        {/* AdSlot Under Tool - High CTR */}
        <AdUnit slotId="tool-middle-slot" className="mb-10" label="Advertisement" />

        {/* Rich SEO Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-slate-800 p-8 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">How to Use the {tool.name}</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              {tool.content.howTo.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Features & Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              {tool.content.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {tool.content.faqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-80 mt-12 lg:mt-0 flex-shrink-0">
         <div className="sticky top-24 space-y-8">
            <AdUnit slotId="sidebar-slot" format="rectangle" label="Sponsored" />
            
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 transition-colors duration-300">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b dark:border-slate-700 uppercase text-xs tracking-wider">Related Tools</h3>
                <ul className="space-y-4">
                  {RelatedTools.map(t => (
                    <li key={t.id}>
                      <Link to={t.path} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 group transition-colors">
                        <span className="w-8 h-8 rounded bg-brand-50 dark:bg-slate-700 text-brand-500 dark:text-brand-400 flex items-center justify-center mr-3 group-hover:bg-brand-600 group-hover:text-white transition-all">
                          <i className={`fas ${t.icon} text-xs`}></i>
                        </span>
                        <span className="text-sm font-medium">{t.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>

            <div className="bg-gradient-to-br from-brand-600 to-indigo-800 rounded-xl p-6 text-white text-center shadow-lg">
               <h3 className="font-bold text-lg mb-2">Need Help?</h3>
               <p className="text-sm text-brand-100 mb-4">Check our guides or contact support for assistance with any tool.</p>
               <Link to="/contact" className="inline-block bg-white text-brand-700 font-bold py-2 px-4 rounded-lg text-sm hover:bg-brand-50 transition-colors">Contact Us</Link>
            </div>
         </div>
      </div>
    </div>
  );
};