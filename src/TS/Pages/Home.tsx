// Home.js
import React from "react";
import Header from "../Components/Header.tsx";
import BurgerMenu from "../Components/BurgerMenu.tsx";
const Home = () => {
  return (
    <div>
      <Header title="Loïc Rouzaud" subtitle="Développeur" imageUrl={require("../../assets/profile-picture.jpg")} />
      <BurgerMenu isOpen />
    </div>
  );
};

export default Home;
