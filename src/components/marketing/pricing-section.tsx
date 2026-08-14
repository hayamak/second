// src/components/marketing/pricing-section.tsx

import Link from 'next/link'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Fragment } from 'react'
import { buttonVariants } from '../ui/button'

const tiers = [
  { name: '無料', id: 'tier-starter', href: '#', priceMonthly: '¥0', },
  { name: '松', id: 'tier-growth', href: '#', priceMonthly: '¥3,000', },
  { name: '竹', id: 'tier-scale', href: '#', priceMonthly: '¥5,000', },
] as const

const sections = [
  {
    name: 'Features',
    features: [
      { name: 'Edge content delivery', tiers: { 無料: true, 松: true, 竹: true } },
      { name: 'ログインアカウント数', tiers: { 無料: '1', 松: '3', 竹: '5' } },
      { name: '登録可能ハードウェア数', tiers: { 無料: '300', 松: '500', 竹: '1,000' } },
      // { name: 'Single sign-on (SSO)', tiers: { 無料: false, 松: false, Scale: true } },
    ],
  },
  {
    name: 'Reporting',
    features: [
      { name: 'Advanced analytics', tiers: { 無料: true, 松: true, 竹: true } },
      { name: 'Basic reports', tiers: { 無料: false, 松: true, 竹: true } },
      // { name: 'Professional reports', tiers: { Starter: false, Growth: false, Scale: true } },
      // { name: 'Custom report builder', tiers: { Starter: false, Growth: false, Scale: true } },
    ],
  },
  // {
  //   name: 'Support',
  //   features: [
  //     { name: '24/7 online support', tiers: { Starter: true, Growth: true, Scale: true } },
  //     { name: 'Quarterly workshops', tiers: { Starter: false, Growth: true, Scale: true } },
  //     { name: 'Priority phone support', tiers: { Starter: false, Growth: false, Scale: true } },
  //     { name: '1:1 onboarding tour', tiers: { Starter: false, Growth: false, Scale: true } },
  //   ],
  // },
]

export default function PricingSection() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-foreground">料金</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl dark:text-white">
            アセットの料金プラン
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
          管理するIT機器の数などに合わせてお選びください。
          小規模な事業者様に最適な無料プランもご用意しています。
        </p>

        {/* xs to lg */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className='rounded-xl p-8 ring-1 ring-border'
            >
              <h3 id={tier.id} className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                {tier.name}
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1 text-gray-900 dark:text-white">
                <span className="text-4xl font-semibold">{tier.priceMonthly}</span>
                <span className="text-sm font-semibold text-muted-foreground"> / 月</span>
              </p>
              <Link href={tier.href} className={cn(buttonVariants(), "mt-8 w-full text-sm/6 font-semibold py-5")}>プランを選ぶ</Link>
              <ul role="list" className="mt-10 space-y-4 text-sm/6 text-gray-900 dark:text-gray-200">
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature) =>
                        feature.tiers[tier.name] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <Check
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                            />
                            <span>
                              {feature.name}{' '}
                              {typeof feature.tiers[tier.name] === 'string' ? (
                                <span className="text-sm/6 text-gray-500 dark:text-gray-400">
                                  ({feature.tiers[tier.name]})
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ) : null,
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="text-sm/7 font-semibold text-gray-900 dark:text-white">{tier.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-gray-900 dark:text-white">
                        <span className="text-4xl font-semibold">{tier.priceMonthly}</span>
                        <span className="text-sm/6 font-semibold text-muted-foreground"> / 月</span>
                      </div>
                      <Link href={tier.href} className={cn(buttonVariants(), "mt-8 w-full text-sm/6 font-semibold py-5")}>プランを選ぶ</Link>
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={cn(
                          sectionIdx === 0 ? 'pt-8' : 'pt-16',
                          'pb-4 text-sm/6 font-semibold text-gray-900 dark:text-white',
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10 dark:bg-white/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th scope="row" className="py-4 text-sm/6 font-normal text-gray-900 dark:text-gray-200">
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <div className="text-center text-sm/6 text-gray-500 dark:text-gray-400">
                                {feature.tiers[tier.name]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <Check
                                    aria-hidden="true"
                                    className="mx-auto size-5 text-indigo-600 dark:text-indigo-400"
                                  />
                                ) : (
                                  <Minus
                                    aria-hidden="true"
                                    className="mx-auto size-5 text-gray-400 dark:text-gray-500"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
