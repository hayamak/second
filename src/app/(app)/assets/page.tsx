// src/app/(app)/assets/page.tsx

import { AssetsTable } from "./_components/assets-table"

export default function AssetsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 p-4">
      <h1 className="text-2xl font-semibold">IT資産</h1>
      <AssetsTable />
    </div>
  )
}
