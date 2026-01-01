export default function SeatCard({ seat, onClick }) {
  const styles = {
    available: {
      bg: 'bg-green-100',
      border: 'border-green-400',
      text: 'text-green-800',
      badge: 'bg-green-500'
    },
    reserved: {
      bg: 'bg-yellow-100',
      border: 'border-yellow-400',
      text: 'text-yellow-800',
      badge: 'bg-yellow-500'
    },
    occupied: {
      bg: 'bg-red-100',
      border: 'border-red-400',
      text: 'text-red-800',
      badge: 'bg-red-500'
    }
  };

  const s = styles[seat.status];

  return (
    <div
      onClick={() => onClick?.(seat)}
      className={`
        w-20 h-20 rounded-2xl border-2
        flex flex-col items-center justify-center
        ${s.bg} ${s.border}
        shadow-md transition-all duration-200
        hover:scale-105 cursor-pointer
      `}
    >
      {/* Seat label */}
      <span className={`text-sm font-bold ${s.text}`}>
        {seat.label}
      </span>

      {/* Status badge */}
      <span
        className={`
          mt-1 px-2 py-[2px] text-[10px] text-white rounded-full
          ${s.badge}
        `}
      >
        {seat.status}
      </span>
    </div>
  );
}
