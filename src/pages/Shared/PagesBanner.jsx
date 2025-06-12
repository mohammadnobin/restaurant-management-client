import React from 'react';
import { Link } from 'react-router';

const PagesBanner = (props) => {
    return (
        <div className='pageBannerBg relative after:absolute after:w-full after:h-full after:bg-white/50 after:top-0 after:left-0 after:-z-10 z-0  bg-no-repeat bg-cover bg-center  p-10 mt-[120px] mb-10 rounded-4xl'>
            <h2 className='text-center capitalize text-orange text-3xl md:text-7xl font-bold '> {props.title} </h2>
            <h3 className='text-center pt-2 md:pt-6 text-lg md:text-3xl font-bold cursor-pointer'>
                <Link to='/' className='text-orange'>Home</Link> | {props.title}
            </h3>
        </div>
    );
};

export default PagesBanner;