'use client';

import { useState } from 'react';
import plural from 'plural-ru';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-24 text-slate-800">
      <div className="text-center flex flex-col items-center">
        
        <button
          onClick={() => setCount(count + 1)}
          className="w-[300px] h-[64px] rounded-xl bg-stone-700 text-white shadow-lg transition-all hover:bg-stone-800 active:scale-95 flex items-center justify-center font-semibold text-lg"
        >
          Меня нажали {count} {plural(count, 'раз', 'раза', 'раз')}
        </button>

        {/* Контейнер-заглушка, чтобы Сбросить не двигало контент */}
        <div className="h-12 mt-4 flex items-center justify-center">
          {count > 0 && (
            <button 
              onClick={() => setCount(0)}
              className="text-sm text-slate-400 hover:text-slate-600 underline"
            >
              Сбросить
            </button>
          )}
        </div>
      </div>
    </main>
  );
}