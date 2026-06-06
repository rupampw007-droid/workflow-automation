
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-util";
import { caller } from "./trpc/server";

const page = async () => {
  await requireAuth()
  const data = await caller.getUsers()
  return (
    <div className="">
      {JSON.stringify(data)}
    </div>
  );
};

export default page;
