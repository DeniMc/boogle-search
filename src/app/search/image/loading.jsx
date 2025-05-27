// import React from 'react'

// export default function loading() {
//   return (
//     <div className='pt-10 mx-2 lg:pl-52 max-w-6xl flex sm:space-x-4 flex-col sm:flex-row pb-42 justify-center items-center'>
//     <div className='animate-pulse'>
//         <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
//          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
//           <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
//     </div>
//     <div className="hidden sm:inline-flex sm:space-x-4">
//          <div className='animate-pulse'>
//         <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
//          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
//           <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
//     </div>
//      <div className='animate-pulse'>
//         <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
//          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
//           <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
//     </div>

//     </div>
//     </div>
//   )
// }

import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex flex-col items-center mt-0 h-screen bg-white">
      <Image
        src="/images/dougal-button.gif"
        alt="Loading animation"
        width={500}
        height={500}
        priority
      />
      <p className="text-gray-500 mt-4 text-lg">The answers aren't small. They're just very far away</p>
    </div>
  );
}
