import React, { Suspense } from 'react';
import MyFoodsLIst from './MyFoodsLIst';
import { myaddedFood } from '../../api/MyAddedFoods';
import UseAuth from '../../hooks/UseAuth';

const MyFoodsPage = () => {
    const{ user}= UseAuth()
    return (
        <div>
            this is MyfoodsPage
            <Suspense fallback={'loading your data'}>
                <MyFoodsLIst myaddedFood={myaddedFood(user?.email)} />
            </Suspense>
        </div>
    );
};

export default MyFoodsPage;