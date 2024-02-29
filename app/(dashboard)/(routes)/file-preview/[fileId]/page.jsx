'use client'

import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from '@/firebaseConfig';
import Link from 'next/link';
import { ArrowLeftSquare } from 'lucide-react';

const FilePreview = ( { params } ) => {
    const db = getFirestore( app );

    const [fileInfo, setFileInfo] = useState();

    const getFileInfo = async () => {
        const docRef = doc( db, "uploadedFile", params?.fileId );
        const docSnap = await getDoc( docRef );
        if ( docSnap.exists() ) {
            console.log( "Document data:", docSnap.data() );
            setFileInfo( docSnap.data() );
        } else {
            // docSnap.data() will be undefined in this case
            console.log( "No such document!" );
        }
    }

    useEffect( () => {
        params?.fileId && getFileInfo()
    }, [] )

    return (
        <div className='py-10 px-10'>
            <Link href='/upload' className='glex-gap-3'>
                <ArrowLeftSquare /> Go Back to Upload
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5'> 

            </div>
        </div>
    )
}

export default FilePreview