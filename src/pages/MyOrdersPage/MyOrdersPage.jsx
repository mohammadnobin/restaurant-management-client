import React, { Suspense } from 'react';
import OrderList from './OrderList';
import { myOrders } from '../../api/MyOrders';
import UseAuth from '../../hooks/UseAuth';
import Loading from '../Shared/Loading';


const MyOrdersPage = () => {
    const {user}= UseAuth()
    console.log(user)
    return (
        <div>
            <Suspense fallback={<Loading /> }>
                <OrderList myOrders={myOrders(user?.email,
                    user.accessToken
                )} />
            </Suspense>
        </div>
    );
};

export default MyOrdersPage;