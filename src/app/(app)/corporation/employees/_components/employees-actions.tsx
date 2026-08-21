// src/app/(app)/corporation/employees/_components/employees-actions.tsx

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AddEmployeeSheet } from "./add-employee-sheet"

export function EmployeesActions() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" className="cursor-pointer" />}>
          従業員を追加
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-40">
          <DropdownMenuItem onClick={() => setSheetOpen(true)} className="cursor-pointer">
            1件ずつ登録
          </DropdownMenuItem>
          <DropdownMenuItem
            render={<Link href="/corporation/employees/import" className="cursor-pointer" />}>
            CSVからインポート
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AddEmployeeSheet open={sheetOpen} onOpenChange={setSheetOpen} />
    </>
  )
}
