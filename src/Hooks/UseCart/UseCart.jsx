import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import useAuth from '../useAuth/useAuth';

const useCart = () => {

    const {user, loading} = useAuth();

    // const token = localStorage.getItem('access-token');

    const [axiosSecure] = useAxiosSecure();


    const { isLoading, refetch,  data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async() => {
            const response= await axiosSecure(`/carts?email=${user?.email}`)
            return response.data;
        },
        // queryFn: async() => {
        //     const response= await fetch(`https://el-carino-bistro-server.vercel.app/carts?email=${user.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return response.json();
        // },
      })
    return [cart, refetch, isLoading];
}
export default useCart;