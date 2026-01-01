import PodCard from './PodCard';
import { pods } from '@/mock/pods';

export default function PodsGrid({ onSlotClick }) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {pods.map(pod => (
        <PodCard
          key={pod.id}
          pod={pod}
          onSlotClick={onSlotClick}
        />
      ))}
    </div>
  );
}
