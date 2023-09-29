import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface InnerProps {
  classNeme?: string
  children: ReactNode
}

const Inner = ({ classNeme, children }: InnerProps) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', classNeme)}>
      {children}
    </div>
  )
}

export default Inner