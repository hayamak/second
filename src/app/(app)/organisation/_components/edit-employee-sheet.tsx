// src/app/(app)/organisation/_components/edit-employee-sheet.tsx

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

import { EmployeeForm } from "./employee-form"
import { updateEmployee } from "@/actions/employee"

type Employee = {
  name: string
  employeeNumber: string
  email: string
  assetCount: number
}

export function EditEmployeeSheet({
  employee,
  open,
  onOpenChange,
}: {
  employee: Employee
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>利用者情報の編集</SheetTitle>
        </SheetHeader>
        <EmployeeForm employee={employee} action={updateEmployee} onCancel={() => onOpenChange(false)} />
      </SheetContent>
    </Sheet>
  )
}