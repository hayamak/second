// src/app/(app)/corporation/employees/page.tsx

import { EmployeesTable } from "./_components/employees-table"
import { EmployeesActions } from "./_components/employees-actions"
import { EmployeesEmptyState } from "./_components/employees-empty-state"

export default function EmployeesPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">利用者</h1>
        <EmployeesActions />
      </div>
      <EmployeesTable />
      <EmployeesEmptyState />
    </div>
  )
}
