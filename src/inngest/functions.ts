// src/inngest/functions.ts
import { prisma } from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
    {
        id : 'hello-world',
        retries : 6
    },
    {
        event : 'test/hello.world' },
    
        async ({event, step}) => {
            await step.sleep("wait", '10s');
            

            await step.run("create-workflow", () => {
                return prisma.workFlow.create({
                    data: {
                        name : "workflow-form-data-inngest"
                    }
                })
            })

            return  { success: true , message : "Job queued" }
        }
    
    
)