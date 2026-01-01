export default function PodSlot({ slot, onClick }) {
  const styles = {
    available: 'bg-green-100 border-green-400 text-green-800',
    reserved: 'bg-yellow-100 border-yellow-400 text-yellow-800',
    occupied: 'bg-red-100 border-red-400 text-red-800'
  };

  return (
    <div
      onClick={() => slot.status === 'available' && onClick?.(slot)}
      className={`
        px-4 py-2 rounded-lg border text-sm font-medium text-center
        ${styles[slot.status]}
        ${slot.status === 'available'
          ? 'cursor-pointer hover:scale-105'
          : 'cursor-not-allowed opacity-70'}
        transition
      `}
    >
      {slot.time}
    </div>
  );
}
