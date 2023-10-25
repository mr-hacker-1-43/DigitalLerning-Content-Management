import React from 'react'

const AnimatedButton = ({ buttonName }) => {
    return (
        <button className='rounded-xl outline outline-2 hover:outline-pink-400 px-3 text-center text-lg font-medium shadow-md hover:shadow-pink-300 py-0.5'type='button'>
            {buttonName}
        </button>
    )
}

export default AnimatedButton;