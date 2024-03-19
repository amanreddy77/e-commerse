import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className='flex bg-white-200 w-full flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center justify-center border-2 border-grey-700 p-10 rounded-lg'>
                <h1 className='text-4xl font-semibold'>Register</h1>
                <p className='my-5 text-2xl'>Enter Your Details Below</p>
                <input className='border-2 border-gray-800 text-3xl p-1 mt-1' type="text" placeholder='Name' />
                <input className='border-2 border-gray-800 text-3xl p-1 mt-2' type="email" placeholder='Email' />
                <input className='border-2 border-gray-800 text-3xl p-1 mt-2 mb-2' type="password" placeholder='Password' />
                <button className='w-full bg-red-500 rounded-lg text-2xl py-3 focus:bg-green-400'>SignUp</button>
                <Link to="/" className='text-blue-200'>Already a member</Link>
            </div>
        </div>
    );
}

export default Register;
