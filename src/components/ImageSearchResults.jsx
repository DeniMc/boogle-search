import React from 'react'; 
import Link from 'next/link';
import { getRandomInspiration } from './RandomInspiration';
import PaginationButtons from './PaginationButtons';

export default function ImageSearchResults({ results }) {
  const { image, quote } = getRandomInspiration();

  return (
    <div className='sm:pb-24 pb-40 mt-4'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {/* 🎯 Random image and quote */}
        <div className="flex items-center gap-4 mb-6 bg-gray-50 p-4 rounded shadow col-span-full">
          <img src={image} alt="Inspiration" className="w-16 h-16 rounded object-cover" />
          <p className="italic text-gray-700 text-lg">“{quote}”</p>
        </div>

        {results.items?.map((result) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className='h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300'
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className='group-hover:underline truncate text-xl'>{result.title}</h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className='group-hover:underline truncate text-gray-600'>{result.displayLink}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        
          <PaginationButtons />
       
      </div>
    </div>
  );
}
