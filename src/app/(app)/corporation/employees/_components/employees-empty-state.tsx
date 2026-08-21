// src/app/(app)/corporation/employees/_components/employees-empty-state.tsx

"use client"

import { useState } from "react"
import Link from "next/link"
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from "@/components/ui/empty"
import { PackageOpen } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { AddEmployeeSheet } from "./add-employee-sheet"

export function EmployeesEmptyState() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant={"icon"}>
            <PackageOpen />
          </EmptyMedia>
          <EmptyTitle>まだ従業員がいません</EmptyTitle>
          <EmptyDescription>IT機器等を利用する従業員を登録しましょう。</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex items-center gap-4">
            <Button onClick={() => setSheetOpen(true)} className={"cursor-pointer"}>従業員を追加</Button>
            <Link href={"/corporation/employees/import"} className={buttonVariants({ variant: "secondary" })}>CSVからインポート</Link>
          </div>
        </EmptyContent>
      </Empty>
      <AddEmployeeSheet open={sheetOpen} onOpenChange={setSheetOpen} />
    </>
  )
}
