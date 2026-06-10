"use client"
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-util";
import { caller } from "./trpc/server";
import { useTRPC } from "./trpc/client";
import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const page =  () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient()
  const { data } = useQuery(trpc.getWorkFlows.queryOptions())
  const testAI = useMutation(trpc.testAi.mutationOptions())

  const create = useMutation(trpc.createWorkFlow.mutationOptions({
    onSuccess: () => {
      toast.success('Job Queued')
    }
  }))
  return (
    <div >
      {JSON.stringify(data)}
      <Button onClick={() => testAI.mutate()  } disabled={testAI.isPending} >TestAI</Button>
      <Button disabled={create.isPending} onClick={() => create.mutate()} >
        Create WorkFlow
      </Button>
    </div>
  );
};

export default page;
