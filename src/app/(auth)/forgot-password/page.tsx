// src/app/(auth)/forgot-password/page.tsx

import { GalleryVerticalEnd } from "lucide-react"
import { ForgotPasswordForm } from "../_components/forgot-password-form"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-svh flex-col justify-center bg-muted py-12 sm:px-6 lg:px-8">
      <div className="flex w-full flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Acme Inc.
        </a>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}
