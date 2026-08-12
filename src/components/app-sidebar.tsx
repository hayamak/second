// src/components/app-sidebar.tsx

"use client"

import * as React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { NavUser } from "./nav-user"

import { ChevronRight, LayoutDashboard, Recycle } from "lucide-react"
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
    if (url === "/organisation") {
      return pathname === url
    }
    return pathname === url || pathname.startsWith(`${url}/`)
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="px-4 py-5">
        <div className="flex items-center gap-3 py-2">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Recycle className="size-4" />
          </div>
          <span className="text-base font-semibold">アセット</span>
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
