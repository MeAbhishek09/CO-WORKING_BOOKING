import SeatCard from './SeatCard';

export default function SeatGrid({ seats, onSeatClick  }) {
  const rows = ['A', 'B', 'C'];

  return (
    <div className="space-y-10">
      {rows.map(row => {
        const rowSeats = seats.filter(seat => seat.row === row);

        return (
          <div
            key={row}
            className="flex items-center justify-center gap-10"
          >
            {/* Row label */}
            <span className="w-6 text-gray-700 font-bold text-lg">
              {row}
            </span>

            {/* Left block */}
            <div className="flex gap-5">
              {rowSeats.slice(0, 5).map(seat => (
                <SeatCard key={seat.id} seat={seat} onClick={onSeatClick} />
              ))}
            </div>

            {/* Aisle gap */}
            <div className="w-12" />

            {/* Right block */}
            <div className="flex gap-5">
              {rowSeats.slice(5).map(seat => (
                <SeatCard key={seat.id} seat={seat} onClick={onSeatClick} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
