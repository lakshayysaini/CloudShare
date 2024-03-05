import React from 'react'

const FileItem = ( { fileInfo } ) => {

  console.log( 'fileInfo', fileInfo );

  return (
    <article
      className="w-1/3 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
    >
      <div
        className="relative rounded-xl bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        <div className="mt-4 space-y-6 text-center">
          <h1 className='text-2xl semibold'><span className='text-primary'>{ fileInfo.userName }</span> Shared the File For You.</h1>
          <h1 className='text-sm text-gray-600'>Find File Details Below.</h1>

          <div className="space-y-4 text-center">
            <a
              href="#"
              className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
            >
              View my cart (2)
            </a>

            <a
              href="#"
              className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
              Checkout
            </a>

            <a
              href="#"
              className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
            >
              Continue shopping
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default FileItem