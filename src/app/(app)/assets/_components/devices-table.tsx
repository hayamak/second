// src/app/(app)/assets/_components/devices-table.tsx
"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { assets } from "@/data/assets"

const ITEMS_PER_PAGE = 20

export function DevicesTable() {

  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(assets.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE

  const currentAssets = assets.slice(startIndex, endIndex)

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>シリアル番号</TableHead>
            <TableHead>メーカー</TableHead>
            <TableHead>型番</TableHead>
            <TableHead>利用者</TableHead>
            <TableHead>状態</TableHead>
            <TableHead className="w-8"><span className="sr-only">詳細</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentAssets.map((asset) => (
            <TableRow key={asset.id}>
              <TableCell>
                <Link
                  href={`/assets/${asset.id}`}
                >
                  {asset.serialNumber}
                </Link>
              </TableCell>
              <TableCell>{asset.manufacturer}</TableCell>
              <TableCell>{asset.model}</TableCell>
              <TableCell>{asset.user}</TableCell>
              <TableCell>{asset.status}</TableCell>
              <TableCell className="w-8">
                <Link
                  href={`/assets/${asset.id}`}
                  className="flex size-8 items-center justify-center"
                >
                  <ChevronRight className="size-4 text-muted-foreground" />
                  <span className="sr-only">詳細を見る</span>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
          >
            前へ
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((page) => page + 1)}
            disabled={currentPage >= totalPages}
          >
            次へ
          </Button>
        </div>
      </div>
    </div>
  )
}
