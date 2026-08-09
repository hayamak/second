// src/app/(app)/organisation/page.tsx

import { Card, CardHeader, CardAction, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function OrganisationPage() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-8 p-4">
      <h1 className="text-2xl font-semibold">組織</h1>
      <Card>
        <CardHeader>
          <CardAction>
            <Button variant={"ghost"} className="cursor-pointer">編集</Button>
          </CardAction>

        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">株式会社サティスファクトリー</p>
            <p className="text-muted-foreground">1234567890123</p>
          </div>
          <div>
            <p>
              東京都中央区八丁堀三丁目12番8号
            </p>
            <p>HF八丁堀ビル</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
