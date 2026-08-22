// src/app/(app)/assets/hardware/_components/hardware-actions.tsx

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuGroup, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { AddHardwareSheet } from "./add-hardware-sheet"
import { MoreHorizontal } from "lucide-react"

export function HardwareActions() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" className="cursor-pointer" />}>
          <MoreHorizontal className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuGroup>
            <DropdownMenuLabel>追加</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setSheetOpen(true)} className="cursor-pointer py-2">
              1件ずつ登録
            </DropdownMenuItem>
            <DropdownMenuItem render={<Link href={"/assets/hardware/import"} />} className="cursor-pointer py-2">
              CSVからインポート
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => { }} className="cursor-pointer py-2">
              一覧をエクスポート
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <AddHardwareSheet open={sheetOpen} onOpenChange={setSheetOpen} />
    </>
  )
}
