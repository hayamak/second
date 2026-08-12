// src/app/(app)/assets/hardware/[publicId]/page.tsx

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function HardwareDetailPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 p-4">
      <div className="space-y-4">
        <Link href={"/assets/hardware"} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" />
          ハードウェア一覧
        </Link>
        <div>
          {/* 製品名 / モデルと資産管理番号 */}
          <h1 className="text-2xl font-semibold">MacBook Air 13インチ</h1>
          <p className="text-sm text-muted-foreground">HW-012345</p>
        </div>
      </div>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">基本情報</h2>
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">シリアル番号</dt>
            <dd>SN1234SN321</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">メーカー</dt>
            <dd>Apple</dd>
          </div>
        </dl>
      </section>
      <Separator />
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">取得情報</h2>
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">取得日</dt>
            <dd>2026年8月12日</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">取得方法</dt>
            <dd>リース</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">購入価格</dt>
            <dd>-</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">取得先</dt>
            <dd>三菱UFJリース</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">保証期限</dt>
            <dd>2029年9月13日</dd>
          </div>
        </dl>
      </section>
      <Separator />
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">利用状況</h2>
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">状態</dt>
            <dd>利用中</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">利用者</dt>
            <dd>鈴木花子</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">割当日</dt>
            <dd>2026年7月3日</dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
