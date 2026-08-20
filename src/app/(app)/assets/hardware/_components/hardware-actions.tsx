// src/app/(app)/assets/hardware/_components/hardware-actions.tsx

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AddHardwareSheet } from "./add-hardware-sheet"

export function HardwareActions() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" className="cursor-pointer" />}>
          ハードウェアを追加
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setSheetOpen(true)} className="cursor-pointer">
            1件ずつ登録
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/assets/hardware/import"} className="w-full">
              CSVからインポート
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AddHardwareSheet open={sheetOpen} onOpenChange={setSheetOpen} />
    </>
  )
}
