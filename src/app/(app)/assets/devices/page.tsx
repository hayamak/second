// src/app/(app)/assets/devices/page.tsx

import { DevicesTable } from "../_components/devices-table"

export default function AssetsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 p-4">
      <h1 className="text-2xl font-semibold">デバイス</h1>
      <DevicesTable />
    </div>
  )
}
