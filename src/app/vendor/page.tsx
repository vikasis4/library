'use client'
import Logout from '@/utils/Logout';
import { useRouter } from 'next/navigation';
import React from 'react'


var name = 'Vikas Singh';
var txt = "bg-gray-300 px-8 py-2 rounded-md shadow-md hover:cursor-pointer active:scale-75 duration-100"

function page() {

    const router = useRouter();
    const logout = Logout()

    return (
        <div className="font-poppin">
            <h1 className="bg-gray-300 mt-20 px-12 py-4 text-xl rounded-md shadow-md w-1/2 m-auto text-center">Welcome Vendor - {name}</h1>
            <div className="flex flex-row mt-20 gap-8 justify-center items-center">
                <h1 className={txt} onClick={() => router.push('/vendor/yourItem')}>Your Items</h1>
                <h1 className={txt} onClick={() => router.push('/vendor/addnewItem')}>Add New Item</h1>
                <h1 className={txt}>Transaction</h1>
                <h1 onClick={() => logout()} className={txt}>Logout</h1>
            </div>
        </div>
    )
}

export default page