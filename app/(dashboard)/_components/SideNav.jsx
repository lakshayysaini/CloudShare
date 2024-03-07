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
            path: '',
            subheading: 'Coming Soon'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '',
            subheading: 'Coming Soon'
        }
    ]

    return (
        <div className='shadow-sm border-r h-full'>
            <div className='p-5 border-b text-center'>
                <Image src='/CloudShare.png' width={ 150 } height={ 60 } href='#' />
            </div>
            <div className='flex flex-col float-left w-full'>
                { menuList.map( ( item, index ) => (
                    <Link href={ item.path } >
                        <button className={ `flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500 ${ activeIndex === index ? `bg-blue-50 text-primary` : `` }` } onClick={ () => { setActiveIndex( index ); closeSideBar() } }>
                            <item.icon />
                            <h2>{ item.name }</h2>
                            {
                                item.subheading ?
                                    <span
                                        className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                                    >
                                        <p className="whitespace-nowrap text-sm">{ item.subheading }</p>
                                    </span>
                                    : null
                            }
                        </button>
                    </Link>
                ) ) }
            </div>
        </div>
    )
}

export default SideNav