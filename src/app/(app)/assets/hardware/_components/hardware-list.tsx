// src/app/(app)/assets/hardware/_components/hardware-list.tsx
"use client"

import { useState } from "react"
import { assets } from "@/data/assets"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

const ITEMS_PER_PAGE = 20

type AssetOwnership = "owned" | "leased" | "other"

const ownershipVariant = {
  owned: "secondary",
  leased: "outline",
  other: "ghost",
} as const satisfies Record<AssetOwnership, "secondary" | "outline" | "ghost">

const ownershipLabel = {
  owned: "自社所有",
  leased: "リース",
  other: "その他",
} as const satisfies Record<AssetOwnership, string>

export function HardwareList() {

  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(assets.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE

  const currentAssets = assets.slice(startIndex, endIndex)

  return (
    <div className="space-y-4">
      <ul role="list" className="divide-y divide-gray-100 dark:divide-white/5">
        {currentAssets.map((asset) => (
          <li key={asset.id} className="relative flex items-center space-x-4 py-4">
            <div className="flex-auto">
              <div className="flex items-center gap-x-3">
                {asset.status === '保管中' ? (
                  <div className="flex-none rounded-full bg-gray-100/10 p-1 text-gray-500 dark:bg-white/10">
                    <div className="size-2 rounded-full bg-current" />
                  </div>
                ) : null}
                {asset.status === '使用中' ? (
                  <div className="flex-none rounded-full bg-green-100 p-1 text-green-500 dark:bg-green-400/20 dark:text-green-400">
                    <div className="size-2 rounded-full bg-current" />
                  </div>
                ) : null}
                {asset.status === '故障' ? (
                  <div className="flex-none rounded-full bg-rose-100 p-1 text-rose-500 dark:bg-rose-400/20 dark:text-rose-400">
                    <div className="size-2 rounded-full bg-current" />
                  </div>
                ) : null}
                <h2 className="text-sm/6 font-semibold text-foreground">
                  <Link href={`/assets/hardware/${asset.id}`} className="flex gap-x-2">
                    <span className="truncate">{asset.model}</span>
                    <span className="text-muted-foreground">/</span>
                    <span className="whitespace-nowrap">{asset.manufacturer}</span>
                    <span className="absolute inset-0" />
                  </Link>
                </h2>
              </div>
              <div className="mt-3 flex items-center gap-x-2.5 text-xs/5 text-gray-500 dark:text-gray-400">
                <Badge variant={ownershipVariant[asset.ownership]}>
                  {ownershipLabel[asset.ownership]}
                </Badge>

                <p className="truncate">{asset.serialNumber}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground hidden sm:block">{asset.user}</p>
            <ChevronRight aria-hidden="true" className="size-5 flex-none text-gray-400" />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {assets.length === 0 ? (
            <span>0件</span>
          ) : (
            <span>
              {assets.length}件中 {startIndex + 1}〜
              {Math.min(endIndex, assets.length)}件
            </span>
          )}
        </p>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((page) => page - 1)}
            disabled={currentPage === 1}
            className="cursor-pointer"
          >
            前へ
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((page) => page + 1)}
            disabled={currentPage >= totalPages}
            className="cursor-pointer"
          >
            次へ
          </Button>
        </div>
      </div>
    </div>
  )
}
