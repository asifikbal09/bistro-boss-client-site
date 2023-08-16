import React, { useState } from "react";
import Banner from "../../component/Banner/Banner";
import orderImg from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const [tabIndex, setTabIndex] =useState(0)
  const {category} =useParams();
  console.log(category)
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
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        {/* Salad item cards */}
        <TabPanel>
          <OrderTab foodName={'salad'} ></OrderTab>
        </TabPanel>
        {/* Pizza item cards */}
        <TabPanel>
        <OrderTab foodName={'pizza'} ></OrderTab>

        </TabPanel>
        {/* Soup item cards */}
        <TabPanel>
        <OrderTab foodName={'soup'} ></OrderTab>
        </TabPanel>
        {/* Dessert item cards */}
        <TabPanel>
        <OrderTab foodName={'dessert'} ></OrderTab>
        </TabPanel>
        {/* Drinks item cards */}
        <TabPanel>
        <OrderTab foodName={'drinks'} ></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
