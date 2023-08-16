import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../../../component/Banner/Banner";
import menuImg from "../../../assets/menu/banner3.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Banner
        bgImg={menuImg}
        title="our menu"
        subTitle="would you like to try our dish?"
      ></Banner>
      {/* today's offer */}
      <SectionTitle
        heading={"Today's Offers"}
        subHeading={"Don't Miss"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts */}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        bannerImg={dessertImg}
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        bannerImg={pizzaImg}
      ></MenuCategory>
      {/* salad */}
      <MenuCategory
        items={salad}
        title={"salad"}
        bannerImg={saladImg}
      ></MenuCategory>
      {/* soup */}
      <MenuCategory
        items={soup}
        title={"soup"}
        bannerImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
