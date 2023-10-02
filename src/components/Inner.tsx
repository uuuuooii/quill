import { cn } from '@/lib/utils/utils'
import React, { ReactNode } from 'react'

interface InnerProps {
  className?: string
  children: ReactNode
}

const Inner = ({ className, children }: InnerProps) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
      {children}
    </div>
  )
}

export default Inner