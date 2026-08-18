// src/app/(app)/assets/hardware/import/page.tsx

import { CsvUploadArea } from "../_components/csv-upload-area"
import { Download } from "lucide-react"

export default function HardwareImportPage() {
  return (

    <div className="mx-auto w-full max-w-3xl space-y-8 p-4">
      <div>
        <h1 className="text-2xl font-semibold">ハードウェア</h1>
        <p className="text-muted-foreground">
          ハードウェアを一括登録します。
        </p>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-x-2">
          <Download className="size-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">CSVファイルのレイアウトはこちらから</p>
        </div>
        <CsvUploadArea />
      </div>
    </div>
  )
}
