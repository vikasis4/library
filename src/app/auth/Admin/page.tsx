'use client';

import StyledButton from '@/package/ui/StyledButton';
import React from 'react'
import { useRouter } from 'next/navigation'
import DropMenu from '@/components/DropMenu';


function page() {

    const [state, setState] = React.useState('Login');
    const [form, setForm] = React.useState({
        userId: '',
        password: '',
    });
    const [Registerform, setRegisterForm] = React.useState({
        name: '',
        email: '',
        password: '',
        category: 'Select',
    })
    const router = useRouter()

    return (
        <div className="flex justify-center items-center flex-col font-poppin">
            <h1 className="mt-10 font-medium text-6xl font-poppin">Admin {state}</h1>

            {
                state == 'Login' ?
                    <div className="m-16 py-14 px-10 flex flex-col gap-2 bg-gray-300 rounded-md shadow-md">
                        <h1>Enter Your userId</h1>
                        <input alt="Hover text" className="rounded-md py-2 px-6 font-poppin" title="userId" value={form.userId} onChange={(e) => setForm({ ...form, userId: e.target.value })} type="text" name="userId" />
                        <h1 className="mt-4">Enter Your Password</h1>
                        <input className="rounded-md py-2 px-6 font-poppin" title="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" name="password" />

                        <div className="flex gap-4 mt-12">
                            <StyledButton txt="Submit" fxn={() => { }} />
                            <StyledButton txt="Register" fxn={() => setState('Register')} />
                            <StyledButton txt="Cancel" fxn={() => router.push('/')} />
                        </div>
                    </div>
                    :
                    <div className="m-16 py-14 px-10 justify-center items-center flex flex-col gap-2 bg-gray-300 rounded-md shadow-md">

                        <div className="flex justify-start items-center">

                            <h1 className="ml-8 mr-2">Enter Your Name</h1>
                            <input alt="Hover text" className="rounded-md py-2 px-6 font-poppin" title="userId" value={Registerform.name} onChange={(e) => setRegisterForm({ ...Registerform, name: e.target.value })} type="text" name="name" />

                            <h1 className="ml-8 mr-2">Enter Your Email</h1>
                            <input className="rounded-md py-2 px-6 font-poppin" title="password" value={Registerform.email} onChange={(e) => setRegisterForm({ ...Registerform, email: e.target.value })} type="email" name="email" />
                        </div>

                        <div className="flex mt-8 justify-start items-center">

                        <h1 className="ml-8 mr-2">Enter Your Password</h1>
                        <input className="rounded-md py-2 px-6 font-poppin" title="password" value={Registerform.password} onChange={(e) => setRegisterForm({ ...Registerform, password: e.target.value })} type="password" name="password" />

                        <h1 className="ml-8 mr-2">Enter Your Category</h1>
                       <DropMenu prop={{Registerform, setRegisterForm}} />

                        </div>

                        <div className="flex gap-4 mt-12">
                            <StyledButton txt="Submit" fxn={() => { }} />
                            <StyledButton txt="Login" fxn={() => setState('Login')} />
                            <StyledButton txt="Cancel" fxn={() => router.push('/')} />
                        </div>
                    </div>
            }

        </div>
    )
}

export default page