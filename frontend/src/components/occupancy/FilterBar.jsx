'use client';

export default function FilterBar({ date, setDate, mode, setMode }) {
  const modes = [
    { key: 'morning', label: 'Morning' },
    { key: 'evening', label: 'Evening' },
    { key: 'full-day', label: 'Full Day' },
    { key: 'hourly', label: 'Hourly (Pods)' }
  ];

  return (
    <div className="space-y-3">

      {/* Date */}
      <div className="flex justify-center">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-4 py-2 rounded-lg border shadow-sm"
        />
      </div>

      {/* Mode selector */}
      <div className="flex flex-wrap justify-center gap-3">
        {modes.map(m => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            className={`
              px-4 py-2 rounded-full text-sm font-semibold
              ${
                mode === m.key
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
              }
            `}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}
