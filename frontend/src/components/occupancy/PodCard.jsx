import PodSlot from './PodSlot';

export default function PodCard({ pod, onSlotClick }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 w-80">
      <h3 className="text-lg font-bold text-center">
        {pod.name}
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {pod.slots.map((slot, idx) => (
          <PodSlot
            key={idx}
            slot={slot}
            onClick={(s) => onSlotClick(pod, s)}
          />
        ))}
      </div>
    </div>
  );
}
