// src/app/(app)/organisation/page.tsx

import { OrganisationCard } from "./_components/organisation-card"

export default function OrganisationPage() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-8 p-4">
      <h1 className="text-2xl font-semibold">組織</h1>
      <OrganisationCard />
    </div>
  )
}
