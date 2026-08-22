// src/components/app-sidebar.tsx

"use client"

import * as React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { NavUser } from "./nav-user"
import { Logo } from "@/components/logo"

import { ChevronRight, LayoutDashboard, } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"

import { navigation } from "@/config/navigation"

const data = {
  navigation,
  user: {
    name: "Hayama",
    email: "hayama@sfinter.com",
    // avatar: "/avatars/shadcn.jpg",
  },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const { isMobile, setOpenMobile, } = useSidebar();

  const isActive = (url: string) => {
    // 詳細ページを持つルートだけ prefix マッチさせる
    const prefixMatchRoutes = [
      "/assets/hardware",
      // 将来 /corporation/employees/[id] を作るならここに追加
      "/corporation/employees",
    ]

    if (prefixMatchRoutes.includes(url)) {
      return pathname === url || pathname.startsWith(`${url}/`)
    }

    // それ以外は完全一致のみ
    return pathname === url
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="px-4 py-5">
        <div className="flex items-center gap-3 py-2">
          <Logo className="size-8" />
        </div>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link href={"/dashboard"} onClick={() => {
                  if (isMobile) {
                    setOpenMobile(false)
                  }
                }} />} isActive={pathname === "/dashboard"}>
                  <LayoutDashboard />
                  ダッシュボード
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navigation.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                render={
                  <CollapsibleTrigger className="group/trigger" />
                }
                className="h-10 gap-2 text-base font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <item.icon />
                {item.title}
                <ChevronRight className="ml-auto transition-transform group-data-panel-open/trigger:rotate-90" />
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton render={<Link href={item.url} onClick={() => {
                          if (isMobile) {
                            setOpenMobile(false)
                          }
                        }} />} isActive={isActive(item.url)} className="pl-8">
                          {item.title}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      {/* <SidebarRail /> */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
