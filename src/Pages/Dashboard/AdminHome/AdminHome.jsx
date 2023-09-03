
import useAuth from '../../../Hooks/useAuth/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaIceCream, FaTruck, FaUsers, FaWallet } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { PieChart, Pie } from 'recharts';


const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })
    const revenue = stats.revenue ;
    //rechart
    const { data: chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data;
        }
    })

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='w-full mt-6'>
            <h2 className='text-3xl text-center'>Welcome Back, <span className='text-red-800'>{user.displayName}</span></h2>

            <div className="stats bg-transparent shadow-lg mt-8 gap-2">

                <div className="stat p-4 text-center flex from-purple-600 to-purple-100 bg-gradient-to-r rounded-lg">
                    <div className='my-auto text-white text-3xl'>
                        <FaWallet></FaWallet>
                    </div>
                    <div>
                        <div className="stat-title text-lg mb-2">Revenue</div>
                        <div className="stat-value">${revenue}</div>
                    </div>
                </div>
                <div className="stat p-4 text-center flex from-yellow-600 to-yellow-100 bg-gradient-to-r  rounded-lg">
                    <div className='my-auto text-white text-3xl'>
                        <FaUsers></FaUsers>
                    </div>
                    <div>
                        <div className="stat-title  text-lg mb-2">New Users</div>
                        <div className="stat-value">{stats.users}</div>
                    </div>
                </div>
                <div className="stat p-4 text-center flex from-rose-600 to-rose-100 bg-gradient-to-r rounded-lg">
                    <div className='my-auto text-white text-3xl'>
                        <FaIceCream></FaIceCream>
                    </div>
                    <div>
                        <div className="stat-title  text-lg mb-2">Menu Items</div>
                        <div className="stat-value">{stats.products}</div>
                    </div>
                </div>
                <div className="stat p-4 text-center flex from-blue-600 to-blue-100 bg-gradient-to-r  rounded-lg">
                    <div className='my-auto text-white text-3xl'>
                        <FaTruck></FaTruck>
                    </div>
                    <div>
                        <div className="stat-title  text-lg mb-2">Orders</div>
                        <div className="stat-value">{stats.orders}</div>
                    </div>
                </div>

            </div>
            <div className='flex border-2 mt-8'>
                <div className='w-1/2'>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="totalPrice" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className='w-1/2'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Legend></Legend>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="count"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell name={entry.category} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};


export default AdminHome;