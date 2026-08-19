// src/app/(app)/assets/hardware/_components/hardware-form.tsx

import { useActionState } from "react"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function HardwareForm({ onCancel }: { onCancel: () => void }) {
  return (
    <div className="w-full px-4">
      <form>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="manufacturer">メーカー</FieldLabel>
            <Input id="manufacturer" name="manufacturer" placeholder="アップル" />
          </Field>
          <Field>
            <FieldLabel htmlFor="name">製品名</FieldLabel>
            <Input id="name" name="name" placeholder="Macbook Air 13インチ" />
          </Field><Field>
            <FieldLabel htmlFor="model">型番</FieldLabel>
            <Input id="model" name="model" placeholder="JID0393003" />
          </Field><Field>
            <FieldLabel htmlFor="serial-number">シリアル番号</FieldLabel>
            <Input id="serial-number" name="serialNumber" placeholder="SN12345N12345" />
          </Field><Field>
            <FieldLabel htmlFor="asset-tag">資産管理番号</FieldLabel>
            <Input id="asset-tag" name="assetTag" placeholder="HW-123456" />
          </Field>
          <FieldSeparator />
          <Field>
            <Button type="submit" className={"cursor-pointer"}>保存</Button>
            <Button type="button" className={"cursor-pointer"} variant={"outline"} onClick={onCancel}>
              キャンセル
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}