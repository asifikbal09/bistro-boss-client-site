import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
const PopularMenu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter(item => item.category === "popular")
        setMenus(popularItem)
      });
  }, []);
  return (
    <section className="mb-12">
      <SectionTitle
        heading="from our menu"
        subHeading="Check it out"
      ></SectionTitle>
     <div className="grid md:grid-cols-2 gap-5">
     {
        menus.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem> )
      }
     </div>
    </section>
  );
};

export default PopularMenu;
