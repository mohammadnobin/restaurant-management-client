// this is for only authcontext making
import React, { use } from 'react';
import { AuthContext } from '../authContext/AuthConext';

const UseAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo
};

export default UseAuth;