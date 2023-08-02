import Catagory from "../Catagory/Catagory";
import PopularMenu from "../PopularMenu/PopularMenu";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;