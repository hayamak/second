// src/components/marketing/features-section.tsx

import { CloudUpload, SquareArrowRightExit } from "lucide-react"

const features = [
  {
    name: 'CSV入出力',
    description:
      '管理するIT機器は1台ずつ、大量の場合はCSVファイルからインポートできます。有料プランのお客様の場合は初回のデータ登録は無料でサポートいたします。また、アセットで管理しているデータは必要に応じてエクスポートできます。',
    icon: CloudUpload,
  },
  {
    name: '貸出・返却管理',
    description:
      '管理するIT機器は1台ずつ、大量の場合はCSVファイルからインポートできます。有料プランのお客様の場合は初回のデータ登録は無料でサポートいたします。また、アセットで管理しているデータは必要に応じてエクスポートできます。',
    icon: SquareArrowRightExit,
  },

]

export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="overflow-hidden"> {/*py-24 sm:py-32*/}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-muted-foreground">機能</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                  必要な機能を
                </p>
                <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
                  アセットは組織のIT資産管理に必要な機能をシンプルで分かりやすく使いやすいUIで提供します。
                  PC、プリンター、ネットワーク機器、スマートフォンなどの管理に最適です。購入資産・リースを問わず管理が可能です。
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-foreground"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="Product screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 not-dark:hidden sm:w-228 md:-ml-4 lg:ml-0 dark:ring-white/10"
            />
            <img
              alt="Product screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0 dark:hidden dark:ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}