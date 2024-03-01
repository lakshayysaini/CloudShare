import React, { useState } from 'react'
import { Copy, CopyIcon } from 'lucide-react';

const FileShareForm = ( { file, onPasswordSave } ) => {
    const [isPasswordEnable, setIsPasswordEnable] = useState( false );
    const [password, setPassword] = useState( '' );

    return file && (
        <div className='flex flex-col gap-2'>
            <div>
                <label className='text-[14px] text-gray-500'>Short Url</label>
                <div className='flex gap-5 p-2 border rounded-md justify-center'>
                    <input type='text' value={ file.shortUrl } disabled
                        className='disabled:text-gray-500 bg-transparent' />
                    <Copy className='text-gray-400 hover:text-gray-600' />
                </div>
            </div>

            <div className='gap-3 flex mt-5'>
                <input type='checkbox' onChange={ ( e ) => setIsPasswordEnable( true ) } />
                <label>Enable Password?</label>
            </div>

            {
                isPasswordEnable ?
                    <div className='flex gap-3 items-center'>
                        <div className='border rounded-md w-full p-2'>
                            <input type="password"
                                className='disabled:text-gray-500 bg-transparent outline-none'
                                onChange={ ( e ) => setPassword( e.target.value ) }
                            />
                        </div>
                        <button className='p-2 bg-primary text-white rounded-md disabled:bg-gray-300 hover:bg-blue-600'
                            disabled={ password?.length < 3 }
                            onClick={ () => onPasswordSave( password ) }
                        >
                            Save
                        </button>
                    </div> : null
            }
        </div>
    )
}

export default FileShareForm