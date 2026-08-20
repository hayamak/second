// src/app/(app)/assets/hardware/page.tsx

import { HardwareTable } from "./_components/hardware-table"
import { HardwareEmptyState } from "./_components/hardware-empty-state"
import { HardwareActions } from "./_components/hardware-actions"

export default function HardwarePage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">ハードウェア</h1>
        <HardwareActions />
      </div>
      <HardwareTable />
      <HardwareEmptyState />
    </div>
  )
}
