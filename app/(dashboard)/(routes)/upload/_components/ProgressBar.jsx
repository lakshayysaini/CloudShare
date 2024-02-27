import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBarPercentage = ({progress}) => {
    return (
        <div className='w-3/4 mt-5'>
            <ProgressBar
                completed={ progress }
                maxCompleted= {100}
            />
        </div>
    )
}

export default ProgressBarPercentage