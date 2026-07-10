export type Stat = {
  value: string;
  label: string;
  order: number;
};

const STATS: Stat[] = [
  { value: "100+", label: "Volunteers", order: 1 },
  { value: "40+", label: "Schools Reached", order: 2 },
  { value: "10,000+", label: "Students", order: 3 },
];

export function getStats(): Stat[] {
  return [...STATS].sort((a, b) => a.order - b.order);
}
