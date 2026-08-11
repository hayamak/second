// src/app/(app)/organisation/_components/employees-table.tsx
"use client"

import { useState } from "react"
import { employees } from "@/data/employees"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { EmployeeActions } from "./employee-actions"

const ITEMS_PER_PAGE = 20

export function EmployeesTable() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(employees.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE

  const currentEmployees = employees.slice(startIndex, endIndex)

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>氏名</TableHead>
            <TableHead>従業員番号</TableHead>
            <TableHead>メールアドレス</TableHead>
            <TableHead className="text-center">利用端末</TableHead>
            <TableHead className="sr-only">アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentEmployees.map((employee) => (
            <TableRow key={employee.employeeNumber}>
              <TableCell className="font-medium">{employee.name}</TableCell>
              <TableCell>{employee.employeeNumber}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell className="text-center">{employee.assetCount}</TableCell>
              <TableCell>
                <EmployeeActions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {employees.length}件中 {startIndex + 1}〜
          {Math.min(endIndex, employees.length)}件
        </p>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((page) => page - 1)}
            disabled={currentPage === 1}
          >
            前へ
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((page) => page + 1)}
            disabled={currentPage === totalPages}
          >
            次へ
          </Button>
        </div>
      </div>

    </div>

  )
}
