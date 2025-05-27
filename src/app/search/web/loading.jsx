// import React from 'react'

// export default function loading() {
//   return (
//     <>
//     <div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
//         <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
//         <div className="h-3.5 [w-360px] bg-gray-200 rounded-full mb-2.5"></div>
//         <div className="h-2.5 [w-560px] bg-gray-200 rounded-full mb-2.5"></div>
//         <div className="h-2.5 [w-530px] bg-gray-200 rounded-full mb-2.5"></div>
//     </div>
//      <div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
//         <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
//         <div className="h-3.5 [w-360px] bg-gray-200 rounded-full mb-2.5"></div>
//         <div className="h-2.5 [w-560px] bg-gray-200 rounded-full mb-2.5"></div>
//         <div className="h-2.5 [w-530px] bg-gray-200 rounded-full mb-2.5"></div>
//     </div>
//      <div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
//         <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
//         <div className="h-3.5 [w-360px] bg-gray-200 rounded-full mb-2.5"></div>
//         <div className="h-2.5 [w-560px] bg-gray-200 rounded-full mb-2.5"></div>
//         <div className="h-2.5 [w-530px] bg-gray-200 rounded-full mb-2.5"></div>
//     </div>
//     </>
//   )
// }

// components/Loading.jsx
import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex flex-col items-center mt-0 h-screen bg-white">
      <Image
        src="/images/go-on.gif"
        alt="Loading animation"
        width={500}
        height={500}
        priority
      />
      <p className="text-gray-500 mt-4 text-lg">Ted: “I think it might work, Dougal. I know it’ll work. It will work.”
Dougal: “It won’t work, will it Ted?”
Ted: “It won’t, no.”</p>
    </div>
  );
}

