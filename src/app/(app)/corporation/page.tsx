// src/app/(app)/corporation/page.tsx

import { CorporationCard } from "./_components/corporation-card"
export default function CorporationPage() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-8 p-4">
      <h1 className="text-2xl font-semibold">法人</h1>
      <CorporationCard />
    </div>
  )
}
