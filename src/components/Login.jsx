import React from 'react';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className=' flex  bg-white-200  w-full flex-col items-center justify-center  h-screen'>
            <div className='flex flex-col items-center justify-center border-2 border-grey-700 pt-8 pb-8 pl-8 pr-8 rounded-lg'>
            <h1 className='text-2xl font-semibold pl-0 '>Login</h1>
            <p className='my-5 text-1xl'>Enter Your Details Below</p>
            <input className='border-2 border-gray-800 text-2xl p-1  mb-1 border-none border-black-4 ' type="Email" placeholder='Email' />
            <input className='border-2 border-gray-800 text-2xl p-1 mt-1' type="Password" placeholder='Password' /><br/>
            <button className=' w-full bg-red-500 rounded-lg text-2xl py-2 mb-2 focus:bg-green-400'>Login</button>
                {/* <button className=' w-full bg-red-500 rounded-lg text-2xl py-3  focus:bg-green-400'>SignUp</button> */}
                <Link to="/Register" className='font-blue-200'>create account</Link> 
            </div> 
        </div>
    );
}
export default Login;