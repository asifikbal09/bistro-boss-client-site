import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../../../component/Banner/Banner";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Banner bgImg={menuImg} title='our menu' subTitle='would you like to try our dish?'></Banner>
      <PopularMenu></PopularMenu>
      <Banner bgImg={menuImg} title='our menu' subTitle='would you like to try our dish?'></Banner>
      <PopularMenu></PopularMenu>
      <Banner bgImg={menuImg} title='our menu' subTitle='would you like to try our dish?'></Banner>
      <PopularMenu></PopularMenu>
      <Banner bgImg={menuImg} title='our menu' subTitle='would you like to try our dish?'></Banner>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
