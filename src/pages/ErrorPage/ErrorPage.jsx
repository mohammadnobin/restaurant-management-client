import React from 'react';
import error from '../../assets/ErrorPage/error.png'
import error2 from '../../assets/ErrorPage/error2.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='container mx-auto px-4 gap-y-4 md:gap-y-10 lg:px-0 flex items-center flex-col justify-center h-screen'>
            <div className="flex items-center md:gap-x-10 justify-center">
                <div className="">
                    <img className='w-[350px]' src={error2} alt="error photo" />
                </div>
                <div className="">
                    <img className='w-[250px]' src={error} alt="error photo" />
                </div>
                <div className="">
                    <img className='w-[350px]' src={error2} alt="error photo" />
                </div>
            </div>
            <div className="text-center space-y-5">
            <h3 className='md:text-6xl text-3xl font-bold'>Page Not Found.</h3>
            <Link to='/'>
            <button className='py-3 px-10 rounded-xl  bg-[#EA6A12] text-white font-semibold text-lg md:text-2xl cursor-pointer '>Back To Home</button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;