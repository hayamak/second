// src/app/(app)/organisation/_components/employee-actions.tsx

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

export function EmployeeActions() {
  return (
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
          <DropdownMenuItem>
            編集
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
