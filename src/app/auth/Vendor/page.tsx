'use client';

import StyledButton from '@/package/ui/StyledButton';
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios';


function page() {

    const [state, setState] = React.useState('Register');
    const [form, setForm] = React.useState({
        userId: '',
        password: '',
    });
    const [Registerform, setRegisterForm] = React.useState({
        name: '',
        email: '',
        password: '',
    })
    const router = useRouter();

    const signup = async () => {
        try {
            await axios.post('http://localhost:5000/api/v1/vendor/signup', Registerform).then(async (response) => {
                console.log(response);
                
                if (response.data.sucess === 'true') {
                    localStorage.setItem('userId', response.data.userId);
                    localStorage.setItem('name', response.data.name);
                    localStorage.setItem('email', response.data.email);
                    alert('SignUp was Successfull')
                    router.push('/vendor')
                } else if (response.data.sucess === 'duplicate') {
                    alert('Email already exists')
                } else {
                    alert('Something went wrong, please try again')
                }
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const login = async () => {
        try {
            await axios.post('http://localhost:5000/api/v1/vendor/login', form).then(async (response) => {
                if (response.data.sucess === 'true') {                    
                    localStorage.setItem('userId', response.data.userId);
                    localStorage.setItem('name', response.data.name);
                    localStorage.setItem('email', response.data.email);
                    alert('Login was Successfull')
                    router.push('/vendor')
                } else {
                    alert('Something went wrong, please try again')
                }
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };


    return (
        <div className="flex justify-center items-center flex-col font-poppin">
            <h1 className="mt-10 font-medium text-6xl font-poppin">Vendor {state}</h1>

            {
                state == 'Login' ?
                    <div className="m-16 py-14 px-10 flex flex-col gap-2 bg-gray-300 rounded-md shadow-md">
                        <h1>Enter Your userId</h1>
                        <input alt="Hover text" className="rounded-md py-2 px-6 font-poppin" title="userId" value={form.userId} onChange={(e) => setForm({ ...form, userId: e.target.value })} type="text" name="userId" />
                        <h1 className="mt-4">Enter Your Password</h1>
                        <input className="rounded-md py-2 px-6 font-poppin" title="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" name="password" />

                        <div className="flex gap-4 mt-12">
                            <StyledButton txt="Submit" fxn={login} />
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


                        </div>

                        <div className="flex gap-4 mt-12">
                            <StyledButton txt="Submit" fxn={signup} />
                            <StyledButton txt="Login" fxn={() => setState('Login')} />
                            <StyledButton txt="Cancel" fxn={() => router.push('/')} />
                        </div>
                    </div>
            }

        </div>
    )
}

export default page