// src/app/(app)/corporation/employees/_components/add-employee-sheet.tsx

"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

import { EmployeeForm } from "./employee-form"
import { createEmployee } from "@/actions/employee"

export function AddEmployeeSheet(
  { open, onOpenChange }:
    { open: boolean, onOpenChange: (open: boolean) => void }) {

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>従業員を追加</SheetTitle>
          <SheetDescription>
            IT資産を利用する従業員などを登録します。
          </SheetDescription>
        </SheetHeader>
        <EmployeeForm action={createEmployee} onCancel={() => onOpenChange(false)} />
      </SheetContent>
    </Sheet>
  )
}
