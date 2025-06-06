import React from 'react';
import menuslider1 from '../../assets/menuCategory/menuslider1.png'
import { RiArrowRightSLine } from 'react-icons/ri';

const MenuSliderCard = (props) => {
    return (
        <div className='p-6 bg-white group  hover:bg-[#ef9355] duration-300 rounded-2xl text-center'>
            <img className='w-[150px] mx-auto' src={props.img} alt="menuslider1" />
            <p className='border-b group-hover:border-b-white  duration-300 pb-4 lg:font-bold lg:text-2xl group-hover:text-white    '>{props.title}</p>
            <div className="p-2 mt-4 rounded-full bg-orange group-hover:bg-white group-hover:text-black text-white duration-300 inline-block">
            <RiArrowRightSLine size={30} className='mx-auto' />
            </div>
        </div>
    );
};

export default MenuSliderCard;