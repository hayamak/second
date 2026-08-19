// src/app/(app)/assets/hardware/_components/add-hardware-sheet.tsx

"use client"

import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { HardwareForm } from "./hardware-form"

export function AddHardwareSheet() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button />} className={"cursor-pointer"}>
        ハードウェアを追加
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>ハードウェアを追加</SheetTitle>
          <SheetDescription>
            PCなどハードウェアを登録します。
          </SheetDescription>
        </SheetHeader>
        <HardwareForm onCancel={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  )
}