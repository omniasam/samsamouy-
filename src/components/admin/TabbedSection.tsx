'use client';
import { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

export default function TabbedSection({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex gap-4 border-b mb-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`pb-2 border-b-2 ${
              active === idx ? 'border-mainColor text-mainColor' : 'border-transparent'
            }`}
            onClick={() => setActive(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
}
