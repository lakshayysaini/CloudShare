import { File, Shield, Upload } from 'lucide-react'
import React from 'react'

function SideNav() {
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
        <div>

        </div>
    )
}

export default SideNav