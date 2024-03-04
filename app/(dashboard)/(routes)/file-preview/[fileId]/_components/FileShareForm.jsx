import React, { useState } from 'react'
import { Copy, CopyIcon } from 'lucide-react';
import GlobalApi from '../../../../../_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';

const FileShareForm = ( { file, onPasswordSave } ) => {
    const [isPasswordEnable, setIsPasswordEnable] = useState( false );
    const [password, setPassword] = useState( '' );
    const [email, setEmail] = useState();
    const { user } = useUser();

    const sendEmail = () => {
        const data = {
            emailToSend: email,
            userName: user?.fullName,
            fileName: file.fileName,
            fileSize: file.fileSize,
            fileType: file.fileType,
            shortUrl: file.ShortUrl,
        }
        GlobalApi.SendEmail( data ).then( resp => {
            console.log( resp );
        } )
    };

    return file && (
        <div className='flex flex-col gap-2 w-3/4'>
            <div>
                <label className='text-[14px] text-gray-500'>Short Url</label>
                <div className='flex gap-5 p-2 border rounded-md justify-between text-left'>
                    <input type='text' value={ file.shortUrl } disabled
                        className='disabled:text-gray-500 bg-transparent' />
                    <Copy className='text-gray-400 hover:text-gray-600' />
                </div>
            </div>

            <div className='gap-3 flex mt-5'>
                <input type='checkbox' onChange={ ( e ) => setIsPasswordEnable( true ) } />
                <label className='text-[14px] text-gray-500'>Enable Password?</label>
            </div>

            {
                isPasswordEnable ?
                    <div className='flex gap-3 items-center justify-between'>
                        <div className='border rounded-md p-2 w-full'>
                            <input type="password"
                                className='disabled:text-gray-500 bg-transparent outline-none'
                                onChange={ ( e ) => setPassword( e.target.value ) }
                            />
                        </div>
                        <button className='p-2 bg-primary text-white rounded-md disabled:bg-gray-300 hover:bg-blue-600'
                            disabled={ password?.length < 3 }
                            onClick={ () => onPasswordSave( password ) }
                        >
                            Login
                        </button>
                    </div> : null
            }

            <div className='border rounded-md p-2 flex flex-col mt-5'>
                <label className='text-[14px] text-gray-500'>Send File to Email</label>

                <input type='text' className='border rounded-md bg-transparent p-2 mt-3' onChange={ ( e ) => setEmail( e.target.value ) } />

                <button className='bg-primary mt-2 rounded-md p-2 text-white' onClick={ () => sendEmail() }>
                    Send Email
                </button>
            </div>
        </div>
    )
}

export default FileShareForm