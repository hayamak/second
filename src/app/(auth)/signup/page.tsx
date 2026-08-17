// src/auth/(auth)/signup/page.tsx

import { Logo } from "@/components/logo"
import { SignupForm } from "../_components/signup-form"

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col justify-center bg-muted py-12 sm:px-6 lg:px-8">
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-center gap-x-2">
          <Logo className="size-8" />
          <span className="font-semibold text-lg">アセット</span>
        </div>
        <SignupForm />
      </div>
    </div>
  )
}
