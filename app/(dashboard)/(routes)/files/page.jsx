'use client'

import React, { useEffect, useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from '../../../../firebaseConfig';

const Files = () => {
  const db = getFirestore( app );
  const [files, setFiles] = useState( [] );
  const [currentPage, setCurrentPage] = useState( 1 );
  const filesPerPage = 10;

  const getAllFiles = async () => {
    const querySnapshot = await getDocs( collection( db, "uploadedFile" ) );
    const filesData = querySnapshot.docs.map( ( doc ) => ( { id: doc.id, ...doc.data() } ) );
    setFiles( filesData );
  };

  useEffect( () => {
    getAllFiles();
  }, [] );

  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = files.slice( indexOfFirstFile, indexOfLastFile );

  const paginate = ( pageNumber ) => setCurrentPage( pageNumber );

  return (
    <>
      <div className=" flex flex-col items-center p-5 px-8 md:px-28 overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm border-2">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">S.no</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Size</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Type</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Click to view</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            { currentFiles.map( ( file, index ) => (
              <tr key={ file.id }>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{ indexOfFirstFile + index + 1 }</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{ file.fileName }</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{ file.fileSize }</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{ file.fileType }</td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href={ file.shortUrl }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded bg-white text-black px-4 py-2 text-xs font-medium hover:bg-gray-400 hover:text-white border-2 border-black"
                  >
                    View
                  </a>
                </td>
              </tr>
            ) ) }
          </tbody>
        </table>
        <div className="mt-4">
          <ul className="flex">
            { Array.from( { length: Math.ceil( files.length / filesPerPage ) }, ( _, i ) => (
              <li key={ i } className="mx-1">
                <button
                  onClick={ () => paginate( i + 1 ) }
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white">
                  <span className="relative px-3.5 py-1.5 transition-all ease-in duration-75 bg-white text-black hover:text-white rounded-full group-hover:bg-opacity-0">
                    { i + 1 }
                  </span>
                </button>
              </li>
            ) ) }
          </ul>
        </div>
      </div>
    </>
  );
};

export default Files;
