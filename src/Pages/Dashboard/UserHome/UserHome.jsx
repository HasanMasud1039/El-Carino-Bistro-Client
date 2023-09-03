
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../Hooks/useAuth/useAuth';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div className='w-full p-6 m-6'>
             <Helmet>
                <title>el Cariño Bistro | User Home</title>
            </Helmet>
            <h2 className='text-3xl'>Welcome Back, <span className='text-red-800'>{user.displayName}</span></h2>
        </div>
    );
};

export default UserHome;