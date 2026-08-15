import { requireAuth } from '@/lib/auth-util';
import React from 'react'

interface PageProps{
    params: Promise<{
        executionId: string
    }>
}

const page = async ({ params } : PageProps ) => {
    await requireAuth()
    const {executionId} = await params;
  return (
    <div>Execution Id: {executionId}</div>
  )
}

export default page