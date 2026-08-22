// src/app/(app)/corporation/employees/import/page.tsx

import { CsvUploadArea } from "../_components/csv-upload-area"
import { Download } from "lucide-react"

export default function EmployeeImportPage() {
  return (

    <div className="mx-auto w-full max-w-3xl space-y-8 p-4">
      <div>
        <h1 className="text-2xl font-semibold">従業員</h1>
        <p className="text-muted-foreground">
          従業員を一括登録します。
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
