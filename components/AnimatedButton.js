import React from 'react'

const AnimatedButton = ({ buttonName }) => {
    return (
        <button className=' rounded-xl outline outline-2 hover:outline-pink-500 px-3 text-center text-lg font-medium shadow-md hover:shadow-pink-00 py-1'>
            {buttonName}
        </button>
    )
}

export default AnimatedButton;