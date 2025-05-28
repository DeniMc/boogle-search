import React, { useMemo } from 'react';
import Image from 'next/image';

export default function Loading() {
  // List of gif filenames in /public/gifs
  const gifs = [
    'gif-1.gif',
    'gif-2.gif',
    'gif-3.gif',
    'gif-4.gif',
    'gif-5.gif',
    'gif-6.gif',
    'gif-7.gif',
    'gif-8.gif',
    'gif-9.gif',
    'gif-10.gif',
    'gif-11.gif',
    'gif-12.gif',
    'gif-13.gif',
    'gif-14.gif',
    'gif-15.gif',
    'gif-16.gif',
    'gif-17.gif',
    'gif-18.gif',   
  ];

  // Pick a random gif on component render
  const randomGif = useMemo(() => {
    const index = Math.floor(Math.random() * gifs.length);
    return gifs[index];
  }, []);

  return (
    <div className="flex flex-col items-center mt-0 h-screen bg-white">
      <Image
        src={`/gifs/${randomGif}`}
        alt="Loading animation"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}