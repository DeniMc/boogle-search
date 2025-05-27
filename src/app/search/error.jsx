"use client"

import { useEffect }from 'react'

export default function Error({error, reset}) {
    useEffect(() => {
    console.log('error', error);
}, [error]);
  return (
    <div className='flex flex-col items-center justify-center pt-10'>
        <h1 className='text-3xl mb-4'>You've fecked that up Ted!</h1>
        <button className='text-blue-500'>Pray and Try again</button>
    </div>
  )
}
