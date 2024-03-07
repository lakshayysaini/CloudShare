'use client'

import React, { useState } from 'react'
import Lottie from "lottie-react";
import animationData from '../../../../public/animation/Animation - 1709657150453.json';

const FileItem = ( { fileInfo } ) => {

  const [password, setPassword] = useState( '' );

  //console.log( 'fileInfo', fileInfo );

  const handleDownload = () => {
    const url = fileInfo.fileUrl;
    const a = document.createElement( 'a' );
    a.href = url;
    a.download = fileInfo.fileName;
    document.body.appendChild( a );
    a.click();
    document.body.removeChild( a );
  };

  return fileInfo && (
    <article
      className="w-1/4 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
    >
      <div
        className="relative rounded-xl bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        <div className=" flex flex-col items-center mt-2 space-y-3 text-center ">
          <h1 className='text-xl semibold'><span className='text-primary'>{ fileInfo?.userName }</span> Shared a File.</h1>

          <h1 className='text-sm text-gray-600 mt-2'>Find File Details Below.</h1>

          <Lottie
            animationData={ animationData }
            style={ { width: '200px', height: '200px' } }
            loop={ true }
          />

          <h1 className='text-sm text-gray-600'>File Size is of { Math.round( fileInfo?.fileSize / 1048576 ) } MB</h1>

          { fileInfo.password.length > 3 ?
            <label
              htmlFor="password"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="password"
                id="password"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="password"
                onChange={ ( e ) => setPassword( e.target.value ) }
              />

              <span
                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                Password
              </span>
            </label>
            : null }


          <button
            className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white active:text-opacity-75 disabled:bg-black disabled:pointer-events-none"
            href="#"
            disabled={ fileInfo.password !== password }
            onClick={ handleDownload }
          >
            <span
              className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
            >
              Download
            </span>
          </button>

        </div>
      </div>
    </article>
  )
}

export default FileItem