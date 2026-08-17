// src/app/(app)/corporation/new/page.tsx

import CorporationSearchForm from "../_components/corporation-search-form"

export default function NewCorporationPage() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-8 p-4">
      <h1 className="text-2xl font-semibold">法人の登録</h1>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          13桁の法人番号を入力してください
        </p>
        <CorporationSearchForm />
      </div>
    </div>
  )
}
