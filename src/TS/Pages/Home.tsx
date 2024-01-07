// Home.js
import React from "react";
import Header from "../Components/Header";
import PersistentDrawerLeft from "../Components/BurgerMenu";
import BurgerMenu from "../Components/BurgerMenu";


const Home = () => {
  return (
    <div>
      <Header subtitle="Développeur" imageUrl={require("./../../assets/profile-picture.jpg")} />
      <BurgerMenu isOpen/>
    </div>
  );
};

export default Home;
