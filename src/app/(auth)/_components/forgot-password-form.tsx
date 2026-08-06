// src/app/(auth)/_components/forgot-password-form.tsx

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function ForgotPasswordForm() {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-card px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
        <div className="mb-8 text-center">
          <h1 className="text-xl font-semibold tracking-tight">パスワードの再設定</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            パスワード再設定用のメールをお送りします
          </p>

        </div>
        <form action="#" method="POST" className="space-y-8">
          <FieldGroup className="gap-6">
            <Field>
              <FieldLabel htmlFor="email" className="font-semibold">
                メールアドレス
              </FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                className="h-10"
                required
              />
            </Field>
          </FieldGroup>

          <Button type="submit" className="h-10 w-full font-semibold cursor-pointer">
            パスワード再設定メールを送信
          </Button>

        </form>
        <div className="mt-6 flex justify-end">
          <Link
            href="/login"
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            ログインへ戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
