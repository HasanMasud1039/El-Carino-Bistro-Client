import { FaEnvelope, FaFacebook, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../../assets/logo1.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer mx-auto p-10 bg-neutral text-neutral-content">
                <div className='text-center space-y-2'>
                    <img src={logo} className="mx-auto w-20" alt="" />
                    <p>el Cariño Bistro<br />Providing the best food!</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col mt-4 gap-5">
                        <Link to='https://www.facebook.com'><FaFacebook className='text-blue-600 h-8 w-8'></FaFacebook></Link>
                        <Link to='https://www.youtube.com'><FaYoutube className='text-red-600 h-8 w-8'></FaYoutube></Link>
                        <Link to='https://www.twitter.com'><FaTwitter className='text-blue-400 h-8 w-8'></FaTwitter></Link>
                                         
                    </div>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <p>516, Cantonment Super Market </p> <p> Baluchara, Baizid </p> <p> Chattogram</p>
                    <div className='flex gap-2'>
                        <FaPhone></FaPhone>018498392989
                    </div>
                    <div className='flex gap-2'>
                        <FaEnvelope></FaEnvelope>el_Cariño_Bistro@hotmail.com
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by el Cariño Bistro</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;