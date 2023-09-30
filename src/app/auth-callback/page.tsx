import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const AuthCallback = async () => {
  const router = useRouter()

  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')

  const apiResponse = await fetch('/api')

  return (
    <div>AuthCallback</div>
  )
}

export default AuthCallback