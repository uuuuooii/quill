import Link from 'next/link'
import React from 'react'

const SecondStep = () => {
  return (
    <li className='md:flex-1'>
      <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
        <span className='text-sm font-medium text-blue-600'>Step2</span>
        <span className='text-xl font-semibold'>Upload your PDF file</span>
        <span className='mt-2 text-zinc-700'>
          We&apos;ll process your file and make it ready for you to chat with.
        </span>
      </div>
    </li>
  )
}

export default SecondStep