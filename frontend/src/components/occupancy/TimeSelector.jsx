import { HOURS, hourLabel } from '@/utils/timeSlots';

export default function TimeSelector({
  product,
  slot,
  setSlot,
  hours,
  setHours
}) {
  if (product === 'seat-slot') {
    return (
      <div className="flex justify-center gap-3">
        {['morning','evening','full-day'].map(s => (
          <button
            key={s}
            onClick={() => setSlot(s)}
            className={`px-4 py-2 rounded-full
              ${slot === s ? 'bg-green-600 text-white' : 'bg-green-100'}
            `}
          >
            {s}
          </button>
        ))}
      </div>
    );
  }

  if (product === 'seat-hourly') {
    function toggle(h) {
      setHours(prev =>
        prev.includes(h) ? prev.filter(x => x !== h) : [...prev, h]
      );
    }

    return (
      <div className="max-w-md mx-auto space-y-2">
        {HOURS.map(h => (
          <div
            key={h}
            onClick={() => toggle(h)}
            className={`p-2 border rounded-lg cursor-pointer
              ${hours.includes(h)
                ? 'bg-green-100 border-green-400'
                : 'bg-gray-50'}
            `}
          >
            {hourLabel(h)}
          </div>
        ))}
      </div>
    );
  }

  return null;
}
