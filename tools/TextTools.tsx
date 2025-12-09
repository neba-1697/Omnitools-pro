import React, { useState, useEffect } from 'react';
import { summarizeText } from '../services/geminiService';

// --- Shared Components ---
// Updated ToolWrapper for Dark Mode compatibility
const ToolWrapper = ({ children, title }: { children?: React.ReactNode; title: string }) => (
  <div className="space-y-4">
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors duration-300">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{title}</h2>
      {children}
    </div>
  </div>
);

// Common input styles for consistency
const inputClasses = "w-full p-4 border border-gray-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none bg-white dark:bg-slate-900 text-slate-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors";
const labelClasses = "block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300";

// 1. Text Summarizer (AI)
export const TextSummarizer: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    const result = await summarizeText(input);
    setOutput(result);
    setLoading(false);
  };

  return (
    <ToolWrapper title="AI Text Summarizer">
      <textarea
        className={`${inputClasses} h-40`}
        placeholder="Paste your long text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSummarize}
        disabled={loading || !input}
        className="w-full bg-gradient-to-r from-brand-600 to-indigo-500 hover:from-brand-700 hover:to-indigo-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50"
      >
        {loading ? <><i className="fas fa-spinner fa-spin mr-2"></i> Thinking...</> : 'Summarize Text'}
      </button>
      {output && (
        <div className="mt-6 bg-brand-50 dark:bg-slate-900 p-6 rounded-lg border border-brand-100 dark:border-brand-900/30">
          <h3 className="font-semibold text-brand-900 dark:text-brand-300 mb-2">Summary:</h3>
          <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{output}</div>
        </div>
      )}
    </ToolWrapper>
  );
};

// 2. Word Counter
export const WordCounter: React.FC = () => {
  const [text, setText] = useState('');
  const stats = {
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    chars: text.length,
    sentences: text.split(/[.!?]+/).filter(Boolean).length,
    paragraphs: text.split(/\n\n+/).filter(Boolean).length
  };

  return (
    <ToolWrapper title="Word & Character Counter">
      <textarea
        className={`${inputClasses} h-48 resize-y`}
        placeholder="Start typing or paste text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg text-center border dark:border-slate-600">
            <div className="text-2xl font-bold text-brand-600 dark:text-brand-400">{value}</div>
            <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-300">{key}</div>
          </div>
        ))}
      </div>
    </ToolWrapper>
  );
};

// 3. Lorem Ipsum Gen
export const LoremIpsumGen: React.FC = () => {
  const [paragraphs, setParagraphs] = useState(3);
  const [text, setText] = useState('');

  const generate = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    setText(Array(paragraphs).fill(lorem).join('\n\n'));
  };

  return (
    <ToolWrapper title="Lorem Ipsum Generator">
      <div className="flex items-center gap-4 mb-4">
        <label className={labelClasses}>Paragraphs:</label>
        <input 
          type="number" 
          min="1" 
          max="20" 
          value={paragraphs} 
          onChange={(e) => setParagraphs(parseInt(e.target.value))}
          className="border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-2 rounded w-20 text-center"
        />
        <button onClick={generate} className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded transition-colors">Generate</button>
      </div>
      {text && <textarea readOnly value={text} className={`${inputClasses} h-64 bg-gray-50 dark:bg-slate-900`} />}
    </ToolWrapper>
  );
};

// 4. Case Converter
export const CaseConverter: React.FC = () => {
  const [text, setText] = useState('');
  
  const transform = (type: 'upper' | 'lower' | 'title') => {
    switch(type) {
      case 'upper': setText(text.toUpperCase()); break;
      case 'lower': setText(text.toLowerCase()); break;
      case 'title': setText(text.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')); break;
    }
  };

  const btnClass = "bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors";

  return (
    <ToolWrapper title="Case Converter">
      <textarea value={text} onChange={e => setText(e.target.value)} className={`${inputClasses} h-40 mb-4`} placeholder="Type text..." />
      <div className="flex gap-2 flex-wrap">
        <button onClick={() => transform('upper')} className={btnClass}>UPPERCASE</button>
        <button onClick={() => transform('lower')} className={btnClass}>lowercase</button>
        <button onClick={() => transform('title')} className={btnClass}>Title Case</button>
        <button onClick={() => setText('')} className="bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 border border-red-200 dark:border-red-900 px-4 py-2 rounded ml-auto hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors">Clear</button>
      </div>
    </ToolWrapper>
  );
};

// 5. Reading Time Calc
export const ReadingTime: React.FC = () => {
  const [text, setText] = useState('');
  const wpm = 200;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const minutes = Math.ceil(words / wpm);

  return (
    <ToolWrapper title="Reading Time Calculator">
       <textarea value={text} onChange={e => setText(e.target.value)} className={`${inputClasses} h-40 mb-4`} placeholder="Paste article text..." />
       <div className="text-lg dark:text-gray-300">Estimated Reading Time: <span className="font-bold text-brand-600 dark:text-brand-400">{minutes} min</span> ({words} words)</div>
    </ToolWrapper>
  );
};