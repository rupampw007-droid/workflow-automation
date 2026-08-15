interface PageProps {
    params : Promise<{
        workflowId : string
    }>
}

import { requireAuth } from '@/lib/auth-util';
import React from 'react'

const page = async ({params} : PageProps) => {
  await requireAuth();
  const {workflowId} = await params
  return (
    <div>WorkFlowId : {workflowId}</div>
  )
}

export default page
