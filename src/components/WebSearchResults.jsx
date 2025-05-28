import React from 'react'; 
import Link from 'next/link';
import Parser from 'html-react-parser';
import { getRandomInspiration } from './RandomInspiration';
import PaginationButtons from './PaginationButtons';
export default function WebSearchResults({ results }) {
      const { image, quote } = getRandomInspiration();
  return (
    <div className='w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52'>

 {/* 🎯 Random image and quote */}
      <div className="flex items-center gap-4 mb-6 bg-gray-50 p-4 rounded shadow">
        <img src={image} alt="Inspiration" className="w-16 h-16 rounded object-cover" />
        <p className="italic text-gray-700 text-lg">“{quote}”</p>
      </div>

<p className='text-gray-600 text-sm mb-5 mt-3'>
    About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
</p>
{results.items?.map((result) => (
    <div className='max-w-xl mb-8' key={result.link} >
      <div className="group flex flex-col">
        <Link href={result.link}>
        {result.formattedUrl}
        </Link>
        <Link href={result.link} className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800" >
        {result.title}
        </Link>
      </div>
      <p className='text-gray-600'>{Parser(result.htmlSnippet)}</p>
    </div>
  ))}
 
          <PaginationButtons />
        
   </div>
  );
}
