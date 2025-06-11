import React, { use } from 'react';

const MyFoodsLIst = ({myaddedFood}) => {
    const data = use(myaddedFood)
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default MyFoodsLIst;