import React, { useState } from 'react';

// Common Styles
const containerClass = "bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-100 dark:border-slate-700 transition-colors duration-300 space-y-6";
const inputClass = "w-full border border-gray-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-2 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors";
const titleClass = "text-xl font-bold text-gray-800 dark:text-white";
const labelClass = "block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300";

// 11. BMI Calculator
export const BmiCalculator: React.FC = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  
  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  let status = '';
  const b = parseFloat(bmi);
  if (b < 18.5) status = 'Underweight';
  else if (b < 25) status = 'Normal';
  else if (b < 30) status = 'Overweight';
  else status = 'Obese';

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>BMI Calculator</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Weight (kg)</label>
          <input type="number" value={weight} onChange={e => setWeight(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Height (cm)</label>
          <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} className={inputClass} />
        </div>
      </div>
      <div className="bg-brand-50 dark:bg-slate-700 p-4 rounded text-center transition-colors">
        <div className="text-4xl font-bold text-brand-600 dark:text-brand-400">{bmi}</div>
        <div className="text-brand-800 dark:text-brand-200 font-medium">{status}</div>
      </div>
    </div>
  );
};

// 12. Discount Calc
export const DiscountCalculator: React.FC = () => {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(20);
  const final = price - (price * (discount / 100));
  const saved = price - final;

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>Discount Calculator</h2>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className={labelClass}>Original Price</label>
          <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className={inputClass} />
        </div>
        <div className="flex-1">
          <label className={labelClass}>Discount (%)</label>
          <input type="number" value={discount} onChange={e => setDiscount(Number(e.target.value))} className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border border-green-100 dark:border-green-800/50">
          <p className="text-xs uppercase text-green-800 dark:text-green-400">Final Price</p>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">${final.toFixed(2)}</p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border border-red-100 dark:border-red-800/50">
          <p className="text-xs uppercase text-red-800 dark:text-red-400">You Save</p>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400">${saved.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

// 13. Temperature Converter
export const TempConverter: React.FC = () => {
  const [celsius, setCelsius] = useState<number | string>(0);
  const [fahrenheit, setFahrenheit] = useState<number | string>(32);

  const handleC = (val: string) => {
    setCelsius(val);
    if(val === '') { setFahrenheit(''); return; }
    setFahrenheit(((parseFloat(val) * 9/5) + 32).toFixed(2));
  }

  const handleF = (val: string) => {
    setFahrenheit(val);
    if(val === '') { setCelsius(''); return; }
    setCelsius(((parseFloat(val) - 32) * 5/9).toFixed(2));
  }

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>Temperature Converter</h2>
      <div className="flex gap-4 items-center">
        <div className="flex-1">
          <label className={labelClass}>Celsius (°C)</label>
          <input type="number" value={celsius} onChange={e => handleC(e.target.value)} className={`${inputClass} mt-1`}/>
        </div>
        <div className="text-gray-400 dark:text-gray-500">=</div>
        <div className="flex-1">
          <label className={labelClass}>Fahrenheit (°F)</label>
          <input type="number" value={fahrenheit} onChange={e => handleF(e.target.value)} className={`${inputClass} mt-1`}/>
        </div>
      </div>
    </div>
  );
};

// 14. Age Calculator
export const AgeCalculator: React.FC = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState<{y: number, m: number, d: number} | null>(null);

  const calculate = () => {
    const birth = new Date(birthdate);
    const now = new Date();
    let y = now.getFullYear() - birth.getFullYear();
    let m = now.getMonth() - birth.getMonth();
    let d = now.getDate() - birth.getDate();

    if (d < 0) {
      m--;
      d += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (m < 0) {
      y--;
      m += 12;
    }
    setAge({y, m, d});
  };

  return (
    <div className={containerClass}>
       <h2 className={titleClass}>Age Calculator</h2>
       <input type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} className={inputClass} />
       <button onClick={calculate} className="w-full bg-brand-600 hover:bg-brand-700 text-white py-2 rounded transition-colors">Calculate Age</button>
       {age && (
         <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border border-yellow-100 dark:border-yellow-900/50 text-center">
            <span className="text-2xl font-bold text-yellow-800 dark:text-yellow-400">{age.y}</span> <span className="text-gray-600 dark:text-gray-400">Years,</span> <span className="font-bold text-yellow-800 dark:text-yellow-400">{age.m}</span> <span className="text-gray-600 dark:text-gray-400">Months,</span> <span className="font-bold text-yellow-800 dark:text-yellow-400">{age.d}</span> <span className="text-gray-600 dark:text-gray-400">Days</span>
         </div>
       )}
    </div>
  );
};

// 15. Aspect Ratio Calc
export const AspectRatioCalc: React.FC = () => {
  const [w, setW] = useState(1920);
  const [h, setH] = useState(1080);
  
  const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
  const divisor = gcd(w, h);
  
  return (
    <div className={containerClass}>
       <h2 className={titleClass}>Aspect Ratio Calculator</h2>
       <div className="flex gap-4">
          <input type="number" value={w} onChange={e => setW(Number(e.target.value))} className={inputClass} />
          <span className="self-center text-gray-500">x</span>
          <input type="number" value={h} onChange={e => setH(Number(e.target.value))} className={inputClass} />
       </div>
       <div className="text-center p-4 bg-slate-100 dark:bg-slate-700 rounded transition-colors">
         <span className="text-gray-600 dark:text-gray-300">Ratio:</span> <span className="font-bold text-xl text-slate-800 dark:text-white">{w/divisor}:{h/divisor}</span>
       </div>
    </div>
  );
};