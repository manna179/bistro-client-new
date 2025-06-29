import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
  return (
    <div className="mb-3">
      <Carousel>
        <div className=" ">
          <img src="https://i.ibb.co/jygtfk9/meat-dish-with-vegetables-1.jpg"/>
         <button className="btn btn-accent   ">click me </button>
        </div>
        <div>
          <img src="https://i.ibb.co/jygtfk9/meat-dish-with-vegetables-1.jpg" />
         
        </div>
        <div>
          <img src="https://i.ibb.co/jygtfk9/meat-dish-with-vegetables-1.jpg" />
         
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
