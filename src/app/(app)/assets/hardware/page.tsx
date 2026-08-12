// src/app/(app)/assets/hardware/page.tsx

import { HardwareTable } from "./_components/hardware-table"

export default function HardwarePage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 p-4">
      <h1 className="text-2xl font-semibold">ハードウェア</h1>
      <HardwareTable />
    </div>
  )
}
