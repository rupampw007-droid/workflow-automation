import { requireAuth } from '@/lib/auth-util';
import React from 'react'

const page = async () => {
  await requireAuth()
  return (
    <div>Executions</div>
  )
}

export default page