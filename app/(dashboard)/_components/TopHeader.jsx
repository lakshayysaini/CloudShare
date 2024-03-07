import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader() {
    return (
        <div className='flex p-5 border-b items-center justify-between md:justify-end'>
            <AlignJustify className='md:hidden' />
            <Image src='/CloudShare.png' width={ 125 } height={ 50 } className='md:hidden' href='#' />
            <UserButton />
        </div>
    )
}

export default TopHeader