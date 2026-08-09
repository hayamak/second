// src/components/app-sidebar.tsx

"use client"

import * as React from "react"

import Link from "next/link"
import { NavUser } from "./nav-user"

import { ChevronRight, Building, Laptop, } from "lucide-react"
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
  SidebarFooter
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "組織",
      url: "#",
      icon: Building,
      items: [
        {
          title: "組織情報",
          url: "/organisation",
        },
        {
          title: "メンバー",
          url: "/organisation/members",
        },
      ],
    },
    {
      title: "IT資産",
      url: "#",
      icon: Laptop,
      items: [
        {
          title: "一覧",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true,
        },
        {
          title: "Rendering",
          url: "#",
        },
        {
          title: "Caching",
          url: "#",
        },
        {
          title: "Styling",
          url: "#",
        },
        {
          title: "Optimizing",
          url: "#",
        },

      ],
    },


  ],
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

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
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
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
                        <SidebarMenuButton render={<Link href={item.url} />} isActive={item.isActive} className="pl-8">
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
