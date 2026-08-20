// src/app/(app)/settings/profile/page.tsx

import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ProfileForm() {
  return (
    <div className="rounded-xl border border-muted p-4 bg-card">
      <form className="space-y-6">
        {/* ユーザー名 */}
        <Field>
          <FieldLabel htmlFor="name">ユーザー名</FieldLabel>
          <Input
            id="name"
            placeholder="表示名を入力"
          // defaultValue="現在の名前" などがあれば入れる
          />
        </Field>

        {/* メールアドレス（編集不可の場合） */}
        <Field>
          <FieldLabel>メールアドレス</FieldLabel>
          <p className="text-sm text-muted-foreground pt-1.5">
            name@example.com
          </p>
          {/* または Input を readOnly にする方法でもOK */}
          {/* <Input value="name@example.com" readOnly className="bg-muted" /> */}
        </Field>

        {/* 保存ボタン */}
        <div className="flex justify-end pt-2">
          <Button type="submit" className="w-28 cursor-pointer">
            保存
          </Button>
        </div>
      </form>
    </div>
  )
}