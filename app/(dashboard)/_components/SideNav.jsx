'use client'

import { File, Shield, Upload } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'

function SideNav( { closeSideBar } ) {

    const [activeIndex, setActiveIndex] = useState( 0 );

    const menuList = [
        {
            id: 1,
            name: 'Upload',
            icon: Upload,
            path: '/upload',
        },
        {
            id: 2,
            name: 'Files',
            icon: File,
            path: '/files',
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade',
        }
    ]

    return (
        <div className='shadow-sm border-r h-full'>
            <div className='p-5 border-b text-center'>
                <a href="/">
                    <Image src='/CloudShare.png' width={ 150 } height={ 60 } />
                </a>
            </div>
            <div className='flex flex-col float-left w-full'>
                { menuList.map( ( item, index ) => (
                    <Link href={ item.path } >
                        <button className={ `flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500 ${ activeIndex === index ? `bg-blue-50 text-primary` : `` }` } onClick={ () => { setActiveIndex( index ); closeSideBar() } }>
                            <item.icon />
                            <h2>{ item.name }</h2>
                        </button>
                    </Link>
                ) ) }
            </div>
        </div>
    )
}

export default SideNav