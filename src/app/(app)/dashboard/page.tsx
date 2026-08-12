// src/app/(app)/dashboard/page.tsx

import { HardwareStats } from "./_components/hardware-stats";

const stats = [
  { name: "ハードウェア合計", count: 128 },
  { name: "利用中", count: 104 },
  { name: "在庫", count: 3 },
  { name: "故障・修理中", count: 3 },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-3xl p-4">
      <h1 className="sr-only">ダッシュボード</h1>
      <HardwareStats stats={stats} />
    </div>
  );
}
