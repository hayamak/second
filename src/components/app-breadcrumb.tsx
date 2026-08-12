// src/components/app-breadcrumb.tsx

"use client"

import { usePathname } from "next/navigation";

import { navigation } from "@/config/navigation"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export function AppBreadcrumb() {
  const pathname = usePathname()

  if (pathname === "/dashboard") {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>ダッシュボード</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  }

  const parent = navigation.find((item) =>
    item.items.some((subItem) => subItem.url === pathname)
  )

  const current = parent?.items.find(
    (subItem) => subItem.url === pathname
  )

  if (!parent || !current) {
    return null
  }
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          {/* <BreadcrumbLink href="#"> */}
          {parent.title}
          {/* </BreadcrumbLink> */}
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>{current.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
