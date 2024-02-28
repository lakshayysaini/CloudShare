'use client'

import React, { useState } from 'react'
import UploadForm from './_components/UploadForm';
import { app } from '@/firebaseConfig';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '@/app/_utils/GenerateRandomString';

const Upload = () => {

  const { user } = useUser();
  const storage = getStorage( app );
  const [progress, setProgress] = useState();
  const db = getFirestore( app );

  const saveInfo = async ( file, fileUrl ) => {
    const docId = Date.now().toString();

    await setDoc( doc( db, "uploadedFile", docId ), {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: fileUrl,
      userEmail: user.primaryEmailAddress.emailAddress,
      userName: user.fullName,
      password: '',
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + generateRandomString()
    } );
  }

  const uploadFile = ( file ) => {

    const metadata = {
      contentType: file.type
    };

    const imageRef = ref( storage, 'file-upload/' + file?.name );
    const uploadTask = uploadBytesResumable( imageRef, file, file.type );

    uploadTask.on( 'state_changed',
      ( snapshot ) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progressPercentage = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
        setProgress( Math.round( progressPercentage ) );
        console.log( 'Upload is ' + progressPercentage + '% done' );

        progressPercentage === 100 && getDownloadURL( uploadTask.snapshot.ref ).then( ( downloadURL ) => {
          console.log( 'File available at', downloadURL );
          saveInfo( file, downloadURL );
        } );
      } )
  }

  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>Start <strong className='text-primary'>Uploading</strong> Your <strong className='text-primary'>File</strong> and <strong className='text-primary'>Share</strong> Them.</h2>
      <UploadForm uploadFileClicked={ ( file ) => uploadFile( file ) } progress={ progress } />
    </div>
  )
}

export default Upload;