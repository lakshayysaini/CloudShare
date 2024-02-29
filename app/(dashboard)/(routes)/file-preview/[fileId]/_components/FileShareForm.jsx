import React, { useState } from 'react'

const FileShareForm = ( { file, onPasswordSave } ) => {
    const [isPasswordEnable, setIsPasswordEnable] = useState( false );
    const [password, setPassword] = useState( '' );
    return (
        <div>FileShareForm</div>
    )
}

export default FileShareForm