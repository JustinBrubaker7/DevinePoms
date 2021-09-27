import React from 'react'

export default function CallToAction() {
  return (
    <div className="bg-purple-200">
      <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block">Check out our Facebook.</span>
          <span className="block">to see details on current and upcoming litters.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          We have new litter and puppies all the time. For the most up to date information check out our Facebook page below or give us a call at (559) 313-6461
        </p>
        <a
          href="https://www.facebook.com/devinepoms"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 sm:w-auto"
        >
          Visit our Facebook page
        </a>
      </div>
    </div>
  )
}
