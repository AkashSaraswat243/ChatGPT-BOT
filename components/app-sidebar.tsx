import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { ThreadList } from "./assistant-ui/thread-list"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      {...props}
      className="min-w-[70px] md:min-w-[260px] md:max-w-[260px] max-w-full bg-sidebar/90 backdrop-blur border-r border-sidebar-border shadow h-full flex flex-col rounded-none m-0 transition-all duration-300"
      style={{ boxShadow: '0 2px 8px 0 rgba(60,72,100,0.08)' }}
    >
      <SidebarHeader className="p-4 border-b border-sidebar-border flex items-center justify-start">
        <span className="font-bold text-xl tracking-tight text-foreground">ChatGPT</span>
      </SidebarHeader>
      <SidebarContent className="flex-1 overflow-y-auto p-2">
        <ThreadList />
      </SidebarContent>
      <SidebarFooter className="p-3 border-t border-sidebar-border flex flex-col gap-1 items-center justify-between w-full">
        <div className="text-xs text-primary font-bold tracking-wide text-center w-full">Akash Saraswat ChatGPT</div>
        <div className="text-[11px] text-muted-foreground italic text-center w-full">Made by Akash Saraswat</div>
      </SidebarFooter>
    </Sidebar>
  )
}
