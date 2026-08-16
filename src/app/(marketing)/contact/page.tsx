// src/app/(marketing)/contact/page.tsx

import ContactForm from "@/components/marketing/contact-form"

export default function ContactPage() {
  return (
    <div className="relative isolate overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 size-full stroke-border
    mask-[radial-gradient(70%_70%_at_50%_0%,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="contact-grid"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>

        <rect
          fill="url(#contact-grid)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-xl space-y-12">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            お問い合わせ
          </h2>
          <p className="mt-2 text-base text-muted-foreground">入力欄は全てご入力ください。</p>
          {/* <p>後ほど担当者よりご連絡差し上げます。なお、お問い合わせ内容によってはご回答できない場合がありますことご了承ください。</p> */}
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
