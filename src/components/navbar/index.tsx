import React from 'react'
import Inner from '../Inner'
import Link from 'next/link'

const Navber = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <Inner>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className='flex z-40 font-semibold'>
            <span>quill.</span>
          </Link>

          {/* todo: add mobile navbar */}
          <div className='hidden items-center space-x-4 sm'></div>
        </div>
      </Inner>
    </nav>
  )
}

export default Navber