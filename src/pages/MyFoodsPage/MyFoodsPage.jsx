import React, { Suspense } from 'react';
import MyFoodsLIst from './MyFoodsLIst';
import { myaddedFood } from '../../api/MyAddedFoods';
import UseAuth from '../../hooks/UseAuth';
import Loading from '../Shared/Loading';

const MyFoodsPage = () => {
    const{ user}= UseAuth()
    return (
        <div className='containerr'>
            this is MyfoodsPage
            <Suspense fallback={<Loading />}>
                <MyFoodsLIst myaddedFood={myaddedFood(user?.email)} />
            </Suspense>
        </div>
    );
};

export default MyFoodsPage;