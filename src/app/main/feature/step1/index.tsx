import Link from 'next/link'
import React from 'react'

const FirstStep = () => {
  return (
    <li className='md:flex-1'>
      <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
        <span className='text-sm font-medium text-blue-600'>Step1</span>
        <span className='text-xl font-semibold'>Sing up for an account</span>
        <span className='mt-2 text-zinc-700'>
          Either starting out with a free plan or choose our{' '}
          <Link href='/pricing' className='text-blue-700 underline underline-offset-2'>
            pro plan
          </Link>
          .
        </span>
      </div>
    </li>
  )
}

export default FirstStep