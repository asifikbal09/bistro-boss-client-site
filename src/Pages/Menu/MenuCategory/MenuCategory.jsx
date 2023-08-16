import React from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Banner from "../../../component/Banner/Banner";
import { Link } from "react-router-dom";

const MenuCategory = ({ title, bannerImg, items }) => {
  return (
    <div className="py-6">
      {title && (
        <Banner
          bgImg={bannerImg}
          title={title}
          subTitle="would you like to try our dish?"
        ></Banner>
      )}
      <div className="grid md:grid-cols-2 gap-5 mt-16">
        {items.map((menu) => (
          <MenuItem key={menu._id} menu={menu}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
