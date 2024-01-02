// Home.js
import React from 'react';
import Header from "../Components/Header.tsx";
import BurgerMenu from "../Components/BurgerMenu.tsx";
import Profile from "../../assets/profile-picture.jpg";

const Home = () => {
  return (
    <div>
      <BurgerMenu isOpen/>
      <Header 
        title="Loïc Rouzaud"
        subtitle="Développeur"
        imageUrl={Profile}
    />
    </div>
  );
};

export default Home;
