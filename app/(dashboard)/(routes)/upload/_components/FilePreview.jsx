import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FilePreview = ( { file, removeFile } ) => {
    return (
        <div className='flex items-start justify-center gap-5 rounded-md p-2 border border-blue-400'>
            <div className='flex items-center p-2'>
                <Image src='/fileIcon.png' width={ 60 } height={ 60 } alt='file' />
                <div className='text-left'>
                    <h2>{ file.name }</h2>
                    <h2 className='text-[12px] text-gray-400'>{ file.type }</h2>
                    <h2 className='text-[12px] text-gray-400'>{ ( file.size / 1024 / 1024 ).toFixed( 2 ) }MB</h2>
                </div>
            </div>
            <X className='text-red-500' onClick={ removeFile } />
        </div>
    )
}

export default FilePreview