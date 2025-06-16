import React, { Suspense } from 'react';
import MyFoodsLIst from './MyFoodsLIst';
import UseAuth from '../../hooks/UseAuth';
import Loading from '../Shared/Loading';
import useMyaddedFoodApi from '../../api/useMyaddedFoodApi';

const MyFoodsPage = () => {
    const{ user}= UseAuth()
    const {myAddedFoodsPromise} = useMyaddedFoodApi()
    return (
        <div className='containerr'>
            <Suspense fallback={<Loading />}>
                <MyFoodsLIst myaddedFood={myAddedFoodsPromise(user?.email)} />
            </Suspense>
        </div>
    );
};

export default MyFoodsPage;