import React, { useState } from "react";
import Banner from "../../component/Banner/Banner";
import orderImg from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  console.log(initialIndex);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const tabStyle = "text-[#BB8506] border-b-2 border-[#BB8506]"
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Banner
        bgImg={orderImg}
        title={"order food"}
        subTitle={"would you like to try a dish?"}
      ></Banner>
      <Tabs
        defaultIndex={initialIndex}
        onSelect={(index) => setTabIndex(index)}
        className={"mb-16"}
      >
        <TabList
          className={
            "flex justify-center gap-5 my-10 text-xl font-semibold cursor-pointer"
          }
        >
          <Tab
            className={
              tabIndex === 0 && tabStyle
            }
          >
            Salad
          </Tab>
          <Tab
            className={
              tabIndex === 1 && tabStyle
            }
          >
            Pizza
          </Tab>
          <Tab
            className={
              tabIndex === 2 && tabStyle
            }
          >
            Soup
          </Tab>
          <Tab
            className={
              tabIndex === 3 && tabStyle
            }
          >
            Dessert
          </Tab>
          <Tab
            className={
              tabIndex === 4 && tabStyle
            }
          >
            Drinks
          </Tab>
        </TabList>
        {/* Salad item cards */}
        <TabPanel>
          <OrderTab foodName={"salad"}></OrderTab>
        </TabPanel>
        {/* Pizza item cards */}
        <TabPanel>
          <OrderTab foodName={"pizza"}></OrderTab>
        </TabPanel>
        {/* Soup item cards */}
        <TabPanel>
          <OrderTab foodName={"soup"}></OrderTab>
        </TabPanel>
        {/* Dessert item cards */}
        <TabPanel>
          <OrderTab foodName={"dessert"}></OrderTab>
        </TabPanel>
        {/* Drinks item cards */}
        <TabPanel>
          <OrderTab foodName={"drinks"}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
