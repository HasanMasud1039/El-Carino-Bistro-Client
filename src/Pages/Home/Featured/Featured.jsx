import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
import { Link } from "react-router-dom";

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle
             subheading={"Check It Out"}
             heading={"Featured Item"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pt-20 pb-12 md:px-32 px-6">
                <div>
                    <img className="" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Oct 03, 1996</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quam libero officia labore sequi facilis possimus dolor eum doloremque dolore corrupti nam repudiandae delectus, ex ducimus aliquam dolores atque esse saepe? Sapiente rem illo est ex praesentium ducimus aut voluptas repudiandae molestiae tempore, explicabo itaque labore laborum nobis quam. Quo, voluptate. Amet soluta mollitia dolor molestiae repellat, et harum ex?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4"><Link to='/order/salad'>Order Food</Link></button>
                    
                </div>
            </div>
        </div>
    );
};

export default Featured;