import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const FileInfo = ( { file } ) => {
    const [fileType, setFileType] = useState();

    useEffect( () => {
        file && setFileType( file?.fileType.split( '/' )[0] );
        console.log( file )
    }, [file] )

    return (
        <div className='text-center border flex justify-center m-4 flex-col items-center p-2 rounded-md border-blue-200'>
            <Image
                src='/fileIcon.png'
                width={ 200 }
                height={ 200 }
                className='h-[200px] rounded-md object-contain'
            />
            <div>
                <h2>{ file?.fileName }</h2>
                <h2 className='text-gray-400 text-[13px]'>{ file?.fileType }</h2>
            </div>
        </div>
    )
}

export default FileInfo