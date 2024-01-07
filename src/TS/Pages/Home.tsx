// Home.js
import React from "react";
import Header from "../Components/Header";
import PersistentDrawerLeft from "../Components/BurgerMenu";


const Home = () => {
  return (
    <div>
      {/* <Header subtitle="Développeur" imageUrl={require("./../../assets/profile-picture.jpg")} /> */}
      <PersistentDrawerLeft />
    </div>
  );
};

export default Home;
