// src/app/(app)/organisation/_components/employee-actions.tsx

"use client"

import { useState } from "react"
import { Ellipsis } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EditEmployeeSheet } from "./edit-employee-sheet"

type Employee = {
  name: string
  employeeNumber: string
  email: string
  assetCount: number
}

export function EmployeeActions({ employee }: { employee: Employee }) {
  const [editOpen, setEditOpen] = useState(false)
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size={"icon"} className={"cursor-pointer"}>
          <Ellipsis />
          <span className="sr-only">
            アクションを開く
            {/* {employee.name}のアクションを開く */}
          </span>
        </Button>} />
        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuGroup>
            <DropdownMenuLabel>アクション</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setEditOpen(true)}>
              編集
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <EditEmployeeSheet
        employee={employee}
        open={editOpen}
        onOpenChange={setEditOpen}
      />
    </>
  )
}
