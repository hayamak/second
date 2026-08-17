// src/app/(app)/corporation/employees/_components/add-employee-sheet.tsx

"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { EmployeeForm } from "./employee-form"
import { createEmployee } from "@/actions/employee"

export function AddEmployeeSheet() {

  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" className={"cursor-pointer"}>
        利用者を追加
      </Button>} />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>利用者を追加</SheetTitle>
          <SheetDescription>
            IT資産を利用する従業員などを登録します。
          </SheetDescription>
        </SheetHeader>
        <EmployeeForm action={createEmployee} onCancel={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  )
}
