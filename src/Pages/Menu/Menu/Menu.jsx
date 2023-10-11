import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner2.webp'
import dessertImg from '../../../assets/menu/d3.jpg'
import saladImg from '../../../assets/menu/salad2.jpg'
import pizzaImg from '../../../assets/menu/piz3.jpg'
import soupImg from '../../../assets/menu/sou3.jpg'
import useMenu from "../../../Hooks/UseMenu/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
             <Helmet>
                <title>el Cariño Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
             
            <SectionTitle subheading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title="dessert" coverImg={dessertImg} ></MenuCategory>
            <MenuCategory items={salad} title="salad" coverImg={saladImg} ></MenuCategory>
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg} ></MenuCategory>
            <MenuCategory items={soup} title="soup" coverImg={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;