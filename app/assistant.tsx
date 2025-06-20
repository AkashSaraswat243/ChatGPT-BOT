"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";

export const Assistant = () => {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background/80 backdrop-blur-md">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="font-bold text-xl text-foreground">ChatGPT</h1>
          </header>
          <main className="flex flex-col w-full max-w-2xl mx-auto px-4 min-h-[calc(100vh-64px)] text-left">
            <Thread />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </AssistantRuntimeProvider>
  );
};
