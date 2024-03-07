'use client'

import React, { useState, useEffect } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../../../firebaseConfig';
import FileItem from './_components/FileItem';
import Image from 'next/image';

const FileView = ( { params } ) => {

    const db = getFirestore( app );
    const [fileInfo, setFileInfo] = useState();

    const getFileInfo = async () => {
        const docRef = doc( db, "uploadedFile", params?.fileId );
        const docSnap = await getDoc( docRef );
        //console.log( "docSnap", docSnap );
        if ( docSnap.exists() ) {
            //console.log( "Document data:", docSnap.data() );
            setFileInfo( docSnap.data() );
        } else {
            // docSnap.data() will be undefined in this case
            //console.log( "No such document!" );
        }
    }

    useEffect( () => {
        params?.fileId && getFileInfo()
    }, [params?.fileId] )

    return (
        <div className='bg-gray-100 h-screen w-full flex justify-center items-center flex-col gap-10'>
            <Image src='/CloudShare.png' width={ 140 } height={ 70 } />
            <FileItem fileInfo={ fileInfo } />
        </div>
    )
}

export default FileView