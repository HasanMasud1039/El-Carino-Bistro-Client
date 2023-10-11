import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/m2.webp'
import img2 from '../../../assets/home/m3.webp'
import img3 from '../../../assets/home/m4.webp'
import img4 from '../../../assets/home/m5.webp'
import img5 from '../../../assets/home/m6.jpg'
import img6 from '../../../assets/home/m7.jpg'

const Banner = () => {
    return (
        <Carousel autoPlay={true}>
                <div>
                    <img src={img1}/>
      
                </div>
                <div>
                    <img src={img2} />
   
                </div>
                <div>
                    <img src={img3} />
                  
                </div>
                <div>
                    <img src={img4} />
                  
                </div>
                <div>
                    <img src={img5} />
                   
                </div>
                <div>
                    <img src={img6} />
                 
                </div>
            </Carousel>
    );
};

export default Banner;