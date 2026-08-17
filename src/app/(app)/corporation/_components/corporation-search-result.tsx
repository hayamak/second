// src/app/(app)/corporation/_components/corporation-search-result.tsx

import { Button } from "@/components/ui/button";
import type { Corporation } from "@/schemas/corporation";

export function CorporationSearchResult({ corporation }: { corporation: Corporation }) {
  return (
    <section className="my-8 space-y-2">
      <h2 className="font-medium">{corporation.name}</h2>
      <p className="text-sm text-muted-foreground">
        法人番号: {corporation.corporateNumber}
      </p>
      <p className="text-sm text-muted-foreground">
        〒{corporation.address.postalCode}
        <br />
        {corporation.address.prefecture}
        {corporation.address.city}
        {corporation.address.street}
      </p>
      <Button type="button" className={"cursor-pointer"}>この法人で登録する</Button>
    </section>
  )
}