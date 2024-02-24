import React from 'react'

function layout( { children } ) {
    return (
        <div>
            <div className='hidden h-full md:w-64 flex-col fixed inset-y-0 z-50'>

            </div>
            <div className='md:ml-64'>
                { children }
            </div>
        </div>
    )
}

export default layout