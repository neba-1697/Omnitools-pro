import React, { useState } from 'react';

// Common Styles
const containerClass = "bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-100 dark:border-slate-700 transition-colors duration-300 space-y-4";
const inputClass = "w-full border border-gray-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors";
const labelClass = "text-xl font-bold text-gray-800 dark:text-white";
const codeBlockClass = "bg-slate-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 p-4 rounded break-all font-mono text-sm text-slate-800 dark:text-slate-300";

// 6. JSON Formatter
export const JsonFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (e) {
      setError('Invalid JSON');
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed));
      setError('');
    } catch (e) {
      setError('Invalid JSON');
    }
  };

  return (
    <div className={containerClass}>
      <div className="flex justify-between items-center mb-4">
        <h2 className={labelClass}>JSON Formatter</h2>
        <div className="space-x-2">
          <button onClick={format} className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">Beautify</button>
          <button onClick={minify} className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">Minify</button>
        </div>
      </div>
      <textarea 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        className={`w-full h-96 font-mono text-sm p-4 border rounded bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 ${error ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'}`}
        placeholder='{"key": "value"}'
      />
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </div>
  );
};

// 7. Base64 Encode
export const Base64Encode: React.FC = () => {
  const [input, setInput] = useState('');
  const output = typeof window !== 'undefined' ? btoa(input) : '';
  return (
    <div className={containerClass}>
      <h2 className={labelClass}>String to Base64</h2>
      <textarea value={input} onChange={e => setInput(e.target.value)} className={`${inputClass} h-32`} placeholder="Text to encode..." />
      <div className={codeBlockClass}>{output}</div>
    </div>
  );
};

// 8. Base64 Decode
export const Base64Decode: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  
  const handleDecode = (val: string) => {
    setInput(val);
    try {
      setOutput(atob(val));
    } catch (e) {
      setOutput('Invalid Base64 string');
    }
  };

  return (
    <div className={containerClass}>
      <h2 className={labelClass}>Base64 to String</h2>
      <textarea value={input} onChange={e => handleDecode(e.target.value)} className={`${inputClass} h-32`} placeholder="Base64 to decode..." />
      <div className={codeBlockClass}>{output}</div>
    </div>
  );
};

// 9. URL Encoder
export const UrlEncoder: React.FC = () => {
  const [input, setInput] = useState('');
  return (
    <div className={containerClass}>
      <h2 className={labelClass}>URL Encoder</h2>
      <textarea value={input} onChange={e => setInput(e.target.value)} className={`${inputClass} h-32`} placeholder="URL to encode..." />
      <div className="grid grid-cols-2 gap-4">
        <div>
           <p className="text-xs font-bold mb-1 text-gray-500 dark:text-gray-400">Encoded:</p>
           <textarea readOnly className={`${inputClass} h-32 bg-slate-50 dark:bg-slate-900 font-mono text-sm`} value={encodeURIComponent(input)} />
        </div>
        <div>
           <p className="text-xs font-bold mb-1 text-gray-500 dark:text-gray-400">Decoded:</p>
           <textarea readOnly className={`${inputClass} h-32 bg-slate-50 dark:bg-slate-900 font-mono text-sm`} value={decodeURIComponent(input)} />
        </div>
      </div>
    </div>
  );
};

// 10. MD5/Hash Gen
export const HashGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const [hash, setHash] = useState('');

  const generateSha256 = async (str: string) => {
    const msgBuffer = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    setHash(hashHex);
  };

  return (
    <div className={containerClass}>
      <h2 className={labelClass}>SHA-256 Generator</h2>
      <input type="text" value={text} onChange={e => { setText(e.target.value); generateSha256(e.target.value); }} className={inputClass} placeholder="Enter text..." />
      <div className="bg-slate-800 text-green-400 font-mono p-4 rounded break-all text-sm shadow-inner">
        {hash || 'Hash will appear here...'}
      </div>
    </div>
  );
};