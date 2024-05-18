import React from "react";
import Hero from "./Hero.jsx";
import Banner from "./Banner.jsx";
import NewArrival from "./Newarrival.jsx";
import Offers from "./Offers.jsx/index.jsx";
import Young from "./Youngfav.jsx";
import Voucher from "./Vouchers.jsx";
import Community from "./Community.jsx";
import Footer from "./Footer.jsx";

const shoppingmain = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <NewArrival />
      <Offers />
      <Young />
      <Voucher />
      <Community />
      <Footer />
    </div>
  );
};

export default shoppingmain;
