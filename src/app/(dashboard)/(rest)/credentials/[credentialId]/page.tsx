import { requireAuth } from '@/lib/auth-util';
import React from 'react'

interface PageProps{
    params: Promise<{
        credentialId: string
    }>
}

const page = async ({ params } : PageProps ) => {
  await requireAuth();
    const {credentialId} = await params;
  return (
    <div>Credentials Id: {credentialId}</div>
  )
}

export default page