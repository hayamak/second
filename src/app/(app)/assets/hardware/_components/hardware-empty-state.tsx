// src/app/(app)/assets/hardware/_components/hardware-empty-state.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from "@/components/ui/empty"
import { PackageOpen } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { AddHardwareSheet } from "./add-hardware-sheet"

export function HardwareEmptyState() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant={"icon"}>
            <PackageOpen />
          </EmptyMedia>
          <EmptyTitle>まだハードウェアがありません</EmptyTitle>
          <EmptyDescription>管理するハードウェアを登録しましょう。</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex items-center gap-4">
            <Button onClick={() => setSheetOpen(true)} className={"cursor-pointer"}>ハードウェアを追加</Button>
            <Link href={"/assets/hardware/import"} className={buttonVariants({ variant: "secondary" })}>CSVからインポート</Link>
          </div>
        </EmptyContent>
      </Empty>
      <AddHardwareSheet open={sheetOpen} onOpenChange={setSheetOpen} />
    </>
  )
}
