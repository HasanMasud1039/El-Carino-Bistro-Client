import React from 'react';
import useAuth from '../../../Hooks/useAuth/useAuth';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div className='w-full m-6'>
            <h2 className='text-3xl'>Welcome Back, <span className='text-red-800'>{user.displayName}</span></h2>
        </div>
    );
};

export default UserHome;