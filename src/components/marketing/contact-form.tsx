// src/components/marketing/contact-form.tsx

import { Field, FieldLabel, FieldGroup, } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactForm() {
  return (
    <form>
      <FieldGroup className="space-y-4">
        <Field>
          <FieldLabel htmlFor="name">
            お名前
          </FieldLabel>
          <Input
            id="name"
            placeholder="資産 管理"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="organisation">
            会社・組織名
          </FieldLabel>
          <Input
            id="organisation"
            placeholder="株式会社資産管理"
            required
          />

        </Field>
        <Field>
          <FieldLabel htmlFor="email">
            メールアドレス
          </FieldLabel>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            autoComplete="email"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="comments">
            お問い合わせ内容
          </FieldLabel>
          <Textarea
            id="comments"
            placeholder="内容をご入力ください。"
            className="resize-none"
            required
          />
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="privacy"
          />
          <FieldLabel
            htmlFor="privacy"
            className="font-normal text-muted-foreground"
          >
            ご提供いただく個人情報について、<Link href={"/privacy"} className="text-foreground">プライバシーポリシー</Link>に同意する
          </FieldLabel>
        </Field>
        <Field>
          <Button type="submit" className={"cursor-pointer"}>送信する</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}