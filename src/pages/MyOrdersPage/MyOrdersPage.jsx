// my order code here sdf
import React, { Suspense } from 'react';
import OrderList from './OrderList';
import UseAuth from '../../hooks/UseAuth';
import Loading from '../Shared/Loading';
import useOrderApi from '../../api/useOrderApi';


const MyOrdersPage = () => {
    const {user}= UseAuth()
    const {myOrdersPromise} = useOrderApi()
    return (
        <div className='containerr'>
            <Suspense fallback={<Loading /> }>
                <OrderList myOrders={myOrdersPromise(user?.email,
                    user.accessToken
                )} />
            </Suspense>
        </div>
    );
};

export default MyOrdersPage;