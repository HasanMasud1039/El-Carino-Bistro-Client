// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/UseMenu/UseMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)})
    // },[])
    return (
        <section>
            <SectionTitle
                heading={"From Our Menu"}
                subheading={"Popular Items"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 my-8 p-4">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item ={item}
                    ></MenuItem>)
                }
            </div>
            <Link to='/menu'> <button className="btn btn-outline  border-0 border-b-4 ps-8 mt-4">View Full Menu</button></Link>
            
        </section>
    );
};

export default PopularMenu;