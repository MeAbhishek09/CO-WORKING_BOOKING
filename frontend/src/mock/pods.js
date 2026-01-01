export const pods = [
  {
    id: 'pod-1',
    name: 'Pod 1',
    slots: [
      { time: '09:00 - 10:00', status: 'available' },
      { time: '10:00 - 11:00', status: 'occupied' },
      { time: '11:00 - 12:00', status: 'available' },
      { time: '12:00 - 13:00', status: 'reserved' }
    ]
  },
  {
    id: 'pod-2',
    name: 'Pod 2',
    slots: [
      { time: '09:00 - 10:00', status: 'occupied' },
      { time: '10:00 - 11:00', status: 'available' },
      { time: '11:00 - 12:00', status: 'available' },
      { time: '12:00 - 13:00', status: 'available' }
    ]
  }
];
