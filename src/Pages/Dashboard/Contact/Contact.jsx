import { FaFacebook, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="flex pt-32 justify-between px-20 mb-10">
            <div >
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
                    <FaPhone></FaPhone>018498392965
                </div>
            </div>
        </div>
    );
};

export default Contact;