import React from "react";
import HomeCraousel from "../components/HomeCraousel/HomeCraousel";
import CardSlider from "../components/cardSlider/CardSlider";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HomeCraousel />
      <CardSlider />
      <Footer />
    </div>
  );
};

export default Home;
