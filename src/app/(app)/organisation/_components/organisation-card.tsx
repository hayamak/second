// src/app/(app)/organisation/_components/organisation-card.tsx

import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function OrganisationCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>株式会社サティスファクトリー</CardTitle>
        <CardDescription>1234567890123</CardDescription>
        <CardAction>
          <Button variant={"outline"} className="cursor-pointer" size={"sm"}>編集</Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-2 text-muted-foreground">
        <p>
          東京都中央区八丁堀三丁目12番8号
        </p>
        <p>HF八丁堀ビル</p>
      </CardContent>
    </Card>
  )
}
