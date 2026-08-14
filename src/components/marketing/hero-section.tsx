// src/components/marketing/hero-section.tsx

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">

          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <Badge variant={"outline"} className='px-3 py-3 bg-muted'>New</Badge>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-muted-foreground">
                <span>アセットをリリース 🎉</span>
                <ChevronRight aria-hidden="true" className="size-5" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-foreground sm:text-6xl">
            シンプルなIT資産管理
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
            アセットは、組織のIT資産を管理するためのサービスです。必要な機能をシンプルなUIで提供し、無料で今すぐ使い始めることができます。
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href={"/"} className={cn(buttonVariants(), "px-3.5 py-5 font-semibold")}>無料ではじめる</Link>
            <a href="#features" className="text-sm/6 font-semibold text-foreground hover:text-muted-foreground">
              機能を見る <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-white/2.5 dark:ring-white/10">
              <img
                alt="App screenshot"
                src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                width={2432}
                height={1442}
                className="w-304 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10 dark:hidden"
              />
              <img
                alt="App screenshot"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="w-304 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 not-dark:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
