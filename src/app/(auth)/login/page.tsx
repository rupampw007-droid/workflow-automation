
import { LoginForm } from '@/features/auth/components/login-form'
import { requireUnauth } from '@/lib/auth-util'
import React from 'react'

const page = async () => {
  await requireUnauth();
  return (
    <div>
        <LoginForm/>
    </div>
  )
}

export default page