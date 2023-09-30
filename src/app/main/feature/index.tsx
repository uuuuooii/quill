import React from 'react'
import FirstStep from './step1'
import SecondStep from './step2'
import ThirdStep from './step3'

const FeatureSection = () => {
  return (
    <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
      <div className='mb-12 px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
            Start chatting in minutes
          </h2>
          <p className='mt-4 text-lg text-gray-600'>
            Chatting to your PDF files has never been easier than with Quill.
          </p>
        </div>
      </div>
      <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
        <FirstStep />
        <SecondStep />
        <ThirdStep />
      </ol>
    </div>
  )
}

export default FeatureSection