import React, { useState } from 'react'
import { Copy, CopyIcon } from 'lucide-react';
import GlobalApi from '../../../../../_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import UploadSucess from './UploadSucess';

const FileShareForm = ( { file, onPasswordSave } ) => {
    const [isPasswordEnable, setIsPasswordEnable] = useState( false );
    const [password, setPassword] = useState( '' );
    const [isRemovealert, setIsRemoveAlert] = useState( false );
    const [email, setEmail] = useState();
    const { user } = useUser();

    const sendEmail = () => {
        const data = {
            emailToSend: email,
            userName: user?.fullName,
            fileName: file.fileName,
            fileSize: file.fileSize,
            fileType: file.fileType,
            shortUrl: file.shortUrl,
        }
        GlobalApi.SendEmail( data ).then( resp => {
            console.log( resp );
        } )
    };

    const onCopy = () => {
        navigator.clipboard.writeText( file.shortUrl );
        setIsRemoveAlert( true );
    };

    const removeAlert = ( e ) => {
        e.preventDefault();
        setIsRemoveAlert( false );
    }

    return file && (
        <div className='flex flex-col gap-2 w-3/4'>

            {
                isRemovealert ?
                    <UploadSucess heading="Copied Successful" removeAlert={ removeAlert } />
                    :
                    <div>
                        <label className='text-[14px] text-gray-500'>Short Url</label>
                        <div className='flex gap-5 p-2 border rounded-md justify-between items-center text-left'>
                            <input type='text' value={ file.shortUrl } disabled
                                className='disabled:text-gray-500 rounded-full bg-transparent border-none' />
                            <Copy className='text-gray-400 hover:text-gray-600' onClick={ onCopy } />
                        </div>
                    </div>
            }

            <div className='gap-3 flex mt-1'>
                <input type='checkbox' onChange={ ( e ) => setIsPasswordEnable( true ) } />
                <label className='text-[14px] text-gray-500'>Enable Password?</label>
            </div>

            {
                isPasswordEnable ?
                    <div className='flex gap-3 items-center justify-between'>
                        <div className='border rounded-md p-2 w-full'>
                            <input type="password"
                                className='disabled:text-gray-500 bg-transparent border-none'
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