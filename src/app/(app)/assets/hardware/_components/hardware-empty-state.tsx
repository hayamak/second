// src/app/(app)/assets/hardware/_components/hardware-empty-state.tsx

import Link from "next/link"
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from "@/components/ui/empty"
import { PackageOpen } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function HardwareEmptyState() {
  return (
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
          <Link href={"/assets/hardware/new"} className={buttonVariants({ variant: "default" })}>ハードウェアを登録</Link>
          <Link href={"/assets/hardware/import"} className={buttonVariants({ variant: "secondary" })}>CSVからインポート</Link>
        </div>
      </EmptyContent>
    </Empty>
  )

}

