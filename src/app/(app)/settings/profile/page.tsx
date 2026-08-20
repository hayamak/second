// src/app/(app)/settings/profile/page.tsx

import { ProfileForm } from "./_components/profile-form"

export default function ProfilePage() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-8 p-4">
      <h1 className="text-2xl font-semibold">プロフィール</h1>
      <ProfileForm />
    </div>
  )
}
