'use client'

import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'

function layout( { children } ) {

    const [toggle, setToggle] = useState( false )
    return (
        <div>
            <div className='h-full w-64 flex-col fixed inset-y-0 z-50 md:flex hidden'>
                <SideNav closeSideBar={ () => setToggle( false ) } />
            </div>

            {
                toggle ?
                    <div className='h-full w-64 flex-col fixed inset-y-0 z-30 md:flex hidden bg-white'>
                        <SideNav closeSideBar={ () => setToggle( false ) } />
                    </div> : null
            }
            <div className='md:ml-64'>
                <TopHeader />
                { children }
            </div>
        </div>
    )
}

export default layout