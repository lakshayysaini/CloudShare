import { AlertCircle } from 'lucide-react'
import React from 'react'

const AlertMessage = ( { msg } ) => {
    return (
        <div className='p-4 bg-red-500 mt-5 lg:w-1/2 md:w-3/4 sm:w-full text-white rounded-md flex gap-5 items-center'>
            <AlertCircle />
            { msg }
        </div>
    )
}

export default AlertMessage