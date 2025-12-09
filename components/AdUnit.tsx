import React from 'react';
import { AdProps } from '../types';

export const AdUnit: React.FC<AdProps> = ({ slotId, format = 'auto', className = '', label = 'Advertisement' }) => {
  return (
    <div className={`w-full my-8 flex flex-col items-center justify-center ${className} print:hidden`}>
      <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">{label}</span>
      <div className="ad-section w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg min-h-[120px] md:min-h-[250px] flex items-center justify-center overflow-hidden relative transition-colors duration-300">
        {/* Placeholder for Development/Preview */}
        <div className="text-center p-4">
           <div className="text-gray-300 dark:text-slate-600 text-4xl mb-2"><i className="fas fa-ad"></i></div>
           <p className="text-gray-400 dark:text-slate-500 text-xs font-mono">Google AdSense Space</p>
           <p className="text-gray-300 dark:text-slate-600 text-[10px] font-mono mt-1">Slot ID: {slotId}</p>
        </div>
        
        {/* 
           --- PRODUCTION ADSENSE CODE ---
           Uncomment the block below and replace ca-pub-XXXXXXXXXXXXXXXX with your actual publisher ID.
        */}
        {/* 
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '100%' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot={slotId}
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script> 
        */}
      </div>
    </div>
  );
};