'use client';

import React, { useState } from 'react';
import { FormCanvas } from '@/components/FormCanvas';
import { FORM_DEFS } from '@/types/form';

export default function Home() {
  const [selectedFormId, setSelectedFormId] = useState(FORM_DEFS[0].id);

  const currentForm = FORM_DEFS.find(f => f.id === selectedFormId) || FORM_DEFS[0];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="bg-white border-b px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Selection Sheets App</h1>
          <p className="text-sm text-gray-500">Fill out and sign selection sheets.</p>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-gray-700">Select Form:</label>
          <select
            value={selectedFormId}
            onChange={(e) => setSelectedFormId(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {FORM_DEFS.map(f => (
              <option key={f.id} value={f.id}>{f.name}</option>
            ))}
          </select>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center">
        <FormCanvas formDef={currentForm} />
      </div>
    </main>
  );
}
