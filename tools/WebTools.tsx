import React, { useState } from 'react';

// Common Styles
const containerClass = "bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-100 dark:border-slate-700 transition-colors duration-300 space-y-4";
const titleClass = "text-xl font-bold text-gray-800 dark:text-white";
const inputClass = "w-full border border-gray-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-2 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors";

// 16. Password Generator
export const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');
  
  const generate = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let ret = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        ret += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(ret);
  };

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>Secure Password Generator</h2>
      <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
        <label>Length: {length}</label>
        <input type="range" min="6" max="32" value={length} onChange={e => setLength(Number(e.target.value))} />
      </div>
      <button onClick={generate} className="w-full bg-brand-600 hover:bg-brand-700 text-white py-2 rounded transition-colors">Generate</button>
      {password && (
        <div className="bg-gray-100 dark:bg-slate-900 p-4 rounded text-center font-mono text-lg tracking-wider break-all cursor-pointer text-slate-800 dark:text-slate-200 border border-gray-200 dark:border-slate-700" onClick={() => navigator.clipboard.writeText(password)}>
          {password}
          <div className="text-xs text-gray-400 mt-2">(Click to copy)</div>
        </div>
      )}
    </div>
  );
};

// 17. QR Code
export const QrGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>QR Code Generator</h2>
      <input type="text" placeholder="Enter URL or Text" value={text} onChange={e => setText(e.target.value)} className={inputClass} />
      {text && (
        <div className="flex justify-center p-4 bg-white rounded border border-gray-200">
          <img src={url} alt="QR Code" className="max-w-[200px]" />
        </div>
      )}
    </div>
  );
};

// 18. Meta Tag Generator
export const MetaTagGen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  
  const code = `
<meta name="title" content="${title}">
<meta name="description" content="${desc}">
`.trim();

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>Meta Tag Generator</h2>
      <input type="text" placeholder="Page Title" value={title} onChange={e => setTitle(e.target.value)} className={inputClass} />
      <textarea placeholder="Page Description" value={desc} onChange={e => setDesc(e.target.value)} className={inputClass} />
      <div className="bg-slate-800 text-blue-300 p-4 rounded font-mono text-xs overflow-x-auto">
        <pre>{code}</pre>
      </div>
    </div>
  );
};

// 19. Color Converter
export const ColorConverter: React.FC = () => {
  const [hex, setHex] = useState('#6366f1');
  
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
  };

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>Color Converter</h2>
      <div className="flex gap-4">
        <input type="color" value={hex} onChange={e => setHex(e.target.value)} className="h-12 w-12 rounded cursor-pointer bg-transparent border-0" />
        <input type="text" value={hex} onChange={e => setHex(e.target.value)} className={`${inputClass} uppercase`} />
      </div>
      <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded text-gray-800 dark:text-gray-200">
        RGB: <span className="font-mono font-bold">{hexToRgb(hex) || 'Invalid Hex'}</span>
      </div>
    </div>
  );
};

// 20. Robots.txt Generator
export const RobotsGen: React.FC = () => {
  const [allow, setAllow] = useState(true);
  const code = `User-agent: *\n${allow ? 'Allow: /' : 'Disallow: /'}`;
  
  return (
    <div className={containerClass}>
      <h2 className={titleClass}>Robots.txt Generator</h2>
      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
        <input type="checkbox" checked={allow} onChange={e => setAllow(e.target.checked)} id="allow" />
        <label htmlFor="allow">Allow All Robots</label>
      </div>
       <div className="bg-slate-800 text-gray-300 p-4 rounded font-mono text-sm whitespace-pre">
        {code}
      </div>
    </div>
  );
};