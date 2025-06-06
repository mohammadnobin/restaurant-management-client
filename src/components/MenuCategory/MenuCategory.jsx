import React from 'react';
import MenuSliderCard from './MenuSliderCard';
import menuslider1 from '../../assets/menuCategory/menuslider1.png'
import menuslider2 from '../../assets/menuCategory/menuslider2.png'
import menuslider3 from '../../assets/menuCategory/menuslider3.png'
import menuslider4 from '../../assets/menuCategory/menuslider4.png'
import menuslider5 from '../../assets/menuCategory/menuslider5.png'
import menuslider6 from '../../assets/menuCategory/menuslider6.png'

const MenuCategory = () => {
    return (
        <div className='py-24 containerr'>
            <h2 className='font-semibold text-3xl text-center '>Menu Category</h2>
            <div className="grid grid-cols-4 gap-4 my-10">
                <MenuSliderCard title='Snacks' img={menuslider3} />
                <MenuSliderCard title='Fruits' img={menuslider2} />
                <MenuSliderCard title='Hotdog'  img={menuslider4}/>
                <MenuSliderCard title='Burger'  img={menuslider5}/>
                <MenuSliderCard title='pizza' img={menuslider1} />
                <MenuSliderCard title='Drink'  img={menuslider6}/>
            </div>
            <div className=""></div>
        </div>
    );
};

export default MenuCategory;