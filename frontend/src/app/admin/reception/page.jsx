'use client';

import SeatGrid from '@/components/occupancy/SeatGrid';
import { seats } from '@/mock/occupancy';
import { useState } from 'react';
import SeatActionModal from '@/components/occupancy/SeatActionModal';
import FilterBar from '@/components/occupancy/FilterBar';
import PodsGrid from '@/components/occupancy/PodsGrid';

export default function AdminDashboard() {

const [selectedSeat, setSelectedSeat] = useState(null);
const [date, setDate] = useState(
  new Date().toISOString().split('T')[0]
);
const [slot, setSlot] = useState('morning');
const [mode, setMode] = useState('morning'); // morning | evening | full-day | hourly


const filteredSeats = seats.map(seat => {
  // Hourly mode → seats are blocked
  if (mode === 'hourly') {
    return { ...seat, status: 'occupied' };
  }

  // Slot-based filtering
  if (mode !== 'full-day' && !seat.slots.includes(mode)) {
    return { ...seat, status: 'occupied' };
  }

  return seat;
});




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-6">
      
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full  space-y-10">
        
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Seat Occupancy
        </h1>

        {/* Legend */}
        <div className="flex justify-center gap-10 text-sm">
          <Legend color="bg-green-500" label="Available" />
          <Legend color="bg-yellow-500" label="Reserved" />
          <Legend color="bg-red-500" label="Occupied" />
        </div>

        {/* ✅ FILTER BAR GOES HERE */}
        <FilterBar
            date={date}
            setDate={setDate}
            mode={mode}
            setMode={setMode}
        />

        <p className="text-center text-sm text-gray-600">
            Showing availability for{' '}
            <span className="font-semibold">{date}</span> ·{' '}
            <span className="font-semibold capitalize">
                {mode === 'hourly' ? 'Hourly Pods' : mode.replace('-', ' ')}
            </span>
        </p>



        {/* Seat Layout */}
        {mode === 'hourly' ? (
        <PodsGrid
            onSlotClick={(pod, slot) =>
            console.log('Pod:', pod.name, 'Slot:', slot.time)
            }
        />
        ) : (
        <SeatGrid
            seats={filteredSeats}
            onSeatClick={(seat) => setSelectedSeat(seat)}
        />
        )}

                

        {/* 👇 MODAL (shows when seat clicked) */}
        <SeatActionModal
          seat={selectedSeat}
          onClose={() => setSelectedSeat(null)}
        />

      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-4 h-4 rounded-full ${color}`} />
      <span className="text-gray-700 font-medium">{label}</span>
    </div>
  );
}
