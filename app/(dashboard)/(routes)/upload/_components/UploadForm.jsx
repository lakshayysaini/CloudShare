import React, { useState } from 'react'
import AlertMessage from './AlertMessage';
import FilePreview from './FilePreview';
import ProgressBarPercentage from './ProgressBar';

const UploadForm = ( { uploadFileClicked, progress } ) => {

    const [file, setFile] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const onFileSelect = ( file ) => {
        console.log( file )
        if ( file && file.size > 2000000 ) {
            setErrorMessage( 'Maximum File Upload Size is 2MB' )
            return;
        }
        setErrorMessage( null );
        setFile( file );
    }


    const removeFile = ( e ) => {
        e.preventDefault();
        setFile( null );
    }

    return (
        <div className='text-center flex flex-col justify-center items-center'>
            <div className="flex items-center justify-center w-full">
                <label for="dropzone-file" className={ `flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-white ${ !file ? 'hover:bg-gray-200' : '' }` }>
                    {
                        file
                            ?
                            <FilePreview file={ file } removeFile={ removeFile } />
                            :
                            <>
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-blue-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-xl text-gray-500 "><strong>Click to Upload</strong> or <strong className='text-primary'>Drag</strong> and <strong className='text-primary'> Drop</strong></p>
                                    <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (Max Size: 2MB)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" onChange={ ( event ) => onFileSelect( event.target.files[0] ) } />
                            </>
                    }
                </label>
            </div>
            {
                errorMessage
                    ?
                    <AlertMessage msg={ errorMessage } />
                    :
                    null
            }

            {
                progress > 0 ?
                    <ProgressBarPercentage progress={ progress } />
                    :
                    <button
                        disabled={ !file }
                        className='p-2 bg-primary text-white w-full lg:w-1/6 rounded-full mt-5 disabled:bg-gray-500'
                        onClick={ () => uploadFileClicked( file ) }>
                        Upload
                    </button>
            }
        </div>
    )
}

export default UploadForm 