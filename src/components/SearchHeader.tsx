import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchBox from './SearchBox'
import { RiSettings3Line } from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="flex flex-col sm:flex-row w-full p-2 items-center sm:items-center sm:justify-between relative">

        {/* Logo */}
        <div className="flex justify-center sm:justify-start w-full sm:w-auto mb-0 sm:mb-0">
          <Link href="/">
            <Image
              src="/images/dougal-logo.png"
              alt="Dougal Logo"
              width={130}
              height={40}
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
        </div>

        {/* SearchBox */}
        <div className="w-[80%] sm:flex-1 flex justify-center mb-2 sm:mb-0">
          <SearchBox />
        </div>

        {/* Right icons and Sign In */}
        <div className="absolute top-2 right-2 sm:static flex items-center space-x-2">
          <div className="hidden md:inline-flex space-x-2">
            <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
            <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-1 text-sm sm:px-6 sm:py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
            Sign in
          </button>
        </div>
      </div>

      <SearchHeaderOptions />
    </header>
  )
}
