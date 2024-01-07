// Home.js
import React from "react";
import Header from "../Components/Header";
import BurgerMenu from "../Components/BurgerMenu";



const Home = () => {
  var ImageUrl = "../../assets/profile-picture.jpg"

  return (
    <div>
      <Header title="Loïc Rouzaud" subtitle="Développeur" imageUrl={ImageUrl} />
      <BurgerMenu isOpen />
    </div>
  );
};

export default Home;
