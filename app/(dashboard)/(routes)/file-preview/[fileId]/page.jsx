'use client'

import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { app } from '../../../../../firebaseConfig';
import Link from 'next/link';
import { ArrowLeftSquare } from 'lucide-react';
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';

const FilePreview = ( { params } ) => {
    const db = getFirestore( app );

    const [fileInfo, setFileInfo] = useState();

    //console.log( 'params', params )


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

    //console.log( 'fileInfo', fileInfo )

    useEffect( () => {
        params?.fileId && getFileInfo()
    }, [params?.fileId] )

    const onPasswordSave = async ( password ) => {
        const docRef = doc( db, "uploadedFile", params?.fileId );
        await updateDoc( docRef, {
            password: password
        } );
        
    }

    return (
        <div className='py-10 px-20'>
            <Link href='/upload' className='flex gap-3'>
                <ArrowLeftSquare /> Go to Upload
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-5'>
                <FileInfo file={ fileInfo } />
                <FileShareForm
                    file={ fileInfo }
                    onPasswordSave={ ( password ) => onPasswordSave( password ) }
                />
            </div>
        </div>
    )
}

export default FilePreview