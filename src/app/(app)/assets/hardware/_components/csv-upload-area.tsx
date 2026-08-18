import { Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CsvUploadArea() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed px-8 py-12 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-muted">
        <Upload className="size-5 text-muted-foreground" />
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium">CSVファイルをアップロード</p>
        <p className="mt-1 text-sm text-muted-foreground">
          ファイルをドラッグ&ドロップするか、ファイルを選択してください。
        </p>
      </div>
      <Button variant={"outline"} className="mt-4 cursor-pointer">
        <label htmlFor="csv-file">ファイルを選択</label>
      </Button>
      <input id="csv-file" type="file" accept=".csv,text/csv" className="sr-only" />
    </div>
  )
}