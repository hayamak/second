// src/app/(app)/organisation/new/page.tsx

import OrganisationSearchForm from "../_components/organisation-search-form"

export default function NewOrganisationPage() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-8 p-4">
      <h1 className="text-2xl font-semibold">法人の登録</h1>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          13桁の法人番号を入力してください
        </p>
        <OrganisationSearchForm />
      </div>
    </div>
  )
}
