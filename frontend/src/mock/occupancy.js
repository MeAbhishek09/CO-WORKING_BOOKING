export const seats = [
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `A${i + 1}`,
    label: `A${i + 1}`,
    row: 'A',
    status: i % 3 === 0 ? 'occupied' : i % 3 === 1 ? 'reserved' : 'available',
    slots: ['morning', 'evening'] // available in both
  })),

  ...Array.from({ length: 10 }, (_, i) => ({
    id: `B${i + 1}`,
    label: `B${i + 1}`,
    row: 'B',
    status: i % 2 === 0 ? 'available' : 'occupied',
    slots: ['morning'] // morning only
  })),

  ...Array.from({ length: 10 }, (_, i) => ({
    id: `C${i + 1}`,
    label: `C${i + 1}`,
    row: 'C',
    status: 'available',
    slots: ['evening'] // evening only
  }))
];
