// src/app/(app)/assets/hardware/_components/add-hardware-sheet.tsx

"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { HardwareForm } from "./hardware-form"

export function AddHardwareSheet(
  { open, onOpenChange }:
    { open: boolean, onOpenChange: (open: boolean) => void }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>ハードウェアを追加</SheetTitle>
          <SheetDescription>
            PCなどハードウェアを登録します。
          </SheetDescription>
        </SheetHeader>
        <HardwareForm onCancel={() => onOpenChange(false)} />
      </SheetContent>
    </Sheet>
  )
}
