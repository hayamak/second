// src/app/(app)/corporation/_components/corporation-search-form.tsx

"use client"

import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { SyntheticEvent } from "react"
import { corporationSearchSchema, corporationSchema, type Corporation } from "@/schemas/corporation"
import { CorporationSearchResult } from "./corporation-search-result"

export default function CorporationSearchForm() {

  const [corporation, setCorporation] = useState<Corporation | null>(null)

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const result = corporationSearchSchema.safeParse({
      corporateNumber: formData.get("corporateNumber"),
    })

    if (!result.success) {
      console.log(result.error)
      return
    }

    const corporateNumber = result.data.corporateNumber

    try {
      const response = await fetch(
        `/api/corporations?corporateNumber=${encodeURIComponent(corporateNumber)}`
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message ?? "法人情報の取得に失敗しました。"
        )
      }

      const corporationResult = corporationSchema.safeParse(data)

      if (!corporationResult.success) {
        throw new Error("法人の形式が正しくありません。")
      }

      setCorporation(corporationResult.data)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
        <Input name="corporateNumber" inputMode="numeric" maxLength={13} minLength={13} placeholder="1234567890123" required />
        <Button type="submit" className={"cursor-pointer"}>検索</Button>
      </form>
      {corporation && (
        <CorporationSearchResult corporation={corporation} />
      )}
    </>
  )
}
