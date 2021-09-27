/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-yellow-50 via-purple-100 to-teal shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-around h-16 ">
              <div className="flex ">
               
                <div className="hidden sm:ml-6 sm:flex sm:space-x-40">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-md font-semibold"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-800 hover:border-gray-100 hover:text-gray-400 inline-flex items-center px-1 pt-1 border-b-2 text-md font-semibold"
                  >
                    Meet our Pups
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-800 hover:border-gray-100 hover:text-gray-400 inline-flex items-center px-1 pt-1 border-b-2 text-md font-semibold"
                  >
                    Upcoming Litters
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-800 hover:border-gray-100 hover:text-gray-400 inline-flex items-center px-1 pt-1 border-b-2 text-md font-semibold"
                  >
                    Contact us
                  </a>
                </div>
              </div>
             

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Calendar
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                
             
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
