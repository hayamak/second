// src/app/(app)/organisation/employees/page.tsx

import { EmployeesTable } from "../_components/employees-table"
import { AddEmployeeSheet } from "../_components/add-employee-sheet"

export default function EmployeesPage() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-8 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">利用者</h1>
        <AddEmployeeSheet />
      </div>
      <EmployeesTable />
    </div>
  )
}
