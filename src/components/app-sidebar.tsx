// src/components/app-sidebar.tsx

"use client"

import * as React from "react"

import { Gauge, CircleGauge, Laptop, Building, Settings } from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"

import Link from "next/link"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "ダッシュボード",
      url: "/dashboard",
      icon: CircleGauge,
    },
    {
      title: "IT資産",
      url: "#",
      icon: Laptop,
    },
    {
      title: "組織",
      url: "/organization",
      icon: Building,
    },


  ],

  navSecondary: [
    {
      title: "設定",
      url: "/settings",
      icon: Settings,
    },

  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link href="dashboard" />}
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              {/* <IconInnerShadowTop className="size-5!" /> */}
              <span className="text-base font-semibold">asett</span>

            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
