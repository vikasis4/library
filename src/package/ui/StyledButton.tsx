import React from 'react'

function StyledButton({ txt, fxn }: { txt: string, fxn: any }) {
    return (
        <div
            onClick={fxn}
            className='bg-white text-center shadow-md px-8 py-2 rounded-md hover:cursor-pointer active:scale-75 duration-100'>
            <h1>{txt}</h1>
        </div>
    )
}

export default StyledButton