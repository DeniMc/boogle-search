import React from 'react'
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="/images/doogle-icon.png"
          alt="Doogle Logo"
          width={500}
          height={150}
          priority
          style={{width: "auto", height: "auto"}}

        />
        <HomeSearch />
      </div>
    </>
  )
}
