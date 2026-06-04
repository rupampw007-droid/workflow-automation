// app/trpc/provider.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import { TRPCReactProvider } from "@/app/trpc/client";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () => new QueryClient()
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCReactProvider>
        {children}
      </TRPCReactProvider>
    </QueryClientProvider>
  );
}